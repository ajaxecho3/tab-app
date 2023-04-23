import React from "react";
import ArrowIcon from "../common/Icon";
import Button from "../common/Button";
import Carrer from "./Carrer";

type Props = {};

const Careers = (props: Props) => {
  return (
    <section className=" h-screen mx-auto container py-15">
      <div className="flex flex-col container mx-auto">
        <div className="flex items-center mt-60">
          <span className=" w-20 text-[16px] text-[#4B6290] uppercase  tracking-wider">Join Us </span>
          <div className='border-dashed w-full h-0 border-[1px] border-[#9CADCB] ' />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col  max-w-[40%]   mt-10">
            <h2 className=" text-[60px] font-bold text-[#1A2A57] uppercase">Careers</h2>
            <p className=" leading-4  text-[#1A2A57] tracking-wider  w-[400px]">
              There&#39;s so much more to TAB NZ than meets the eye, so why not scratch the surface and find out more. Are you ready to join our team?
            </p>
            <div className=" mt-10">
              <Button className={`h-[60px] w-[221px] bg-[#FFFFFF] rounded-full  bold text-[20px] uppercase border-[#9CADCB] border-solid flex justify-between px-10  items-center border-[2px]`}>
                Learn More
                <span className=' bg-[#1A2A57] rounded-full p-3'>
                  <ArrowIcon className=' h-[10px] w-[10px] fill-white' />
                </span>
              </Button>
            </div>

          </div>
          <div className=" relative mt-10 max-w-[60%] min-w-[60%] flex justify-start space-x-3 overflow-x-scroll">
            <Carrer />
            <Carrer />
            <Carrer />


          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
