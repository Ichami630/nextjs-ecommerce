import Link from "next/link";

export default function TopBar() {
  return (
    <div className="h-10 bg-primary text-gray-950 text-sm mb-10 w-full">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Left Section */}
        <div className="block text-center">
          At <span className="font-bold">MG Smart Trading</span> we deliver 
          <span className="font-semibold"> KICK START</span> -{" "}
          <Link href="/shop" className="underline">SHOP NOW</Link>
        </div>

        {/* Right Section - Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="hover:underline">About Us</Link>
          <span>|</span>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <span>|</span>
          <Link href="/faq" className="hover:underline">FAQs</Link>
        </nav>
      </div>
    </div>
  );
}
