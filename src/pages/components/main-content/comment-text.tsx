import { Stack, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../../const";

const CommentText = () => {
  const min768 = useMediaQuery("(min-width:768px)");
  const min1024 = useMediaQuery("(min-width:1024px)");
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
      <Stack
        sx={{
          width: min768 ? "100%" : "80%",
          bgcolor: min768 ? "transparent" : colors.BG_BLUE_DARK,
        }}
      >
        <Typography
          sx={{
            color: colors.WHITE,
            fontSize: min768 ? 18 : 13,
            textAlign: min768 ? "start" : "center",
            p: min768 ? 0 : 2,
            maxWidth: min1024 ? 6580 : min768 ? 450 : 1000,
          }}
        >
          Learn how identification and intervention can help keep the situation
          cool. Help patients regain control safely, using a cooperative
          approach.<sup>1.2</sup>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CommentText;
