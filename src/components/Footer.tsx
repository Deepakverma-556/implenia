import { FOOTER_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";
interface FooterItem {
    title: string;
    link: string;
}
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div
      id="contact"
      className="pt-[138px] pb-[65px] max-md:pt-20 max-sm:py-12 bg-black"
    >
      <div className="max-w-[1117px] px-4 flex container mx-auto gap-6 max-lg:flex-wrap justify-between">
        <div className="md:max-w-[456px] w-full flex justify-between">
          <div className="max-w-[289px]">
            <p className="font-black text-base text-white leading-[20.11px] tracking-[-0.22px]">
              Implenia Innovation Hub
            </p>
            <p className="leading-[20.11px] max-md:text-sm tracking-[-0.22px] text-white">
              Thurgauerstrasse 101A <br /> 8152 Glattpark (Opfikon)
            </p>
            <Link
              className="leading-[20.11px] tracking-[-0.22px] transition-all duration-300 hover:text-lightYellow max-md:text-sm text-white"
              href={"mailto:innovation@implenia.com"}
            >
              innovation@implenia.com
            </Link>
            <p className="font-black mt-10 max-md:mt-7 max-sm:mt-12 text-base text-white leading-[20.11px] tracking-[-0.22px]">
              Implenia Innovation Hub
            </p>
            <p className="leading-[20.11px] tracking-[-0.22px] max-md:text-sm text-white">
              This revised version is based on Adobe Kickbox which is licensed
              under the Creative Commons Attribution License.
            </p>
            <p className="leading-[20.11px] mt-10 max-md:mt-5 max-sm:mt-8 tracking-[-0.22px] text-white">
              Data Protection I Imprint
            </p>
            <p className="leading-[12.57px] mt-[38px] max-md:mt-5 max-sm:mt-8 text-xs tracking-[-0.22px] text-white">
              Copyright © {year} Imlenia. Alle Rechte vorbehalten.
            </p>
          </div>
          <div className="max-w-[77px] max-md:max-w-[250px] max-sm:max-w-[77px] w-full flex flex-col">
            <p className="font-black text-base mb-5 max-md:mb-2 text-white leading-[20.11px] tracking-[-0.22px]">
              Sitemap
            </p>
            {FOOTER_LIST.map((item:FooterItem, index:number) => (
              <Link
                href={item.link}
                key={index}
                className="leading-[20.11px] pb-[0.5px] max-w-max transition-all duration-300 hover:text-lightYellow tracking-[-0.22px] max-md:text-sm text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col max-md:mt-6">
          <p className="font-black text-base mb-[19px] max-sm:mb-3 text-white leading-[20.11px] tracking-[-0.22px]">
            Contact
          </p>
          <form className="w-[273px]">
            <div className="max-w-[189px]">
              <input
                type="email"
                required
                className="py-[17px] placeholder:text-black px-[19px] outline-none w-full bg-white"
                placeholder="Ihre E-Mail"
              />
            </div>
            <textarea
              required
              className="w-full placeholder:text-black resize-none mt-2 outline-none px-[15px] min-h-[121px] py-[18px] bg-white"
              placeholder="Ihre Nachricht..."
            ></textarea>
            <div className="w-full justify-end flex">
              <button className="py-[7px] px-[22.7px] bg-customRed text-white transition-all duration-300 hover:bg-white hover:text-black font-bold text-sm">
                SENDEN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
