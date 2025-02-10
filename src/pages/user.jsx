import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Avatar, Typography, Tooltip, Container, Stack, Button, Dialog, DialogTitle, DialogContent, FormControl, Select, MenuItem } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { toast } from 'react-toastify';

export default function User() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [status, setStatus] = useState(null);

  const usersList = [
    {
      id: 1,
      name: 'John Doe',
      profileImage: null,
      sponcerId: 'SP001',
      memberId: 'M001',
      phone: '9876543210',
      email: "shivamanand804@gmail.com",
      accountno: '135322353',
      accountName: "Bank Of India",
      addharImage: "www.google.ocm",
      ifscCode: "1345532222233455",
      showPassword: 'password123',
      isActive: true,
      createdAt: '2024-02-01T12:00:00Z',
    },
    {
      id: 1,
      name: 'John Doe',
      profileImage: null,
      sponcerId: 'SP001',
      memberId: 'M001',
      phone: '9876543210',
      email: "shivamanand804@gmail.com",
      accountno: '135322353',
      accountName: "Bank Of India",
      addharImage: "www.google.ocm",
      ifscCode: "1345532222233455",
      showPassword: 'password123',
      isActive: true,
      createdAt: '2024-02-01T12:00:00Z',
    },
    {
      id: 1,
      name: 'John Doe',
      profileImage: null,
      sponcerId: 'SP001',
      memberId: 'M001',
      phone: '9876543210',
      email: "shivamanand804@gmail.com",
      accountno: '135322353',
      accountName: "Bank Of India",
      addharImage: "www.google.ocm",
      ifscCode: "1345532222233455",
      showPassword: 'password123',
      isActive: true,
      createdAt: '2024-02-01T12:00:00Z',
    },
    {
      id: 1,
      name: 'John Doe',
      profileImage: "https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.jpg?s=612x612&w=0&k=20&c=yGHZLPu6UWwoj2wazbbepxmjl29MS1Hr2jV3N0FzjyI=",
      sponcerId: 'SP001',
      memberId: 'M001',
      phone: '9876543210',
      email: "shivamanand804@gmail.com",
      accountno: '135322353',
      accountName: "Bank Of India",
      addharImage: "https://www.medianama.com/wp-content/uploads/2023/03/aadhaar-card-7579588_1280.png",
      ifscCode: "1345532222233455",
      showPassword: 'password123',
      isActive: true,
      createdAt: '2024-02-01T12:00:00Z',
    }
  ];

  const columns = [
    { field: 'id', headerName: 'S.No.', width: 80 },
    {
      field: 'imageURL',
      headerName: 'Profile Image',
      width: 100,
      renderCell: ({ row }) => (
        <Avatar alt={row.name} src={row.profileImage || ''}>
            {row.profileImage ? '' : row.name.charAt(0).toUpperCase()}
          </Avatar>
      ),
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'sponcerId', headerName: 'Sponcer ID', width: 200 },
    { field: 'memberId', headerName: 'Member ID', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'accountno', headerName: 'Account No.', width: 200 },
    { field: 'accountName', headerName: 'Account Name', width: 200 },
    { field: 'ifscCode', headerName: 'IFSC Code', width: 200 },
    { field: 'showPassword', headerName: 'Password', width: 150 },
    {
      field: 'addharImage',
      headerName: 'Aadhar Image',
      width: 100,
      renderCell: ({ row }) => (
        <Avatar
        style={{
          width: 80,  // Customize width for horizontal shape
          height: 50, // Customize height for horizontal shape
          objectFit: 'cover', // Ensures the image fills the container without distortion
          borderRadius: 4, // Optional: gives the image rounded corners
        }}

        alt={row.name} src={row.addharImage || ''}>
            {row.addharImage ? '' : row.addharImage.charAt(0).toUpperCase()}
          </Avatar>
      ),
    },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 100,
      renderCell: ({ row }) => (
        <Button
          onClick={() => handleStatusClick(row)}
          style={{ color: row.isActive ? 'green' : 'red' }}
        >
          {row.isActive ? 'Active' : 'Inactive'}
        </Button>
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 100,
      renderCell: ({ row }) => <Typography>{new Date(row.createdAt).toLocaleDateString()}</Typography>,
    },
  ];

  const handleStatusClick = (user) => {
    setSelectedUser(user);
    setStatus(user.isActive);
    setOpenDialog(true);
  };

  const handleStatusUpdate = () => {
    const updatedUser = { ...selectedUser, isActive: status };
    toast.success('User status updated');
    setOpenDialog(false);
  };

  return (
    <>
      <Helmet>
        <title> Users | VISION DREAM </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" marginY={2}>
          <Typography variant="h4">Users List</Typography>
        </Stack>
        <Box sx={{ height: '65vh', width: '100%' }}>
          <DataGrid
            rows={usersList}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            slots={{ toolbar: GridToolbar }}
            autoHeight
          />
        </Box>

        {/* Dialog to Update Status */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Update User Status</DialogTitle>
          <DialogContent>
            <Typography variant="h6">{selectedUser?.name}</Typography>
            <FormControl fullWidth margin="normal">
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                displayEmpty
                fullWidth
              >
                <MenuItem value={true}>Active</MenuItem>
                <MenuItem value={false}>Inactive</MenuItem>
              </Select>
            </FormControl>
            <Button fullWidth variant="contained" color="primary" onClick={handleStatusUpdate}>
              Update Status
            </Button>
          </DialogContent>
        </Dialog>
      </Container>
    </>
  );
}
