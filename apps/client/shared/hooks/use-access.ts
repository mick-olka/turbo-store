"use client";

import { Locale } from "@/shared/configs/i18n-config";
import { E_AppRoutes } from "@/shared/models/app";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { localeUrl } from "@/shared/utils";

export const useAuthGuard = (lang?: Locale) => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      router.push(localeUrl(E_AppRoutes.login, lang || "en"));
    }
  }, []);
};
