import { BreadCrumps, ItemsGrid } from "@/app/[lang]/components/ui";
import { ProductCard } from "@/app/[lang]/product/product-card";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { E_AppRoutes, I_Product, PageProps } from "@/shared/models";
import { getCollectionById } from "@/shared/service";

import { localeUrl } from "@/shared/utils";

type Props = PageProps<{ url: string }, {}>;

export default async function Collection({ params }: Props) {
  const collection = await getCollectionById(params.url);
  const lang = params.lang;
  const dictionary = await getDictionary(lang);

  const items = collection.items.map(product => ({
    link: localeUrl(`${E_AppRoutes.product}/${product.url_name}`, lang),
    content: <ProductCard product={product} lang={lang} />,
  }));

  const breadcrumbs = [
    {
      name: collection.name[lang],
      link: localeUrl(E_AppRoutes.collection + "/" + collection.url_name, lang),
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="w-fit p-1">
        <BreadCrumps items={breadcrumbs} lang={lang} homeLabel={dictionary.sidebar.home} />
      </div>
      <p className="px-4">{collection.description["ua"]}</p>
      <ItemsGrid items={items} />
    </div>
  );
}
