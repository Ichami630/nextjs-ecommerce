'use client';
import { GridColDef } from '@mui/x-data-grid';
import Table from "../../../../components/admin/Table"
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Suspense } from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'categoryName', headerName: 'Category Name', width: 200 },
    { field: 'slug', headerName: 'Slug', width: 200 },
    { field: 'dateAdded', headerName: 'Date Added', width: 150 },
];

const rows = [
    { id: 1, categoryName: 'Used Cars', slug: 'used-cars', dateAdded: '2024-02-18' },
    { id: 2, categoryName: 'Electronics', slug: 'electronics', dateAdded: '2024-02-17' },
];

const Page = () => {
    const searchParams = useSearchParams();
    const categoryId = searchParams.get('id');
    const isEditing = !!categoryId;

    return (
        <div className="flex flex-col space-y-10">
            <div className="flex p-4 flex-col space-y-4 shadow-md bg-white">
                <div className="flex flex-row space-x-2 items-center">
                    <div className="text-2xl text-red-700 font-extrabold">
                        {isEditing ? "Existing Category" : "New Category"}
                    </div>
                    <Link title='new category' href="/admin/categories" className='border-2 bg-gray-400 p-1'>
                        <Plus size={14} />
                    </Link>
                </div>
                <form action="" className="mt-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex flex-col space-y-1 w-full">
                            <label htmlFor="categoryname" className='text-gray-400'>Category Name <span className="text-red-600">*</span></label>
                            <input type="text" name="" id="categoryName" className="border focus:outline-none w-full rounded-md p-2" />
                        </div>
                        <div className="flex flex-col space-y-1 w-full">
                            <label htmlFor="categoryslug" className='text-gray-400'>Category Slug <span className="text-red-600">*</span></label>
                            <input type="text" name="" id="categoryName" className="border focus:outline-none w-full rounded-md p-2" placeholder='e.g: used-cars' />
                        </div>
                    </div>
                    <button type="submit" className="p-2 font-bold bg-primary text-black hover:bg-black hover:text-white rounded-md mt-4">
                        {isEditing ? "Update category" : "Save category"}
                    </button>
                </form>
            </div>
            {/*existing categories */}
            <Suspense fallback={<div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-40">
                <div className="text-white">Loading...</div>
                </div>}>
                <div className="flex flex-col shadow-md p-4 space-y-4 bg-white">
                    <Table title="Existing Categories" editRoute='/admin/categories' rows={rows} columns={columns} deleteEndpoint="/api/categories/delete" />
                </div>
            </Suspense>
        </div>
    )
}

export default Page;
