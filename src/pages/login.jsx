import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Card, Stack, TextField, Typography, IconButton, Button, CircularProgress, InputAdornment } from "@mui/material";
import { useRouter } from "../routes/hooks";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/logo";
import Iconify from "../components/iconify";

export default function LoginPage() {
  const theme = useTheme();
  const location = useLocation();
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const userInfo = {
      id: 1,
      name: "Vision Dream",
      phone: "8969171781",
      email: "visiondream@gmail.com",
      isActive: true,
      createdAt: "2024-06-07T05:13:38.000Z",
      updatedAt: "2025-02-06T11:23:38.000Z",
    };

    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    router.push("/");
  };

  return (
    <>
      <Helmet>
        <title>Login | Vision Dream</title>
      </Helmet>
      <Box sx={{ height: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card sx={{ p: 5, maxWidth: 400, textAlign: "center" }}>
          <Logo />
          <Typography variant="h4" sx={{ color: theme.palette.primary.main, mb: 3 }}>Sign in to Vision Dream</Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button type="submit" variant="contained" fullWidth disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Login"}
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </>
  );
}
