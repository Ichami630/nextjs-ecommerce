'use client';
// import Link from "next/link";
import Image from "next/image";
// import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonials {
    id: number;
    title: string;
    desciption: string;
    name: string;
    role: string;
    image: string;
}

const testimonials: Testimonials[] = [
    {
        id: 1,
        title: "Great Price Delivery",
        desciption: "There are many of delivery of the lorem ipsum but the majority have the suffered look even slightly available",
        name: "Jenny Christofer",
        role: "Founder",
        image: "/tes/user1.jpg",
    },
    {
        id: 2,
        title: "Great Price Delivery",
        desciption: "There are many of delivery of the lorem ipsum but the majority have the suffered look even slightly available",
        name: "Jenny Christofer",
        role: "Founder",
        image: "/tes/user2.jpg",
    },
    {
        id: 3,
        title: "Great Price Delivery",
        desciption: "There are many of delivery of the lorem ipsum but the majority have the suffered look even slightly available",
        name: "Jenny Christofer",
        role: "Founder",
        image: "/tes/user1.jpg",
    },
    {
        id: 4,
        title: "Great Price Delivery",
        desciption: "There are many of delivery of the lorem ipsum but the majority have the suffered look even slightly available",
        name: "Jenny Christofer",
        role: "Founder",
        image: "/banner1.jpg",
    },
    {
        id: 5,
        title: "Great Price Delivery",
        desciption: "There are many of delivery of the lorem ipsum but the majority have the suffered look even slightly available",
        name: "Jenny Christofer",
        role: "Founder",
        image: "/tes/user2.jpg",
    }
]

const Testimonials:React.FC = () => {
  return (
    <div className="mt-10 mx-4 mb-10">
        <h2 className="font-extrabold text-3xl text-center mb-10">What Our Clients Say</h2>
        <div className="border-2 border-primary">
        <Swiper
        modules={[Navigation,Autoplay,Pagination]}
        autoplay = {{delay: 10000}}
        loop = {true}
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={1}
        breakpoints={{
            300: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 3, slidesPerGroup: 1 },
            1024: { slidesPerView: 4, slidesPerGroup: 1 },
            1280: { slidesPerView: 4, slidesPerGroup: 1 },
        }}
        navigation
        pagination={{clickable: true}}>

        {testimonials.map((tes)=>(
            <SwiperSlide key={tes.id}>
                <div className="flex space-x-4 border-0 border-r-2 border-gray-300">
                    <div className="flex flex-col space-y-4 p-4">
                        <h4 className="text-black font-bold">{tes.title}</h4>
                        <h4 className="font-light text-sm">{tes.desciption}</h4>
                        <div className="flex items-center flex-row space-x-4">
                            <Image src={tes.image} alt={tes.role} width={100} height={100} className="rounded-full object-cover w-24 h-24" />
                            <div className="flex-flex-col space-y-2">
                                <h4 className="text-black font-bold">{tes.name}</h4>
                                <h4 className="font-light text-sm">{tes.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}

        </Swiper>
        </div>
    </div>
  )
}

export default Testimonials