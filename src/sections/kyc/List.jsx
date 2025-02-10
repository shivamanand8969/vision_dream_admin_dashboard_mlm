import React, { useState } from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
  CardContent,
  CardMedia,
  Card,
  Box,
  Avatar,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';
const List = ({ rowData }) => {
  const [open, setOPen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [bankDetails, setbankDetails] = useState(null);
  const columns = [
    {
      field: 's.no',
      width: 80,
      headerName: 'S.No.',
      filterable: false,
      renderCell: params => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    {
      field: 'imageURL',
      headerName: '',
      width: 150,
      editable: false,
      renderCell: ({ row }) => (
        <Avatar
          alt={row.user.profileImage !== null && row.user.profileImage[0].path}
          style={{ mixBlendMode: 'color-burn' }}
          src={`${
            row.user.profileImage !== null &&
            row.user.profileImage.length &&
            row.user.profileImage[0].path
          }`}
        />
      ),
    },
    {
      field: 'name',
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
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: false,
      renderCell: ({ row }) => <Typography>{row.user.email}</Typography>,
    },
    {
      field: 'isKycVerified',
      headerName: 'Status',
      width: 200,
      editable: false,
      renderCell: ({ row }) => (
        <Typography variant="body2">
          <span
            style={{
              color: row.isKycVerified ? 'green' : 'red',
              marginLeft: '3px',
            }}
          >
            {row.isKycVerified ? 'Verified' : 'Not Verified'}
          </span>
        </Typography>
      ),
    },
    {
      field: 'kyc Details',
      headerName: 'kyc Details',
      width: 200,
      editable: false,
      renderCell: ({ row }) => (
        <Typography onClick={() => handleProfile(row)}>
          {'kyc Details'}
        </Typography>
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 150,
      editable: false,
      renderCell: ({ row }) => (
        <Typography>{new Date(row?.createdAt).toLocaleDateString()}</Typography>
      ),
    },
  ];

  const handleProfile = data => {
    setProfileData(data);
    setbankDetails(JSON.parse(data?.bankDetails));
    setOPen(true);
  };

  const closeDialog = () => {
    setProfileData(null);
    setOPen(false);
  };

  const handleApproveKyc = id => {
   
  };
  const handleRejectKyc = id => {
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
            experimentalFeatures={{ newEditingApi: false }}
          />
        </Box>
      )}
      <Dialog open={open} onClose={closeDialog} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" textAlign={'center'}>
            User Kyc Details
          </Typography>
          <IconButton onClick={closeDialog} sx={{ float: 'right' }}>
            <Close sx={{ color: 'red' }} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {profileData !== null ? (
            <Box marginTop={6}>
              <Grid container>
                <Grid item xs={12} sm={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection={'row'}
                  >
                    <Box>
                      <Box
                        component="img"
                        src={
                          profileData?.user.profileImage
                            ? `${profileData?.user.profileImage[0]?.path}`
                            : '/assets/images/user.png'
                        }
                        alt="Profile"
                        sx={{
                          height: 80,
                          width: 80,
                          borderRadius: '50%',
                          border: '1px solid white',
                          boxShadow: 1,
                          objectFit: 'cover',
                        }}
                      />
                      <Typography
                        sx={{
                          color: profileData.isKycVerified ? 'green' : 'red',
                          textAlign: 'center',
                        }}
                      >
                        {profileData.isKycVerified
                          ? 'Verified'
                          : 'Not Verified'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  User Name:
                  <Typography variant="body2" sx={{ color: 'primary.main' }}>
                    {profileData?.user.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  User Email:
                  <Typography variant="body2" sx={{ color: 'primary.main' }}>
                    {profileData?.user.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  User Phone:
                  <Typography variant="body2" sx={{ color: 'primary.main' }}>
                    {profileData?.user.phone}
                  </Typography>
                </Grid>
              </Grid>
              <Box>
                <Box
                  sx={{
                    backgroundColor: theme => `${theme.palette.common.white}`,
                    marginY: 3,
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      Pan No
                      <Typography sx={{ color: 'primary.main' }}>
                        {bankDetails?.panNo}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    {profileData?.kycDocuments?.map((image, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Card
                          sx={{
                            color: 'primary.main',
                            borderColor: theme => `${theme.palette.grey[100]}`,
                            border: 1,
                            marginY: 1,
                            borderRadius: 1,
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                width: '100%',
                                height: 120,
                                border: 1,
                                borderStyle: 'dashed',
                                borderColor: theme =>
                                  `${theme.palette.primary.main}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 1,
                                cursor: 'pointer',
                              }}
                            >
                              {image ? (
                                <CardMedia
                                  component="img"
                                  src={
                                    image?.path
                                      ? `${image?.path}`
                                      : URL.createObjectURL(image)
                                  }
                                  alt={`UploadedImage ${index + 1}`}
                                  sx={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 1,
                                  }}
                                />
                              ) : (
                                <Typography color="text.Secondary">
                                  Upload Image
                                </Typography>
                              )}
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography
                    variant="h6"
                    sx={{ color: 'primary.main', marginY: 1 }}
                  >
                    Bank Information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      Account Holder Name:
                      <Typography sx={{ color: 'primary.main' }}>
                        {bankDetails?.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      Account Number
                      <Typography sx={{ color: 'primary.main' }}>
                        {bankDetails?.accountNumber}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      IFSC Code
                      <Typography sx={{ color: 'primary.main' }}>
                        {bankDetails?.ifsc}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                      Bank Name
                      <Typography sx={{ color: 'primary.main' }}>
                        {bankDetails?.bankName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                      onClick={() => handleApproveKyc(profileData.id)}
                      color="success"
                      variant="contained"
                      sx={{ marginRight: '6px' }}
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleRejectKyc(profileData.id)}
                      color="error"
                      variant="contained"
                    >
                      Reject
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default List;
