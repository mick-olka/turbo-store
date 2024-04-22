import { ProductCard } from "@/app/product/product-card";
import { BreadCrumps, ItemsGrid } from "@/app/shared//components/ui";
import { E_AppRoutes, I_Product } from "@/app/shared/models";
import { getCollectionById } from "@/app/shared/service";

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
