import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Avatar, Box, Typography, Container, Stack } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function OnlineTxns() {
  const staticData = [
    {
      id: 1,
      User: {
        name: 'John Doe',
        memberId: 'JD123',
        phone: '9876543210',
        email: 'john@example.com',
      },
      totalAmount: '$500',
      transactiontype:'deposite',
      status: 'Completed',
      createdAt: '2024-02-10',
    },
    {
      id: 2,
      User: {
        name: 'Jane Smith',
        memberId: 'JS456',
        phone: '9876543211',
        email: 'jane@example.com',
      },
      totalAmount: '$750',
      transactiontype:'widthraw',
      status: 'Pending',
      createdAt: '2024-02-09',
    },
  ];

  const columns = [
    {
      field: 's.no',
      width: 80,
      headerName: 'S.No.',
      filterable: false,
      renderCell: params => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    { field: 'name', headerName: 'Name', width: 200, renderCell: ({ row }) => <Typography>{row.User.name}</Typography> },
    { field: 'userid', headerName: 'User Id', width: 200, renderCell: ({ row }) => <Typography>{row.User.memberId}</Typography> },
    { field: 'phone', headerName: 'Phone', width: 200, renderCell: ({ row }) => <Typography>{row.User.phone}</Typography> },
    { field: 'email', headerName: 'Email', width: 300, renderCell: ({ row }) => <Typography>{row.User.email}</Typography> },
    { field: 'tran_amount', headerName: 'Transfer Amount', width: 200, renderCell: ({ row }) => <Typography>{row.totalAmount}</Typography> },
    { field: 'transactiontype', headerName: 'Transfer Type', width: 200, renderCell: ({ row }) => <Typography>{row.transactiontype}</Typography> },
    { field: 'status', headerName: 'Status', width: 150, renderCell: ({ row }) => <Typography>{row.status}</Typography> },
    {
      field: 'imageURL',
      headerName: 'Payment Screenshot',
      width: 150,
      renderCell: () => (
        <Avatar
          alt="Payment Screenshot"
          style={{ mixBlendMode: 'color-burn' }}
          src="https://i.pinimg.com/originals/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg"
        />
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 200,
      renderCell: ({ row }) => <Typography>{new Date(row.createdAt).toLocaleDateString()}</Typography>,
    },
  ];

  return (
    <>
      <Helmet>
        <title> Transactions | VISION DREAM </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" marginY={2} sx={{ boxShadow: '2px' }}>
          <Typography variant="h4">Online Transactions</Typography>
        </Stack>
        <Box sx={{ height: '65vh', width: '100%' }}>
          <DataGrid
            getRowId={row => row.id}
            rows={staticData}
            density="standard"
            sx={{
              boxShadow: 2,
              padding: 3,
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
            autoHeight
            columns={columns}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[5, 10, 20, 30, 50]}
            slots={{ toolbar: GridToolbar }}
            slotProps={{ toolbar: { showQuickFilter: true } }}
            disableSelectionOnClick
          />
        </Box>
      </Container>
    </>
  );
}
