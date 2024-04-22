import { E_AppRoutes } from "@/app/shared/models";
import Image from "next/image";
import Link from "next/link";

import { CartBtn } from "./cart-btn";
import { SearchField } from "./search-pane";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2 fixed z-10">
      <div className="flex items-center space-x-2">
        <button type="button" className="text-3xl">
          <i className="bx bx-menu"></i>
        </button>
        <Link href={E_AppRoutes.home} className="font-bold text-gray-700 text-2xl">
          Shop.
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <SearchField />
        {/* <div className="relative hidden md:block">
          <DefaultInput type="search" placeholder="Search" />
          <SearchIcon />
        </div> */}
        {/* 
        <Link
          href={E_AppRoutes.cart}
          className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
        >
          <PacketIcon />
          <span className="pl-1 text-gray-500 text-md">0</span>
        </Link> */}
        <CartBtn />

        <Link href={E_AppRoutes.profile}>
          <button
            type="button"
            className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
          >
            <Image
              src="https://avatars.dicebear.com/api/bottts/2.svg"
              alt="button"
              width="28"
              height="28"
              className="rounded-lg mx-auto"
            />
          </button>
        </Link>
      </div>
    </header>
  );
};
