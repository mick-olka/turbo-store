"use client";

import { useCart } from "@/app/lib/hooks/use-cart";
import { I_OrderItem, I_Product } from "@/app/lib/models";
import { E_AppRoutes } from "@/app/lib/models/app";
import { useRouter } from "next/navigation";
import React from "react";

export const AddToCartBtn = ({ product }: { product: I_Product }) => {
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
    <button
      type="button"
      className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
      onClick={handleOrderProduct}
    >
      Add to Cart
    </button>
  );
};
