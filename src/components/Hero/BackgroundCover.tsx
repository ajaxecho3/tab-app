import React from 'react'
import Image from 'next/image'

type Props = {}

function BackgroundCover({ }: Props) {
  return (
    <div className=' relative h-screen '>
      <Image
        src={'/Img1.jpg'}
        alt={'Hero cover Image'}
        className='z-10  object-cover'
        fill
        priority />
    </div>
  )
}

export default BackgroundCover