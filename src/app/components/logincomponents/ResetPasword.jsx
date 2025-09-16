import React from 'react'
import AuthProfile from '../AuthProfile'

const ResetPasword = () => {
    return (
    <div className='pt-10'>
      <AuthProfile title="Reset Password"/>
      <form className='space-y-4 py-6 w-full'>
      
        <input className='bg-white py-2  px-4 rounded-md w-full' type="password" name="password" id="password" placeholder='Password'  />
        <input className='bg-white py-2  px-4 rounded-md w-full' type="password" name="cpassword" id="cpassword" placeholder='Confirm Password'  />
        <button className='bg-[#4B2417] text-white px-4 py-2 mt-3 rounded-md w-full'>Save</button> 
       


      </form>

    </div>
  )
}

export default ResetPasword
