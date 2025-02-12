'use client';
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Star } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  link: string;
  stars: number;
  percentageDiscount: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border border-gray-300 p-4 relative group transition-shadow duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover Icons */}
      {hovered && (
        <div className="absolute top-4 right-5 flex flex-col space-y-2 transition-opacity duration-300 opacity-100 z-50">
          <Heart size={30} className="p-2 bg-gray-200 hover:bg-primary rounded-full cursor-pointer transition" />
          <Eye size={30} className="p-2 bg-gray-200 hover:bg-primary rounded-full cursor-pointer transition" />
        </div>
      )}

      {/* Percentage Discount */}
      {product.percentageDiscount > 0 && (
        <Link href={product.link}>
          <div className="bg-primary text-white flex p-2 absolute top-6 left-6 z-50 text-xs font-bold w-10 h-10 justify-center items-center rounded-full">
            -{product.percentageDiscount}%
          </div>
        </Link>
      )}

      {/* Product Image */}
      <Link href={product.link} className="flex justify-center">
        <div className="relative w-full h-[200px]">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>

      {/* Product Details */}
      <Link href={product.link} className="hover:text-primary block mt-3">
        {product.title}
      </Link>
      <p className="text-primary font-bold">{product.price}</p>

      {/* Star Rating */}
      <div className="flex space-x-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={10}
            className={`fill-current ${i < product.stars ? "text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>

      {/* Add to Cart Button */}
      <Link
        href={product.link}
        className="p-2 text-sm rounded-full w-full lg:w-1/2 text-center bg-gray-400 hover:bg-primary text-white block mt-2 transition"
      >
        ADD TO CART
      </Link>
    </div>
  );
};

export default ProductCard;
