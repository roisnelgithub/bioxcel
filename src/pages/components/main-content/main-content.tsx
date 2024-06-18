import { Box, Stack, useMediaQuery } from "@mui/material";

import CommentText from "./comment-text";
import MainText from "./main-text";
import SiteDescription from "./site-description";

const MainContent = () => {
  const min768 = useMediaQuery("(min-width:768px)");

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={6}
      sx={{ mt: min768 ? "80px" : "70px" }}
    >
      <SiteDescription />
      <Box component="section">
        <MainText />
      </Box>
      {!min768 && (
        <Box component="article">
          <CommentText />
        </Box>
      )}
    </Stack>
  );
};

export default MainContent;
