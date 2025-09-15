import React from 'react'
import AuthProfile from '../AuthProfile'

const GetOtp = ({title, checkShow}) => {
  return (
    <div className='pt-10 px-0'>
        <AuthProfile title="Reset Password"/>
        <p className='text-[#4B2417] text-sm'>We sent a code to mari********@gmail.com</p>
        <div className='flex py-6 gap-2'>
            <input className='bg-white py-2  rounded-md w-10' type="text"  />
            <input className='bg-white py-2  rounded-md w-10' type="text"  />
            <input className='bg-white py-2  rounded-md w-10' type="text"  />
            <input className='bg-white py-2  rounded-md w-10' type="text"  />
            <input className='bg-white py-2  rounded-md w-10' type="text"  />
        </div>
        <p>I didn’t receive a code <span className='font-[800] text-[#4B2417]'><Link  href="/resend">Resend</Link></span></p>
      
    </div>
  )
}

export default GetOtp
