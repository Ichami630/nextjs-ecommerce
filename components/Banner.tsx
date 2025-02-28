"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
const Banner = () => {
  const pathName = usePathname()
  return (
    <div className="relative bg-gray-500 flex justify-center items-center h-48 text-white">
        <div className="absolute top-o left-0 w-full p-4">
            {/* <p>Home/</p> */}
        </div>
        <Link href="/">Home</Link>&nbsp; {pathName}
    </div>
  )
}

export default Banner