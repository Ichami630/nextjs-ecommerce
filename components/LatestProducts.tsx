import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: "/products/bed1.jpg",
    title: "Family Bed",
    price: 10000,
    endPrice: 70000,
    link: "/household-equipement/product",
    stars: 0,
    percentageDiscount: 0
  },
  {
    id: 2,
    image: "/products/bed2.webp",
    title: "Single Bed",
    price: 5000,
    endPrice: 50000,
    link: "/household-equipement/product",
    stars: 2,
    percentageDiscount: 5
  },
  {
    id: 3,
    image: "/products/nissan.jpeg",
    title: "NISSAN Caravan 2012",
    price: 900000,
    link: "/product",
    stars: 3,
    percentageDiscount: 0,
    test: 1
  },
  {
    id: 4,
    image: "/products/suzuki.jpeg",
    title: "SUZUKI",
    price: 60000,
    link: "/product",
    stars: 3,
    percentageDiscount: 0
  },
];

const LatestProducts: React.FC = () => {

  return (
    <div className="mt-10 px-4 mb-10">
      <h2 className="font-extrabold text-3xl text-center mb-10">Latest Products</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {products.map((product)=>(
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
