import React from "react";
import { Geist } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import AuthProfile from "@/app/components/AuthProfile";
import Link from "next/link";
import Image from "next/image";
import google from "../../../../public/images/google.png";
import eye from "../../../../public/images/eye.png";

const LoginComp = ({ title, checkShow }) => {
  return (
    <div className="pt-10">
      <AuthProfile title="Login" />
      <form className="space-y-4 py-6 w-full">
        <input
          className="bg-white py-2 px-4 rounded-md w-full"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="bg-white py-2  px-4 rounded-md w-full"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <div className="flex justify-between">
          <div className="flex gap-4">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Keep me signed in</label>
          </div>
          <Link href="/pages/forgotpassword">Forgot Password</Link>
        </div>
        <button
          onClick={checkShow}
          className="bg-[#4B2417] text-white px-4 py-2 mt-3 rounded-md w-full"
        >
          Login
        </button>
        <p className="text-center">Or</p>
        <button className="bg-[#FFFFFF] text-center gap-2 justify-center flex items-center text-black px-4 py-2 rounded-md w-full">
          <span className="">
            <Image src={google} alt="google" width={18} />
          </span>
          Sign Up With Google{" "}
        </button>
        <p className="text-[#4B2417] font-[400px]">
          Don't have an account ?{" "}
          <Link className="text-[#4B2417] font-bold" href="/pages/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginComp;
