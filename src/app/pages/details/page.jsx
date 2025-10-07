import React from 'react'
import { Noto_Serif } from 'next/font/google'
import flower from "../../../../public/images/flowervase.png"
import Image from 'next/image'
const noto = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
 
const DetailsP = () => {
  return (
    <div className={`${noto.className} w-full md:px-30 sm:px-10 px-6 flex pb-10 pt-40`}>
      <div className=' md:w-1/2'>
        <Image src={flower} alt="flower"  width={400} height={300} />
      </div>
      <div className='flex md:w-1/2 flex-col gap-5 py-3'>
        <h1 className='text-[#3F2010]font-bold md:text-2xl'>Minimalist 3D printed Vase</h1>
        <p className='text-[#877063] text-xs md:text-sm'>This minimalist 3D printed vase is handcrafted by skilled artisans in the heart of Lagos, Italy. Its unique design  make it a perfect addition to any home decor.</p>
        <h1 className='text-[#3F2010] font-[400]'>
            SKU: <span className=''>123456789</span>
        </h1>
        <p className='text-[#3F2010] font-[400]'>Handcrafted in Lagos, Nigeria</p>
      </div>
    </div>
  )
}

export default DetailsP
