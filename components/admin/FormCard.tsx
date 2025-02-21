'use client';
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";

interface Options {
    value: string | number;
    name: string;
}
interface Fields {
    type: string;
    label: string;
    name: string;
    placeholder?: string;
    required: boolean;
    options?: Options[]; //for radios and select
}

interface PageProps {
    fields: Fields[];
    title: string;
    pageRoute: string;
}

const FormCard:React.FC<PageProps> = ({fields,title,pageRoute}) => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const isEditing = !!id;
  return (
    <div className="flex p-4 flex-col space-y-4 shadow-md bg-white">
        <div className="flex flex-row space-x-2 items-center">
            <div className="text-2xl text-red-700 font-extrabold">
                {isEditing ? `Edit ${title}` : `New ${title}`}
            </div>
            <Link title='new category' href={pageRoute} className='border-2 bg-gray-400 p-1'>
                <Plus size={14} />
            </Link>
        </div>
        <hr />
        <form action="" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((field,index)=> (
                    <div key={index} className="flex flex-col space-y-1 w-full">
                        <label htmlFor={field.label} className="text-gray-400">
                            {field.label} {field.required && (<span className="text-red-600">*</span>)}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea required={field.required} name={field.name} id="" cols={4} rows={3} className="border focus:outline-none w-full rounded-md p-2"></textarea>
                        ):field.type === "select" && field.options ? (
                            <select id={field.name} name={field.name} required={field.required} className="border focus:outline-none w-full rounded-md p-2">
                                {field.options.map((option, idx)=>(
                                    <option key={idx} value={option.value}>{option.name}</option>
                                ))}
                            </select>
                        ):field.type === "radio" && field.options ? (
                            <div className="flex flex-row space-x-4">
                                {field.options.map((option,idx)=> (
                                    <label key={idx} className="flex items-center space-x-2">
                                    <input 
                                      type={field.type} 
                                      name={field.name} 
                                      value={option.value} 
                                      className="w-4 h-4"
                                      required={field.required}
                                    />
                                    <span>{option.name}</span>
                                  </label>
                                ))}
                            </div>
                        ) :(
                            <input type={field.type} id={field.name} name={field.name} placeholder={field.placeholder} className="border focus:outline-none w-full rounded-md p-2" required={field.required}/>
                        )}
                    </div>
                ))}
            </div>
            <button type="submit" className="p-2 font-bold bg-primary text-black hover:bg-black hover:text-white rounded-md mt-4">
                {isEditing ? `Update ${title}` : `Save ${title}`}
            </button>
        </form>
    </div>
  )
}

export default FormCard