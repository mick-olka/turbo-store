import Link from "next/link";
import React from "react";

const links = [
  { name: "Home", link: "/" },
  { name: "Cart", link: "/cart" },
  { name: "Gallery", link: "/" },
];

export const Sidebar = () => {
  return (
    <aside
      className="w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 hidden lg:flex"
      // style={{ height: "93vh" }}
      x-show="asideOpen"
    >
      {links.map((l) => (
        <Link
          key={l.name}
          href={l.link}
          className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <i className="bx bx-home"></i>
          </span>
          <span>{l.name}</span>
        </Link>
      ))}
    </aside>
  );
};
