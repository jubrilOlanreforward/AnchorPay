// import { useQuery } from "@tanstack/react-query";
// import { AxiosError } from "axios";
// import { axiosInstance } from "@/services/axiosInstance";
import { ApiResponse } from "@/types/types";
import { useGet } from "./useQueries";

type User = {
  id: string;
  name: string;
};

// const getUser = async (id: string): Promise<User> => {
//   const res = await axiosInstance.get<User>(`/api/v1/users/${id}`);
//   return res.data;
// };

const useGetUserQuery = (id: string) => {
  const queryKey = ["users", id];
  const url = `/api/v1/users/${id}`;
  const option = {
    enabled: !!id,
  };

  const query = useGet<ApiResponse<User>>(queryKey, url, option);

  return query;
  // return useQuery<User, AxiosError>({
  //   queryKey: ["user", id],
  //   queryFn: () => getUser(id!),
  //   enabled: !!id,
  // });
};

export default useGetUserQuery;
