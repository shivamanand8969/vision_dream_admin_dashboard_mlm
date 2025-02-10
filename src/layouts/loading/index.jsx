import { Box, CircularProgress } from "@mui/material";
import React from "react";
import Logo from "../../components/logo";
const Loading = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Logo />
      <CircularProgress />
    </Box>
  );
};
export default Loading;
