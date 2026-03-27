"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
  keepPreviousData,
  UseQueryOptions,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { axiosInstance } from "@/services/axiosInstance";
import {
  ApiError,
  PaginatedApiResponse,
  PaginationParams,
} from "@/types/types";

type QueryKey = (string | Record<string, any>)[];

type UseApiOptions<TQueryFnData, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ApiError, TData, QueryKey>,
  "queryKey" | "queryFn"
>;

function useGet<T>(key: QueryKey, url: string, options?: UseApiOptions<T>) {
  return useQuery<T, ApiError, T, QueryKey>({
    queryKey: key,
    queryFn: async () => {
      const response = await axiosInstance.get<T>(url);
      return response.data;
    },
    ...options,
  });
}

function useGetPaginated<T>(
  key: QueryKey,
  url: string,
  params: PaginationParams = {},
  options?: UseApiOptions<PaginatedApiResponse<T>>,
) {
  const { page = 1, limit = 25, ...restParams } = params;

  return useQuery<
    PaginatedApiResponse<T>,
    ApiError,
    PaginatedApiResponse<T>,
    QueryKey
  >({
    queryKey: [...key, { page, limit, ...restParams }],
    queryFn: async () => {
      const response = await axiosInstance.get<PaginatedApiResponse<T>>(url, {
        params: { page, limit, ...restParams },
      });
      return response.data;
    },
    placeholderData: keepPreviousData,
    ...options,
  });
}

function useInfinitePaginated<T>(
  key: QueryKey,
  url: string,
  params: Omit<PaginationParams, "page"> = {},
  options?: Omit<
    UseInfiniteQueryOptions<
      PaginatedApiResponse<T>,
      ApiError,
      { pages: PaginatedApiResponse<T>[]; pageParams: number[] },
      QueryKey,
      number
    >,
    "queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam"
  >,
) {
  return useInfiniteQuery({
    queryKey: [...key, params],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const response = await axiosInstance.get<PaginatedApiResponse<T>>(url, {
        params: { page: pageParam, ...params },
      });
      return response.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, page_size, total } = lastPage.data;
      const totalPages = Math.ceil(total / page_size);
      return page < totalPages ? page + 1 : undefined;
    },
    getPreviousPageParam: (firstPage) =>
      firstPage.data.page > 1 ? firstPage.data.page - 1 : undefined,
    ...options,
  });
}

// ---- Helper for mutation with automatic key invalidation ----
function useApiMutation<TData, TVariables>(
  method: "post" | "put" | "patch" | "delete",
  url: string,
  invalidateKey?: QueryKey,
) {
  const queryClient = useQueryClient();

  return useMutation<TData, ApiError, TVariables>({
    mutationFn: async (variables: TVariables) => {
      let response;

      if (method === "delete") {
        // For DELETE requests, use the axios config format
        response = await axiosInstance.delete<TData>(url, {
          data: variables,
        });
      } else {
        // For POST/PUT/PATCH, use normal format
        response = await axiosInstance[method]<TData>(url, variables);
      }
      return response.data;
    },
    onSuccess: () => {
      const key = invalidateKey;
      queryClient.invalidateQueries({ queryKey: key, exact: false });
    },
  });
}

// ---- Hooks for specific methods ----
function usePost<TData, TVariables = unknown>(
  url: string,
  invalidateKey?: QueryKey,
) {
  return useApiMutation<TData, TVariables>("post", url, invalidateKey);
}

function usePut<TData, TVariables = unknown>(
  url: string,
  invalidateKey?: QueryKey,
) {
  return useApiMutation<TData, TVariables>("put", url, invalidateKey);
}

function usePatch<TData, TVariables = unknown>(
  url: string,
  invalidateKey?: QueryKey,
) {
  return useApiMutation<TData, TVariables>("patch", url, invalidateKey);
}

function useDelete<TData, TVariables = unknown>(
  url: string,
  invalidateKey?: QueryKey,
) {
  return useApiMutation<TData, TVariables>("delete", url, invalidateKey);
}

function useDynamicDelete<TData>() {
  const queryClient = useQueryClient();

  return useMutation<TData, ApiError, string>({
    mutationFn: async (url: string) => {
      const response = await axiosInstance.delete<TData>(url);
      return response.data;
    },
    onSuccess: (_, url) => {
      const segments = url.split("/").filter(Boolean);
      const mainKey = [segments[0]];
      queryClient.invalidateQueries({ queryKey: mainKey, exact: false });
    },
  });
}

export {
  useGet,
  useGetPaginated,
  useInfinitePaginated,
  usePost,
  usePut,
  usePatch,
  useDelete,
  useDynamicDelete,
};
