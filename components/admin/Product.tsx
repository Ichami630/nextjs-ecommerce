import Link from "next/link"
import { AlignJustify, Plus } from "lucide-react"

const Product = () => {
  return (
    <>
    <div className="absolute bottom-20 lg:bottom-40 z-50 right-5 hidden lg:block">
        <div className="flex flex-col space-y-2">
            <Link href="/" className="flex flex-row items-center space-x-1 p-2 text-sm border-r-0 bg-primary">
                <AlignJustify size={20}/>
                <div className="font-bold">All Products</div>
            </Link>
            <Link href="/" className="flex flex-row items-center space-x-1 p-2 rouned-md text-sm border-r-0 bg-gray-400 text-white">
                <Plus size={20}/>
                <div className="font-bold">Add Product</div>
            </Link>
        </div>
    </div>
    <div className="p-4 bg-white shadow-md my-10">
        <div className="flex flex-row space-x-2 items-center">
            <div className="text-2xl text-red-700 font-extrabold">
                New Product
            </div>
            <Link title='new category' href="/admin/categories" className='border-2 bg-gray-400 p-1'>
                <Plus size={14} />
            </Link>
        </div>
        <div className="text-xs text-gray-400 text-center mb-4">All fields marked with <span className="text-red-600">*</span> are required</div>
        <form action="">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="product name" className='text-gray-400'>Product Name <span className="text-red-600">*</span></label>
                        <input type="text" id="username" required className="border p-2 rounded-md w-full focus:outline-none"/>
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                    <label htmlFor="product slug" className='text-gray-400'>Product Slug <span className="text-red-600">*</span></label>
                    <input type="text" name="" id="productName" className="border p-2 rounded-md w-full focus:outline-none" placeholder='e.g: nissan-caravan'/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="product category" className='text-gray-400'>Product Category <span className="text-red-600">*</span></label>
                        <select name="" id="productCategory" className="border p-2 rounded-md w-full focus:outline-none">
                            <option value="0">-- Choose a category --</option>
                            <option value="1">Used Cars</option>
                            <option value="2">Household Equipements</option>
                            <option value="3">Car Parts</option>
                            <option value="4">Electronics</option>
                        </select>
                    </div>
                    <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="seo keywords" className='text-gray-400'>SEO Keywords</label>
                        <input type="text" id="username" className="border p-2 rounded-md w-full focus:outline-none"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex flex-col space-y-2 w-full">
                        <label htmlFor="product description" className='text-gray-400'>Product Description <span className="text-red-600">*</span></label>
                        <textarea id="productDescription" rows={3} color='4' required className="border p-2 rounded-md w-full focus:outline-none"></textarea>
                    </div>
                </div>
            </div>
            <button type="submit" className="p-2 font-bold bg-primary text-black hover:bg-black hover:text-white rounded-md mt-4">Add Product</button>
        </form>
    </div>
    </>
  )
}

export default Product