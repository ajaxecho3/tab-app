import React from 'react'
import { Sofia_Sans_Condensed } from 'next/font/google'
import Image from 'next/image'

const sofia = Sofia_Sans_Condensed({
  subsets: ['latin']
})

const Header = () => {
  return (
    <header className={`text-[#F5F5F5] ${sofia.className} cursor-pointer  fixed top-0 z-50  w-full  uppercase `}>
      <div className=" w-[95%] mx-auto flex flex-wrap flex-col md:flex-row items-center uppercase  ">
        <div className="bg-[#1A2A57] w-[128px] h-[97px] items-center align-middle flex">
          <Image src={'/Logo.png'} className='mx-auto' alt={'logo'} width={96} height={45} priority />
        </div>
        <nav className={`md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  space-x-20`}>
          <a className="mr-5 hover:text-gray-900">About us</a>
          <a className="mr-5 hover:text-gray-900">Social responsibility</a>
          <a className="mr-5 hover:text-gray-900">Careers</a>
          <a className="mr-5 hover:text-gray-900">News</a>
          <a className="mr-5 hover:text-gray-900">Grants</a>
          <a className="mr-5 hover:text-gray-900">Reports</a>
        </nav>
        <a className="mr-5 hover:text-gray-900">tab.co.nz</a>
      </div>




    </header>
  )
}

export default Header