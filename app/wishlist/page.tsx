import Banner from "../../components/Banner"
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
        <Banner />
        <div className="mx-4 my-10">
            <div className="flex items-center md:justify-between border-2 p-4 border-gray-300">
                <div className="flex space-x-6 items-center">
                    <div className="text-gray-400 hover:text-red-600 cursor-pointer">X</div>
                    <Link href="product"><Image src="/products/nissan.jpeg" width={100} height={100} alt="Nisaan"/></Link>
                    <div className="flex flex-col space-y-2 text-primary">
                    <Link href="/product" className="hover:text-black hover:font-bold truncate whitespace-nowrap"><h4>Nissan Caravan 2012</h4></Link>
                    <h4>¥100,000 - ¥500,000</h4>
                    <h4 className="text-gray-400">February 15, 2025</h4>
                    <h4 className="text-gray-400 md:hidden"><span className="text-bold text-black">201</span> in stock</h4>
                    </div>
                </div>
                <div className="hidden md:flex flex-col">
                    <h4 className="text-gray-400"><span className="text-bold text-black">201</span> in stock</h4>
                    <button className="bg-primary p-3 rounded-full text-center font-bold hover:text-white hover:bg-black">SELECT OPTIONS</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default page