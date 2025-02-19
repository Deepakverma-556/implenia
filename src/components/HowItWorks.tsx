import React, { useState } from "react";
import Heading from "./common/Heading";

const HowItWorks = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const youtubeHandler = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="bg-lightGray pt-32 pb-36 max-md:py-20 max-sm:py-16">
      <div className="max-w-[1172px] mx-auto px-4">
        <Heading text="HOW IT WORKS" myClass="pb-16 max-md:pb-10 max-sm:pb-5" />
        <div
          onClick={youtubeHandler}
          className="max-w-[1064px] h-[580px] max-lg:h-[500px] max-md:h-[380px] max-sm:h-[200px] mx-auto rounded-[25px] overflow-hidden cursor-pointer"
        >
          {isVideoPlaying ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/JzPfMbG1vrE?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          ) : (
            <img
              src="/assets/images/webp/welcome.webp"
              alt="welcome"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
