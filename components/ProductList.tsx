import ProductCard from "./ProductCard";

export default async function ProductList() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
