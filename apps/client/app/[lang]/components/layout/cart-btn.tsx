"use client";

import { PacketIcon } from "@/app/[lang]/assets/icons/packet";
import { Button } from "@/app/[lang]/components/button";
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
    <Link href={E_AppRoutes.cart}>
      <Button variant="bordered" className="border-gray-200">
        <PacketIcon variant="grey" />
        <span className="pl-1 text-gray-500 text-md">{cartLen}</span>
      </Button>
    </Link>
  );
};
