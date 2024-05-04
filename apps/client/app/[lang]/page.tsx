import { ItemsGrid } from "@/app/[lang]/components/ui/items-grid";
import { Locale } from "@/shared/configs/i18n-config";
import { PageProps } from "@/shared/models";
import { getProducts } from "@/shared/service";

import { ProductCard } from "./product/product-card";

type Props = PageProps<{}, {}>;
export default async function Home({ params }: Props) {
  const data = await getProducts();

  const items = data.docs.map(product => ({
    link: "/product/" + product.url_name,
    content: <ProductCard lang={params.lang} product={product} />,
  }));

  return (
    <div className="w-full p-4">
      <ItemsGrid items={items} />
    </div>
  );
}
