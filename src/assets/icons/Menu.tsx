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
      color="systemGrayscale70"
      aria-hidden="true"
    >
      <path
        opacity={opacity}
        d="M20 6H4v2h16zM4 11h16v2H4zM4 16h16v2H4z"
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
