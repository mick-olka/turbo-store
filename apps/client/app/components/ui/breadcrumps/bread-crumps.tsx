import { E_AppRoutes } from "@/app/lib/models/app";
import Link from "next/link";
import React from "react";

import { TightArrowRightIcon } from "../../assets/icons/tight-arrow-right";

interface I_Props {
  items: { name: string; link: string }[];
}

export const BreadCrumps = ({ items }: I_Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 text-gray-400 text-sm">
        <Link href={E_AppRoutes.home} className="hover:underline hover:text-gray-600">
          Home
        </Link>
        {items.map(i => (
          <React.Fragment key={i.name}>
            <span>
              <TightArrowRightIcon />
            </span>
            <Link href={i.link} className="hover:underline hover:text-gray-600">
              {i.name}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
