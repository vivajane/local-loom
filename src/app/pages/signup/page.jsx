"use client"
import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/images/logo.png"
import pot from "../../../../public/images/pot.png"
import { useState } from 'react'
import CreateAcctount from '../../SignUp/signUpComponents/CreateAcctount'
import Verification from '@/app/SignUp/signUpComponents/Verification'
import Link from 'next/link'


const SignUp = () => {
    const [show, setShow] = useState(1)

    const checkShow = () => {
        setShow((prev) => prev +1)
    }
  return (
    <div className='bg-[#F0E0D0] h-screen px-26 pt-6'>
        <header className='flex justify-between items-center'>
            <Image src={logo} alt="logo" width={100}   />
            <button className='bg-[#4B2417] text-white px-6 py-2 rounded-md'><Link href="/pages/login">Login</Link></button>
            
        </header>
        <section className='flex justify-between gap-20'>
            <div>{show === 1 && <CreateAcctount  checkShow={checkShow}/> }</div>
            <div>{show === 2 && <Verification checkShow={checkShow}/> }</div>
            <div className='pt-24 flex-shrink-0'>
                <Image src={pot} alt="pot" width={400}/>
            </div>
        </section>

      
    </div>
  )
}

export default SignUp
