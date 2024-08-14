import ProductCard from "./ProductCard";

export default async function ProductList() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
