'use client';
import { GridColDef } from '@mui/x-data-grid';
import Table from "../../../../components/admin/Table"
import FormCard from "../../../../components/admin/FormCard"
import { Suspense } from 'react';
import Image from 'next/image';
//datatable columns
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'image', headerName: 'Image', width: 200,
        renderCell: (params) => (
            <Image
                src={params.value} 
                alt="tes Image"
                width={100}
                height={100}
                className="w-20 h-20 object-cover rounded-sm"
            />
        )
     },
    { field: 'brandName', headerName: 'Brands Name', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'dateAdded', headerName: 'Date Added', width: 150 },
];

//datatable values
const rows = [
    { id: 1,image: "/brands/bmw.jpeg", brandName: 'BMW', status: 'Active', dateAdded: '2024-02-18' },
    { id: 2,image: "/brands/toyota.jpeg", brandName: 'Toyota', status: 'Active', dateAdded: '2024-04-18' },
    { id: 3,image: "/brands/ford.png", brandName: 'Ford', status: 'Draft', dateAdded: '2024-02-18' },
];

//page title and form fiels
const fields = [
    {type: "text", label: "Brand Name", name: "brand-name", required: true},
    {type: "select", label: "Status", name: "status", options: [{value: 1, name: "Active"},{value: 0, name: "Draft"}], required: true},
    {type: "date", label: "Date Added", name: "date-added", required: false},
    {type: "file", label: "Image", name: "image", required: true},
]

const Page = () => {

    return (
        <div className="flex flex-col space-y-10">
            {/* Suspense boundary is now wrapped around this section */}
            <Suspense fallback={<div>Loading...</div>}>
                <FormCard fields={fields} title='Brands' pageRoute='/admin/brands' />
            </Suspense>
            {/*existing categories */}
            <Suspense fallback={<div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-40">
                <div className="text-white">Loading...</div>
                </div>}>
                <div className="flex flex-col shadow-md p-4 space-y-4 bg-white">
                    <Table title="Existing Brands" editRoute='/admin/brands' rows={rows} columns={columns} deleteEndpoint="/api/brands/delete" />
                </div>
            </Suspense>
        </div>
    )
}

export default Page;
