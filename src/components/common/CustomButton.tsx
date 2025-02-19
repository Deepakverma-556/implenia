import React from "react";
interface buttomProps {
  myClass: string;
  text: string;
}
const CustomButton = ({ myClass, text }: buttomProps) => {
  return (
    <button className={`${myClass} font-bold text-[21px] leading-[21px] transition-all duration-300 border-2 rounded-[47px] `}>
      {text}
    </button>
  );
};

export default CustomButton;
