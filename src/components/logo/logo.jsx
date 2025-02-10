import PropTypes from "prop-types";
import { forwardRef } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { RouterLink } from "../../routes/components";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 160,
        height: "auto",
        display: "inline-flex",
        objectFit: "contain",
        ...sx,
      }}
      {...other}
    >
      <img src="/logo.png" alt="logo" />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
