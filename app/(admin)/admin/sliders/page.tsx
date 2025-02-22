'use client';
import { GridColDef } from '@mui/x-data-grid';
import Table from "../../../../components/admin/Table"
import FormCard from "../../../../components/admin/FormCard"
import { Suspense } from 'react';
import Image from 'next/image';

//datatable columns
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'image',
        headerName: 'Image',
        width: 200,
        renderCell: (params) => (
            <Image
                src={params.value} 
                alt="Slider Image"
                width={100}
                height={100}
                className="w-20 h-20 object-cover rounded-sm"
            />
        ),
    },
    { field: 'sliderTitle', headerName: 'Slider Title', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'dateAdded', headerName: 'Date Added', width: 150 },
];

//datatable values
const rows = [
    { id: 1, image: '/banner1.jpg', sliderTitle: 'Import & Export', status: "Active", dateAdded: '2024-02-18' },
    { id: 2, image: '/banner2.jpg', sliderTitle: 'Travel & Consultation', status: "Not Active", dateAdded: '2024-06-18' },
];

//page title and form fiels
const fields = [
    {type: "text", label: "Slider Title", name: "Slider-title", required: true},
    {type: "text", label: "Link Button Title", name: "link-button-title", required: true},
    {type: "text", label: "Link URL", name: "link-url", required: true},
    {type: "text", label: "Link URL", name: "link-url", required: true},
    {type: "file", label: "Image Source", name: "image", required: true},
    {type: "radio", label: "Active Slider?", name: "image", required: true,options: [{value: 1,name:"Yes"},{value:0,name:"No"}]},
    {type: "textarea", label: "Description", name: "description", required: true}
]

const Page = () => {

    return (
        <div className="flex flex-col space-y-10">
            {/* Suspense boundary is now wrapped around this section */}
            <Suspense fallback={<div>Loading...</div>}>
                <FormCard fields={fields} title='Slider' pageRoute='/admin/categories' />
            </Suspense>
            {/*existing categories */}
            <Suspense fallback={<div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-40">
                <div className="text-white">Loading...</div>
                </div>}>
                <div className="flex flex-col shadow-md p-4 space-y-4 bg-white">
                    <Table title="Existing Sliders" editRoute='/admin/categories' rows={rows} columns={columns} deleteEndpoint="/api/sliders/delete" />
                </div>
            </Suspense>
        </div>
    )
}

export default Page;
