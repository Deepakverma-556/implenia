import React from "react";
interface buttomProps {
  myClass?: string;
  text: string;
}
const CustomButton = ({ myClass, text }: buttomProps) => {
  return (
    <button className={`${myClass} text-nowrap font-bold text-[21px] leading-[21px] transition-all duration-300 border-2 rounded-[47px] max-md:px-6 max-md:py-3 max-md:font-medium max-sm:text-lg max-sm:px-4 max-sm:py-1`}>
      {text}
    </button>
  );
};

export default CustomButton;
