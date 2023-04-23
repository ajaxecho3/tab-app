import { Roboto } from 'next/font/google'
import React from 'react'
import ArrowIcon from '../common/Icon'
import Button from '../common/Button'
import ImageCard from '../common/ImageCard'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <section className=' h-screen mx-auto container py-28'>

      <div className='flex container mx-auto'>
        <div className='relative w-[50%]'>
          <div className='h-[535px] w-[535px] absolute top-40 left-24 bg-[#1A2A57] rounded-xl z-10' />
          <ImageCard src='/Img2.jpg' className='rounded-xl h-[535px] w-[535px]  absolute opacity-50 left-32 top-36 z-20' />
          <ImageCard src='/Img2.jpg' className='rounded-xl h-[205px] w-[205px] absolute left-64 top-80 z-30' />
        </div>
        <div className='relative w-[50%] space-y-3'>
          <div className='border-dashed w-full border-[1px] border-[#9CADCB] mt-[45%]' />
          <p className='uppercase text-[60px] font-bold text-[#1A2A57]'>About Us</p>
          <p className={`text-[16px]  text-[#1A2A57] w-[425px] tracking-widest`}>TAB NZ is deeply ingrained in New Zealand&#39;s culture. As New Zealand’s sole betting agency, every dollar bet with TAB NZ contributes to fuelling the future of racing and sporting organisations across New Zealand.</p>
          <br />
          <Button className={`h-[60px] w-[221px] bg-[#FFFFFF] rounded-full  bold text-[20px] uppercase border-[#9CADCB] border-solid flex justify-between px-10  items-center border-[2px]`}>
            Learn More
            <span className=' bg-[#1A2A57] rounded-full p-3'>
              <ArrowIcon className=' h-[10px] w-[10px] fill-white' />
            </span>
          </Button>
        </div>
      </div>
    </section >
  )
}

export default AboutUs