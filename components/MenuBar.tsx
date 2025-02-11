'use client';
import { useState,useRef } from "react"
import { Search,X,Headset,User,ShoppingCart,Heart,AlignJustify,ChevronDown } from "lucide-react"
import Link from "next/link"
import { Dialog } from "@headlessui/react";

export default function MenuBar() {
    //for modal dialog
    const [isOpen,setIsOpen] = useState(false);
    //mobile menu
    const [menuOpen, setMenuOPen] = useState(false);
    //shop cat hover
    const [shopCatHover, setShopCatHover] = useState(false)
    const categoryRef = useRef(null);
  return (
    <div className="container mx-auto px-4">
        <div className="flex justify-between mb-10 items-center">
            {/* menu icon */}
            <div className="flex lg:hidden mr-0">
                <AlignJustify className="cursor-pointer hover:text-primary" onClick={()=> setMenuOPen(true)}/>
            </div>
            {/* mobile menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-100 z-50 w-3/4 h-full shadow-lg">
                    <button className="absolute top-2 right-2" onClick={()=> setMenuOPen(false)}>
                        <X size={30} className="text-gray-900"/>
                    </button>
                    <nav className="flex font-bold flex-col space-y-4 mt-12 ml-5">
                        <Link className="hover:text-primary" href="/" onClick={()=> setMenuOPen(false)}>Home</Link>
                        <Link className="hover:text-primary" href="/about">About Us</Link>
                        <Link className="hover:text-primary" href="/shop">Shop</Link>
                    </nav>
                </div>
            )}
            <div className="logo">
                <h1 className="font-bold text-xl lg:text-4xl">Autorapid</h1>
            </div>
            {/* search bar with filter and search icon */}
            <form className="hidden lg:flex flex-grow max-w-lg mx-6 border border-gray-300 bg-gray-300 rounded-full items-center overflow-hidden">
                <select name="cat" id="cat" className="px-3 py-2 bg-transparent outline-none">
                    <option value="1">All Categories</option>
                    <option value="2">Accessories</option>
                    <option value="3">Parts</option>
                    <option value="4">Wheels</option>
                </select>
                <span className="text-gray-400"> | </span>
                <input type="text" name="q" id="" placeholder="search..." className="px-3 py-2 flex-1 bg-transparent outline-none"/>

                {/* Search Button/Icon */}
                <button type="submit" className="bg-primary px-2 py-2 rounded-full">
                    <Search size={20} className="text-gray-950"/>
                </button>
            </form>
            {/*call center*/}
            <div className="hidden lg:flex space-x-2 ml-10 items-center">
                <div><Headset size={32} className=" text-gray-500" /></div>
                <div className="block">
                    <p>Call Now:</p>
                    <p>0000-000-000</p>
                </div>
            </div>

            <span className="hidden ml-10 lg:flex font-light text-gray-500"> | </span>
            {/* user icons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
                <div className="cursor-pointer block lg:hidden">
                    <Search size={25} className="hover:text-primary text-gray-500" onClick={()=> setIsOpen(true)}/>
                </div>
                {/* Headless UI Modal */}
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Dialog.Panel className="bg-white p-4 rounded-lg w-3/4 max-w-md shadow-lg relative">
                        {/* Close Button */}
                        <button className="absolute top-0 right-2 text-gray-500 hover:text-gray-800" onClick={() => setIsOpen(false)}>
                        <X size={25}/>
                        </button>

                        {/* Search Input */}
                        <form className="flex items-center border border-gray-300 rounded-full overflow-hidden mt-4">
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="w-full px-4 py-2 outline-none"
                        />
                        <button type="submit" className="bg-primary rounded-full px-2 py-2">
                            <Search size={20} className="text-white"/>
                        </button>
                        </form>
                    </Dialog.Panel>
                </Dialog>
                <Link href="/user"><User size={25} className="text-gray-500 hover:text-primary"/></Link>
                <div className="relative hidden lg:block">
                    <Link href="/wishlist"><Heart size={25} className="text-gray-500 hover:text-primary"/>
                    <div className="absolute bg-primary rounded-full px-2 bottom-4 left-1/2"><span className="wishlist_count">4</span></div></Link>
                </div>
                <div className="relative">
                    <Link href="/wishlist"><ShoppingCart size={25} className="text-gray-500 hover:text-primary"/>
                    <div className="absolute bg-primary rounded-full px-2 bottom-4 left-1/2"><span className="cart_count">0</span></div></Link>
                </div>
            </div>
        </div>
        {/* bottom level nav */}
        <div className="relative hidden lg:flex mb-5 items-center space-x-8"
            onMouseEnter={() => setShopCatHover(true)}
            onMouseLeave={() => setShopCatHover(false)}
            ref={categoryRef}
        >
            <div className="flex cursor-pointer">
                <AlignJustify/>
                <span className="font-bold text-gray-800 text-sm flex items-center ml-2">SHOP BY CATEGORIES</span>
            </div>
            {shopCatHover && (
                <div className="absolute left-0 top-3 mt-2 bg-gray-800 shadow-lg border w-48 py-2">
                    <div className="flex flex-col space-y-2 text-white">
                        <Link href="/accessories" className="hover:text-primary px-4 flex items-center py-2 border-b border-gray-400">Store
                        </Link>
                        <div className="flex justify-between items-center border-b border-gray-400 hover:text-primary py-2">
                            <Link href="/accessories" className="ml-4">Car Parts</Link>
                            <ChevronDown size={15} className="mr-4"/>                        
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-400 hover:text-primary py-2">
                            <Link href="/accessories" className="ml-4">Accessories</Link>
                            <ChevronDown size={15} className="mr-4"/>                        
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-400 hover:text-primary py-2">
                            <Link href="/accessories" className="ml-4">Cars</Link>
                            <ChevronDown size={15} className="mr-4"/>                        
                        </div>
                    </div>
                </div>
            )}
            <span className="text-gray-500 font-light"> | </span>
            <nav className="flex justify-between space-x-6 font-bold text-gray-800 text-sm">
                <Link href="/" className="hover:text-primary">HOME</Link>
                <div className="flex items-end hover:text-primary">
                    <Link href="/Shop">SHOP</Link>
                    <ChevronDown size={14} className="font-light ml-1"/>
                </div>
                <div className="flex items-end hover:text-primary">
                    <Link href="/categories">CATEGORIES</Link>
                    <div className="rounded-md ml-1 px-1 text-white font-extralight bg-secondary text-xs">SALE</div>
                    <ChevronDown size={14} className="font-light ml-1"/>
                </div>
                <div className="flex items-end hover:text-primary">
                <Link href="/products">PRODUCTS</Link>
                <div className="rounded-md ml-1 px-1 text-white font-extralight bg-tertiary text-xs">HOT</div>
                    <ChevronDown size={14} className="font-light ml-1"/>
                </div>
                <div className="flex items-end hover:text-primary">
                <Link href="/products">TOP DEALS</Link>
                    <ChevronDown size={14} className="font-light ml-1"/>
                </div>
            </nav>
        </div>
    </div>
  )
}
