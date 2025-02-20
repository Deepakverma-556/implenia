interface ArrowItem {
  myClass: string;
}

export const LeftArrow = ({ myClass }: ArrowItem) => (
  <svg
    className={`${myClass}`}
    width="22"
    height="37"
    viewBox="0 0 22 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="1.32606"
      y1="18.9393"
      x2="18.3261"
      y2="1.93934"
      stroke="black"
      strokeWidth="3"
    />
    <line
      x1="3.06066"
      y1="18.3261"
      x2="20.0607"
      y2="35.3261"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);

export const RightArrow = ({ myClass }: ArrowItem) => (
  <svg
    className={`${myClass}`}
    width="22"
    height="36"
    viewBox="0 0 22 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="20.0607"
      y1="17.4474"
      x2="3.06066"
      y2="34.4474"
      stroke="black"
      strokeWidth="3"
    />
    <line
      x1="18.3261"
      y1="18.0607"
      x2="1.32606"
      y2="1.06066"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);

export const FaqArrow = () => (
  <svg
    width="22"
    height="8"
    viewBox="0 0 22 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3536 4.35355C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464465C17.9763 0.269203 17.6597 0.269203 17.4645 0.464465C17.2692 0.659728 17.2692 0.97631 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53553C17.6597 7.7308 17.9763 7.7308 18.1716 7.53553L21.3536 4.35355ZM2.18558e-08 4.5L21 4.5L21 3.5L-2.18558e-08 3.5L2.18558e-08 4.5Z"
      fill="black"
    />
  </svg>
);
