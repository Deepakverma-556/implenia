import React from "react";
interface descriptionProps {
  myClass?: string;
  text: string;
}
const Description = ({ myClass, text }: descriptionProps) => {
  return (
    <p
      className={`${myClass} font-light text-[21px] leading-[27px] text-black`}
    >
      {text}
    </p>
  );
};

export default Description;
