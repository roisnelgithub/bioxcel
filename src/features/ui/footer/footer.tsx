import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import { colors } from "../../../const";
import { FooterMenu } from "../menu";
import { Logo } from "..";

const Footer = () => {
  const min768 = useMediaQuery("(min-width:768px)");
  const min1024 = useMediaQuery("(min-width:1024px)");
  return (
    <Box sx={{ bgcolor: colors.BG_BLUE_DARK, p: min768 ? 6 : 4, mt: 10 }}>
      <Stack spacing={2}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0}>
          <Box component="article" gridColumn={min768 ? "span 6" : "span 12"}>
            <FooterMenu />
          </Box>
          <Box component="article" gridColumn={min768 ? "span 6" : "span 12"}>
            <Typography
              sx={{
                fontSize: min1024 ? 19 : min768 ? 16 : 14,
                fontWeight: 300,
                color: colors.WHITE,
              }}
            >
              This website contains information intended for us healthcare
              professionals only.
            </Typography>
          </Box>
        </Box>
        <Stack spacing={6}>
          <Box component="article" sx={{ pt: 4 }}>
            <Logo width={180} />
          </Box>
          <Typography
            component="article"
            sx={{ fontSize: "14px", fontWeight: 300, color: colors.WHITE }}
          >
            ©️ 2021 BioXel Therapeutics, Inc. All right reserved. US-NP-2100047
            07-2021
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
