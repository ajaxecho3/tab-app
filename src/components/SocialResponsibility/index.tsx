import React from 'react'

type Props = {}

const SocialResponsibility = (props: Props) => {
  return (
    <section className=' h-screen flex justify-center container mx-auto  py-28'>

      <div className='flex flex-col container mx-auto relative '>
        <div className='bg-[#E7E7E7] h-[600px] w-[1306px] rounded-xl  absolute top-0 left-40'>

        </div>
        <div className='bg-[#C0C0C5] h-[600px] rounded-xl  w-[1306px] absolute top-6 left-40'>

        </div>
        <div className='bg-[#9C9DAB] h-[600px] rounded-xl  w-[1306px] absolute top-12 left-40'>

        </div>
        <div className='bg-[#81828E] h-[600px] rounded-xl  w-[1306px] absolute top-20 left-40 p-16'>
          <div className='relative'>
            <p className='w-[637px] text-white text-2xl'>TAB NZ takes our responsibility to minimise harm seriously. Whether it’s through our Safer Betting tools, our customer support, or proactive engagement, we go beyond the minimum standards to keep Kiwis safe when placing a bet.</p>
          </div>
        </div>

      </div>
    </section >
  )
}

export default SocialResponsibility