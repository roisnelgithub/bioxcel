import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../../const";
import { options } from "./const";

interface HeaderMenuProps {
  fontSize?: number;
}
const HeaderMenu = ({ fontSize }: HeaderMenuProps) => {
  const min768 = useMediaQuery("(min-width:768px)");
  return (
    <Stack
      direction="row"
      spacing={min768 ? 2 : 1}
      sx={{ color: colors.WHITE, maxWidth: "380px" }}
      alignItems="center"
      justifyContent="center"
    >
      {options.map((option) => {
        return (
          <Box
            key={option.id}
            sx={{
              borderBottom: `1px solid ${colors.BG_BLUE_DARK}`,
              ":hover": {
                borderBottom: `1px solid ${colors.YELLOW}`,
                cursor: "pointer",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: fontSize,
                textAlign: "center",
                height: 40,
                ":hover": {
                  color: colors.YELLOW,
                },
              }}
            >
              {option.text}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};

export default HeaderMenu;
