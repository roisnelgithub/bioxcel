import { Typography } from "@mui/material";

interface BigTextProps {
  text: string;
  neon?: boolean;
  size: number;
}

const BigText = ({ text, neon, size }: BigTextProps) => {
  const normalText = (
    <Typography
      component="span"
      sx={{
        fontSize: size,
        color: "inherit",
        fontFamily: "Black Han Sans",
        lineHeight: 1.2,
      }}
    >
      {text}
    </Typography>
  );
  const neonText = (
    <Typography
      component="span"
      sx={{
        fontSize: size,
        color: "inherit",
        fontFamily: "Black Han Sans",
        lineHeight: 1.2,
        textShadow: `0 0 5px #d36804,0 0 10px #d36804,0 0 10px #d36804,0 0 10px #a55306,0 0 10px #a55306,0 0 0px #a55306,0 0 0px #a55306,0 0 0px #a55306,0 0 20px #a55306;`,
      }}
    >
      {text}
    </Typography>
  );

  if (neon) return neonText;
  return normalText;
};

export default BigText;
