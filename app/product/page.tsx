'use client';
import Banner from "../../components/Banner";
import QuantitySelector from "../../components/QuantitySelector";
import React, { useState } from "react";
import Image from "next/image";
import { Star,Heart,ShieldCheck } from "lucide-react";

//define the product images interface
interface Images {
  id: number;
  image: string;
}


const images: Images[] = [
  {
    id: 1,
    image: "/banner2.jpg",
  },
  {
    id: 2,
    image: "/banner1.jpg",
  },
  {
    id: 3,
    image: "/banner2.jpg",
  },
  {
    id: 4,
    image: "/banner1.jpg",
  },
  {
    id: 5,
    image: "/tes/user1.jpg",
  },
  {
    id: 6,
    image: "/tes/user2.jpg",
  }
]
const productDetails = {
  id: 1,
  brand: "Toyota",
  name: "Thrustmaster TH8S Shifter Add-On Mannual Ge",
  price: 100,
  stars: 4,
  reviewCount: 1,
  usage: "Push your gears to the red line with TH8S Shifter Add-On: the sim racing shifter for next-level racing immersion sensations. TH8S Shifter Add-On features an H-pattern shift plate with 7 gears plus reverse gear, with direct gear shifting, allowing it to adapt to all types of games and vehicles.",
  stock: 210,
  deliver: "Upto 4 working Days"
}
const paymentIcons = [
  {id: 1,icon: "/payments/matercard.png"},
  {id: 2, icon: "/payments/mtn.png"},
  {id: 3, icon: "/payments/visa.png"},
]
const SingleProduct: React.FC = () => {
  const [activeImage, setActiveImage] = useState(images[3].image);
  return (
    <>
        <Banner />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 mx-4 py-6">
          {/* Image Section */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4">
          {/* Thumbnail Section */}
          <div className="flex w-full lg:w-1/4 flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto max-h-[300px] scrollbar-hide">
            {images.map((image) => (
              <Image
                key={image.id}
                src={image.image}
                width={100}
                height={100}
                alt="Thumbnail"
                className={`cursor-pointer border-2 p-1 transition duration-300 ease-in-out scale-95 ${
                  activeImage === image.image ? "border-black" : "border-transparent"
                }`}
                onClick={() => setActiveImage(image.image)}
              />
            ))}
          </div>
    
          {/* Active Image Section */}
          <div className="w-full lg:w-3/4 flex justify-center">
            <Image
              src={activeImage}
              alt="Active Product"
              width={400}
              height={400}
              className="object-contain max-w-full h-auto"
            />
          </div>
          </div>

          {/* Description Section */}
          <div className="space-y-4">
            <div className="font-light text-gray-700">Brand: <span className="text-primary underline">{productDetails.brand}</span></div>
            <div className="text-3xl font-bold">{productDetails.name}</div>
            <div className="flex justify-between text-primary">
              <div className="text-xl font-bold">${productDetails.price}</div>
              <div className="flex space-x-1 items-center">
                {[...Array(5)].map((_,i) => (
                  <Star
                    key={i}
                    size={12}
                    className={`fill-current ${i < productDetails.stars ? "text-primary":"text-gray-300"}`}
                  /> 
                ))} <div className="cursor-pointer ml-2 hover:underline hover:text-black">(<span className="underline">{productDetails.reviewCount} {productDetails.reviewCount > 1 ? "Customers Reviews":"Customer Review"}</span>)</div>
              </div>
            </div>
            <div className="text-gray-700">{productDetails.usage}</div>
            <div className="text-gray-700"><span className="font-bold">{productDetails.stock}</span> in stock</div>
            <div className="flex space-x-4 items-center flex-wrap">
              <QuantitySelector />
              <button className="rounded-full min-h-12 bg-primary text-black hover:text-white hover:bg-black px-12 font-bold text-xs">ADD TO CART</button>
              <span className="hover:text-primary hidden md:flex items-center space-x-1 hover:underline cursor-pointer"><Heart size={20} /><span className="font-bold">Add to Wishlist</span></span>
            </div>
            <div className="flex hover:text-primary hover:underline cursor-pointer  items-center md:hidden w-1/3"><Heart size={20} /><span className="font-bold ml-2">Add to Wishlist</span></div>
            <div className="flex space-x-2 items-center">
              <ShieldCheck size={20} className=""/>
              <div className="text-gray-700">Estimated Delivery: {productDetails.deliver}</div>
            </div>
            <div className="bg-gray-200 shadow-md py-2">
              <div className="flex flex-col justify-center py-2">
                <div className="flex flex-row justify-center space-x-2">
                  {paymentIcons.map((icon) => (
                    <Image key={icon.id} src={icon.icon} alt="icon-payment" width={75} height={50} className="object-fit" />
                  ))}
                </div>
                <div className="font-light text-center text-sm">Garanteed Safe And Secured Checkout</div>
              </div>
            </div>
          </div>
        </div>      
    </>
  )
}

export default SingleProduct