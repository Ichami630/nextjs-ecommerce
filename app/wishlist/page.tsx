import Banner from "../../components/Banner";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Banner />
      <div className="mx-4 mt-10">
        <div className="border border-gray-300 rounded-lg p-4 mb-2 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left Section */}
            <div className="flex items-center gap-4 sm:gap-10 w-full md:w-auto">
              <div className="text-gray-400 hover:text-red-600 cursor-pointer text-lg">✖</div>
              <Link href="/product">
                <Image src="/products/nissan.jpeg" width={100} height={100} alt="Nissan" className="rounded-md" />
              </Link>
              <div className="flex flex-col space-y-1 text-primary text-sm w-full md:w-auto">
                <Link href="/product" className="hover:text-black hover:font-bold w-full truncate block">
                  <h4>Nissan Caravan 2012</h4>
                </Link>
                <h4 className="text-gray-700">¥100,000 - ¥500,000</h4>
                <h4 className="text-gray-400">February 15, 2025</h4>
                {/* Stock on small screens */}
                <h4 className="text-gray-400 md:hidden">
                  <span className="font-bold text-black">201</span> in stock
                </h4>
              </div>
            </div>

            {/* Right Section (for medium & large screens) */}
            <div className="hidden md:flex flex-col items-end">
              <h4 className="text-gray-400">
                <span className="font-bold text-black">201</span> in stock
              </h4>
              <button className="bg-primary p-3 rounded-full text-sm text-white font-bold hover:bg-black transition">
                SELECT OPTIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
