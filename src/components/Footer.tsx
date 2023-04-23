import Image from 'next/image'
import React from 'react'
import Button from './common/Button'
import ArrowIcon, { FacebookIcon, LinkedInIcon, TwitterIcon } from './common/Icon'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='h-[392px]  '>
      <div className=" flex items-center ">
        <div className='h-[392px] w-[50%] px-16 space-y-10'>
          <div className="bg-[#1A2A57] w-[183px] h-[202px] rounded-b-[20px] items-center align-middle flex ">
            <Image src={'/Logo.png'} className='mx-auto' alt={'logo'} width={96} height={45} priority />
          </div>
          <div className='w-[331px]'>
            <p className='text-[14px] text-[#1A2A57]'>
              TAB NZ is deeply ingrained in New Zealand&#39;s culture, and, by betting with TAB NZ on racing or sport, you contribute to fueling the future of racing codes and sporting organisations across New Zealand.
            </p>
          </div>
        </div>
        <div className='bg-[#1A2A57] h-[392px] w-[50%] p-20 flex justify-between text-[#FFFFFF] text-base tracking-widest'>
          <div className=' space-y-10'>
            <ul className=' uppercase'>
              <li>About US</li>
              <li>Social Responsibility</li>
              <li>Careers</li>
              <li>News</li>
              <li>Grants</li>
              <li>Reports</li>
              <li>CONTACT US</li>
            </ul>
            <p className=''>
              © 2023 - TAB New Zealand
            </p>
          </div>
          <div className=' space-y-10'>
            <ul className=' uppercase'>
              <li>Privacy policy</li>
              <li> Terms & conditions</li>
            </ul>
            <div className=' space-y-4'>
              <p className=' uppercase'>Socials</p>
              <div className='flex justify-between'>
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </div>
            </div>
            <div className='py-5'>
              <p>Created by The Web Guys</p>
            </div>
          </div>
          <div className=' space-y-5' >
            <div className='flex justify-center'>
              <Button className='bg-[#FFFFFF] w-[47px] h-[47px] rounded-full items-center flex p-3'>
                <ArrowIcon className=' -rotate-90  fill-[#1A2A57]' />
              </Button>
            </div>
            <div className='flex justify-center'>
              <p className='uppercase underline'>BACK TO TOP</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer