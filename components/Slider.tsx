"use client";

// import Image from "next/image";
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
    </div>
  );
};

export default Hero;
