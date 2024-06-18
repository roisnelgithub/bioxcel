import { Box, Stack } from "@mui/material";

import { homeIcon } from "../menu/assets";
import { OutlinedBtn } from "../button";
import { DrawerMenu } from "../menu";
import { SocialMedia } from "../social-media";

const SideDrawer = () => {
  return (
    <Box>
      <Stack sx={{ p: 2, mr: 3 }} spacing={3}>
        <Stack sx={{ width: "100%" }} alignItems="end">
          <img src={homeIcon} alt="Home" />
        </Stack>
        <DrawerMenu />
        <Stack sx={{ pt: 6 }} alignItems="end" spacing={3}>
          <OutlinedBtn small={true} />
          <SocialMedia small={true} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideDrawer;
