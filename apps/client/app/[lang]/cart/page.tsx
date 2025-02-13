"use client";

import { Button } from "@/app/[lang]/components/button";
import { Selector } from "@/app/[lang]/components/inputs/selector";
import { useAuthGuard, useCart, useDictionary, useMakeOrder } from "@/shared/hooks";
import { E_AppRoutes, I_OrderItem, PageProps } from "@/shared/models";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { localeUrl } from "@/shared/utils";

import { CartForm } from "./cart-form";
import { CartList } from "./cart-list";

type Props = PageProps<{}>;

export default function CartPage({ params: { lang } }: Props) {
  useAuthGuard(lang);
  const router = useRouter();
  const dictionary = useDictionary();
  const paymentTypes = [
    { name: dictionary.cart.payment_types.card, value: "card" },
    { name: dictionary.cart.payment_types.post, value: "post" },
  ] as const;
  const { removeFromCart, getCart, total } = useCart();
  const { makeOrder } = useMakeOrder(lang);
  const [cart, setCart] = useState<I_OrderItem[]>([]);
  const [payment, setPayment] = useState<"card" | "post">("post");
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
      router.push(localeUrl(E_AppRoutes.checkout, lang));
    } else makeOrder();
  };
  return (
    <div className="flex w-full max-w-2xl flex-col mx-auto p-4">
      <h1 className="text-4xl font-bold mb-3">{dictionary.cart.my_order}</h1>
      <CartForm />
      <div className="border-b border-gray-100 px-5 py-4">
        <div className="font-semibold text-gray-800">{dictionary.cart.in_cart}:</div>
      </div>
      <CartList items={cart} onItemRemove={handleRemoveItem} total={total * 40} />
      <div className="border-b border-gray-100 px-5 py-4">
        {/* <div className="font-semibold text-gray-800">{dictionary.cart.form.payment_method}:</div> */}
        {/* <Selector list={paymentTypes} value={payment} onItemSelect={v => setPayment(v || "card")} /> */}
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
