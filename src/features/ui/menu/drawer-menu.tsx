import { Stack, Typography } from "@mui/material";

import { colors } from "../../../const";
import { options } from "./const";

const DrawerMenu = () => {
  return (
    <Stack alignItems="end" spacing={3} sx={{ color: colors.WHITE }}>
      {options.map((option) => {
        return <Typography key={option.id}>{option.text}</Typography>;
      })}
    </Stack>
  );
};

export default DrawerMenu;
