'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LogOut, SlidersHorizontal, Images, MessageSquareCode, ShoppingCart,
  ShoppingBasket, ChevronRight, ChevronUp,
  Badge
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [productOpen, setProductOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  return (
    <>
      {/* Sidebar Overlay for Mobile */}
      <div className={`lg:hidden fixed inset-0 bg-gray-800  bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>

      {/* Sidebar Content */}
      <aside className={`lg:w-64 w-56 z-50 bg-white shadow-md p-5 flex flex-col fixed h-full ${isOpen ? 'lg:block' : 'hidden lg:block'}`}>
        {/* Logo */}
        <Link href="/" onClick={toggleSidebar}>
          <div className="flex space-x-2 items-center">
            <Image src="/logo.webp" alt='logo' width={25} height={25} />
            <span className="text-sm lg:text-xl font-bold">MG Smart Trading</span>
          </div>
        </Link>

        {/* Logout */}
        <div title='logout' className="flex mt-4 items-center cursor-pointer space-x-4 text-red-600">
          <LogOut size={20} />
          <div className="font-bold text-sm">LOGOUT</div>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col space-y-4 mt-4">
          <li>
            <Link href="/admin/categories" onClick={() => { if (isOpen) toggleSidebar(); }} 
              className={`flex flex-row space-x-3 items-center ${pathname === "/admin/categories" ? "text-primary font-bold" : "hover:text-primary"}`}>
              <SlidersHorizontal size={20} />
              <span>Categories</span>
            </Link>
          </li>

          <li>
            <Link href="/admin/sliders" onClick={() => { if (isOpen) toggleSidebar(); }}
              className={`flex flex-row space-x-3 items-center ${pathname === "/admin/sliders" ? "text-primary font-bold" : "hover:text-primary"}`}>
              <Images size={20} />
              <span>Sliders</span>
            </Link>
          </li>

          <li>
            <Link href="/admin/testimonials" onClick={() => { if (isOpen) toggleSidebar(); }}
              className={`flex flex-row space-x-3 items-center ${pathname === "/admin/testimonials" ? "text-primary font-bold" : "hover:text-primary"}`}>
              <MessageSquareCode size={20} />
              <span>Testimonials</span>
            </Link>
          </li>

          <li>
            <Link href="/admin/orders" onClick={() => { if (isOpen) toggleSidebar(); }}
              className={`flex flex-row space-x-3 items-center ${pathname === "/admin/orders" ? "text-primary font-bold" : "hover:text-primary"}`}>
              <ShoppingCart size={20} />
              <span>All Orders</span>
            </Link>
          </li>

          {/* Products Dropdown */}
          <div onClick={() => setProductOpen(!productOpen)} className="flex flex-row justify-between items-center cursor-pointer">
            <div className="flex items-center space-x-3">
              <ShoppingBasket size={20} />
              <span>Products</span>
            </div>
            {productOpen ? <ChevronUp size={20} /> : <ChevronRight size={20} />}
          </div>

          {productOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <li>
                <Link href="/admin/products" onClick={() => { if (isOpen) toggleSidebar(); }}
                  className={`hover:text-primary ${pathname === "/admin/products" ? "text-primary font-bold" : ""}`}>
                  <span>Add Product</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/allproducts" onClick={() => { if (isOpen) toggleSidebar(); }}
                  className={`hover:text-primary ${pathname === "/admin/allproducts" ? "text-primary font-bold" : ""}`}>
                  <span>All Products</span>
                </Link>
              </li>
            </div>
          )}
          <li>
            <Link href="/admin/brands" onClick={() => { if (isOpen) toggleSidebar(); }}
              className={`flex flex-row space-x-3 items-center ${pathname === "/admin/brands" ? "text-primary font-bold" : "hover:text-primary"}`}>
              <Badge size={20} />
              <span>Brands</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
