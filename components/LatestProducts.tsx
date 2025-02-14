import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: "/banner2.jpg",
    title: "Pilot Automotive Universal Fit Black With Red Trim",
    price: "$79",
    link: "/product",
    stars: 5,
    percentageDiscount: 0
  },
  {
    id: 2,
    image: "/banner1.jpg",
    title: "Pilot Automotive Universal Fit Black With Red Trim",
    price: "$79",
    link: "/product",
    stars: 5,
    percentageDiscount: 25
  },
  {
    id: 3,
    image: "/banner2.jpg",
    title: "Pilot Automotive Universal Fit Black With Red Trim",
    price: "$79",
    link: "/product",
    stars: 3,
    percentageDiscount: 50,
    test: 1
  },
  {
    id: 4,
    image: "/banner1.jpg",
    title: "Pilot Automotive Universal Fit Black With Red Trim",
    price: "$79",
    link: "/product",
    stars: 3,
    percentageDiscount: 0
  },
];

const LatestProducts: React.FC = () => {

  return (
    <div className="mt-10 mx-auto px-4 mb-10">
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
