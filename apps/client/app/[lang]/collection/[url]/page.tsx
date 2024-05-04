import { BreadCrumps, ItemsGrid } from "@/app/[lang]/components/ui";
import { ProductCard } from "@/app/[lang]/product/product-card";
import { E_AppRoutes, I_Product, PageProps } from "@/shared/models";
import { getCollectionById } from "@/shared/service";

type Props = PageProps<{ url: string }, {}>;

export default async function Collection({ params }: Props) {
  const collection = await getCollectionById(params.url);

  const items = collection.items.map(product => ({
    link: "/product/" + product.url_name,
    content: <ProductCard product={product} lang={params.lang} />,
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
