import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import AppWidgetSummary from '../app-widget-summary';

import FundList from '../../userFunds/FundList';

export default function AppView() {

  const staticRowData = [
    { id: 1, user:{name:"shivam anand",email:"shivamanand8969@gmailc.com",phone:"8969171781",walletBallance:'300'},  withdraw_fund:432, status: 'Approved', createdAt: '09/02/2024' },
    { id: 12, user:{name:"Mukesh Kumar",email:"mukeshkumar@gmail.com",phone:"763167323888",walletBallance:'500'},  withdraw_fund:642, status: 'Planning', createdAt: '09/02/2024' }
    ]


  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ my: 3, color: "#e39f00" }}>
        Hello VISION DREAM Admin, Welcome back 👋
      </Typography>
       
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Users"
            total={ 0}
            color="info"
            type="number"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />
            }
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Active Users"
            total={ 0}
            color="info"
            type="number"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />
            }
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Income"
            total={
               0
            }
            type="rupee"
            color="info"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />
            }
          />
        </Grid>
      
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              my: 3,
              color: "#e39f00",
              textAlign: 'center',
            }}
          >
            Today Fund Request
          </Typography>
          <FundList rowData={staticRowData} />
        </Grid>
      </Grid>
    </Container>
  );
}
