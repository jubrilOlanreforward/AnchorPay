import { ApiResponse } from "@/types/types";
import { useGet } from "./useQueries";

type User = {
  id: string;
  name: string;
};


const useGetUserQuery = (id: string) => {
  const queryKey = ["users", id];
  const url = `/api/v1/users/${id}`;
  const option = {
    enabled: !!id,
  };

  const query = useGet<ApiResponse<User>>(queryKey, url, option);

  return query;
  
};

export default useGetUserQuery;
