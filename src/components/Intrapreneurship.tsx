import React from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import CustomButton from './common/CustomButton';
import { STORIES_LIST } from '@/utils/helper';
import Image, { StaticImageData } from 'next/image';

interface StoriesItem{
  image: StaticImageData;
  imageAlt: string;
  title: string;
}

const Intrapreneurship = () => {
  return (
    <div id="stories" className="pt-32 pb-36 max-md:py-20 max-sm:py-12">
      <div className="max-w-[1172px] mx-auto px-4">
        <Heading text="INTRAPRENEURSHIP STORIES" />
        <div className='max-w-[1103px] mx-auto'>
          <div className="flex -mx-[25.5px] max-lg:-mx-3 max-md:flex-wrap justify-center">
            {STORIES_LIST.map((obj: StoriesItem, i: number) => (
              <div
                key={i}
                className="w-1/3 max-md:w-1/2 max-sm:w-full px-[25.5px] max-lg:px-3  pt-[25px]"
              >
                <div className="border border-black rounded-[28px] h-full overflow-hidden">
                  <Image
                    src={obj.image}
                    alt={obj.imageAlt}
                    width={323}
                    height={207}
                    className="w-full max-sm:h-[180px] object-cover rounded-[28px] pointer-events-none"
                  />
                  <p className="font-semibold text-[35px] max-lg:text-3xl max-sm:text-2xl leading-[44px] pt-[51px] pb-16 px-6">
                    {obj.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CustomButton
          myClass="!border-customRed !text-customRed hover:bg-customRed hover:!text-white px-[74.18px] py-[15.5px] mt-[39px] max-sm:mt-7 max-md:!mx-auto !flex"
          text="More Stories"
        />
      </div>
    </div>
  );
}

export default Intrapreneurship