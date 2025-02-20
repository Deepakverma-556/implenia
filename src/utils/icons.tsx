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
