import { conversation, intervention, man, strategies } from "../assets";
import IconImage from "../icon-image";

export const cards = [
  {
    id: 1,
    icon: <IconImage image={man} alt="Man" />,
    subtitle: "Know the signs for",
    title: "Prompt identification of agitation",
  },
  {
    id: 2,
    icon: <IconImage image={intervention} alt="Man" />,
    subtitle: "Find out about",
    title: "Strategies to calm cooperatively",
  },
  {
    id: 3,
    icon: <IconImage image={strategies} alt="Man" />,
    subtitle: "Learn more about",
    title: "Intervention approaches",
  },
  {
    id: 4,
    icon: <IconImage image={conversation} alt="Man" />,
    subtitle: "Explore",
    title: "Expert Perspective",
  },
];
