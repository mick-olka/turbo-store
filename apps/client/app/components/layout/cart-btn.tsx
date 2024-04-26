"use client";

import { PacketIcon } from "@/app/assets/icons/packet";
import { useCart } from "@/shared/hooks";
import { E_AppRoutes } from "@/shared/models";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CartBtn = () => {
  const { getCart } = useCart();
  const [cartLen, setCartLen] = useState(0);
  useEffect(() => {
    const cart = getCart();
    setCartLen(cart.length);
  }, [getCart]);

  return (
    <Link
      href={E_AppRoutes.cart}
      className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
    >
      <PacketIcon variant="grey" />
      <span className="pl-1 text-gray-500 text-md">{cartLen}</span>
    </Link>
  );
};
