import { E_AppRoutes, I_User } from "@/shared/models";
import { fetchWithAuth } from "@/shared/utils/fetcher";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

import { useSession } from "./use-session";

export const useGetProfile = () => {
  const storage = useSession();
  let token = storage.getAccessToken();
  const router = useRouter();
  const { data, error, isLoading } = useSWR<I_User>(token ? ["/users/me", token] : null, ([url, token]) =>
    fetchWithAuth(url, String(token)),
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
