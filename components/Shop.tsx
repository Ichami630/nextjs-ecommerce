'use client';
import ProductCard from "./ProductCard";
import { useState } from "react";
import { ListFilter } from "lucide-react";
import ShopFilter from "./ui/ShopFilter";

const products = [
  { id: 1, image: "/products/bed1.jpg", title: "Family Bed", price: 10000, link: "/product", stars: 3, percentageDiscount: 5 },
  { id: 2, image: "/products/bed2.webp", title: "Single Bed", price: 5000, link: "/product", stars: 3, percentageDiscount: 10 },
  { id: 3, image: "/products/nissan.jpeg", title: "NISSAN Caravan 2012", price: 900000, link: "/product", stars: 3, percentageDiscount: 0 },
  { id: 4, image: "/products/suzuki.jpeg", title: "SUZUKI", price: 60000, link: "/product", stars: 3, percentageDiscount: 0 },
  { id: 5, image: "/products/bed1.jpg", title: "Item 5", price: 4000, link: "/product", stars: 3, percentageDiscount: 0 },
  { id: 6, image: "/products/bed2.webp", title: "Item 6", price: 7000, link: "/product", stars: 3, percentageDiscount: 0 },
  { id: 7, image: "/products/nissan.jpeg", title: "Item 7", price: 3000, link: "/product", stars: 3, percentageDiscount: 0 },
  { id: 8, image: "/products/bed1.jpg", title: "Item 8", price: 2000, link: "/product", stars: 3, percentageDiscount: 0 },
  { id: 9, image: "/products/bed2.webp", title: "Item 9", price: 1000, link: "/product", stars: 3, percentageDiscount: 0 },
  { id: 10, image: "/products/nissan.jpeg", title: "Item 10", price: 1500, link: "/product", stars: 3, percentageDiscount: 0 },
];

const itemsPerPage = 8; // Number of items per page

const Shop: React.FC = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current products to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination Handlers
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="mx-4 my-10">
      <div className="lg:hidden flex justify-between mb-4">
        <div className="flex space-x-3 rounded-full bg-primary cursor-pointer p-2 justify-center hover:bg-black hover:text-white" onClick={() => setOpenFilter(true)}>
          <ListFilter />
          <span>FILTER</span>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {openFilter && (
        <div className="fixed inset-0 bg-black z-50 bg-opacity-30">
          <div className="fixed top-0 w-46 h-full overflow-auto left-0 bg-white p-4">
            <div className="flex justify-end">
              <p className="text-black text-xl cursor-pointer hover:text-primary mb-2" title="close filter" onClick={() => setOpenFilter(false)}>X</p>
            </div>
            <ShopFilter />
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Sidebar Filter (Large Screens) */}
        <div className="hidden lg:block lg:col-span-1">
          <ShopFilter />
        </div>

        {/* Product Grid */}
        <div className="col-span-4 lg:col-span-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col md:flex-row justify-between mt-6 mx-6">
            <div className="text-gray-400 py-2">Showing {indexOfFirstItem + 1} - {indexOfLastItem} of {products.length} items</div>
            <div className="flex md:justify-center justify-start items-center md:space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-1 md:px-4 py-2 border text-xs md:text-sm rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'}`}
            >
              Previous
            </button>
            <span className="font-bold mx-2 text-xs md:text-sm">{currentPage} of {totalPages}</span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-1 md:px-4 py-2 border text-xs md:text-sm rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'}`}
            >
              Next
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
