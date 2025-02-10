import React from 'react';

import {
  Typography,
  Box,
  Button,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  Avatar,
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Close } from '@mui/icons-material';

export default function List({ data }) {
  const columns = [
    {
      field: 's.no',
      width: 80,
      headerName: 'S.No.',
      filterable: false,
      renderCell: params => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.name}</Typography>,
    },
    {
      field: 'categoryImg',
      headerName: 'Image',
      width: 150,
      editable: false,
      renderCell: ({ row }) => (
        <Avatar
          alt={row.imageUrl}
          style={{ mixBlendMode: 'color-burn' }}
          src={`https://tozorestapi.bloomitsolutions.in/${row.imageUrl}`}
        />
      ),
    },
    {
      field: 'position',
      headerName: 'Position',
      width: 150,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.position}</Typography>,
    },
    {
      field: 'discription',
      headerName: 'Discription',
      width: 100,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.description}</Typography>,
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      editable: false,
      renderCell: ({ row }) => (
        <>
          {/* <Button variant="outlined"
                // onClick={() => dispatch(deletePlan(row.id))}
                >
                Edit
                </Button> */}
          <Button
            variant="outlined"
            // onClick={() => dispatch(deletePlan(row.id))}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      {data === null ? null : (
        <Box sx={{ height: '65vh', width: '100%' }}>
          <DataGrid
            getRowId={row => row.id}
            rows={[...data]}
            density="standard"
            sx={{
              boxShadow: 2,
              padding: 3,
              background: '#ffffff',
              borderRadius: '0 0 6px 6px',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
            autoHeight
            columns={columns}
            initialState={{
              ...data.initialState,
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[5, 10, 20, 30, 40, 50, 75, 100]}
            slots={{
              toolbar: GridToolbar,
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: false }}
          />

          {/* <Dialog open={open} onClose={closeDialog}>
              <DialogTitle>
                Features{" "}
                <IconButton onClick={closeDialog}>
                  <Close color="red" />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Box>
                  {data
                    .filter((item) => item.id === selectedId)
                    .map((obj, index) => (
                      <div key={index}>
                        {Object.entries(obj).map(([key, value]) => (
                          <div key={key}>
                            <span>{key}: </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                </Box>
              </DialogContent>
            </Dialog> */}
        </Box>
      )}
    </>
  );
}
