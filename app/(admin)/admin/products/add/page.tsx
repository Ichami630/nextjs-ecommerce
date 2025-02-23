'use client';
import Product from "../../../../../components/admin/Product"
import { Suspense } from "react";
// import {toast} from "react-toastify"


//page title and form fiels
// const variation = [
//   {type: "number", label: "Price", name: "price", required: true},
//   {type: "number", label: "Discount Price", name: "discount",placeholder: "default 0", required: false},
//   {type: "file", label: "Variation Image", name: "image", required: true},
//   {type: "textarea", label: "Description", name: "description", required: true},
// ]


const Page = () => {
  //get id from the from url parameter
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
    <Suspense fallback={<div>Loading product details...</div>}>
      <Product />
    </Suspense>
    </>
  )
}

export default Page
