import React from 'react'
import { IoPersonAddOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { MdSell } from "react-icons/md";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


const works =[
    {
        id:1,
        name:"Create Acccount",
        desc : "Sign up in minutes",
        icon: IoPersonAddOutline
    },
    {
        id:2,
        name:"Upload Products",
        desc : "Share Your Craft With Pictures And Details",
        icon: FiUpload
    },
    {
        id:3,
        name:"Start Selling",
        desc : "Reach Customers And Get Paid Securely",
        icon: MdSell
    },
]
const HowItWorks = () => {
  return (
        <div className={` py-10 justify-between text-[#3F2010] grid md:grid-cols-3 grid-cols-2 gap-6  sm:px-20 px-4 md:px-38 bg-[#F0E0D0] ${manrope.className}`}>
        {
            works.map((work) => (
                <div key={work.id} className="flex space-y-2 flex-col items-center">
                    <div className="bg-[#FBF5EB] md:w-14  w-10 h-10 md:h-14 rounded-full flex items-center justify-center">
                        <work.icon className="text-[#3F2010] text-base md:text-2xl"/>
                    </div>
                    <h1 className="font-bold text-sm sm:text-base">{work.name}</h1>
                    <p className="text-xs sm:text-base md:text-lg">{work.desc}</p>
                </div>
            ))
        }
      
    </div>
  )
}

export default HowItWorks
