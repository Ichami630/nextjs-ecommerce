'use client';
import { GridColDef } from '@mui/x-data-grid';
import Table from "../../../../components/admin/Table"
import FormCard from "../../../../components/admin/FormCard"
import { Suspense } from 'react';

//datatable columns
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'categoryName', headerName: 'Category Name', width: 200 },
    { field: 'slug', headerName: 'Slug', width: 200 },
    { field: 'dateAdded', headerName: 'Date Added', width: 150 },
];

//datatable values
const rows = [
    { id: 1, categoryName: 'Used Cars', slug: 'used-cars', dateAdded: '2024-02-18' },
    { id: 2, categoryName: 'Electronics', slug: 'electronics', dateAdded: '2024-02-17' },
];

//page title and form fiels
const fields = [
    {type: "text", label: "Category Name", name: "category-name", required: true},
    {type: "text", label: "Category Slug", name: "cat-slug", required: true},
]

const Page = () => {

    return (
        <div className="flex flex-col space-y-10">
            {/* Suspense boundary is now wrapped around this section */}
            <Suspense fallback={<div>Loading...</div>}>
                <FormCard fields={fields} title='Category' pageRoute='/admin/categories' />
            </Suspense>
            {/*existing categories */}
            <Suspense fallback={<div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-40">
                <div className="text-white">Loading...</div>
                </div>}>
                <div className="flex flex-col shadow-md p-4 space-y-4 bg-white overflow-hidden w-full">
                    <Table title="Existing Categories" editRoute='/admin/categories' rows={rows} columns={columns} deleteEndpoint="/api/categories/delete" />
                </div>
            </Suspense>
        </div>
    )
}

export default Page;
