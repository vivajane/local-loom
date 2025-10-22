import React from 'react'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Subscribe = () => {
  return (
    <div className={` sm:px-10 px-6 flex flex-col justify-center bg-[#E3D2C1]/95  md:px-22 text-center  ${manrope.className}`}>
        <h1 className='text-xs sm:text-sm md:text-base'>Subscribe to get the latest updates & exciting offers</h1>
        <div className='py-4'>
            <div className='flex gap-2 bg-white rounded-md  mx-auto py-1.5 w-76 sm:w-80 md:w-96 items-center justify-center mt-4'>
            <input type="email" placeholder='Enter your email' className='py-2 px-3 rounded-md' />
            <button className='bg-[#3F2010] px-3 py-2 text-xs sm:text-sm md:text-base rounded-md text-white'>Subscribe</button>
        </div>
        </div>
      
    </div>
  )
}

export default Subscribe
