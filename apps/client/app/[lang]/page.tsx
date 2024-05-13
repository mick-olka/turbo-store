import { ProductsGrid } from "@/app/[lang]/product/products-grid";
import { PageProps } from "@/shared/models";
import { getProducts } from "@/shared/service";

type Props = PageProps<{}, {}>;
export default async function Home({ params }: Props) {
  const data = await getProducts();

  return (
    <div className="w-full p-4">
      <ProductsGrid products={data.docs} lang={params.lang} />
    </div>
  );
}
