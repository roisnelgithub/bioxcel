import { useContext } from "react";

import { SideMenuContext } from "../context";

export const useSideMenuContext = () => {
  return useContext(SideMenuContext);
};
