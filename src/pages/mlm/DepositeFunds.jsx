import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Stack } from '@mui/material';
import FundList from '../../sections/userFunds/FundList';
import DepositeRequest from '../../sections/userFunds/DepositeRequest';

export default function DepositeFunds() {

  const depositeRequestList = [
  { id: 1, user:{name:"shivam anand",email:"shivamanand8969@gmailc.com",phone:"8969171781",walletBallance:'300'},  depositeBallance:432, tnxid:"54312256754", screenShot:"https://storage.googleapis.com/support-forums-api/attachment/thread-220218981-8705707519530580822.jpg", profileimage:"https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw", status: 'Approved', createdAt: '09/02/2024' },
  { id: 12, user:{name:"Mukesh Kumar",email:"mukeshkumar@gmail.com",phone:"763167323888",walletBallance:'500'},  depositeBallance:642,  tnxid:"424567775432", screenShot:"https://storage.googleapis.com/support-forums-api/attachment/thread-220218981-8705707519530580822.jpg", profileimage:"https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw", status: 'Planning', createdAt: '09/02/2024' }
  ]
  
  return (
    <>
      <Helmet>
        <title> Fund Deposite  | VISION DREAM </title>
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
          <Typography variant="h4">User Deposite Request</Typography>
        </Stack>
        {depositeRequestList !== null ? <DepositeRequest rowData={depositeRequestList} /> : null}
      </Container>
    </>
  );
}
