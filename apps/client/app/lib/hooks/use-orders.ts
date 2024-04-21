import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

import { I_Order, I_OrderDTO, I_OrderPopulated, I_UserOrders } from "../models";
import { E_AppRoutes } from "../models/app";
import { fetchWithAuth } from "../utils/fetcher";
import { useSession } from "./use-session";

const api_url = process.env.NEXT_PUBLIC_API_URL;

export const useMakeOrder = () => {
  const { getAccessToken } = useSession();
  const router = useRouter();
  const token = getAccessToken();
  useEffect(() => {
    if (!token) {
      router.push(E_AppRoutes.login);
    }
  }, [token]);
  const sendOrder = async (body: I_OrderDTO) => {
    const res = await fetch(api_url + "/orders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      alert("Invalid credentials");
    } else {
      const data: I_Order = await res.json();
      if (data) {
        router.push(E_AppRoutes.orders);
      }
    }
  };
  return { sendOrder: sendOrder };
};

export const useGetOrders = () => {
  const storage = useSession();
  let token = storage.getAccessToken();
  const router = useRouter();
  const { data, error, isLoading } = useSWR<I_UserOrders>(token ? ["/users/me/orders", token] : null, ([url, token]) =>
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

export const useGetOrderById = (id?: string) => {
  const storage = useSession();
  let token = storage.getAccessToken();
  const router = useRouter();
  const { data, error, isLoading } = useSWR<I_OrderPopulated>(
    token && id ? ["/orders/" + id, token] : null,
    ([url, token]) => fetchWithAuth(url, String(token)),
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
