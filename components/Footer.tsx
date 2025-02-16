import Link from "next/link";
import Image from "next/image";
import { MapPin,Calendar, PhoneCall, Mail, Facebook, Instagram,Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="text-white">
          <Link href="/" className="flex items-center space-x-1 flex-shrink-0 mb-6">
            <Image src="/logo.webp" alt="logo" width={70} height={80} className="object-contain w-[120px] h-auto"/>
            <h2 className="font-bold">MG Smart Trading</h2>
          </Link>
          <p className="text-gray-400">
            Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service, embracing style and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-white">
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-primary hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary hover:underline">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-primary hover:underline">FAQs</Link></li>
          </ul>
        </div>

        {/* Your Account */}
        <div className="text-white">
          <h3 className="text-lg font-bold mb-6">Your Account</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/profile" className="hover:text-primary hover:underline">Profile</Link></li>
            <li><Link href="/orders" className="hover:text-primary hover:underline">Orders</Link></li>
            <li><Link href="/wishlist" className="hover:text-primary hover:underline">Wishlist</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-white">
          <h3 className="text-lg font-bold mb-6">Contact Information</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> <span>Tokyo Sumida-ku Hugashimukolima 410-12-102, Japan</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall size={18} /> <span>+8180-3606-4653</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> <span>fongilberttangu@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Calendar size={18} /> <span>Monday - Friday, 8am - 6pm</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-gray-400">
        {/* Social Icons */}
        <div className="flex gap-4">
          <Facebook size={30} className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-primary cursor-pointer" />
          <Instagram size={30} className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-primary cursor-pointer" />
          <Twitter size={30} className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-primary cursor-pointer" />
        </div>

        {/* Copyright Text */}
        <p className="text-sm">© {new Date().getFullYear()} Copyright - MG Smart Trading</p>
      </div>
    </footer>
  );
}
