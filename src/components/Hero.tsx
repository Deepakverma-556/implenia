import React from "react";
import Header from "./common/Header";
import Description from "./common/Description";
import CustomButton from "./common/CustomButton";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="bg-[url(/assets/images/webp/hero-bg.webp)] bg-no-repeat bg-cover max-lg:bg-center pt-[197px] pb-[168px] max-md:py-32 max-sm:py-20">
        <div className="max-w-[1172px] px-4 mx-auto">
          <Description
            text="Shape the future of Implenia!"
            myClass="!font-bold !leading-[21px] !text-white !pb-3 max-sm:!text-lg max-sm:!pb-1"
          />
          <h1 className="font-bold text-[76px] max-md:text-5xl max-sm:text-4xl leading-[80px] text-white max-w-[600px] max-md:max-w-[500px] pb-[25px] max-sm:pb-4">
            WE ARE LOOKING FOR YOUR IDEA
          </h1>
          <CustomButton
            text="Bring your idea to life!"
            myClass="!text-white px-[51.36px] py-[21px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
