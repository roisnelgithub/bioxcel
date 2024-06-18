import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../../const";

const options = ["Privacy Policy", "Disclaimer", "Contact Us", "Site Map"];
const FooterMenu = () => {
  const min768 = useMediaQuery("(min-width:768px)");
  const min1024 = useMediaQuery("(min-width:1024px)");

  return (
    <Box sx={{ my: min768 ? 0 : 2 }}>
      <Stack spacing={2} direction={min768 ? "row" : "column"}>
        {options.map((option) => {
          return (
            <Box
              component="a"
              key={option}
              sx={{ ":hover": { cursor: "pointer" } }}
            >
              <Typography
                sx={{ color: colors.WHITE, fontSize: min1024 ? 18 : 15 }}
              >
                {option}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default FooterMenu;
