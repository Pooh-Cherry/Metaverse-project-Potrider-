const PinterestIcon = ({
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
        d="M2.5 12a9.505 9.505 0 0 0 6.038 8.85c-.083-.752-.158-1.908.033-2.729.173-.741 1.114-4.722 1.114-4.722S9.4 12.83 9.4 11.99c0-1.321.765-2.307 1.719-2.307.81 0 1.202.608 1.202 1.338 0 .815-.52 2.033-.787 3.163-.224.945.474 1.717 1.407 1.717 1.688 0 2.986-1.78 2.986-4.35 0-2.275-1.634-3.866-3.968-3.866-2.703 0-4.29 2.028-4.29 4.123 0 .816.315 1.692.707 2.168a.28.28 0 0 1 .066.272c-.072.3-.232.946-.264 1.078-.041.174-.137.21-.317.127-1.187-.553-1.929-2.287-1.929-3.68 0-2.997 2.178-5.75 6.277-5.75 3.296 0 5.857 2.349 5.857 5.487 0 3.274-2.065 5.91-4.93 5.91-.962 0-1.867-.5-2.177-1.091 0 0-.477 1.813-.592 2.258-.215.825-.794 1.86-1.18 2.49A9.5 9.5 0 1 0 2.5 12"
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

export default PinterestIcon;