import { TrashBinIcon } from "@/app/assets/icons/trash-bin";
import { I_OrderItem } from "@/shared/models";
import { useEffect, useState } from "react";

interface Props {
  onItemRemove: (productId: string) => void;
  items: I_OrderItem[];
}

export const CartList = ({ items, onItemRemove }: Props) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (items.length) {
      const totalSum = items.map(i => i.price).reduce((a, b) => a + b);
      setTotal(totalSum);
    } else setTotal(0);
  }, [items]);
  return (
    <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
      <header className="border-b border-gray-100 px-5 py-4">
        <div className="font-semibold text-gray-800">Manage Carts</div>
      </header>

      <div className="overflow-x-auto p-3">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
            <tr>
              <th></th>
              <th className="p-2">
                <div className="text-left font-semibold">Product Name</div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold">Quantity</div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold">Total</div>
              </th>
              <th className="p-2">
                <div className="text-center font-semibold">Action</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {items.map((item, i) => (
              <tr key={"item" + i}>
                <td className="p-2">{/* <input type="checkbox" className="h-5 w-5" value="id-1" /> */}</td>
                <td className="p-2">
                  <div className="font-medium text-gray-800">{item.name}</div>
                </td>
                <td className="p-2">
                  <div className="text-left">{item.count}</div>
                </td>
                <td className="p-2">
                  <div className="text-left font-medium text-green-500">UAH {item.price}</div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center">
                    <button onClick={() => onItemRemove(item.product)}>
                      {/* <svg
                        className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg> */}
                      <TrashBinIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* <tr>
              <td className="p-2">
                <input type="checkbox" className="h-5 w-5" value="id-2" />
              </td>
              <td className="p-2">
                <div>
                  <div className="font-medium text-gray-800">Logitech Keyboard</div>
                </div>
              </td>
              <td className="p-2">
                <div className="text-left">1</div>
              </td>
              <td className="p-2">
                <div className="text-left font-medium text-green-500">RM 120.50</div>
              </td>
              <td className="p-2">
                <div className="flex justify-center">
                  <button>
                    <svg
                      className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
        {items.length ? null : <div className="w-full text-center">Пусто</div>}
      </div>

      <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
        <div>Total</div>
        <div className="text-blue-600">
          UAH <span>{total}</span>
        </div>
      </div>

      <div className="flex justify-end">
        <input type="hidden" className="border border-black bg-gray-50" x-model="selected" />
      </div>
    </div>
  );
};
