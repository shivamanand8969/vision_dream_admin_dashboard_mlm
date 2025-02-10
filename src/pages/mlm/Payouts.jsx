import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Payouts = () => {
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      Sender: {
        name: 'John Doe',
        phone: '9876543210',
        createdId: 'SP001',
      },
      Receiver: {
        name: 'Jane Smith',
        phone: '9876543211',
        id: 'M002',
      },
      transaction_amount: 1000,
      updatedAt: '2025-01-01T10:00:00Z',
    },
    {
      id: 2,
      Sender: {
        name: 'Alice Brown',
        phone: '9876543212',
        createdId: 'SP002',
      },
      Receiver: {
        name: 'Bob White',
        phone: '9876543213',
        id: 'M003',
      },
      transaction_amount: 1500,
      updatedAt: '2025-01-02T14:30:00Z',
    },
    // Add more static rows as needed
  ]);

  const columns = [
    {
      field: 's.no',
      width: 80,
      headerName: 'S.No.',
      filterable: false,
      renderCell: params => params.api.getAllRowIds().indexOf(params.id) + 1,
    },

    {
      field: 'Sender.name',
      headerName: 'Sender Name',
      width: 200,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.Sender.name}</Typography>,
    },
    {
      field: 'Sender.phone',
      headerName: 'Sender Phone',
      width: 200,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.Sender.phone}</Typography>,
    },
    {
      field: 'Sender.createdId',
      headerName: 'Sender Id',
      width: 200,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.Sender.createdId}</Typography>,
    },

    {
      field: 'Receiver.name',
      headerName: 'Receiver Name',
      width: 200,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.Receiver.name}</Typography>,
    },
    {
      field: 'Receiver.phone',
      headerName: 'Receiver Phone',
      width: 200,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.Receiver.phone}</Typography>,
    },
    {
      field: 'Receiver.id',
      headerName: 'Receiver Id',
      width: 200,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.Receiver.id}</Typography>,
    },

    {
      field: 'transaction_amount',
      headerName: 'Transaction Amount',
      width: 100,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.transaction_amount}</Typography>,
    },
    {
      field: 'updatedAt',
      headerName: 'Transaction Date',
      width: 150,
      editable: false,
      renderCell: ({ row }) => (
        <Typography>{new Date(row.updatedAt).toLocaleDateString()}</Typography>
      ),
    },
  ];

  return (
    <Container>
      <Box sx={{ height: '65vh', width: '100%' }}>
        <DataGrid
          rows={usersList}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          slots={{ toolbar: GridToolbar }}
          autoHeight
        />
      </Box>
    </Container>
  );
};

export default Payouts;
