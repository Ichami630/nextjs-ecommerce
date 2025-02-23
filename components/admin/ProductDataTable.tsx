import { Suspense } from "react";
import Table from "./Table";
import { GridColDef } from '@mui/x-data-grid';
import Image from "next/image";
interface DataProps {
    id: string;
  }

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

const ProductDataTable = ({id}:DataProps) => {
    return (
        <Suspense fallback={<div>Loading existing product variations....</div>}>
          <div className="mt-4">
          {/*existing product variations */}
          <div className="flex flex-col shadow-md p-4 space-y-4 max-w-6xl bg-white overflow-hidden">
            <Table title="Existing Product Variations" editRoute={`/admin/products/add?id=${id}`} rows={rows} columns={columns} deleteEndpoint="/api/products/delete" />
          </div>
          </div>
        </Suspense>
    )
}

export default ProductDataTable