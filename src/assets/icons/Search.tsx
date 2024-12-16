const MenuIcon = ({
  width = 24,
  height = 24,
  color = "black",
  opacity = 1,
}: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="#343538"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      color="systemGrayscale70"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.496 17.618a8 8 0 1 1 2.121-2.121l3.944 3.942-2.122 2.122zM17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
        opacity={opacity}
        fill={color}
      ></path>
    </svg>
  );
};

interface props {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

export default MenuIcon;
