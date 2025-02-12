"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from '../public/banner1.jpg'
import banner2 from "../public/banner2.jpg";
import banner3 from "../public/banner3.jpg";

// Define TypeScript type for slides
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  cta1: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: banner1.src, 
    title: "Find Your Perfect Car",
    description: "Browse our wide selection of new and used cars at unbeatable prices.",
    cta1: "View Cars",
    link: "/cars",
  },
  {
    id: 2,
    image: banner2.src, 
    title: "Quality Auto Parts & Accessories",
    description: "Get the best car parts and accessories to enhance performance and style.",
    cta1: "Shop Now",
    link: "/parts",
  },
  {
    id: 3,
    image: banner3.src, 
    title: "Expert Auto Consultation",
    description: "Need guidance on buying, selling, or maintaining your car? We’re here to help.",
    cta1: "Get Started",
    link: "/consultation",
  },
];


const Hero: React.FC = () => {
  return (
    <div className="mt-0">
      <Swiper
        effect="coverflow"
        modules={[Navigation, Pagination, Autoplay,EffectCoverflow]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        className="w-full h-[400px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-5 text-center">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="mt-3 text-lg">{slide.description}</p>
                <div className="mt-5">
                  <Link href={slide.link} className="bg-primary rounded-md hover:text-white hover:bg-black p-2 text-gray-950 text-sm">
                    {slide.cta1}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*brands */}
      <div className="w-full shadow-md bg-gray-900 pt-10">
        <div className="flex overflow-x-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-800 px-4 space-x-20">
          {[
            { name: "Gears", icon: "/gear.png", link: "/product/gear/" },
            { name: "Spanner", icon: "/gear.png", link: "/product/spanner/" },
            { name: "Brakes", icon: "/gear.png", link: "/product/brakes/" },
            { name: "Batteries", icon: "/gear.png", link: "/product/battery/" },
            { name: "Tires", icon: "/gear.png", link: "/product/tires/" },
            { name: "Gears", icon: "/gear.png", link: "/product/gear/" },
            { name: "Spanner", icon: "/gear.png", link: "/product/spanner/" },
            { name: "Brakes", icon: "/gear.png", link: "/product/brakes/" },
            { name: "Batteries", icon: "/gear.png", link: "/product/battery/" },
            { name: "Tires", icon: "/gear.png", link: "/product/tires/" },
            { name: "Gears", icon: "/gear.png", link: "/product/gear/" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 pb-4">
              <Link href={item.link}>
                <Image src={item.icon} alt={item.name} title={item.name} width={50} height={50} />
              </Link>
              <Link href={item.link}>
                <div className="text-white">{item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
