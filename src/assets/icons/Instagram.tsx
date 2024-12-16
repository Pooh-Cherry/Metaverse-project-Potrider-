const InstagramIcon = ({
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
        d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7zm8.5-.8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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

export default InstagramIcon;
