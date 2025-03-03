'use client';
import * as React from 'react';
import { useState } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Edit, Eye, Trash2 } from 'lucide-react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

interface Rows {
    id: number;
    categoryName?: string;
    productName?: string;
    category?: string;
    image?: string;
    sliderTitle?: string;
    status?: string;
    slug?: string;
    clientName?: string;
    caption?: string;
    title?: string;
    brandName?: string;
    orderRef?: string;
    invoiceTotal?: number;
    dateAdded: string;
}
interface TableProps {
  title: string;
  rows: Rows[];
  columns: GridColDef[];
  editRoute?: string;
  deleteEndpoint: string;
}

const Table: React.FC<TableProps> = ({ title, rows, columns, editRoute,deleteEndpoint }) => {
  const router = useRouter();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const searchParams = useSearchParams() //search for available pvid
  const pvid = searchParams.get("pvid"); //now we use this pvid just below

  const handleEdit = (id: number) => {
    if(editRoute === `/admin/products/add?id=${id}` || pvid !== null){
      router.push(`${editRoute}&pvid=${id}`);
    }else{
      router.push(`${editRoute}?id=${id}`);
    }
  };

  const handleBulkDeletion = () => {
    if (selectedRows.length === 0) {
      alert('No item selected');
      return;
    }
    if (confirm(`Are you sure you want to delete ${selectedRows.length} items?`)) {
      console.log(`Deleted items to the endpoint ${deleteEndpoint}: ${selectedRows.join(', ')}`);
      setSelectedRows([]);
    }
  };

  return (
    <>
      <div className="text-xl text-red-600 font-bold mb-4">{title}</div>

      <Box sx={{ height: 'auto', width: '100%',overflowX: 'auto',maxWidth: '100vw', zIndex: 1}}>
        {selectedRows.length > 0 && (
          <Button
            variant="contained"
            color="error"
            onClick={handleBulkDeletion}
            startIcon={<Trash2 />}
            sx={{ mb: 2 }}
          >
            Delete Selected ({selectedRows.length})
          </Button>
        )}
        <div style={{ width: 'max-content', minWidth: '100%' }}>
        {editRoute ? (
          <DataGrid
          rows={rows}
          columns={[
            ...columns,
            {
              field: 'actions',
              headerName: 'Actions',
              width: 100,
              sortable: false,
              renderCell: (params) => (
                <IconButton title="Edit" onClick={() => handleEdit(params.row.id)} color="primary">
                  <Edit />
                </IconButton>
              ),
            },
          ]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(newSelection: GridRowSelectionModel) => {
            setSelectedRows(newSelection as number[]);
          }}
        />
        ):(
          <DataGrid
          rows={rows}
          columns={[
            ...columns,
            {
              field: 'actions',
              headerName: 'Actions',
              width: 80,
              sortable: false,
              renderCell: () => (
                <div title='view order details'  className='text-secondary py-3 cursor-pointer'>
                  <Eye />
                </div>
              ),
            },
          ]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(newSelection: GridRowSelectionModel) => {
            setSelectedRows(newSelection as number[]);
          }}
        />
        )
        }
        </div>
      </Box>
    </>
  );
};

export default Table;
