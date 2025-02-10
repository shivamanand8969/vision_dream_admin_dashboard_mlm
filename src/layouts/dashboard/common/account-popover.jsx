import { useState } from "react";
import { useRouter } from "../../../routes/hooks";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import { alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";
// ---------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    path: "/",
  }
];

// -------------------------------------

export default function AccountPopover() {
  const router = useRouter();
  const userInfo  = localStorage.getItem('userInfo');
  const [open, setOpen] = useState(null);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("userInfo"); 
    router.push("/login");
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.primary.main, 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        {userInfo?.profileImage === null ? (
          <Avatar
            alt={userInfo.name}
            sx={{
              width: 36,
              height: 36,
              border: (theme) =>
                `solid 2px ${theme.palette.background.default}`,
            }}
          >
            {userInfo.name.charAt(0).toUpperCase()}
          </Avatar>
        ) : (
          <Avatar
            alt={"Vision Dream Admin"}
            key={"alt"}
            sx={{
              width: 36,
              height: 36,
              border: (theme) =>
                `solid 2px ${theme.palette.background.default}`,
            }}
            src={`
            }`}
          >A</Avatar>
        )}
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {/* {userInfo?.name} */}
            VISION DREAM ADMIN
          </Typography>
          <Typography variant="body2" noWrap>
            {userInfo?.phone}
          </Typography>
          {/* <Typography variant="body2" noWrap>
            {userInfo?.email}
          </Typography> */}
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {MENU_OPTIONS.map((option, index) => (
          <Link to={option.path} key={(index + 1).toString()}>
            <MenuItem onClick={handleClose}>{option.label}</MenuItem>
          </Link>
        ))}

        <Divider sx={{ borderStyle: "dashed", m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleLogout}
          sx={{ typography: "body2", color: "error.main", py: 1.5 }}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
