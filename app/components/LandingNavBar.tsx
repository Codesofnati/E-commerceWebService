import Image from 'next/image'
import React from 'react'

const LandingNavBar = () => {
  return (
    <div className='fixed top-0 left-0 z-50 backdrop-blur-md bg-opacity-90
 flex shadow-xl w-screen h-23 bg-linear-to-r from-orange-400  via-amber-400 to-amber-500 '>
      <Image
      alt='Logo'
      src="/logoone.png"
      width={52}
      height={40}
      className='flex self-center ml-9'
      />
    </div>
  )
}

export default LandingNavBar