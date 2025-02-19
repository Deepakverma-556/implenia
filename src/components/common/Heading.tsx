import React from 'react'
interface headingProps {
  myClass: string;
  text: string;
}
const Heading = ({ myClass, text }: headingProps) => {
  return (
    <h2
      className={`${myClass} font-bold text-[49px] leading-[61.59px] text-black`}
    >
      {text}
    </h2>
  );
};

export default Heading