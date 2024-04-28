"use client";

import { E_AppRoutes, I_Order, I_OrderDTO, I_OrderPopulated, I_UserOrders } from "@/shared/models";
import { fetchWithAuth } from "@/shared/utils/fetcher";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

import { useCart } from "./use-cart";
import { useSession } from "./use-session";

const api_url = process.env.NEXT_PUBLIC_API_URL;

export const useMakeOrder = () => {
  const { getAccessToken } = useSession();
  const { total, setCart, setMessage, getCart, getName, getPhone, getMessage } = useCart();
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
    if (res.ok) {
      const data: I_Order = await res.json();
      if (data) {
        setCart([]);
        setMessage("");
        router.push(E_AppRoutes.orders);
      } else {
        alert("Error sending order");
      }
    }
  };

  const makeOrder = () => {
    const name = getName();
    const phone = getPhone();
    const message = getMessage();
    const cart = getCart();
    if (name && phone && cart.length) {
      const order: I_OrderDTO = {
        cart: cart,
        message: message,
        name: name,
        phone: phone,
        sum: total,
      };
      sendOrder(order);
    } else alert("Please fill form");
  };

  return { makeOrder };
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
