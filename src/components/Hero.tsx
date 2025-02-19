import Header from "./common/Header";
import Description from "./common/Description";
import CustomButton from "./common/CustomButton";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Header />
      <div
        id="home"
        className="bg-[url(/assets/images/webp/hero-bg.webp)] bg-no-repeat bg-cover relative bg-center pt-[197px] pb-[168px] max-md:py-32 max-sm:py-20"
      >
          <div className="max-w-[1172px] px-4 mx-auto relative z-20">
            <Description
              text="Shape the future of Implenia!"
              myClass="!font-bold !leading-[21px] !text-white !pb-3 max-sm:!text-lg max-sm:!pb-1 custom-shadow"
            />
            <h1 className="font-bold custom-shadow text-[76px] max-md:text-5xl max-sm:text-4xl leading-[80px] text-white max-w-[600px] max-md:max-w-[500px] pb-[25px] max-sm:pb-4">
              WE ARE LOOKING FOR YOUR IDEA
            </h1>
            <CustomButton
              text="Bring your idea to life!"
              myClass="!text-white px-[51.36px] py-[21px] hover:bg-black hover:border-black"
            />
          </div>
          <Image
            src={"/assets/images/webp/robot.webp"}
            width={400}
            height={562}
            alt="robot"
            className="absolute -bottom-16 pointer-events-none left-0 z-10 robot max-lg:h-[300px] max-lg:w-[200px] max-sm:h-[200px] max-sm:w-[150px] max-lg:bottom-10"
          />
        </div>
    </>
  );
};

export default Hero;
