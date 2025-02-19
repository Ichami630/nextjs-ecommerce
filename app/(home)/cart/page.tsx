import Banner from "../../../components/Banner";
import QuantitySelector from "../../../components/ui/QuantitySelector";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Banner />
      <div className="my-10 mx-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cart Summary */}
          <div className="lg:col-span-3 md:col-span-2">
            <div className="text-3xl font-extrabold mb-4">Cart Summary</div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="text-left border-b-2 border-gray-300">
                  <tr>
                    <th colSpan={3}>Product</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {[1, 2].map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td colSpan={3} className="py-4">
                        <div className="flex space-x-4 items-center">
                          <button className="text-center font-bold text-red-600 cursor-pointer hover:text-white rounded-full w-8 h-8 bg-white p-1 hover:bg-red-600">
                            x
                          </button>
                          <Link href="/product">
                            <Image src="/products/nissan.jpeg" width={75} height={50} alt="product" />
                          </Link>
                          <Link href="/product">
                            <div className="text-gray-700 hover:text-gray-800 w-60 truncate">Nissan Caravan 2012</div>
                          </Link>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="py-4 text-primary font-extrabold">¥{index === 0 ? "100,000" : "40,000"}</td>
                      <td className="py-4 text-black"><QuantitySelector /></td>
                      <td className="py-4 text-primary font-extrabold">¥{index === 0 ? "100,000" : "40,000"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <form className="border-t-2 border-gray-400 py-4 flex flex-wrap justify-between gap-4">
              <div className="flex flex-row space-x-4">
                <input type="text" className="focus:outline-none px-2 border border-gray-400 rounded-md" placeholder="Coupon Code" />
                <button type="submit" className="rounded-full px-4 py-2 bg-gray-200 text-xs md:text-sm text-gray-700 hover:bg-black hover:text-white font-bold">APPLY COUPON</button>
              </div>
              <button type="submit" className="rounded-full px-4 py-2 text-xs md:text-sm font-bold bg-gray-200 hover:bg-primary">UPDATE CART</button>
            </form>
          </div>

          {/* Cart Total */}
          <div className="lg:col-span-1 md:col-span-2 md:mt-0 mt-10">
            <div className="text-3xl font-extrabold">Cart Total</div>
            <div className="mt-4">
              <div className="flex justify-between text-gray-700 border-b-2 border-gray-200 pb-2">
                <p>Subtotal</p>
                <p className="text-primary font-bold">¥140,000</p>
              </div>
              <div className="flex justify-between text-gray-700 border-b-2 border-gray-200 mt-10 pb-2">
                <p>Shipping Fee</p>
                <p className="text-primary font-bold">¥5,000</p>
              </div>
              <div className="flex justify-between text-gray-700 border-t-2 border-gray-200 mt-10 lg:mt-16 pt-2">
                <p>Total</p>
                <p className="text-primary font-bold">¥145,000</p>
              </div>
              <Link href="/checkout"><button className="w-full bg-primary text-xs text-center hover:bg-black hover:text-white font-bold px-6 py-3 rounded-full mt-10 lg:mt-16">PROCEED TO CHECKOUT</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
