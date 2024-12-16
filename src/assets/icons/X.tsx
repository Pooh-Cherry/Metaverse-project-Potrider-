const XIcon = ({
  width = 20,
  height = 20,
  color = "#343538",
  opacity = 1,
}: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.475 19.647c7.17 0 11.092-6.02 11.092-11.241 0-.171 0-.341-.012-.51A8 8 0 0 0 21.5 5.85a7.7 7.7 0 0 1-2.239.622 3.96 3.96 0 0 0 1.714-2.185 7.8 7.8 0 0 1-2.476.958 3.864 3.864 0 0 0-4.683-.777c-1.555.844-2.358 2.64-1.96 4.38a11.02 11.02 0 0 1-8.034-4.127C2.788 6.526 3.316 8.836 5.03 9.995A3.8 3.8 0 0 1 3.26 9.5v.05c0 1.881 1.309 3.501 3.127 3.873a3.84 3.84 0 0 1-1.76.068 3.91 3.91 0 0 0 3.642 2.744A7.76 7.76 0 0 1 2.5 17.872a10.93 10.93 0 0 0 5.975 1.772"
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

export default XIcon;
