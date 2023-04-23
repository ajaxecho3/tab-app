import React from 'react'
import Button from '../common/Button'
import ArrowIcon from '../common/Icon'

type Props = {}

function Carrer({ }: Props) {
  return (
    <div className=" max-w-[316px] relative h-[428px] rounded-xl bg-[#1A2A57] p-8">
      <div className=" space-y-3">
        <p className=" leading-4 text-[#9CADCB]">Job Title:</p>
        <p className=" font-bold text-[#F5F5F5] leading-5 text-2xl uppercase ">Customer Service Representative</p>
        <p className=" leading-4 text-[#9CADCB]">Location:</p>
        <p className=" font-bold text-[#F5F5F5] leading-5 text-2xl uppercase ">Auckland, New Zealand</p>
      </div>
      <div className="mt-40 space-y-2">
        <p className="  text-[#9CADCB]">Job posted 4 days ago</p>
        <Button className={`h-[50px] w-[221px] bg-[#1A2A57] rounded-full text-white  bold text-[20px] uppercase border-[#9CADCB] border-solid flex justify-between px-6 items-center border-[2px]`}>
          Learn More
          <span className=' bg-white rounded-full p-3 '>
            <ArrowIcon className=' h-[10px] w-[10px] fill-[#1A2A57]' />
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Carrer