// import Image from "next/image";

import Brands from "../components/Brands";
import DealOfWeek from "../components/DealOfWeek";
import LatestProducts from "../components/LatestProducts";
import Slider from "../components/Slider";

export default function page() {
  return (
    <>
      <Slider />
      <LatestProducts />
      <DealOfWeek />
      <Brands />
    </>
  )
}

