import React from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import { KICKBOX_LIST } from '@/utils/helper';
import CustomButton from './common/CustomButton';

const Kickbox = () => {
  return (
    <div className="pt-[134px] pb-[129px] max-md:py-20 max-sm:py-16">
      <div className="max-w-[1172px] px-4 mx-auto">
        <Heading text="IMPLENIA KICKBOX" />
        <Description
          myClass="!pt-4 max-sm:!pt-2"
          text="Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!"
        />
        <div className="flex gap-5 max-sm:gap-7 max-[916px]:flex-wrap pt-5 items-center justify-between">
          <div className="flex gap-[71px] max-lg:gap-10 max-sm:gap-5">
            {KICKBOX_LIST.map((obj, i) => (
              <div className="" key={i}>
                <p className="text-[80px] max-lg:text-6xl max-md:text-4xl max-sm:text-3xl leading-[100.56px] max-md:!leading-7 text-darkYellow">
                  {obj.title}
                </p>
                <Description myClass="!font-bold !leading-[21px] max-md:!font-semibold max-lg:!text-lg max-sm:!text-xs" text={obj.description} />
              </div>
            ))}
          </div>
          <CustomButton
            myClass="!border-customRed !text-customRed hover:bg-customRed hover:!text-white px-[49.4px] py-[15.5px]"
            text="Submit your idea!"
          />
        </div>
      </div>
    </div>
  );
}

export default Kickbox