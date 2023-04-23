import Image from 'next/image'
import React from 'react'

type Props = {
  className?: string,
  src: string

}

const ImageCard = (props: Props) => {
  return (
    <div className={` bg-no-repeat bg-cover bg-center ${props.className}`} style={{
      backgroundImage: `url('${props.src}')`
    }} />
  )
}

export default ImageCard