import { useEffect, useState } from "react";

import { Box, Fade, Grid, Stack } from "@mui/material";
import { useWindowScroll } from "@uidotdev/usehooks";

import Card from "./card";
import { cards } from "./const";

const CardList = () => {
  const [{ y }] = useWindowScroll();
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    if (y && y >= 210) {
      setShowCards(true);
    }
  }, [y]);
  return (
    <Stack alignItems="center" sx={{ pt: 8 }}>
      <Grid container spacing={2} sx={{ justifyContent: "center", px: 4 }}>
        {cards.map((card, index) => {
          const { id, icon, subtitle, title } = card;
          return (
            <Grid key={id} item>
              <Fade in={showCards} timeout={1000 * index - index * 500}>
                <Box>
                  <Card icon={icon} subtitle={subtitle} title={title} id={id} />
                </Box>
              </Fade>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default CardList;

//  <Box
//    display="grid"
//    gridTemplateColumns="repeat(12, 1fr)"
//    gap={4}
//    sx={{
//      px: 4,
//      ml: -2.5,
//      placeItems: "center",
//    }}
//  >
//    {cards.map((card, index) => {
//      const { id, icon, subtitle, title } = card;
//      return (
//        <Box key={id} gridColumn={spanCard}>
//          <Fade in={true} timeout={1000 * index - index * 700}>
//            <Box>
//              <Card icon={icon} subtitle={subtitle} title={title} />
//            </Box>
//          </Fade>
//        </Box>
//      );
//    })}
//  </Box>;
