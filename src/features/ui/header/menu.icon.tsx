import { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <g stroke="#fff" strokeLinecap="round" strokeWidth={1.5}>
      <path d="M3 6h18M9 12h12M3 18h18" />
    </g>
  </svg>
);
export default MenuIcon;
