import { I_TextBlock } from "@/shared/models";

const url = process.env.NEXT_PUBLIC_API_URL;

export async function getTextByName(name: string): Promise<I_TextBlock> {
  const link = `${url}/text_blocks/${name}`;
  const res = await fetch(link, { next: { revalidate: 120 } });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
