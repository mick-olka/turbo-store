import Image from "next/image";
import React from "react";

import { CartIcon } from "../components/assets/icons/cart";
import { StarIcon } from "../components/assets/icons/star";
import { I_Product } from "../models";

export const ProductCard = ({ product }: { product: I_Product }) => {
  return (
    <>
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <Image
          width="200"
          height="200"
          src={"http://localhost:7500/api/upload/" + product.thumbnail}
          alt={product.url_name}
          className="max-h-32 w-full object-contain"
        />
        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <StarIcon />
          <span className="ml-1 text-sm text-slate-400">4.9</span>
        </div>
      </div>

      <div className="mt-1 p-2 h-32 flex flex-col justify-between">
        <h2 className="text-slate-700">{product.name["ua"]}</h2>
        <p className="mt-1 text-sm text-slate-400">{product.code || product.name["ua"]}</p>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-bold text-blue-500">${product.price}</p>
          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <CartIcon />
            <button className="text-sm">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
