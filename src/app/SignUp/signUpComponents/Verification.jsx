"use client";
import AuthProfile from "@/app/components/AuthProfile";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { verifyOtp } from "@/app/components/api/verifyotp";
import { resendOtp } from "@/app/components/api/ResendOtp";
import { toast } from "react-toastify";

const Verification = ({ title }) => {
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });
  const [timer, setTimer ] = useState(60);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onChangeHandler = (e) => {
    setOtp({
      ...otp,
      [e.target.name]: e.target.value,
    });
    console.log(otp);
  };

  useEffect(() => {
    if(timer > 0){
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  },[])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const identifier = localStorage.getItem("email");
      const newOtp = Object.values(otp).join("") 

      const payLoad={
        identifier,
        otp: newOtp
      }
      const response = await verifyOtp(payLoad);
      console.log(response, "from verify otp form");
      if (response?.status === 200 || response?.status === 201) {
        router.push("/pages/login");
      }
    } catch (error) {
      console.log(error, "from verify otp form");
    }
  };

  const resendOTP = async(e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const identifier = localStorage.getItem("email")
      const response = await resendOtp(identifier) 
      if(response?.status === 200 || response?.status === 201){
        toast.success("A new OTP sent successfully")
        setTimer(60)
      }
    } catch (error) {
      console.log(error, "from resend otp")
      
    }finally{
      setLoading(false)
    }

  }
  return (
    <div className="pt-10 px-0">
      {loading && <p className="text-[#4B2417] text-sm">Loading...</p>}
      <AuthProfile title="Verification Code" />
      <p className="text-[#4B2417] text-sm">
        We have sent a verification code to your email address
      </p>
      <form onSubmit={onSubmitHandler} className="flex py-6 gap-2">
        <input
         onChange={onChangeHandler}
          className="bg-white py-2  rounded-md w-10"
          type="text"
          name="first"
          id=""
          maxLength={1}
          value={otp.first}
        />
        <input
          onChange={onChangeHandler}
          className="bg-white py-2  rounded-md w-10"
          type="text"
          name="second"
          maxLength={1}
          value={otp.second}
        />
        <input
          onChange={onChangeHandler}
          className="bg-white py-2  rounded-md w-10"
          type="text"
          name="third"
          maxLength={1}
          value={otp.third}
        />
        <input
          onChange={onChangeHandler}
          className="bg-white py-2  rounded-md w-10"
          type="text"
          name="fourth"
          maxLength={1}
          value={otp.fourth}
        />
        <input
          onChange={onChangeHandler}
          className="bg-white py-2  rounded-md w-10"
          type="text"
          name="fifth"
          maxLength={1}
          value={otp.fifth}
        />
        <input
          onChange={onChangeHandler}
          className="bg-white py-2  rounded-md w-10"
          type="text"
          name="sixth"
          maxLength={1}
          value={otp.sixth}
        />
        <button className="bg-[#4B2417] text-white px-4 py-2 mt-3 rounded-md w-full">Confirm</button>
      </form>
      <p>
        I didn’t receive a code{" "}
        <span className="font-[800] text-[#4B2417]">
          <button  onClick={resendOTP}>Resend OTP</button>
        </span>
      </p>
    </div>
  );
};

export default Verification;
