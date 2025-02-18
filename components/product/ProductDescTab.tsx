
interface Description {
    id: number;
    about: string;
    technicalDetails: TechnicalDetails[];
}

//interface to store the technical details
interface TechnicalDetails {
    name: string;
    value: string;
}
const ProductDescTab:React.FC<{description: Description}> = ({description}) => {
  return (
    <div className="p-4 space-y-4">
        <div className="font-bold text-xl">About this Item</div>
        <div className="text-gray-500">
            {description.about}
        </div>
        <div className="overflow-x-auto">
        <table className="w-full border-2 border-b-0 border-gray-200">
            <thead className="text-left border-b-2 border-gray-200 py-4">
                <tr><th colSpan={2} className="text-primary text-xl pl-4 py-4">Technical Details</th><th></th></tr>
            </thead>
            <tbody>
                {description.technicalDetails.map((item,index)=>(
                    <tr key={index} className="border-b-2 border-gray-200">
                        <td><div className="text-gray-500 pl-4 py-2">{item.name}</div></td>
                        <td><div className="text-gray-400">{item.value}</div></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ProductDescTab