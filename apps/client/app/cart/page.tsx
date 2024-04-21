"use client";

import { useEffect, useState } from "react";

import { useAuthGuard, useCart, useMakeOrder } from "../lib/hooks";
import { I_OrderDTO, I_OrderItem } from "../lib/models";
import { CartForm } from "./cart-form";
import { CartList } from "./cart-list";

export default function Cart() {
  useAuthGuard();
  const { removeFromCart, getCart, getName, getPhone, getMessage } = useCart();
  const { sendOrder } = useMakeOrder();
  const [cart, setCart] = useState<I_OrderItem[]>([]);
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
    const name = getName();
    const phone = getPhone();
    const message = getMessage();
    if (name && phone && cart.length) {
      const order: I_OrderDTO = {
        cart: cart,
        message: message,
        name: name,
        phone: phone,
        sum: 0,
      };
      sendOrder(order);
    } else alert("Please fill form");
  };
  return (
    <div className="flex w-full max-w-2xl flex-col mx-auto p-4">
      <h1 className="text-4xl font-bold mb-3">Моє замовлення</h1>
      <CartForm />
      <CartList items={cart} onItemRemove={handleRemoveItem} />
      <button
        disabled={canOrder}
        className="h-14 px-6 py-2 mt-4 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
        style={canOrder ? { backgroundColor: "#999" } : {}}
        onClick={handleMakeOrder}
      >
        Оформити замовлення
      </button>
    </div>
  );
}
