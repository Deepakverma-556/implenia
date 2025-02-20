import { FAQ_LIST } from "@/utils/helper";
import React, { useState } from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";

const Faq = () => {
  const [active, setActive] = useState();

  const handleClick = (i) => {
    setActive(active === i ? "" : i);
  };
  return (
    <div className="pt-32 pb-[146px] max-md:py-20 max-sm:py-12 bg-lightGray">
      <div className="max-w-[1172px] mx-auto px-4">
        <Heading text="FAQs" />
        <div className="mx-auto flex items-center flex-col pt-[9px]">
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className="border-b border-gray"
            >
              <div className="cursor-pointer flex items-center justify-between">
                <h2 className="font-semibold text-[21px] leading-[21px] pt-2">
                  {obj.title}
                </h2>
              </div>
              <Description
                text={obj.description}
                myClass={`transition-all duration-300 ease-linear pb-[14px] ${
                  active === i ? "h-[70px]" : "h-0 opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
