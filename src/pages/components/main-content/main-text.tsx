import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../../const";
import { BigText } from "../../../features";
import { thermometer } from "./assets";
import CommentText from "./comment-text";

const MainText = () => {
  const min320 = useMediaQuery("(min-width:320px)");
  const min550 = useMediaQuery("(min-width:550px)");
  const min768 = useMediaQuery("(min-width:768px)");
  const min1024 = useMediaQuery("(min-width:1024px)");

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        maxWidth: min768 ? "1000px" : min550 ? "80%" : min320 ? "100%" : "80%",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap={min320 ? 1 : 0}
        sx={{ px: min320 ? 4 : 1 }}
      >
        <Box
          component="article"
          gridColumn="span 1"
          sx={{ display: "grid", placeItems: "center" }}
        >
          <Box
            component="img"
            src={thermometer}
            alt="Thermometer"
            sx={{
              p: min320 ? 1 : 0,
              height: min768 ? "364px" : "264px",
            }}
          />
        </Box>

        <Box component="article" gridColumn="span 2">
          <Stack
            sx={{ mt: min768 ? "50px" : "0px", p: 1, color: colors.WHITE }}
          >
            <Stack justifyContent="center">
              <Typography
                sx={{
                  fontSize: min320 ? 12 : min768 ? 14 : 16,
                  mb: min768 ? 0.5 : 1,
                }}
              >
                In patients with bipolar disorder or schizophrenia,
              </Typography>
              <BigText
                text="INTERVENE BEFORE"
                size={min1024 ? 38 : min768 ? 28 : min550 ? 19 : 15}
              />
              <Stack direction="row" flexWrap="wrap" gap={1}>
                <BigText
                  text="AGITATION"
                  size={min1024 ? 52 : min768 ? 38 : min550 ? 36 : 30}
                  neon={true}
                />
                <BigText
                  text="REACHES"
                  size={min1024 ? 52 : min768 ? 38 : min550 ? 36 : 30}
                />
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                <Box sx={{ pt: 0.5 }}>
                  <BigText
                    text="ITS"
                    size={min1024 ? 35 : min768 ? 25 : min550 ? 16 : 12}
                  />
                </Box>
                <BigText
                  text="BOILING "
                  size={min1024 ? 65 : min768 ? 46 : min550 ? 36 : 31}
                  neon
                />
                <BigText
                  text="POINT"
                  size={min1024 ? 65 : min768 ? 46 : min550 ? 36 : 31}
                  neon
                />
              </Stack>
            </Stack>
            {min768 && (
              <Stack sx={{ mt: "18px" }}>
                <CommentText />
              </Stack>
            )}
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default MainText;
