"use client";
import React from "react";
import { Geist } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import AuthProfile from "@/app/components/AuthProfile";
import Link from "next/link";
import Image from "next/image";
import google from "../../../../public/images/google.png";
import eye from "../../../../public/images/eye.png";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { login } from "../api/login";
import { getProfile } from "../api/profile";
import { toast } from "react-toastify";
import { ForgottenPassword } from "../api/forgotPassword";

const LoginComp = ({ title, checkShow, loading, setLoading }) => {
  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const router = useRouter();

  const onChangeHandler = (e) => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!detail.email || !detail.password) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true);
      const payLoad = {
        identifier: detail.email,
        password: detail.password,
      };

      const response = await login(payLoad);
      if (!response) {
        toast.error("Invalid Credentials");
        setLoading(false);
        return;
      }
      toast.success("Login successful");
      router.push("/");

      if (response.status === 200 || response.status === 201) {
        const { access, refresh } = response.data;

        // store tokens first
        if (keepMeSignedIn) {
          localStorage.setItem("access", access);
          localStorage.setItem("refresh", refresh);
        } else {
          sessionStorage.setItem("access", access);
          sessionStorage.setItem("refresh", refresh);
        }

        // fetch profile
        const profile = await getProfile(access);

        // save role/email from profile
        localStorage.setItem("role", profile.role);
        localStorage.setItem("email", profile.email);

        console.log("Profile loaded:", profile);
      }
    } catch (error) {
      console.log(error, "from login");
    } finally {
      setLoading(false);
    }
  };

  // for Forgotten Password

  const ForgottenPassword = async () => {
    try {
      const response = await ForgottenPassword(detail.email);
    } catch (error) {}
  };

  return (
    <div className="pt-20">
      <AuthProfile title="Login" />
      <form onSubmit={onSubmitHandler} className="space-y-4 py-6 w-full">
        <input
          onChange={onChangeHandler}
          className="bg-white py-2 px-4 rounded-md w-full"
          type="email"
          name="email"
          id="email"
          value={detail.email}
          placeholder="Email"
        />
        <input
          onChange={onChangeHandler}
          className="bg-white py-2  px-4 rounded-md w-full"
          type="password"
          name="password"
          id="password"
          value={detail.password}
          placeholder="Password"
        />
        <div className=" text-xs flex justify-between">
          <div className="flex lg:gap-2 gap-1">
            <input
              type="checkbox"
              value={keepMeSignedIn}
              onChange={(e) => setKeepMeSignedIn(e.target.checked)}
              name="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox">Keep me signed in</label>
          </div>
          <Link href="/pages/forgotpassword">Forgot Password</Link>
        </div>
        <button className="bg-[#4B2417] text-white px-4 py-2 mt-3 rounded-md w-full">
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
