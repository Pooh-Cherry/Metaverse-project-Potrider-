const MetaIcon = ({
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
        d="M3.827 5.138C3.5 5.78 3.5 6.62 3.5 8.3v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327h4.28v-6.583h-2.215V11.35h2.215V9.459c0-2.196 1.341-3.391 3.3-3.391.938 0 1.745.07 1.98.1v2.295l-1.359.001c-1.065 0-1.271.506-1.271 1.249v1.638h2.54l-.33 2.566h-2.21V20.5h.47c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.327-.642.327-1.482.327-3.162V8.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.22 3.5 17.38 3.5 15.7 3.5H8.3c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311"
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

export default MetaIcon;
