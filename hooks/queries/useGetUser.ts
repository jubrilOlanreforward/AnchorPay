import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axiosInstance } from "@/services/axiosInstance";

type User = {
  id: string;
  name: string;
};

const getUser = async (id: string): Promise<User> => {
  const res = await axiosInstance.get<User>(`/api/v1/users/${id}`);
  return res.data;
};

const useGetUserQuery = (id?: string) => {
  return useQuery<User, AxiosError>({
    queryKey: ["user", id],
    queryFn: () => getUser(id!),
    enabled: !!id,
  });
};

export default useGetUserQuery;