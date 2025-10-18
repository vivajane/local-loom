import React from 'react'
import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const PaymentSuccessful = () => {
  return (
    <div className={`sm:pt-30 pt-20 text-center sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${worksans.className}`}>
      <h1 className='font-bold text-[#171412]'>Payment Successful!</h1>
      <p className='text-[#171412] font-[400px] text-sm'>
        Your order has been placed and is being processed. You will receive an email confirmation shortly
      </p>
      <div className='flex gap-10'>
           <div className="py-3">
                <button  className="bg-[#3F2010] w-60 text-center cursor-pointer text-[#FAFAF7] py-2 px-4 rounded-md">VIEW ORDER DETAILS</button>
            </div>
               <div className="py-3">
                <button className="bg-white w-60 text-center cursor-pointer text-[#3F2010] py-2 px-4 rounded-md">TRACK ORDER</button>
            </div>

      </div>
    </div>
  )
}

export default PaymentSuccessful
