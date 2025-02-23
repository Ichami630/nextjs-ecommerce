'use client';
import { AlignJustify, Plus } from "lucide-react"
import FormCard from "../../../../../components/admin/FormCard"
import ProductDataTable from "../../../../../components/admin/ProductDataTable"
import Link from "next/link"
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react"
// import {toast} from "react-toastify"


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
// const variation = [
//   {type: "number", label: "Price", name: "price", required: true},
//   {type: "number", label: "Discount Price", name: "discount",placeholder: "default 0", required: false},
//   {type: "file", label: "Variation Image", name: "image", required: true},
//   {type: "textarea", label: "Description", name: "description", required: true},
// ]


const Page = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get("id");//get id from the from url parameter
  // const pvid = searchParams.get("pvid") //get the pvid for variation section
  // const [details,setDetails] = useState([{name: "",value: ""}]); //for technical details
  // const addDetails = () => {
  //   setDetails([...details,{name: "",value: ""}]); //add new tech detail row
  // }
  // const removeDetails = (index: number) => {
  //   if(confirm("Are you sure you want to remove this from technical details?")){
  //     setDetails(details.filter((_,i)=> i!==index));
  //     toast.success("item removed from technical details")
  //   }
  // }
  //update the key-value pair technical details
  // const updateDetails = (index: number,field: "name" | "value",newString: string) => {
  //   const updatedDetails = [...details];
  //   updatedDetails[index][field] = newString;
  //   setDetails(updatedDetails);
  // }


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
    <Suspense fallback={<div>Loading product details...</div>}>
        <FormCard fields={fields} title='Product' pageRoute='/admin/products/add' />
    </Suspense>
    {/*shows product variation only when id is parse */}
    {/* Other components */}
    <Suspense fallback={<div>Loading existing product variations...</div>} >
      {id && <ProductDataTable id={id} />}
    </Suspense>
    </>
  )
}

export default Page
