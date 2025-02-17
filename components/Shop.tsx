'use client';
import ProductCard from "./ProductCard";
import { useState } from "react";
import { ListFilter } from "lucide-react";
import ShopFilter from "./ui/ShopFilter";

const products = [
  {
    id: 1,
    image: "/products/bed1.jpg",
    title: "Family Bed",
    price: 10000,
    endPrice: 70000,
    link: "/household-equipement/product",
    stars: 0,
    percentageDiscount: 0
  },
  {
    id: 2,
    image: "/products/bed2.webp",
    title: "Single Bed",
    price: 5000,
    endPrice: 50000,
    link: "/household-equipement/product",
    stars: 2,
    percentageDiscount: 5
  },
  {
    id: 3,
    image: "/products/nissan.jpeg",
    title: "NISSAN Caravan 2012",
    price: 900000,
    link: "/product",
    stars: 3,
    percentageDiscount: 0,
    test: 1
  },
  {
    id: 4,
    image: "/products/suzuki.jpeg",
    title: "SUZUKI",
    price: 60000,
    link: "/product",
    stars: 3,
    percentageDiscount: 0
  },
];
const Shop:React.FC = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="mx-4 my-10">
      <div className="lg:hidden flex justify-between mb-4">
        <div className="flex space-x-3 rounded-full bg-primary cursor-pointer p-2 justify-center hover:bg-black hover:text-white" onClick={()=>setOpenFilter(true)}>
          <ListFilter />
          <span>FILTER</span>
        </div>
      </div>
      {/* filter and small and medium screen */}
      {openFilter && (
        <div className="fixed inset-0 bg-black z-50 bg-opacity-30">
          <div className="fixed top-0 w-46 h-full overflow-auto left-0 bg-white p-4">
            <div className="flex justify-end">
              <p className="text-black text-xl cursor-pointer hover:text-primary mb-2" title="close filter" onClick={()=>setOpenFilter(false)}>X</p>
            </div>
            <ShopFilter />
          </div>
        </div>
      )}
        <div className="grid lg:grid-cols-5 gap-8">
            <div className="hidden lg:block lg:col-span-1">
                <ShopFilter />
            </div>
            <div className="col-span-4 lg:col-span-4">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop