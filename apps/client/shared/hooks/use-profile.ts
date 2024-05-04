"use client";

import { E_AppRoutes, I_User, T_UserForm } from "@/shared/models";
import { fetchWithAuth } from "@/shared/utils/fetcher";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";

import { useSession } from "./use-session";

const api_url = process.env.NEXT_PUBLIC_API_URL;

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

export const useUpdateProfile = () => {
  const { getAccessToken } = useSession();
  const token = getAccessToken();
  const { mutate } = useSWRConfig();
  const updateProfile = async (body: T_UserForm) => {
    const res = await fetch(api_url + "/users/me", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const data: I_User = await res.json();
      if (data) {
        mutate(["/users/me", token]);
      } else {
        alert("Server error");
      }
    }
  };
  return { updateProfile };
};

export const useDeleteProfile = () => {
  const router = useRouter();
  const { getAccessToken } = useSession();
  const token = getAccessToken();
  const { mutate } = useSWRConfig();
  const deleteProfile = async () => {
    const res = await fetch(api_url + "/users/me", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(body),
    });
    if (res.ok) {
      const data: I_User = await res.json();
      if (data) {
        router.push(E_AppRoutes.login);
      } else {
        alert("Server error");
      }
    }
  };
  return { deleteProfile };
};
