"use client"
import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/images/logo.png"
import pot from "../../../../public/images/pot.png"
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import CreateAcctount from '../../SignUp/signUpComponents/CreateAcctount'
import Verification from '@/app/SignUp/signUpComponents/Verification'
import LoginComp from '@/app/components/logincomponents/LoginComp'
import ForgotPassword from '../forgotpassword/page'
import ResetOne from '@/app/components/logincomponents/ResetOne'
import GetOtp from '@/app/components/logincomponents/GetOtp'
import ResetPasword from '@/app/components/logincomponents/ResetPasword'


const Login = () => {
    const [show, setShow] = useState(1)
    const pathname = usePathname()

    const checkShow = () => {
        setShow((prev) => prev +1)
    }
  return (
    <div className='bg-[#F0E0D0] h-screen px-26 pt-6'>
        <header className='flex justify-between items-center'>
            <Image src={logo} alt="logo" width={100}   />
            <button className='bg-[#4B2417] text-white px-6 py-2 rounded-md'>Login</button>
            
        </header>
        <section className='flex justify-between gap-20'>
            <div>{show === 1 && <ResetOne  checkShow={checkShow}/> }</div>
            {/* <div>{show === 2 && <GetOtp  checkShow={checkShow}/> }</div> */}
            <div>{show === 2 && <ResetPasword  checkShow={checkShow}/> }</div>
           
            
            <div className='pt-24 flex-shrink-0'>
                <Image src={pot} alt="pot" width={400}/>
            </div>
        </section>

      
    </div>
  )
}

export default Login
