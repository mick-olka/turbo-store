import { CartIcon } from "@/app/[lang]/assets/icons/cart";
import { Button } from "@/app/[lang]/components/button";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/shared/configs/i18n-config";
import { I_ProductRelated } from "@/shared/models";
import Image from "next/image";
import React from "react";

const api_url = process.env.NEXT_PUBLIC_API_URL;

export const ProductCard = async ({ lang, product }: { lang: Locale; product: I_ProductRelated }) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <Image
          priority
          width="200"
          height="200"
          src={`${api_url}/upload/` + product.thumbnail}
          alt={product.url_name}
          className="max-h-32 w-full object-contain"
        />
        {/* <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <StarIcon className="text-yellow-400" size="sm" />
          <span className="ml-1 text-sm text-slate-400">4.9</span>
        </div> */}
      </div>

      <div className="mt-1 p-2 h-32 flex flex-col justify-between">
        <h2 className="text-slate-700 line-clamp-2">{product.name[lang]}</h2>
        <p className="text-sm text-slate-400">{product.url_name}</p>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-bold text-blue-500">₴{product.price}</p>
          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <CartIcon variant="white" />
            <Button className="max-h-4" size="sm">
              {dictionary.product.add_to_cart}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
