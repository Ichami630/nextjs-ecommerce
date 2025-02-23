'use client';
import { GridColDef } from '@mui/x-data-grid';
import Table from "../../../../../components/admin/Table"
import { AlignJustify, Plus, Trash2 } from "lucide-react"
import FormCard from "../../../../../components/admin/FormCard"
import Link from "next/link"
import { useSearchParams } from 'next/navigation';
import { Suspense,useState } from "react"
import Image from 'next/image';
import {toast} from "react-toastify"

//datatable columns
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'variationImage', headerName: 'Variation Image', width: 150,
        renderCell: (params) => (
            <Image
                src={params.value} 
                alt="variation Image"
                width={100}
                height={100}
                className="w-20 h-20 object-cover rounded-sm"
            />
        )
     },
    { field: 'price', headerName: 'Price', width: 200 },
    { field: 'discountPrice', headerName: 'Discount Price', width: 150 },
    { field: 'dateAdded', headerName: 'Date Added', width: 100 },
];

//datatable values
const rows = [
  { id: 1,variationImage: "/products/bed1.jpg", price: `50,000 ￥`, discountPrice: `49,000 ￥`, dateAdded: '2024-02-18' },
  { id: 2,variationImage: "/products/bed2.webp", price: `100,000 ￥`, discountPrice: `0 ￥`, dateAdded: '2024-02-18' },
];

//page title and form fiels
const fields = [
  {type: "text", label: "Product Name", name: "product-name", required: true},
  {type: "text", label: "Product Slug", name: "product-slug", placeholder: "e.g: nissan-caravan", required: true},
  {type: "select", label: "Category", name: "category", options: [{value: 0, name: "-- select a category --"},{value: 1, name: "Used Cars"},{value: 2, name: "Household Equipements"},{value: 3, name: "Electronics"},{value: 4, name: "Car Parts"}], required: true},
  {type: "text", label: "Stock Quantity", name: "stock", placeholder: "default 1", required: false},
  {type: "text", label: "Mnm Order Quantity", name: "mnmOrder",placeholder: "default 1", required: false},
  {type: "text", label: "Estimated Delivery", name: "delivery",placeholder: "e.g 4 working days", required: false},
  {type: "textarea", label: "SEO Keywords", name: "seo-keywords", required: false},
  {type: "textarea", label: "About Product", name: "description", required: true}
]

//page title and form fiels
const variation = [
  {type: "number", label: "Price", name: "price", required: true},
  {type: "number", label: "Discount Price", name: "discount",placeholder: "default 0", required: false},
  {type: "file", label: "Variation Image", name: "image", required: true},
  {type: "textarea", label: "Description", name: "description", required: true},
]


const Page = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get("id");//get id from the from url parameter
  const pvid = searchParams.get("pvid") //get the pvid for variation section
  const [details,setDetails] = useState([{name: "",value: ""}]); //for technical details
  const addDetails = () => {
    setDetails([...details,{name: "",value: ""}]); //add new tech detail row
  }
  const removeDetails = (index: number) => {
    if(confirm("Are you sure you want to remove this from technical details?")){
      setDetails(details.filter((_,i)=> i!==index));
      toast.success("item removed from technical details")
    }
  }
  //update the key-value pair technical details
  const updateDetails = (index: number,field: "name" | "value",newString: string) => {
    const updatedDetails = [...details];
    updatedDetails[index][field] = newString;
    setDetails(updatedDetails);
  }


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
    {/* Suspense boundary is now wrapped around this section */}
    <Suspense fallback={<div>Loading...</div>}>
        <FormCard fields={fields} title='Product' pageRoute='/admin/products/add' />
    </Suspense>
    {/*shows product variation only when id is parse */}
    <Suspense fallback={<div>loading...</div>}>
    {id && (
      <div id="productVariation" className="my-10">
        <div className="mb-10">
        {/* Suspense boundary is now wrapped around this section */}
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex p-4 flex-col space-y-4 shadow-md bg-white">
              <div className="flex flex-row space-x-2 items-center">
                <div className="text-2xl text-red-700 font-extrabold">
                  {pvid ? `Edit Product Variation` : `New Product Variation`}
                </div>
              </div><hr />
              <form className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {variation.map((field,index) => (
                    <div key={index} className={`flex flex-col space-y-1 ${field.type === "textarea" ? "col-span-1 md:col-span-2" : ""}`}>
                        <label htmlFor={field.label} className="text-gray-400">
                            {field.label} {field.required && (<span className="text-red-600">*</span>)}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea required={field.required} name={field.name} id="" cols={2} rows={5} className="border focus:outline-none w-full rounded-md p-2"></textarea>
                        ):(
                          <input type={field.type} id={field.name} name={field.name} placeholder={field.placeholder} className="border focus:outline-none w-full rounded-md p-2" required={field.required}/>
                        )}
                    </div>
                  ))}
                </div>
                {/* key value pairs technical details */}
                <div className="flex justify-between mt-4">
                  <div className="text-sm md:text-xl text-primary">Technical Details</div>
                  <div onClick={addDetails} title=' click to add new' className="flex cursor-pointer space-x-1 p-1 border border-gray-200 items-center">
                    <Plus className='text-green-600'/>
                    <p className="text-gray-400">Add New</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                {details.map((detail,index)=> (
                  <div key={index} className="grid grid-cols-6 gap-4 items-center">
                    <div className="flex flex-col space-y-1 col-span-2">
                      <label htmlFor={`name-${index}`} className='text-gray-400'>Name</label>
                      <input type="text" value={detail.name} name="name" onChange={(e) => updateDetails(index,"name",e.target.value)} placeholder='e.g Brand' className="border focus:outline-none w-full rounded-md p-2" />
                    </div>
                    <div className={`flex flex-col space-y-1 ${pvid ? "col-span-3":"col-span-4"}`}>
                      <label htmlFor={`value-${index}`} className='text-gray-400'>Value</label>
                      <input value={detail.value} onChange={(e) => updateDetails(index,"value",e.target.value)} type="text" name="name" placeholder='e.g Toyota' className="border focus:outline-none w-full rounded-md p-2" />
                    </div>
                    {pvid && (
                      <button className="flex items-center" title='delete this item' onClick={()=>removeDetails(index)}>
                      <Trash2 className='text-red-600 col-span-1 text-center mt-6 cursor-pointer' />
                    </button>
                    )}
                  </div>
                  ))}
                </div>
                <button type="submit" className="p-2 font-bold bg-primary text-black hover:bg-black hover:text-white rounded-md mt-4">
                  {pvid ? `Update Variation` : `Save Variation`}
                </button>
              </form>
            </div>
        </Suspense>
        </div>
      {/*existing categories */}
        <Suspense fallback={<div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-40">
          <div className="text-white">Loading...</div>
        </div>}>
          <div className="flex flex-col shadow-md p-4 space-y-4 max-w-6xl bg-white overflow-hidden">
            <Table title="Existing Product Variations" editRoute={`/admin/products/add?id=${id}`} rows={rows} columns={columns} deleteEndpoint="/api/products/delete" />
          </div>
        </Suspense>
      </div>
    )}
    </Suspense>
    </>
  )
}

export default Page