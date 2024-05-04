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

export type LocaleParam<T extends object> = T & {
  lang: Locale;
};

export type PageProps<Params extends object, SearchParams extends object> = {
  params: LocaleParam<Params>;
  searchParams: SearchParams;
};
