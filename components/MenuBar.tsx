'use client';
import { useState} from "react"
import { Search,X,Headset,User,ShoppingCart,Heart,AlignJustify,ChevronDown } from "lucide-react"
import Link from "next/link"
import { Dialog } from "@headlessui/react";
import Image from "next/image";

export default function MenuBar() {
    //for modal dialog
    const [isOpen,setIsOpen] = useState(false);
    //mobile menu
    const [menuOpen, setMenuOPen] = useState(false);
    //shop cat hover
    const [shopCatHover, setShopCatHover] = useState(false)

    //login form
    const [loginOpen, setLoginOpen] = useState(false);

    //category hover
    const [catHover, setCatHover] = useState(false);
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
                    <ul className="flex font-bold flex-col space-y-4 mt-12 ml-5">
                    <li><Link className="hover:text-primary" href="/" onClick={()=> setMenuOPen(false)}>Home</Link></li>
                    <li><Link className="hover:text-primary" href="/about" onClick={()=> setMenuOPen(false)}>About Us</Link></li>
                    <li><Link className="hover:text-primary" href="/contact" onClick={()=> setMenuOPen(false)}>Contact Us</Link></li>
                    <li><Link className="hover:text-primary" href="/shop" onClick={()=> setMenuOPen(false)}>Shop</Link></li>
                    </ul>
                </div>
            )}
            <Link href="/"><div className="logo flex space-x-0 md:space-x-2 items-center">
                <Image src="/logo.webp" alt="logo" width={75} height={75} className="object-contain w-[75px] h-auto"/>
                <h1 className="font-bold text-xs md:text-3xl lg:text-2xl">MG Smart Trading</h1>
            </div></Link>
            {/* search bar with filter and search icon */}
            <form className="hidden lg:flex flex-grow max-w-lg mx-6 border border-gray-300 bg-gray-300 rounded-full items-center overflow-hidden">
                <select name="cat" id="cat" className="px-3 py-2 bg-transparent outline-none">
                    <option value="1">All Categories</option>
                    <option value="2">Used Cars</option>
                    <option value="5">Spear Parts</option>
                    <option value="3">Household Equi..</option>
                    <option value="4">Electronics</option>
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
                    <p>+8180-9808-1863</p>
                </div>
            </div>

            <span className="hidden ml-10 lg:flex font-light text-gray-500"> | </span>
            {/* user icons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
                <div className="cursor-pointer block lg:hidden">
                    <Search size={25} className="hover:text-primary text-gray-500" onClick={()=> setIsOpen(true)}/>
                </div>
                {/* Headless UI Modal */}
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
                <User onClick={()=>setLoginOpen(true)} size={25} className="text-gray-500 hover:text-primary cursor-pointer"/>
                <div className="relative hidden lg:block">
                    <Link href="/wishlist"><Heart size={25} className="text-gray-500 hover:text-primary"/>
                    <div className="absolute bg-primary rounded-full px-2 bottom-4 left-1/2"><span className="wishlist_count">4</span></div></Link>
                </div>
                <div className="relative">
                    <Link href="/cart"><ShoppingCart size={25} className="text-gray-500 hover:text-primary"/>
                    <div className="absolute bg-primary rounded-full px-2 bottom-4 left-1/2"><span className="cart_count">0</span></div></Link>
                </div>
            </div>
            {loginOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
                  {/* Close button */}
                  <button className="absolute top-2 right-2 text-gray-600 hover:text-primary text-xl" title="Close" onClick={() => setLoginOpen(false)}> &times;</button>
              
                  {/* Form */}
                  <form>
                    <div className="flex flex-col space-y-4">
                      <label htmlFor="username">Username or Email <span className="text-red-600">*</span></label>
                      <input type="text" id="username" required className="border p-2 rounded-md w-full"/>
              
                      <label htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input type="password" id="password" required className="border p-2 rounded-md w-full"/>
                      <button type="submit" className="bg-primary rounded-full hover:bg-black p-2 font-bold hover:text-white">LOGIN</button>
                    </div>
                  </form>
                  <div className="flex-flex-col justify-center space-y-4">
                    <div className="text-gray-400 underline mt-4 text-center hover:text-primary cursor-pointer">lost your password?</div>
                    <span className="border-b-2 text-gray-400"></span>
                    <div className="text-gray-400 text-center">Dont have an account yet? <span className="text-primary cursor-pointer hover:underline">Sign Up</span></div>
                  </div>

                </div>
                </div>
              
            )}
        </div>
        {/* bottom level nav */}
        <div className="relative hidden lg:flex mb-5 items-center space-x-8">
            <div onMouseEnter={(()=> setShopCatHover(true))} onMouseLeave={(()=>setShopCatHover(false))}>
                <div className="flex cursor-pointer">
                <AlignJustify/>
                <span className="font-bold text-gray-800 text-sm flex items-center ml-2">SHOP BY CATEGORIES</span>
                </div>
                {shopCatHover && (
                <div className="absolute left-0 top-3 mt-2 bg-black shadow-lg border w-[300px] py-2 z-50">
                    <div className="flex flex-col space-y-2 text-white">
                        <Link href="/accessories" className="hover:text-primary px-4 py-2 border-b border-gray-400 truncate whitespace-nowrap ">Used Cars
                        </Link>
                        <div className="flex justify-between items-center border-b border-gray-400 hover:text-primary py-2">
                            <Link href="/accessories" className="ml-4 block truncate whitespace-nowrap">Car Parts</Link>
                            <ChevronDown size={15} className="mr-4"/>                        
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-400 hover:text-primary py-2">
                            <Link href="/accessories" className="ml-4">Electronics</Link>
                            <ChevronDown size={15} className="mr-4"/>                        
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-400 hover:text-primary py-2">
                            <Link href="/accessories" className="ml-4">Household Equipements</Link>
                            <ChevronDown size={15} className="mr-4"/>                        
                        </div>
                    </div>
                </div>
                )}
            </div>
            <span className="text-gray-500 font-light"> | </span>
            <nav className="flex justify-between space-x-6 font-bold text-gray-800 text-sm">
                <Link href="/" className="hover:text-primary">HOME</Link>
                {/* <div className="flex items-end hover:text-primary">
                    <Link href="/Shop">SHOP</Link>
                    <ChevronDown size={14} className="font-light ml-1"/>
                </div> */}
                <div className="flex items-end hover:text-primary" onMouseEnter={(()=> setCatHover(true))} onMouseLeave={(()=> setCatHover(false))}>
                    <Link href="/shop" className="cursor-pointer">CATEGORIES</Link>
                    <div className="rounded-md ml-1 px-1 text-white cursor-pointer font-extralight bg-secondary text-xs">SALE</div>
                    <ChevronDown size={14} className="font-light ml-1 cursor-pointer"/>
                    {catHover && (
                        <div className="absolute text-gray-800 top-3 z-50 mt-2 left-0 w-auto bg-white shadow-lg p-8">
                            <div className="grid grid-cols-3 gap-8 mt-4">
                                <div className="flex flex-col space-y-2">
                                    <Link href="/shop"><h2 className="font-bold text-xl text-gray-600">Used Cars</h2></Link>
                                        <ul className="text-sm text-gray-400 flex flex-col space-y-2">
                                            <Link href="/product"><li>Nissan</li></Link>
                                            <Link href="/product"><li>Suzuki</li></Link>
                                        </ul>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Link href="/shop"><h2 className="font-bold text-xl text-gray-600">Spear Parts</h2></Link>
                                        <ul className="text-sm text-gray-400 flex flex-col space-y-2">
                                            <Link href="/product"><li>Gear Box</li></Link>
                                            <Link href="/product"><li>Car Seats</li></Link>
                                            <Link href="/product"><li>Engines</li></Link>
                                        </ul>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Link href="/shop"><h2 className="font-bold text-xl text-gray-600">Household Equipements</h2></Link>
                                        <ul className="text-sm text-gray-400 flex flex-col space-y-2">
                                            <Link href="/product"><li>Single Bed</li></Link>
                                            <Link href="/product"><li>Family Family</li></Link>
                                        </ul>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Link href="/shop"><h2 className="font-bold text-xl">Electronics</h2></Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex items-end hover:text-primary">
                <Link href="/product">PRODUCTS</Link>
                <div className="rounded-md ml-1 px-1 text-white font-extralight bg-tertiary text-xs">HOT</div>
                    <ChevronDown size={14} className="font-light ml-1"/>
                </div>
                {/* <div className="flex items-end hover:text-primary">
                <Link href="/product">TOP DEALS</Link>
                    <ChevronDown size={14} className="font-light ml-1"/>
                </div> */}
            </nav>
        </div>
    </div>
  )
}
