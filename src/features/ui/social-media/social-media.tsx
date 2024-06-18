import { Box, Stack } from "@mui/material";

import { emailIcon } from "./assets";
import { socialMedia } from "./const";

interface SocialMediaProps {
  small?: boolean;
}
const SocialMedia = ({ small }: SocialMediaProps) => {
  return (
    <Stack direction="row" spacing={small ? 1.5 : 3}>
      {socialMedia.map((item) => {
        const { id, icon, name } = item;
        return (
          <Box
            component="img"
            key={id}
            src={icon}
            alt={name}
            sx={{ ":hover": { cursor: "pointer" } }}
          />
        );
      })}
      <Box
        component="img"
        src={emailIcon}
        alt="Email"
        sx={{ ":hover": { cursor: "pointer" } }}
      />
    </Stack>
  );
};

export default SocialMedia;
