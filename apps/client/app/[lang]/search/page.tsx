import { ItemsGrid } from "@/app/[lang]/components/ui/items-grid";
import { ProductCard } from "@/app/[lang]/product/product-card";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { E_AppRoutes, I_Product, PageProps } from "@/shared/models";
import { getProducts } from "@/shared/service";

import { localeUrl } from "@/shared/utils";

type Props = PageProps<{}, { search: string }>;

export default async function SearchPage({ params, searchParams }: Props) {
  const data = await getProducts(searchParams.search);
  const dictionary = await getDictionary(params.lang);

  const items = data.docs.map((product: I_Product) => ({
    link: localeUrl(`${E_AppRoutes.product}/${product.url_name}`, params.lang),
    content: <ProductCard product={product} lang={params.lang} />,
  }));

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold m-5">
        {dictionary.search.search_results} "{searchParams.search}"
      </h2>
      {items.length ? null : (
        <div className="m-5 text-lg">
          {dictionary.search.no_results} "{searchParams.search}"
        </div>
      )}
      <ItemsGrid items={items} />
    </div>
  );
}
