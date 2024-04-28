import { E_AppRoutes, I_Collection } from "@/shared/models";
import Link from "next/link";
import React from "react";

const links = [
  { name: "Home", link: E_AppRoutes.home },
  { name: "Cart", link: E_AppRoutes.cart },
  { name: "About Page", link: E_AppRoutes.about },
];

const LinkItem = ({ url, name }: { url: string; name: string }) => {
  return (
    <Link href={url} className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
      <span className="text-2xl">
        <i className="bx bx-home"></i>
      </span>
      <span>{name}</span>
    </Link>
  );
};

export const Sidebar = ({ list }: { list: I_Collection[] }) => {
  return (
    <aside
      className="w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 hidden lg:flex"
      x-show="asideOpen"
    >
      {links.map(l => (
        <LinkItem key={l.link} url={l.link} name={l.name} />
      ))}
      <hr />
      <h3 className="font-bold pt-2">Categories</h3>
      {list.map(l => (
        <LinkItem key={l._id} url={E_AppRoutes.collection + "/" + l.url_name} name={l.name["ua"]} />
      ))}
    </aside>
  );
};
