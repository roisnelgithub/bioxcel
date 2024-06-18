import { Box, Stack, useMediaQuery } from "@mui/material";

import { colors } from "../../../const";
import { homeIcon } from "../menu/assets";
import { OutlinedBtn } from "../button";
import { HeaderMenu } from "../menu";
import { SocialMedia } from "../social-media";
import { Logo } from "..";

interface TableHeaderProps {
  show: boolean;
}
const TabletHeader = ({ show }: TableHeaderProps) => {
  const min1024 = useMediaQuery("(min-width:1024px)");
  const min1230 = useMediaQuery("(min-width:1230px)");
  return (
    <Stack
      sx={{
        position: "fixed",
        top: show ? 0 : -80,
        left: 0,
        width: "100%",
        transition: "ease-in-out 0.5s",
      }}
    >
      <Stack justifyContent="end" alignItems="center" sx={{ height: "70px" }}>
        <Stack
          sx={{
            bgcolor: colors.BG_BLUE_DARK,
            position: "absolute",
            maxWidth: 1282,
            width: "90%",
            height: 70,
            borderRadius: "50px",
            px: 2,
          }}
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          spacing={3}
          component="section"
        >
          <Box component="article" sx={{ pl: min1024 ? 4 : 0 }}>
            <Logo width={min1230 ? 192 : min1024 ? 150 : 120} />
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={min1230 ? 6 : min1024 ? 3 : 1.5}
            sx={{ height: 70 }}
            component="article"
          >
            <Box
              component="img"
              src={homeIcon}
              alt="Home"
              sx={{
                width: 20,
                height: 20,
              }}
            />
            <Box component="article">
              <HeaderMenu fontSize={min1230 ? 13 : 11} />
            </Box>
            <Box component="article">
              <OutlinedBtn small={!min1230} />
            </Box>
            <Box component="article" sx={{ pr: min1230 ? 4 : 0 }}>
              <SocialMedia small={!min1230} />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TabletHeader;
