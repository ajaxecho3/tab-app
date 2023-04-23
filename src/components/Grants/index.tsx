import React from 'react'
import ArrowIcon from '../common/Icon'
import Button from '../common/Button'
import ImageCard from '../common/ImageCard'

type Props = {}

function Grants({ }: Props) {
  return (
    <section className=' mx-auto h-[171.5vh] w-full pt-52 relative  '>

      <div className=' absolute h-[428px] w-full  bg-gradient-to-t  from-[#FFFFFF]/0  to-[#FFFFFF]/100 z-20'>
        <div className='container mx-auto text-[230px] font-extrabold text-[#1A2A57] tracking-wider space-y-3'>
          <div className='flex items-center leading-10  justify-center'>
            <span className=' drop-shadow-xl'> FUELLING </span><span> <ImageCard src='/Img6.jpg' className='rounded-xl  mr-3 h-[163px] w-[143px]' /> </span>  <span className=' drop-shadow-xl'>THE</span>
          </div>
          <div className='flex items-center justify-center leading-10'>
            <ImageCard src='/Img7.jpg' className='rounded-xl  mr-3 h-[163px] w-[143px]' /> <span className='drop-shadow-xl'> FUTURE</span>
          </div>
          <div className=' container flex justify-center tracking-normal pt-40'>
            <p className=' text-2xl uppercase text-[#1A2A57] font-bold'>of sport, racing and communities in New Zealand.</p>
          </div>

        </div>

      </div>
      <div style={{
        backgroundImage: `url('/Img5.jpg')`
      }}
        className="relative h-full w-full bg-no-repeat bg-contain flex  flex-col pt-[450px] z-10 ">

      </div>
    </section >
  )
}

export default Grants