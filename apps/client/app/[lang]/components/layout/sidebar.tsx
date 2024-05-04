import { Dictionary } from "@/dictionaries/model";
import { Locale } from "@/shared/configs/i18n-config";
import { E_AppRoutes, I_Collection } from "@/shared/models";
import Link from "next/link";
import React, { useEffect } from "react";

const links = [
  { name: "Home", link: E_AppRoutes.home },
  { name: "Cart", link: E_AppRoutes.cart },
  { name: "About Page", link: E_AppRoutes.about },
];

const LinkItem = ({ url, name, lang }: { url: string; name: string; lang: Locale }) => {
  // const router = useRouter();
  return (
    <Link
      href={`/${lang}/` + url}
      locale={lang}
      className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
    >
      <span className="text-2xl">
        <i className="bx bx-home"></i>
      </span>
      <span>{name}</span>
    </Link>
  );
};

export const Sidebar = ({ list, dictionary, lang }: { lang: Locale; dictionary: Dictionary; list: I_Collection[] }) => {
  return (
    <aside
      className="w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 hidden lg:flex"
      x-show="asideOpen"
    >
      {/* {links.map(l => (
        <LinkItem key={l.link} url={l.link} name={l.name} />
      ))} */}
      <LinkItem url={E_AppRoutes.home} name={dictionary.sidebar.home} lang={lang} />
      <LinkItem url={E_AppRoutes.cart} name={dictionary.sidebar.cart} lang={lang} />
      <LinkItem url={E_AppRoutes.about} name={dictionary.sidebar.about} lang={lang} />
      <hr />
      <h3 className="font-bold pt-2">Categories</h3>
      {list.map(l => (
        <LinkItem key={l._id} lang={lang} url={E_AppRoutes.collection + "/" + l.url_name} name={l.name[lang]} />
      ))}
    </aside>
  );
};
