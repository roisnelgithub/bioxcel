import { motion } from "framer-motion";
import { useState } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { colors } from "../../const";
import { arrow } from "./assets";

interface CardProps {
  id: number;
  icon: React.ReactElement;
  subtitle: string;
  title: string;
}

const variants = {
  open: { translateX: [0, 15, 0] },
  closed: { translateX: 0 },
};

const Card = ({ id, icon, subtitle, title }: CardProps) => {
  const [isHovered, setHovered] = useState<number | null>(null);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 266,
        height: 294,
        bgcolor: colors.BG_BLUE_DARK,
        border: `solid 10px ${colors.BG_BLUE_GREY}`,
        borderRadius: "5px",
        py: 1,
        ":hover": { cursor: "pointer" },
      }}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <Stack alignItems={"center"} justifyContent="center" spacing={2}>
        <Stack sx={{ width: 90, height: 90 }} alignItems="center">
          {icon}
        </Stack>
        <Stack alignItems={"center"}>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: colors.WHITE,
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: colors.WHITE,
              fontWeight: 900,
              fontSize: 23,
              height: 100,
              textAlign: "center",
              fontFamily: "Black Han Sans",
              p: 1,
            }}
          >
            {title}
          </Typography>
        </Stack>
        <motion.div
          animate={isHovered === id ? "open" : "closed"}
          variants={variants}
          transition={{ repeat: isHovered === id ? Infinity : 0 }}
        >
          <Box component="img" className="arrow" src={arrow} alt="Arrow" />
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Card;
