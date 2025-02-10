import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Stack } from '@mui/material';
import FundList from '../../sections/userFunds/FundList';

export default function UsersFunds() {

  const fundslist = [
  { id: 1, user:{name:"shivam anand",email:"shivamanand8969@gmailc.com",phone:"8969171781",walletBallance:'300'},  withdraw_fund:432, status: 'Approved', createdAt: '09/02/2024' },
  { id: 12, user:{name:"Mukesh Kumar",email:"mukeshkumar@gmail.com",phone:"763167323888",walletBallance:'500'},  withdraw_fund:642, status: 'Planning', createdAt: '09/02/2024' }
  ]
  
  return (
    <>
      <Helmet>
        <title> Users Funds | VISION DREAM </title>
      </Helmet>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginY={2}
          sx={{
            boxShadow: '2px',
          }}
        >
          <Typography variant="h4">User Funds Request</Typography>
        </Stack>
        {fundslist !== null ? <FundList rowData={fundslist} /> : null}
      </Container>
    </>
  );
}
