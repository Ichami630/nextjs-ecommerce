

//form fields for general info
const fields = [ 
    {type: "text", label: "Site Name", name: "site-name", required: true},
    {type: "file", label: "logo", name: "logo", required: true},
    {type: "textarea", label: "Description", name: "description", required: true},
] 
//form fields for contact info
const contact = [ 
    {type: "email", label: "Email Address", name: "email", required: true},
    {type: "text", label: "Phone Number", name: "phone", required: true},
    {type: "textarea", label: "Company Location", name: "Address", required: true},
] 

//form field for social links
const social = [ 
    {type: "text", label: "Facebook", name: "facebook", required: true},
    {type: "text", label: "Instagram", name: "instagram", required: true},
    {type: "text", label: "Twitter", name: "twitter", required: true},
] 

const page = () => {
  return (
    <div className="mb-10">
        <form className=" shadow-md bg-white p-4">
            <h4 className="text-xl text-center text-red-600 mb-4">General Info</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field,index) => (
                    <div key={index} className={`flex flex-col space-y-1 ${field.type === "textarea" ? "col-span-1 md:col-span-2" : ""}`}>
                        <label htmlFor={field.label} className="text-gray-400">
                            {field.label} {field.required && (<span className="text-red-600">*</span>)}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea required={field.required} name={field.name} id="" cols={2} rows={5} className="border focus:outline-none w-full rounded-md p-2"></textarea>
                        ):(
                          <input type={field.type} id={field.name} name={field.name} className="border focus:outline-none w-full rounded-md p-2" required={field.required}/>
                        )}
                    </div>
                  ))}
            </div>

            <h4 className="text-xl text-center text-red-600 my-4">Contact Info</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contact.map((field,index) => (
                    <div key={index} className={`flex flex-col space-y-1 ${field.type === "textarea" ? "col-span-1 md:col-span-2" : ""}`}>
                        <label htmlFor={field.label} className="text-gray-400">
                            {field.label} {field.required && (<span className="text-red-600">*</span>)}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea required={field.required} name={field.name} id="" cols={2} rows={5} className="border focus:outline-none w-full rounded-md p-2"></textarea>
                        ):(
                          <input type={field.type} id={field.name} name={field.name} className="border focus:outline-none w-full rounded-md p-2" required={field.required}/>
                        )}
                    </div>
                ))}
            </div>

            <h4 className="text-xl text-center text-red-600 my-4">Social Links</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {social.map((field,index) => (
                    <div key={index} className={`flex flex-col space-y-1 ${field.type === "textarea" ? "col-span-1 md:col-span-2" : ""}`}>
                        <label htmlFor={field.label} className="text-gray-400">
                            {field.label} {field.required && (<span className="text-red-600">*</span>)}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea required={field.required} name={field.name} id="" cols={2} rows={5} className="border focus:outline-none w-full rounded-md p-2"></textarea>
                        ):(
                          <input type={field.type} id={field.name} name={field.name} className="border focus:outline-none w-full rounded-md p-2" required={field.required}/>
                        )}
                    </div>
                ))}
            </div>

            <button type="submit" className="p-2 font-bold bg-primary text-black hover:bg-black hover:text-white rounded-md mt-4">
                Update
            </button>
        </form>
    </div>
  )
}

export default page