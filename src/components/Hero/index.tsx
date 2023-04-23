import { Sofia_Sans_Condensed } from 'next/font/google'
import React from 'react'
import ArrowIcon from '../common/Icon'
import Button from '../common/Button'
import ImageCard from '../common/ImageCard'

type Props = {}
const Hero = (props: Props) => {
  return (
    <section
      style={{
        backgroundImage: `url('/Img1.jpg')`
      }}
      className="relative h-screen bg-no-repeat bg-cover flex  flex-col pt-[450px] space-y-9 ">
      <div
        className='absolute top-0 bg-gradient-to-b from-[#191919]/0 via-[#191919]/50 to-[#191919]/100 h-screen w-screen pointer-events-none z-10' />
      <div
        className={`  font-bold mx-auto container text-[100px] text-[#FFFFFF]  uppercase leading-[0.9] z-20  `}>
        Fuelling the future of<br />

        <span className='flex'>
          <span className=" leading-none text-[#9CADCB]  flex items-center  ">
            <ImageCard src='/Img1.jpg' className='rounded-xl  mr-3 h-[72px] w-[72px]' />
            sport

          </span>
          <span className='text-[#FFFFFF]'>
            , racing and communities
          </span>
        </span>
        in New Zealand
      </div>
      <div className='mx-auto container flex justify-between z-20'>
        <Button className='bg-[#1A2A57] w-[47px] h-[47px] rounded-full items-center flex p-3'>
          <ArrowIcon className=' rotate-90 fill-white' />
        </Button>
        <Button className={`h-[60px] w-[221px] bg-[#FFFFFF] rounded-full  bold text-[20px] uppercase border-[#9CADCB] border-solid flex justify-between px-10  items-center border-[2px]`}>
          Learn More
          <span className=' bg-[#1A2A57] rounded-full p-3'>
            <ArrowIcon className=' h-[10px] w-[10px] fill-white' />
          </span>
        </Button>
      </div>
    </section>
  )
}

export default Hero