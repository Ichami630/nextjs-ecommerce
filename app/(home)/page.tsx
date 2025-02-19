// import Image from "next/image";

import Consultation from "../../components/Consultation";
import Brands from "../../components/Brands";
import DealOfWeek from "../../components/DealOfWeek";
import LatestProducts from "../../components/LatestProducts";
import Slider from "../../components/Slider";
import Testimonials from "../../components/Testimonials";
// import FeaturedProducts from "../components/FeaturedProducts";

export default function page() {
  return (
    <>
      <Slider />
      <LatestProducts />
      <Consultation />
      <DealOfWeek />
      <Testimonials />
      {/* <FeaturedProducts /> */}
      <Brands />
    </>
  )
}

