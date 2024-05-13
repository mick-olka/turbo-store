import { InfoIcon } from "@/app/[lang]/assets/icons/info";
import { PhoneIcon } from "@/app/[lang]/assets/icons/phone";
import { UserIcon } from "@/app/[lang]/assets/icons/user";
import { Button } from "@/app/[lang]/components/button";
import LocaleSwitcher from "@/app/[lang]/components/layout/locale-switcher";
import { Dropdown } from "@/app/[lang]/components/ui/dropdown/dropdown";
import { PhonesList } from "@/app/[lang]/components/ui/phones-list";
import { shopLabel } from "@/shared/configs/global";
import { Locale } from "@/shared/configs/i18n-config";
import { E_AppRoutes } from "@/shared/models";
import Link from "next/link";

import { localeUrl } from "@/shared/utils";

import { CartBtn } from "./cart-btn";
import { SearchField } from "./search-pane";

export const Header = ({ lang }: { lang: Locale }) => {
  const phones = [
    { label: "+380963963930", value: "+380963963930" },
    { label: "+380963963931", value: "+380963963931" },
    { label: "+380963963932", value: "+380963963932" },
  ];
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2 fixed z-10">
      <div className="flex items-center space-x-2">
        <Link href={localeUrl(E_AppRoutes.home, lang)} className="font-bold text-gray-700 text-2xl">
          <h1 className="mx-6">{shopLabel}</h1>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <PhonesList phones={phones} />

        <Link href={localeUrl(E_AppRoutes.about, lang)}>
          <Button variant="bordered" className="border-gray-200">
            <InfoIcon variant="grey" />
          </Button>
        </Link>
        <SearchField lang={lang} />
        <CartBtn lang={lang} />

        <Link href={localeUrl(E_AppRoutes.profile, lang)}>
          <Button variant="bordered" className="border-gray-200">
            <UserIcon variant="grey" />
          </Button>
        </Link>
        <LocaleSwitcher lang={lang} />
      </div>
    </header>
  );
};
