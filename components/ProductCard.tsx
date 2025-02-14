'use client';
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Star } from "lucide-react";
import { useState,useEffect } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  link: string;
  stars: number;
  percentageDiscount: number;
  dealExpiry?: string; //optional only for deal of the week
}

const ProductCard: React.FC<{ product: Product; showCountDown?: boolean }> = ({ product,showCountDown }) => {
  const [hovered, setHovered] = useState(false);

  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    if (showCountDown && product.dealExpiry) {
      const countdown = setInterval(() => {
        const now = new Date().getTime();
        const expiry = product.dealExpiry ? new Date(product.dealExpiry).getTime() : 0;
        const timeDiff = expiry - now;

        if (timeDiff <= 0) {
          clearInterval(countdown);
        } else {
          setTimeLeft({
            days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
          });
        }
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [showCountDown, product.dealExpiry]);

  return (
    <div
      className="border border-gray-300 p-4 relative"
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
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </Link>

      {/* Countdown Timer - Only for active Deal of the Week */}
      {showCountDown && product.dealExpiry && (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes) && (
        <div className="flex space-x-1 mt-2">
          <div className="flex flex-col rounded-md px-2 bg-red-100">
            <p className="font-bold text-red-600">{timeLeft.days}</p>
            <p className="font-light text-red-600 text-xs">DAYS</p>
          </div>
          <div className="flex flex-col rounded-md px-2 bg-red-100">
            <p className="font-bold text-red-600">{timeLeft.hours}</p>
            <p className="font-light text-red-600 text-xs">HRS</p>
          </div>
          <div className="flex flex-col rounded-md px-2 bg-red-100">
          <p className="font-bold text-red-600">{timeLeft.minutes}</p>
          <p className="font-light text-red-600 text-xs">MINS</p>
          </div>
          <div className="flex flex-col rounded-md px-2 bg-red-100">
            <p className="font-bold text-red-600">{timeLeft.seconds}</p>
            <p className="font-light text-red-600 text-xs">SEC</p>
          </div>
        </div>
      )}

      {/* Product Details */}
      <Link href={product.link} className="hover:text-primary block mt-3">
        {product.title}
      </Link>
      <p className="text-primary font-bold">${product.price}</p>

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
