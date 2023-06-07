interface ICloseIcon {
  fn: () => void;
}

export const CloseIcon: React.FC<ICloseIcon> = ({ fn }: ICloseIcon) => (
  <svg
    className="close-icon"
    onClick={fn}
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 21-9-9m0 0L3 3m9 9 9-9m-9 9-9 9"
    />
  </svg>
);
