import { FAQ_LIST } from "@/utils/helper";
import React, { useState } from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import { FaqArrow } from "@/utils/icons";

const Faq = () => {
 const [openIndex, setOpenIndex] = useState(0);

 const toggleAccordion = (index: any) => {
   setOpenIndex(openIndex === index ? false : index);
 };
  return (
    <div className="pt-32 pb-[146px] max-md:py-20 max-sm:py-12 bg-lightGray">
      <div className="max-w-[1172px] mx-auto px-4">
        <Heading text="FAQs" myClass="pb-[9px]" />
        {FAQ_LIST.map((data, index: number) => (
          <div
            key={index}
            className="overflow-hidden min-h-[45px] border-b border-gray"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="text-[21px] font-semibold leading-[21px] max-lg:text-xl max-md:text-lg text-start max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] flex justify-between items-center w-full py-2"
            >
              {data.title}
              <span
                className={`ml-2 ${
                  openIndex === index
                    ? "rotate-90 transition-all duration-300"
                    : "rotate-0 transition-all duration-300"
                }`}
              >
                <FaqArrow />
              </span>
            </button>
            <div
              className={`max-md:overflow-y-auto ${
                openIndex === index ? "max-h-20 pb-3.5" : "max-h-0"
              } transition-all duration-500 overflow-hidden`}
            >
              <Description text={data.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
