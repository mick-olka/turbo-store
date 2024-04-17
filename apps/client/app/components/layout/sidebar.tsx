import Link from "next/link";
import React from "react";

import { I_Collection } from "../../lib/models";
import { E_AppRoutes } from "../../lib/models/app";

const links = [
  { name: "Home", link: "/" },
  { name: "Cart", link: "/cart" },
  { name: "Gallery", link: "/" },
];

export const Sidebar = ({ list }: { list: I_Collection[] }) => {
  return (
    <aside
      className="w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 hidden lg:flex"
      // style={{ height: "93vh" }}
      x-show="asideOpen"
    >
      {list.map(l => (
        <Link
          key={l._id}
          href={E_AppRoutes.collection + "/" + l.url_name}
          className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <i className="bx bx-home"></i>
          </span>
          <span>{l.name["ua"]}</span>
        </Link>
      ))}
    </aside>
  );
};
