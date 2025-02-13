import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  link: string;
  stars: number;
  percentageDiscount: number;
}

const products: Product[] = [
  {
    id: 1,
    image: "/banner1.jpg",
    title: "Limited Edition Sneakers",
    price: "$99.99",
    link: "/product/1",
    stars: 4,
    percentageDiscount: 20,
  },
  {
    id: 2,
    image: "/banner1.jpg",
    title: "Sports Running Shoes",
    price: "$79.99",
    link: "/product/2",
    stars: 5,
    percentageDiscount: 10,
  },
  {
    id: 3,
    image: "/banner1.jpg",
    title: "Classic Leather Loafers",
    price: "$119.99",
    link: "/product/3",
    stars: 3,
    percentageDiscount: 15,
  },
  {
    id: 4,
    image: "/banner1.jpg",
    title: "Casual Sneakers",
    price: "$89.99",
    link: "/product/4",
    stars: 4,
    percentageDiscount: 5,
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] mb-20">
      {/* Background Banner Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/banner2.jpg)" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col px-12 py-5">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Featured Products
        </h1>

        {/* Product Card Container */}
        <div className="w-full bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-8 border border-t-0 border-l-0 border-gray-200">
                {/* Product Image */}
                <Link href={product.link} className="flex-shrink-0">
                  <div className="relative w-24 h-24">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out hover:scale-95"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="flex flex-col space-y-2">
                  <Link href={product.link} className="text-gray-900 text-sm hover:text-primary">
                    {product.title}
                  </Link>

                  {/* Star Rating */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`fill-current ${i < product.stars ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  {/* Product Price */}
                  <p className="text-primary font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
