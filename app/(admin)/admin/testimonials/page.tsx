'use client';
import { GridColDef } from '@mui/x-data-grid';
import Table from "../../../../components/admin/Table"
import FormCard from "../../../../components/admin/FormCard"
import { Suspense } from 'react';
import Image from 'next/image';
//datatable columns
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'image', headerName: 'Image', width: 150,
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
    { field: 'clientName', headerName: 'Client Name', width: 200 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'caption', headerName: 'Caption', width: 150 },
    { field: 'dateAdded', headerName: 'Date Added', width: 100 },
];

//datatable values
const rows = [
    { id: 1,image: "/tes/user1.jpg", clientName: 'John Doe', title: 'Quick Response', caption: "Web Dev", dateAdded: '2024-02-18' },
];

//page title and form fiels
const fields = [
    {type: "text", label: "Client Name", name: "client-name", required: true},
    {type: "text", label: "Caption", name: "caption", required: true},
    {type: "text", label: "Title", name: "title", placeholder: "e.g CEO", required: true},
    {type: "select", label: "Status", name: "status", options: [{value: 1, name: "Active"},{value: 0, name: "Draft"}], required: true},
    {type: "date", label: "Date Added", name: "date-added", required: false},
    {type: "file", label: "Image", name: "image", required: false},
    {type: "textarea", label: "Description", name: "description", required: true}
]

const Page = () => {

    return (
        <div className="flex flex-col space-y-10">
            {/* Suspense boundary is now wrapped around this section */}
            <Suspense fallback={<div>Loading...</div>}>
                <FormCard fields={fields} title='Testimonials' pageRoute='/admin/testimonials' />
            </Suspense>
            {/*existing categories */}
            <Suspense fallback={<div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-40">
                <div className="text-white">Loading...</div>
                </div>}>
                <div className="flex flex-col shadow-md p-4 space-y-4 max-w-6xl bg-white overflow-hidden">
                    <Table title="Existing Testimonials" editRoute='/admin/testimonials' rows={rows} columns={columns} deleteEndpoint="/api/testimonials/delete" />
                </div>
            </Suspense>
        </div>
    )
}

export default Page;
