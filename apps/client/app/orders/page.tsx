"use client";

import { SearchIcon } from "@/app/assets/icons/search";
import { useGetOrders } from "@/shared/hooks";
import { E_AppRoutes, I_Order } from "@/shared/models";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<I_Order[]>([]);
  const { data, isLoading } = useGetOrders();
  useEffect(() => {
    if (data) {
      setOrders(data.orders);
    }
  }, [data]);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="p-3 flex flex-col align-center w-full">
      <h1 className="text-xl font-bold px-5">My Orders</h1>
      <div className="overflow-x-auto p-3 w-full">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
            <tr>
              <th></th>
              <th className="p-2">
                <div className="text-left font-semibold">Order id</div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold">Date</div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold">Total</div>
              </th>
              <th className="p-2">
                <div className="text-center font-semibold">Check</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {orders.map((item, i) => (
              <tr key={"item" + i}>
                <td className="p-2">{/* <input type="checkbox" className="h-5 w-5" value="id-1" /> */}</td>
                <td className="p-2">
                  <div className="font-medium text-gray-800">
                    Order {item._id.slice(item._id.length - 6, item._id.length)}
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left">{item.date}</div>
                </td>
                <td className="p-2">
                  <div className="text-left font-medium text-green-500">UAH {item.sum}</div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center">
                    <Link href={E_AppRoutes.orders + "/" + item._id}>
                      <button className="w-10 h-10 relative">
                        <SearchIcon />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length ? null : <div className="w-full text-center">Пусто</div>}
      </div>
    </div>
  );
}
