
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react"
import {toast} from "react-toastify"

interface Pvid{
    pvid: string | null;
}

//page title and form fiels
const variation = [
    {type: "number", label: "Price", name: "price", required: true},
    {type: "number", label: "Discount Price", name: "discount",placeholder: "default 0", required: false},
    {type: "file", label: "Variation Image", name: "image", required: true},
    {type: "textarea", label: "Description", name: "description", required: true},
  ]

const ProductVariation = ({pvid}: Pvid) => {
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
    <div id="productVariation" className="mt-10">
        <div className="mb-10">
        {/* Suspense boundary is now wrapped around this section */}
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
        </div>
      </div>
  )
}

export default ProductVariation