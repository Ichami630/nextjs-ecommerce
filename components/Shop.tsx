import Link from "next/link";
import StarRating from "./ui/StarRating";
import ProductCard from "./ProductCard";

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
  return (
    <div className="mx-4 my-10">
        <div className="grid lg:grid-cols-5 gap-8">
            <div className="hidden lg:block lg:col-span-1">
                <div className="grid">
                    <div className="border-gray-300 border-2 p-4">
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-bold">Shop by Categories</h4>
                            <ul className="flex flex-col space-y-2 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-primary hover:underline">Our Store</Link></li>
                            <li><Link href="/" className="hover:text-primary hover:underline">Use Cars</Link></li>
                            <li><Link href="/" className="hover:text-primary hover:underline">Electronics</Link></li>
                            <li><Link href="/" className="hover:text-primary hover:underline">Car Parts</Link></li>
                            <li><Link href="/" className="hover:text-primary hover:underline">Household Equipements</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-gray-300 border-2 p-4">
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-bold">Filter by Price</h4>
                            <ul className="flex flex-col space-y-2 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-primary hover:underline">ALL</Link></li>
                            <li><Link href="/" className="hover:text-primary hover:underline">$0 - $100</Link></li>
                            <li><Link href="/" className="hover:text-primary hover:underline">$100 - $500</Link></li>
                            <li><Link href="/" className="hover:text-primary hover:underline">$500 - $5000</Link></li>
                            <li><Link href="/" className="hover:text-primary hover:underline">$5000 - $50000</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-gray-300 border-2 p-4">
                        <div className="flex flex-col space-y-2">
                            <h4 className="font-bold">Average Rating</h4>
                            <ul className="flex flex-col space-y-2 text-sm">
                            <li><Link href="/" className=""><div className="flex flex-row space-x-1 items-center"><StarRating stars={5} size={13} /> <span className="text-gray-500 hover:text-primary hover:underline">(11)</span></div></Link></li>
                            <li><Link href="/" className=""><div className="flex flex-row space-x-1 items-center"><StarRating stars={4} size={13} /> <span className="text-gray-500 hover:text-primary hover:underline">(20)</span></div></Link></li>
                            <li><Link href="/" className=""><div className="flex flex-row space-x-1 items-center"><StarRating stars={3} size={13} /> <span className="text-gray-500 hover:text-primary hover:underline">(4)</span></div></Link></li>
                            <li><Link href="/" className=""><div className="flex flex-row space-x-1 items-center"><StarRating stars={2} size={13} /> <span className="text-gray-500 hover:text-primary hover:underline">(8)</span></div></Link></li>
                            <li><Link href="/" className=""><div className="flex flex-row space-x-1 items-center"><StarRating stars={1} size={13} /> <span className="text-gray-500 hover:text-primary hover:underline">(0)</span></div></Link></li>
                            <li><Link href="/" className=""><div className="flex flex-row space-x-1 items-center"><StarRating size={13} /> <span className="text-gray-500 hover:text-primary hover:underline">(40)</span></div></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
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