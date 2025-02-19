import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);
  return (
    <div className="max-w-[1172px] flex items-center pt-[18px] pb-[19px] max-sm:py-3 justify-between bg-white px-4 mx-auto">
      <a href="/">
        <Image
          src={"/assets/images/webp/logo.webp"}
          width={93}
          height={93}
          alt="logo"
          className="max-lg:size-16 max-sm:size-12"
        />
      </a>
      <ul className="gap-[38px] flex items-center max-sm:hidden">
        {HEADER_LIST.map((obj, i) => (
          <li key={i}>
            <a
              href={obj.link}
              className="font-bold text-base leading-[20.11px] text-black transition-all duration-300 hover:text-lightYellow"
            >
              {obj.title}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setOpen(!open)}
        className="overflow-hidden relative z-50 sm:hidden h-5 w-7 flex flex-col justify-between items-center"
      >
        <span
          className={`bg-black rounded-md w-full h-1 max-sm:h-[2.5px] block transition-all duration-300 ${
            open ? "translate-x-10" : ""
          }`}
        ></span>
        <span
          className={`bg-black rounded-md after:rounded-lg w-full h-1 max-sm:h-[2.67px] block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:max-sm:h-[2.5px] after:transition-all after:duration-300 transition-all duration-300 ${
            open ? "rotate-45 after:rotate-90 after:!bg-black" : ""
          }`}
        ></span>
        <span
          className={`bg-black rounded-md w-full h-1 max-sm:h-[2.5px] block transition-all duration-300 ${
            open ? "-translate-x-10" : ""
          }`}
        ></span>
      </button>
      <div
        className={`w-full h-full bg-white transition-all duration-500 left-0 sm:-top-full z-40 fixed flex justify-center items-center ${
          open ? "top-0 left-0" : "-top-full"
        }`}
      >
        <ul className="gap-5 flex flex-col items-center">
          {HEADER_LIST.map((obj, i) => (
            <li key={i}>
              <a
                href={obj.link}
                className="font-bold text-base leading-[20.11px] text-black transition-all duration-300 hover:text-lightYellow"
              >
                {obj.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
