import { Stack } from "@mui/material";

interface IconImageProps {
  image: string;
  alt: string;
}
const IconImage = ({ image, alt }: IconImageProps) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100%" }}
    >
      <img src={image} alt={alt} />
    </Stack>
  );
};

export default IconImage;
