import { Button } from "@mui/material";

import { colors } from "../../../const";

interface OutlinedBtnProps {
  small?: boolean;
}
const OutlinedBtn = ({ small }: OutlinedBtnProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: colors.WHITE,
        border: `${small ? "1px" : "2px"} solid ${colors.WHITE}`,
        fontSize: small ? "9px" : "13px",
        ":hover": {
          backgroundColor: colors.YELLOW,
          border: `${small ? "1px" : "2px"} solid ${colors.YELLOW}`,
        },
      }}
      size={small ? "small" : "medium"}
    >
      Get Updates
    </Button>
  );
};

export default OutlinedBtn;
