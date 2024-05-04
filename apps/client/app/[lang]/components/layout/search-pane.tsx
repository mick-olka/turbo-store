"use client";

import { SearchIcon } from "@/app/[lang]/assets/icons/search";
import { TextField } from "@/app/[lang]/components/inputs/text-field";
import { useDictionary } from "@/shared/hooks";
import { E_AppRoutes } from "@/shared/models";
import { useRouter } from "next/navigation";

export const SearchField = () => {
  const router = useRouter();
  const dictionary = useDictionary();
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const search = e.currentTarget.value;
      if (search) router.push(E_AppRoutes.search + `?search=${e.currentTarget.value}`);
      else router.push(E_AppRoutes.home);
    }
  };
  return (
    <div className="relative hidden md:block">
      <TextField
        type="search"
        variant="solid"
        placeholder={dictionary.header.search}
        onKeyDown={handleEnter}
        className="pl-10"
      />
      <SearchIcon variant="grey" className="absolute top-0 left-0 ml-2 mt-2" />
    </div>
  );
};
