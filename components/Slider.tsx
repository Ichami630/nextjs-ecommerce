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
import banner3 from "../public/banner3.webp";

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
    title: "Import & Export",
    description: `Purchase, sale, and import/export of used car, auto parts, housing equipment, electronics equipment, information equipment, etc 中古の自動車、自動車部品、住宅設備、電気機器、情報機器等の買取、販売及び輸出入`,
    cta1: "Shop Now",
    link: "/shop",
  },
  {
    id: 2,
    image: banner2.src, 
    title: "Moving & Transportation Business",
    description: `Relocating, Transportation of Goods and services. 引越業及び運送業`,
    cta1: "Contact Us",
    link: "/contact",
  },
  {
    id: 3,
    image: banner3.src, 
    title: "Expert Consultation",
    description: `Consultation regarding business , education. travel etc. ビジネス、教育及び旅行等に関するコンサルテーション`,
    cta1: "Get in Touch",
    link: "/contact",
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
                <p className="mt-3 text-lg md:max-w-3xl">{slide.description}</p>
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

      {/*brands hidden */}
      {/* <div className="w-full shadow-md bg-gray-900 pt-10">
        <div className="flex overflow-x-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-800 px-4 space-x-20">
          {[
            { name: "plugs", icon: "/plug.png", link: "/product/gear/" },
            { name: "Spanner", icon: "/plug.png", link: "/product/spanner/" },
            { name: "Brakes", icon: "/plug.png", link: "/product/brakes/" },
            { name: "Batteries", icon: "/plug.png", link: "/product/battery/" },
            { name: "Tires", icon: "/plug.png", link: "/product/tires/" },
            { name: "Gears", icon: "/plug.png", link: "/product/gear/" },
            { name: "Spanner", icon: "/plug.png", link: "/product/spanner/" },
            { name: "Brakes", icon: "/plug.png", link: "/product/brakes/" },
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
      </div> */}

    </div>
  );
};

export default Hero;
