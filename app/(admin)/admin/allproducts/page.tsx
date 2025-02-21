import Link from "next/link"
import { Plus } from "lucide-react"
import { GridColDef } from '@mui/x-data-grid';
import Table from "../../../../components/admin/Table"

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'slug', headerName: 'Slug', width: 200 },
    { field: 'dateAdded', headerName: 'Date Added', width: 150 },
  ];

const rows = [
    { id: 1, productName: 'Nissan Caravan 2012', category: 'Used Cars', slug: 'nissan-caravan-2012', dateAdded: '2024-02-18' },
    { id: 2, productName: 'Dell Laptop', category: 'Electronics', slug: 'dell-laptop', dateAdded: '2024-02-16' },
];

const page = () => {
  return (
    <>
        <div className="absolute bottom-20 lg:top-20 right-5 z-50 hidden lg:block">
        <Link href="/admin/products" className="flex flex-row items-center space-x-1 p-2 rounded-md text-sm border-r-0 bg-gray-400 text-white">
          <Plus size={20} />
          <div className="font-bold">Add Product</div>
        </Link>
        </div>
      <Table title="All Products" deleteEndpoint="api/products/delete" rows={rows} columns={columns} editRoute="/admin/products" />
    </>
  )
}

export default page