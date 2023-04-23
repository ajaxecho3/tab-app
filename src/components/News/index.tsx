import Image from "next/image";
import React from "react";
import ArrowIcon from "../common/Icon";
import Button from "../common/Button";

type Props = {};

const News = (props: Props) => {
  return (
    <section className=' h-screen py-28 bg-[#1A2A57] bg-cover bg-no-repeat '>
      <div className='border-dashed w-full h-0 border-[1px] border-[#9CADCB] ' />
      <div className='flex justify-between container mx-auto mt-32'>
        <p className=" leading-[50px] text-[#FFFFFF] text-[60px] w-[573px] font-bold">Catch up on the latest news from TAB NZ</p>
        <Button className={`h-[60px] w-[221px] bg-[#FFFFFF] rounded-full  bold text-[20px] uppercase border-[#9CADCB] border-solid flex justify-between px-10  items-center border-[2px]`}>
          Learn More
          <span className=' bg-[#1A2A57] rounded-full p-3'>
            <ArrowIcon className=' h-[10px] w-[10px] fill-white' />
          </span>
        </Button>
      </div>
      <div className='flex  space-x-8 container mx-auto py-20 '>
        <div className=" flex flex-col  space-y-10">
          <Image src='/Img3.jpg' alt="Image " width={645} height={330} className=' rounded-[25px]' />
          <div className="text-[#FFFFFF] space-y-3">
            <div><p>8 March 2023</p></div>
            <div className="flex justify-between">
              <p className="uppercase text-[24px] max-w-[425px] leading-6 ">TAB NZ boosting odds of success for women&lsquo;s sport on International Women’s Day</p>
              <div className="bg-[#9C9DAB] w-[47px] h-[47px] rounded-full "></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  space-y-10">
          <Image src='/Img4.jpg' alt="Image " width={645} height={330} className=' rounded-[25px]' />
          <div className="text-[#FFFFFF] space-y-3">
            <div><p>3 March 2023</p></div>
            <div className="flex justify-between">
              <p className="uppercase text-[24px] max-w-[425px] leading-6 ">TAB NZ Trading Performance Update</p>
              <div className="bg-[#9C9DAB] w-[47px] h-[47px] rounded-full "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
