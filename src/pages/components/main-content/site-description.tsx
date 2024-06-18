import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../../const";
import { TitleWithBg } from "../../../features";

const descriptionSite =
  "THIS WEBSITE CONTAINS INFORMATION INTENDED FOR US HEALTHCARE PROFESSIONALS ONLY.";
const SiteDescription = () => {
  const min768 = useMediaQuery("(min-width:768px)");

  return (
    <Stack
      justifyContent="center"
      alignItems={min768 ? "end" : "center"}
      sx={{ width: "100%" }}
    >
      {min768 ? (
        <Stack alignItems="end" sx={{ mr: min768 ? 4 : 0, mt: 2 }}>
          <Box justifyContent="end">
            <Typography
              component="span"
              sx={{
                fontSize: 11,
                color: colors.WHITE,
                textAlign: "end",
                bgcolor: colors.BG_BLUE_GREY,
                borderRadius: "30px",
                py: 0.8,
                px: 4,
                mt: 2,
              }}
            >
              {descriptionSite}
            </Typography>
          </Box>
        </Stack>
      ) : (
        <Stack sx={{ width: "80%", mt: "16px", maxWidth: "500px" }}>
          <TitleWithBg>
            <Typography
              sx={{
                color: colors.WHITE,
                fontSize: 12,
                textAlign: "center",
              }}
            >
              {descriptionSite}
            </Typography>
          </TitleWithBg>
        </Stack>
      )}
    </Stack>
  );
};

export default SiteDescription;
