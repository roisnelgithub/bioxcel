import { Stack, useMediaQuery } from "@mui/material";

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
      <MainText />
      {!min768 && <CommentText />}
    </Stack>
  );
};

export default MainContent;
