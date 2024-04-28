"use client";

import { Button } from "@/app/[lang]/components/button";
import { Selector } from "@/app/[lang]/components/inputs/selector";
import { useAuthGuard, useCart, useDictionary, useMakeOrder } from "@/shared/hooks";
import { E_AppRoutes, I_OrderDTO, I_OrderItem } from "@/shared/models";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CartForm } from "./cart-form";
import { CartList } from "./cart-list";

const paymentTypes = [
  { name: "Card", value: "card" },
  { name: "Post", value: "post" },
] as const;

export default function CartPage() {
  useAuthGuard();
  const router = useRouter();
  const { dictionary } = useDictionary();
  const { removeFromCart, getCart, total } = useCart();
  const { makeOrder } = useMakeOrder();
  const [cart, setCart] = useState<I_OrderItem[]>([]);
  const [payment, setPayment] = useState<"card" | "post">("card");
  const handleRemoveItem = (id: string) => {
    const newCart = removeFromCart(id);
    setCart(newCart);
  };
  useEffect(() => {
    const data = getCart();
    setCart(data);
  }, []);
  const canOrder = !cart.length;
  const handleMakeOrder = () => {
    if (payment === "card") {
      router.push(E_AppRoutes.checkout);
    } else makeOrder();
  };
  return (
    <div className="flex w-full max-w-2xl flex-col mx-auto p-4">
      <h1 className="text-4xl font-bold mb-3">{dictionary.cart.my_order}</h1>
      <CartForm />
      <div className="border-b border-gray-100 px-5 py-4">
        <div className="font-semibold text-gray-800">{dictionary.cart.in_cart}:</div>
      </div>
      <CartList items={cart} onItemRemove={handleRemoveItem} total={total} />
      <div className="border-b border-gray-100 px-5 py-4">
        <div className="font-semibold text-gray-800">{dictionary.cart.form.payment_method}:</div>
        <Selector list={paymentTypes} value={payment} onItemSelect={v => setPayment(v || "card")} />
        <div className="font-semibold text-gray-800">{dictionary.cart.delivery_note}</div>
      </div>
      <Button
        disabled={canOrder}
        size={"lg"}
        className="px-4 my-4"
        style={canOrder ? { backgroundColor: "#999" } : {}}
        onClick={handleMakeOrder}
      >
        {dictionary.cart.make_order}
      </Button>
    </div>
  );
}
