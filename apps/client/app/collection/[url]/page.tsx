import { BreadCrumps } from "@/app/components/ui/breadcrumps";
import { ItemsGrid } from "@/app/components/ui/items-grid";
import { E_AppRoutes } from "@/app/lib/models/app";
import { getCollectionById } from "@/app/lib/service";
import { ProductCard } from "@/app/product/product-card";

export default async function Collection({ params }: { params: { url: string } }) {
  const collection = await getCollectionById(params.url);

  const items = collection.items.map(product => ({
    link: "/product/" + product.url_name,
    content: <ProductCard product={product} />,
  }));

  const breadcrumbs = [{ name: collection.name["ua"], link: E_AppRoutes.collection + "/" + collection.url_name }];

  return (
    <div className="w-full p-4">
      <div className="w-fit p-1">
        <BreadCrumps items={breadcrumbs} />
      </div>
      <p className="px-4">{collection.description["ua"]}</p>
      <ItemsGrid items={items} />
    </div>
  );
}
