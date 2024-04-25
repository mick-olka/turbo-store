"use client";

import { Button } from "@/app/components/button";
import { Selector } from "@/app/components/inputs/selector";
import { CartIcon } from "@/shared/assets/icons/cart";
import { useCart } from "@/shared/hooks/use-cart";
import { E_AppRoutes, I_OrderItem, I_ProductRelated } from "@/shared/models";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const AddToCartPane = ({ product, size = "lg" }: { size?: "sm" | "lg"; product: I_ProductRelated }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const handleOrderProduct = () => {
    const order: I_OrderItem = {
      product: product._id,
      price: product.price,
      count: quantity,
      main_color: "",
      pill_color: "",
      name: product.name["ua"],
    };
    addToCart(order);
    router.push(E_AppRoutes.cart);
  };
  const handleQuantityChange = (n: number | null) => {
    if (n) setQuantity(n);
  };
  return (
    <div className="flex py-4 space-x-4">
      <div className="relative">
        <div className="z-10 text-center left-0 pt-0 right-0 absolute block text-xs text-gray-800 tracking-wide font-semibold">
          К-ть
        </div>
        <Selector
          className="pt-4"
          onItemSelect={handleQuantityChange}
          value={quantity}
          list={Array.from(Array(10).keys()).map(n => ({ name: String(n + 1), value: n + 1 }))}
        />
      </div>
      <Button type="button" className="flex items-center justify-between" size={size} onClick={handleOrderProduct}>
        <CartIcon size="md" variant="white" className="mr-2" />
        Add to Cart
      </Button>{" "}
    </div>
  );
};
