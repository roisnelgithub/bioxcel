import { useCallback, useEffect, useState } from "react";

import { Box, useMediaQuery } from "@mui/material";

import MobileHeader from "./mobile.header";
import TabletHeader from "./tablet.header";

const Header = () => {
  const min768 = useMediaQuery("(min-width:768px)");

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  const cachedFn = useCallback(controlNavbar, [lastScrollY]);
  useEffect(() => {
    window.addEventListener("scroll", cachedFn);

    return () => {
      window.removeEventListener("scroll", cachedFn);
    };
  }, [lastScrollY, cachedFn]);

  return (
    <Box>
      {min768 ? <TabletHeader show={show} /> : <MobileHeader show={show} />}
    </Box>
  );
};

export default Header;
