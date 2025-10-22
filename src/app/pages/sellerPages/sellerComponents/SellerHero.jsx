import React from 'react'
import bg from "../../../../../public/images/sellerbg.png"
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



const SellerHero = () => {
  return (
    <div className={` pt-60 relative bg-cover bg-no-repeat w-full h-[500px] bg-center  ${bricolage.className}`}style={{backgroundImage: `url(${bg.src})`}}>
      <div className='bg-black/65 flex h-full space-y-2 w-full sm:px-10 px-6 md:px-22 text-center flex-col justify-center absolute left-0 top-0'>
      <h1 className='font-extrabold text-[#FFFFFFCC] sm:text-xl text-base md:text-2xl'>START SELLING YOUR HANDMADE CREATIONS</h1>
      <p className='text-[#FFFFFF] md:text-base sm:text-sm text-xs'>Join LocalLoom  and connect your craft with buyers</p>
      <div className="flex justify-center pt-8 pb-4 gap-4 md:gap-10">
        <div className="py-3 font-bold ">
          <button
           
            className="bg-[#3F2010]  text-center cursor-pointer text-sm sm:text-base text-[#FBF5EB] py-2 px-4 rounded-md"
          >
            GET STARTED
          </button>
        </div>
        <div className="py-3">
          <button className=" bg-[#F0E0D0] font-bold  text-center cursor-pointer text-[#4B2417] text-sm sm:text-base py-2 px-4 rounded-md">
            LEARN MORE
          </button>
        </div>
      </div>

      </div>

    
    </div>
  )
}

export default SellerHero
