import { Stack } from "@mui/material";
import { Close } from "@mui/icons-material";

import { colors } from "../../../const";
import { useSideMenuContext } from "../../../hooks";
import MenuIcon from "./menu.icon";
import { Logo } from "..";

interface MobileHeaderProps {
  show: boolean;
}
const MobileHeader = ({ show }: MobileHeaderProps) => {
  const { isOpen, openMenu, closeMenu } = useSideMenuContext();

  return (
    <Stack
      sx={{
        position: "fixed",
        top: show ? 0 : -80,
        left: 0,
        width: "100vw",
        transition: "top 0.5s ease-in-out 0s",
        zIndex: 100,
      }}
    >
      <Stack
        direction="row"
        bgcolor="#152535"
        sx={{ height: "70px" }}
        justifyContent="space-between"
        alignItems="center"
        px={2}
        zIndex={50}
      >
        <Logo />
        {isOpen ? (
          <Close
            sx={{ fontSize: "45px", color: colors.WHITE }}
            onClick={() => closeMenu()}
          />
        ) : (
          <MenuIcon width={40} height={40} onClick={() => openMenu()} />
        )}
      </Stack>
    </Stack>
  );
};

export default MobileHeader;
