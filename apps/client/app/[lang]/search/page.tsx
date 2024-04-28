import { ItemsGrid } from "@/app/[lang]/components/ui/items-grid";
import { ProductCard } from "@/app/[lang]/product/product-card";
import { I_Product } from "@/shared/models";
import { getProducts } from "@/shared/service";

export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {
  const data = await getProducts(searchParams.search);

  const items = data.docs.map((product: I_Product) => ({
    link: "/product/" + product.url_name,
    content: <ProductCard product={product} />,
  }));

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold m-5">Search results for "{searchParams.search}"</h2>
      {items.length ? null : <div className="m-5 text-lg">No results for "{searchParams.search}"</div>}
      <ItemsGrid items={items} />
    </div>
  );
}
