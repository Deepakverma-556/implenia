import React, { useRef } from "react";
import Heading from "./common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { OUR_COMMUNITY_LIST } from "@/utils/helper";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Description from "./common/Description";
import { LeftArrow, RightArrow } from "@/utils/icons";
import CustomButton from "./common/CustomButton";

interface SwiperItem {
  description: string;
  profileImage: StaticImageData;
  profileImageAlt: string;
  jobPosition: string;
  fullName: string;
}
const OurCommunity = () => {
  const swiperRef = useRef(null);
  return (
    <div
      id="community"
      className="bg-lightGray pt-[129px] pb-[130px] max-md:py-20 max-sm:py-12"
    >
      <div className="max-w-[1172px] px-4 mx-auto">
        <Heading text="WHAT OUR COMMUNITY SAYS" myClass="max-sm:!text-center" />
        <div className="flex relative flex-col items-center justify-center pt-[140px] max-lg:pt-12 max-md:pt-8 max-sm:pt-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            ref={swiperRef}
            navigation={{
              nextEl: ".right-arrow",
              prevEl: ".left-arrow",
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            className="lg:max-w-[1000px] w-full text-center"
            breakpoints={{
              0: {
                autoplay: {
                  delay: 3000,
                },
              },
              1026: {
                autoplay: false,
              },
            }}
          >
            {OUR_COMMUNITY_LIST.map((obj: SwiperItem, index: number) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center max-lg:pb-16 max-md:pb-14"
              >
                <span className="text-[100px] max-md:text-7xl text-lightYellow leading-[125px]">
                  “
                </span>
                <p className="font-semibold text-[32px] max-md:text-2xl max-sm:text-xl leading-[40.22px] max-w-[795px] mx-auto text-center -mt-11 max-md:-mt-8">
                  {obj.description}
                </p>
                <div className="flex items-center gap-[14px] max-sm:gap-2 md:ml-48 pt-[30px] max-md:pt-5 max-md:justify-center">
                  <Image
                    src={obj.profileImage}
                    height={80}
                    width={80}
                    alt={obj.profileImageAlt}
                    className="max-md:size-16"
                  />
                  <div>
                    <Description
                      text={obj.jobPosition}
                      myClass="!font-semibold max-sm:!text-base max-sm:!leading-5 !leading-[21px] text-customGray"
                    />
                    <Description
                      text={obj.fullName}
                      myClass="!font-semibold max-sm:!text-base max-sm:!leading-5 !leading-[21px] !text-left"
                    />
                  </div>
                </div>
                <CustomButton
                  myClass="!border-customRed !text-customRed hover:bg-customRed hover:!text-white px-[35.87px] py-[15.5px] mt-[39px] max-sm:mt-7 mx-auto"
                  text="Join the community!"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <LeftArrow myClass="absolute left-arrow left-0 cursor-pointer z-10 max-lg:hidden" />
          <RightArrow myClass="absolute right-arrow right-0 cursor-pointer z-10 max-lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
