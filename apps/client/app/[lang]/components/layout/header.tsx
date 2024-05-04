import { InfoIcon } from "@/app/[lang]/assets/icons/info";
import { UserIcon } from "@/app/[lang]/assets/icons/user";
import { Button } from "@/app/[lang]/components/button";
import LocaleSwitcher from "@/app/[lang]/components/layout/locale-switcher";
import { Locale } from "@/shared/configs/i18n-config";
import { E_AppRoutes } from "@/shared/models";
import Link from "next/link";

import { CartBtn } from "./cart-btn";
import { SearchField } from "./search-pane";

export const Header = ({ lan }: { lan: Locale }) => {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2 fixed z-10">
      <div className="flex items-center space-x-2">
        <Link href={E_AppRoutes.home} className="font-bold text-gray-700 text-2xl">
          <h1 className="mx-6">Techno-Hutsal</h1>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href={E_AppRoutes.about}>
          <Button variant="bordered" className="border-gray-200">
            <InfoIcon variant="grey" />
          </Button>
        </Link>
        <SearchField />
        <CartBtn />

        <Link href={E_AppRoutes.profile}>
          <Button variant="bordered" className="border-gray-200">
            <UserIcon variant="grey" />
          </Button>
        </Link>
        <LocaleSwitcher lan={lan} />
      </div>
    </header>
  );
};
