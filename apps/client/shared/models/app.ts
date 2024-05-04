import { Locale } from "@/shared/configs/i18n-config";

export enum E_AppRoutes {
  home = "/",
  cart = "/cart",
  profile = "/profile",
  login = "/login",
  register = "/login/register",
  collection = "/collection",
  orders = "/orders",
  search = "/search",
  about = "/about",
  checkout = "/cart/checkout",
}

export interface LocaleParam {
  lang: Locale;
}
