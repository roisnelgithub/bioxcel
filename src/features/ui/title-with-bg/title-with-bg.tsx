import React from "react";

import { Box } from "@mui/material";

import { colors } from "../../../const";

interface TitleWithBgProps {
  children: React.ReactElement;
}
const TitleWithBg = ({ children }: TitleWithBgProps) => {
  return <Box sx={{ bgcolor: colors.BG_BLUE_DARK, p: 2 }}>{children}</Box>;
};

export default TitleWithBg;
