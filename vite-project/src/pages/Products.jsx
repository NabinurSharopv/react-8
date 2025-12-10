import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products"; // API funksiyasi
import ProductCard from "../components/ProductCard";

const Products = () => {
  // 1️⃣ API dan productlarni olib kelamiz
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,  // axios.get("/products") kabi funksiya
  });

  // 2️⃣ Loading holati
  if (isLoading) return <p>Loading...</p>;

  // 3️⃣ Error holati
  if (error) return <p>Xatolik yuz berdi</p>;

  // 4️⃣ Productlarni render qilish
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
