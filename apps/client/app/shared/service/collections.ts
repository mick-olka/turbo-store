import { I_Collection } from "@/app/shared/models";

const url = process.env.NEXT_PUBLIC_API_URL;

export async function getCollections(): Promise<I_Collection[]> {
  const res = await fetch(url + "/collections");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getCollectionById(id: string): Promise<I_Collection> {
  const res = await fetch(url + "/collections/" + id);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
