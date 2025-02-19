'use client';
import Banner from "../../../components/Banner";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Checkout:React.FC = () => {
    const [shippingAddress, setShippingAddress] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("credit_card");
  return (
    <>
        <Banner />
        <div className="mx-4 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
                {/* Billing Details */}
                <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Billing Details</h3>
                    <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="State / Country" className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Street Address" className="w-full p-3 border border-gray-300 rounded-md" />
            <div className="flex gap-4">
              <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded-md" />
              <input type="text" placeholder="ZIP Code" className="w-1/3 p-3 border border-gray-300 rounded-md" />
            </div>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="relative border border-gray-300 p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-4">
                        {/* Product Item */}
                        <div className="flex items-center justify-between">
                        <Link href="/product"><Image src="/products/nissan.jpeg" width={60} height={60} alt="Product" className="rounded-md" /></Link>
                        <div className="flex-1 ml-4">
                            <Link href="/product"><h4 className="text-sm font-medium w-24 truncate">Nissan Caravan 2012</h4></Link>
                            <p className="text-gray-600 text-xs">Qty: 1</p>
                        </div>
                        <p className="text-sm font-bold text-primary">¥200,000</p>
                    </div>
            
                        {/* Total Price */}
                        <div className="flex justify-between border-t pt-2">
                        <p className="font-semibold">Total</p>
                        <p className="font-bold text-lg text-primary">¥200,000</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    {/* ship to another address */}
                    <input 
                        type="checkbox"
                name="shippingaddress" 
                checked={shippingAddress}
                onChange={(e)=> setShippingAddress(e.target.checked)} 
                className="mt-10 cursor-pointer" /><span className="font-bold text-xl ml-2">Ship a Different Address?</span>
                    {shippingAddress && (
                <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Shipping Details</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md" />
                  <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md" />
                  <input type="text" placeholder="State / Country" className="w-full p-3 border border-gray-300 rounded-md" />
                  <input type="text" placeholder="Street Address" className="w-full p-3 border border-gray-300 rounded-md" />
                  <div className="flex gap-4">
                    <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded-md" />
                    <input type="text" placeholder="ZIP Code" className="w-1/3 p-3 border border-gray-300 rounded-md" />
                  </div>
                </form>
                      </div>
                    )}
                </div>
                {/* Payment Method & Place Order */}
                <div className="mt-6 border border-gray-300 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="flex gap-3 flex-col lg:flex-row">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                    type="radio"
                    name="payment"
                    value="bank_transfer"
                    checked={paymentMethod === "bank_transfer"}
                    onChange={() => setPaymentMethod("bank_transfer")}
                    className="w-4 h-4 text-primary"
                    />
                    <span>Bank Transfer</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="w-4 h-4 text-primary"
                    />
                    <span>PayPal</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                    type="radio"
                    name="payment"
                    value="credit_card"
                    checked={paymentMethod === "credit_card"}
                    onChange={() => setPaymentMethod("credit_card")}
                    className="w-4 h-4 text-primary"
                    />
                    <span>Credit Card</span>
                </label>
                </div>

                <button className="mt-6 w-full bg-primary p-3 rounded-md text-white font-bold hover:bg-black transition">Place Order</button>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Checkout;
