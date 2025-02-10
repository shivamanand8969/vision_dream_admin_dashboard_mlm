import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { Container, Typography, Stack } from "@mui/material";
import List from "../../sections/kyc/List";

export default function Kyc() {

  const staticRowData = [
    {
      id: 1,
      user: {
        profileImage: [{ path: 'https://i.pinimg.com/originals/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg' }],
        name: 'John Doe',
        phone: '+1234567890',
        email: 'john.doe@example.com',
      },
      isKycVerified: true,
      kycDocuments: [
        { path: 'https://www.medianama.com/wp-content/uploads/2023/03/aadhaar-card-7579588_1280.png' },
        { path: 'https://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2023/03/27/130488-fake-pan-card.jpg' },
      ],
      bankDetails: JSON.stringify({
        name: 'John Doe',
        accountNumber: '1234567890',
        ifsc: 'ABCD1234',
        bankName: 'Bank XYZ',
      }),
      createdAt: '2025-02-01T12:34:56Z',
    },
    {
      id: 2,
      user: {
        profileImage: [{ path: 'https://i.pinimg.com/originals/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg' }],
        name: 'Jane Smith',
        phone: '+0987654321',
        email: 'jane.smith@example.com',
      },
      isKycVerified: false,
      kycDocuments: [
        { path: 'https://www.medianama.com/wp-content/uploads/2023/03/aadhaar-card-7579588_1280.png' },
        { path: 'https://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2023/03/27/130488-fake-pan-card.jpg' },
      ],
      bankDetails: JSON.stringify({
        name: 'Jane Smith',
        accountNumber: '9876543210',
        ifsc: 'XYZD4321',
        bankName: 'Bank ABC',
      }),
      createdAt: '2025-02-02T14:22:11Z',
    },
    {
      id: 3,
      user: {
        profileImage: [{ path: 'https://i.pinimg.com/originals/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg' }],
        name: 'Mark Wilson',
        phone: '+1122334455',
        email: 'mark.wilson@example.com',
      },
      isKycVerified: false,
      kycDocuments: [
        { path: 'https://www.medianama.com/wp-content/uploads/2023/03/aadhaar-card-7579588_1280.png' },
        { path: 'https://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2023/03/27/130488-fake-pan-card.jpg' },
      ],
      bankDetails: JSON.stringify({
        name: 'Mark Wilson',
        accountNumber: '1122334455',
        ifsc: 'LMNO5678',
        bankName: 'Bank DEF',
      }),
      createdAt: '2025-02-03T16:45:33Z',
    },
  ];

  return (
    <>
      <Helmet>
        <title> KYC | VISION DREAM </title>
      </Helmet>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginY={2}
          sx={{
            boxShadow: "2px",
          }}
        >
          <Typography variant="h4">KYC</Typography>
        </Stack>
        {staticRowData !== null ? <List rowData={staticRowData} /> : null}
      </Container>
    </>
  );
}
