import { I_Collection } from "@/shared/models";

import { localConfig } from "@/shared/utils";

import { revalidation } from "./data";

export async function getCollections(): Promise<I_Collection[]> {
  const res = await fetch(localConfig.apiUrl + "/collections", revalidation);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getCollectionById(id: string): Promise<I_Collection> {
  const res = await fetch(localConfig.apiUrl + "/collections/" + id, revalidation);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
