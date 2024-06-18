import { Box } from "@mui/material";

import logo from "./assets/bioxcel-logo.png";

interface LogoProps {
  width?: number;
}
const Logo = ({ width = 120 }: LogoProps) => {
  return (
    <Box
      component="img"
      src={logo}
      alt="BioXel logo"
      sx={{ width: width }}
    ></Box>
  );
};

export default Logo;
