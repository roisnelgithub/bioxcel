import { Box, Slide, Stack, useMediaQuery } from "@mui/material";

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
    <Stack alignItems="center" justifyContent="center">
      <Stack
        sx={{
          boxShadow: "0px 2px 12px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "1366px",
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <Box component="header">
            <Stack
              sx={{
                background: `linear-gradient( rgb(0, 22, 57,0.8) , transparent), url(${smoke}) 50% 100%/cover`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: min768 ? 650 : "100%",
              }}
            >
              <Box component="section">
                <Header />
              </Box>
              <Box component="section">
                <MainContent />
              </Box>
            </Stack>
          </Box>
          <Box component="main">
            <Box component="section">
              <CardList />
            </Box>
            <Box component="article">
              <GetUpdate />
            </Box>
            <Box component="article">
              <References />
            </Box>
          </Box>

          <Box component="footer">
            <Footer />
          </Box>
          {!min768 && (
            <Box
              component="aside"
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
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
