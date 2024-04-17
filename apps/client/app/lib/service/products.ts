import { I_Product, I_ProductsListRes } from "@/app/lib/models";

const url = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<I_ProductsListRes> {
  const res = await fetch(url + "/products");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getProductById(id: string): Promise<I_Product> {
  const res = await fetch(url + "/products/" + id);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
