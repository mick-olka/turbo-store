"use client";

import { globalConfig } from "@/shared/configs/global";
import { Locale } from "@/shared/configs/i18n-config";
import { E_AppRoutes } from "@/shared/models/app";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

import { localeUrl } from "@/shared/utils";

export const useAuthGuard = (lang?: Locale) => {
  const router = useRouter();
  useLayoutEffect(() => {
    const accessToken = sessionStorage.getItem("access_token");
    // console.log(globalConfig.userCanOrderWithoutAuth, process.env.USER_CAN_ORDER_WITHOUT_AUTH);
    if (!globalConfig.userCanOrderWithoutAuth && !accessToken) {
      router.push(localeUrl(E_AppRoutes.login, lang || "en"));
    }
  }, []);
};
