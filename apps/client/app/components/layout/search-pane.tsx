"use client";

import { E_AppRoutes } from "@/app/lib/models/app";
import { useRouter } from "next/navigation";

import { SearchIcon } from "../assets/icons/search";
import { DefaultInput } from "../inputs/text-field/default-text-field";

export const SearchField = () => {
  const router = useRouter();
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const search = e.currentTarget.value;
      if (search) router.push(E_AppRoutes.search + `?search=${e.currentTarget.value}`);
      else router.push(E_AppRoutes.home);
    }
  };
  return (
    <div className="relative hidden md:block">
      <DefaultInput type="search" placeholder="Search" onKeyDown={handleEnter} />
      <SearchIcon />
    </div>
  );
};
