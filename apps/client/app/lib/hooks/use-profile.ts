import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

import { E_AppRoutes } from "../models/app";
import { fetchWithAuth } from "../utils/fetcher";
import { useSession } from "./use-session";

export const useGetProfile = () => {
  const storage = useSession();
  const token = storage.getAccessToken();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(token ? ["/users/me", token] : null, ([url, token]) =>
    fetchWithAuth(url, token),
  );
  useEffect(() => {
    if (error || !token) {
      // means user is not logged in
      router.push(E_AppRoutes.login);
    }
  }, [error, token]);
  return {
    data,
    error,
    isLoading,
  };
};
