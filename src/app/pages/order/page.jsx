import React from 'react'
import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const Order = () => {
  return (
    <div className={`sm:pt-30 pt-20 sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${worksans.className}`}>
      Order
    </div>
  )
}

export default Order
