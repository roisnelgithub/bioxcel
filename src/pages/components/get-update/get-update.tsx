import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../../const";

const GetUpdate = () => {
  const min400 = useMediaQuery("(min-width:400px)");
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", pt: min400 ? 4 : 1 }}
    >
      <Box sx={{ px: 6, py: 4, maxWidth: "410px" }}>
        <Stack justifyContent="center" alignItems="center" spacing={1}>
          <Typography
            sx={{
              fontFamily: "Black Han Sans",
              fontSize: 23,
              color: colors.TEXT_BLUE,
            }}
          >
            GET UPDATE
          </Typography>
          <Stack spacing={3} justifyContent="center" alignItems="center">
            <Typography textAlign="center" sx={{ color: colors.TEXT_BLUE }}>
              Sign up for the latest evidence, information and resources on
              de-escalation and intervention approaches.
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: colors.TEXT_BLUE,
                bgcolor: colors.YELLOW,
                ":hover": { backgroundColor: colors.YELLOW },
              }}
            >
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default GetUpdate;
