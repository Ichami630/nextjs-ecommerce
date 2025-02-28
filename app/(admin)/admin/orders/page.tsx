"use client"
import { GridColDef } from '@mui/x-data-grid';
import Table from "../../../../components/admin/Table"
import { Suspense } from 'react';

//datatable columns
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'orderRef', headerName: 'OrderRef#', width: 200 },
    { field: 'invoiceTotal', headerName: 'Invoice Total (￥)', width: 150 },
    { field: 'dateAdded', headerName: 'Date Added', width: 100 },
];

//datatable values
const rows = [
  { id: 1,orderRef: '2409000040', invoiceTotal: 20000, dateAdded: '2024-02-18' },
  { id: 2,orderRef: '2409008890', invoiceTotal: 50000, dateAdded: '2024-02-13' },
];

const page = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col shadow-md p-4 space-y-4 max-w-6xl bg-white overflow-hidden">
      <Suspense fallback={<div>loading....</div>}>
        <Table title="All orders" rows={rows} columns={columns} deleteEndpoint="/api/orders/delete" />
      </Suspense>
      </div>
    </div>
  )
}

export default page