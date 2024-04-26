"use client";

import { CartIcon } from "@/app/assets/icons/cart";
import { Button } from "@/app/components/button";
import { useCart } from "@/shared/hooks/use-cart";
import { E_AppRoutes, I_OrderItem, I_ProductRelated } from "@/shared/models";
import { useRouter } from "next/navigation";
import React from "react";

export const AddToCartBtn = ({ product, size = "lg" }: { size?: "sm" | "lg"; product: I_ProductRelated }) => {
  const { addToCart } = useCart();
  const router = useRouter();
  const handleOrderProduct = () => {
    const order: I_OrderItem = {
      product: product._id,
      price: product.price,
      count: 1,
      main_color: "",
      pill_color: "",
      name: product.name["ua"],
    };
    addToCart(order);
    router.push(E_AppRoutes.cart);
  };
  return (
    <Button type="button" className="flex items-center justify-between" size={size} onClick={handleOrderProduct}>
      <CartIcon size="md" variant="white" className="mr-2" />
      Add to Cart
    </Button>
  );
};
