
import React, { useState } from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import {
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    MenuItem,
} from '@mui/material';
const DepositeRequest = ({ rowData }) => {
      
    const [openImageDialog, setOpenImageDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setOpenImageDialog(true);
    };

    const [openDialog, setOpenDialog] = useState(false);
    const [fundId, setFundId] = useState(null);
    const [status, setStatus] = useState(null);

    const columns = [
        {
            field: 's.no',
            width: 80,
            headerName: 'S.No.',
            filterable: false,
            renderCell: params => params.api.getAllRowIds().indexOf(params.id) + 1,
        },
         {
              field: 'profileimage',
              headerName: 'Profile Image',
              width: 100,
              renderCell: ({ row }) => {
                console.log("Row",row);
                 return <Avatar alt={row.name} src={row.profileimage}>
                    {row.profileimage ? '' : row.profileimage.charAt(0).toUpperCase()}
                  </Avatar>
              }
         },
        {
            field: 'userName',
            headerName: 'User Name',
            width: 200,
            editable: false,
            renderCell: ({ row }) => <Typography>{row.user.name}</Typography>,
        },
        {
            field: 'phone',
            headerName: 'Phone No.',
            width: 200,
            editable: false,
            renderCell: ({ row }) => <Typography>{row.user.phone}</Typography>,
        },
        {
            field: 'walletBalance',
            headerName: 'Wallet Balance',
            width: 200,
            editable: false,
            renderCell: ({ row }) => (
                <Typography>
                    <CurrencyRupeeIcon sx={{ fontSize: '14px' }} />
                    {row.user.walletBallance}
                </Typography>
            ),
        },
        {
            field: 'depositeBallance',
            headerName: 'Deposite Request Amount',
            width: 200,
            editable: false,
            renderCell: ({ row }) => (
                <Typography>
                    <CurrencyRupeeIcon sx={{ fontSize: '14px' }} />
                    {row.depositeBallance}
                </Typography>
            ),
        },
        {
            field: 'tnxid',
            headerName: 'Transaction Id',
            width: 200,
            editable: false,
            renderCell: ({ row }) => (
                <Typography>
                    {row.tnxid}
                </Typography>
            ),
        },
        {
            field: 'screenShot',
            headerName: 'Payment ScreenShot',
            width: 100,
            renderCell: ({ row }) => (
              <Avatar
              style={{
                 // Customize width for horizontal shape
                objectFit: 'cover', // Ensures the image fills the container without distortion
                borderRadius: 4, // Optional: gives the image rounded corners
              }}
              onClick={() => handleImageClick(row.screenShot)}

              alt={row.name} src={row.screenShot || ''}>
                  {row.screenShot ? '' : row.screenShot.charAt(0).toUpperCase()}
                </Avatar>
            ),
          },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            editable: false,
            renderCell: ({ row }) => (
                <Typography
                    sx={{
                        color:
                            row.status === 'Pending'
                                ? '#ddb60d'
                                : row.status === 'Approved'
                                    ? 'green'
                                    : row.status === 'Cancelled'
                                        ? 'red'
                                        : 'red',
                    }}
                >
                    {row.status}
                </Typography>
            ),
        },
        {
            field: 'update',
            headerName: 'Edit',
            width: 200,
            editable: false,
            renderCell: ({ row }) => (
                <ModeEditOutlineIcon
                    onClick={() => handleUpdateModel(row.id)}
                    sx={{ color: 'blue', cursor: 'pointer' }}
                />
            ),
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            width: 150,
            editable: false,
            renderCell: ({ row }) => (
                <Typography>{new Date(row.createdAt).toLocaleDateString()}</Typography>
            ),
        },
    ];


    const handleUpdateModel = fundId => {
        console.log(fundId);
        setFundId(fundId);
        setOpenDialog(true);
    };

    const handleUpdate = () => {
        if (fundId !== null) {

        }
    };

    const handleModelClose = () => {
        setOpenDialog(false);
        setFundId(null);
    };

    return (
        <>
            {rowData === null ? null : (
                <Box sx={{ height: '65vh', width: '100%' }}>
                    <DataGrid
                        getRowId={row => row.id}
                        rows={[...rowData]}
                        density="standard"
                        sx={{
                            boxShadow: 2,
                            padding: 3,
                            background: '#fff',
                            '& .MuiDataGrid-cell:hover': {
                                color: 'primary.main',
                            },
                        }}
                        autoHeight
                        columns={columns}
                        initialState={{
                            ...rowData.initialState,
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
                    />
                </Box>
            )}

            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogContent>
                    <DialogTitle>Update Status </DialogTitle>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-evenly"
                    >
                        <Grid item xs={12} sm={12}>
                            <TextField
                                select
                                label="Status"
                                name="status"
                                fullWidth
                                onChange={e => setStatus(e.target.value)}
                            >
                                {/* "Pending", "Approved", "Cancelled", "Expired" */}
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Approved">Approved</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button
                                onClick={handleUpdate}
                                sx={{ float: 'right' }}
                                color="success"
                                variant="contained"
                            >
                                Update
                            </Button>

                            <Button
                                sx={{ float: 'right', marginRight: '8px' }}
                                color="error"
                                variant="contained"
                                onClick={handleModelClose}
                            >
                                Close
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>

            <Dialog open={openImageDialog} onClose={() => setOpenImageDialog(false)} maxWidth="md">
                <DialogContent>
                    {selectedImage && (
                        <img src={selectedImage} alt="Full Screenshot" style={{ width: '50%', height: 'auto' }} />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DepositeRequest;



















