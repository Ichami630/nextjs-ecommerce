'use client';
import Link from 'next/link'
import { useState } from 'react';
import StarRating from './StarRating';

const ShopFilter = () => {
  const [priceRange, setPriceRange] = useState(100);
  return (
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
                            <input type="range" className="w-full custom-range" min={0} value={priceRange} max={10000} onChange={(e)=> setPriceRange(parseInt(e.target.value))}/>
                            <div className="flex justify-between text-sm text-gray-500">
                              <span>0</span>
                              <span>{priceRange}</span>
                              <span>10000</span>
                            </div>
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
  )
}

export default ShopFilter