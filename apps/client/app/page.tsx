import { ItemsGrid } from "./components/ui/items-grid";
import { getProducts } from "./lib/service";
import { ProductCard } from "./product/product-card";

export default async function Home() {
  const data = await getProducts();

  const items = data.docs.map(product => ({
    link: "/product/" + product.url_name,
    content: <ProductCard product={product} />,
  }));

  return (
    <div className="w-full p-4">
      <ItemsGrid items={items} />
    </div>
  );
}
