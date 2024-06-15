"use client";

import { SearchIcon } from "@/app/[lang]/assets/icons/search";
import { TextField } from "@/app/[lang]/components/inputs/text-field";
import { Locale } from "@/shared/configs/i18n-config";
import { useDictionary } from "@/shared/hooks";
import { E_AppRoutes } from "@/shared/models";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { localeUrl } from "@/shared/utils";

export const SearchField = ({ lang }: { lang: Locale }) => {
  const router = useRouter();
  const dictionary = useDictionary();
  const [search, setSearch] = useState("");
  const triggerSearch = () => {
    if (search) router.push(localeUrl(E_AppRoutes.search + `?search=${search}`, lang));
    else router.push(localeUrl(E_AppRoutes.home, lang));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // const search = e.currentTarget.value;
      triggerSearch();
    }
  };
  return (
    <div className="relative hidden md:block">
      <TextField
        type="search"
        variant="solid"
        placeholder={dictionary.header.search}
        onKeyDown={handleEnter}
        onChange={handleChange}
        className="pl-10"
      />
      <SearchIcon variant="grey" className="absolute top-0 left-0 ml-2 mt-2" onClick={triggerSearch} />
    </div>
  );
};
