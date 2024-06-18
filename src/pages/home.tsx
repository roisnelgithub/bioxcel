import { Box, Paper, Slide, Stack, useMediaQuery } from "@mui/material";

import { colors } from "../const";
import { CardList, Footer, Header, SideDrawer } from "../features";
import { useScrollBlock, useSideMenuContext } from "../hooks";
import { smoke } from "./assets";
import { GetUpdate, MainContent, References } from "./components";

const sideMenu = (
  <Box
    sx={{
      width: "100vw",
      height: "100vh",
      bgcolor: colors.BG_BLUE_DARK,
      position: "absolute",
    }}
  >
    <SideDrawer />
  </Box>
);

const Home = () => {
  const { isOpen } = useSideMenuContext();
  const [blockScroll, allowScroll] = useScrollBlock();
  const min768 = useMediaQuery("(min-width:768px)");
  if (isOpen) {
    blockScroll();
  } else {
    allowScroll();
  }

  return (
    <Stack alignItems="center" sx={{ width: "100vw" }}>
      <Paper sx={{ boxShadow: "0px 2px 12px rgba(0,0,0,0.2)" }} elevation={2}>
        <Stack sx={{ width: "100%", maxWidth: "1366px" }}>
          <Stack
            sx={{
              background: `linear-gradient( rgb(0, 22, 57,0.8) , transparent), url(${smoke}) 50% 100%/cover`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: min768 ? 650 : "100%",
            }}
          >
            <Header />
            <MainContent />
          </Stack>
          <CardList />
          <GetUpdate />
          <References />
          <Footer />
          <Box
            sx={{
              position: "fixed",
              top: 70,
              left: 0,
              zIndex: 100,
            }}
          >
            <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
              {sideMenu}
            </Slide>
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Home;
