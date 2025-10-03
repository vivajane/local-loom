import React from 'react'
import { Bricolage_Grotesque } from 'next/font/google'


const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], 
})
const StayConnected = () => {
  return (
    <div className={`text-center bg-[#F0E0D0] mx-auto py-12 ${bricolage.className}`}>
        <h1 className='font-extrabold text-2xl'>Stay Connected</h1>
        <p>Get exclusive offers and updates on new artisan creations</p>
        <form action="">
            <div className='bg-white w-84 mx-auto my-3 text-center  flex gap-2 px-4 rounded-md '>
                <input className='placeholder:text-[#4B2417]' type="email" name="email" id="email"  placeholder='Enter your email' />
                <button className='bg-[#4B2417] text-white flex px-4 py-1.5 my-2 rounded-md '>Subscribe</button>

            </div>
        </form>
      
    </div>
  )
}

export default StayConnected
