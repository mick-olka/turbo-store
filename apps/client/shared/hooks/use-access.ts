"use client";

import { E_AppRoutes } from "@/shared/models/app";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthGuard = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      router.push(E_AppRoutes.login);
    }
  }, []);
};
