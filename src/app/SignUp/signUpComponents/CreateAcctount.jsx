"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Geist } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import AuthProfile from "@/app/components/AuthProfile";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import google from "../../../../public/images/google.png";
import eye from "../../../../public/images/eye.png";
import { signup } from "@/app/components/api/signup";
import { IoHome } from "react-icons/io5";
import { toast } from "react-toastify";

const CreateAcctount = ({ setLoading, checkShow }) => {
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("role");
    setUser(storedUser);
  },[])

  const router = useRouter();
  
  const onChangeHandler = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
    console.log(details);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = localStorage.getItem("role");
    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };
    if (user === "BUYER") {
      if (!validateEmail(details.email)) {
        toast.error("Invalid Email Format");
        setLoading(false);
        return;
      }
    } else {
      if (!details.phone_number) {
        toast.error("Phone number is required");
        setLoading(false);
        return;
      }
    }

    if (!details.full_name) {
      toast.error("Full Name is required");
      setLoading(false);
      return;
    }
    if (!details.password) {
      toast.error("Password is required");
      setLoading(false);
      return;
    }
    try {
      const payLoad = {
        role: user,
        full_name: details.full_name,
        password: details.password,
        ...(user === "BUYER" && { email: details.email }),
        ...(user === "ARTISAN" && { phone_number: details.phone_number }),

      };

      const response = await signup(payLoad);
      setLoading(false);
      if (!response) {
        return;
      }

      if (response?.status === 200 || response?.status === 201)
        localStorage.setItem("email", details.email);
      checkShow();
    } catch (error) {
      console.log(error, "from sign up page");
    }
  };

  return (
    <div className="pt-10">
      <AuthProfile title="Create Account" />

      <form onSubmit={onSubmitHandler} className="space-y-4 py-6 w-full">
        <input
          onChange={onChangeHandler}
          value={details.full_name}
          className="bg-white py-2 px-4 rounded-md w-full"
          type="text"
          name="full_name"
          placeholder="Full Name"
          id="full_name"
        />

        {user === "BUYER" ? (
          <input
            onChange={onChangeHandler}
            value={details.email}
            className="bg-white py-2 px-4 rounded-md w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        ) : (
          <input
            onChange={onChangeHandler}
            value={details.phone_number}
            className="bg-white py-2 px-4 rounded-md w-full"
          type="tel"
            name="phone_number"
            id="phone_number"
            placeholder="Enter Your Number"
          />
        )}
        <input
          onChange={onChangeHandler}
          className="bg-white py-2  px-4 rounded-md w-full"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button className="bg-[#4B2417] text-white px-4 py-2 mt-3 rounded-md w-full">
          Create Account
        </button>
        <p className="text-center">Or</p>
        <button className="bg-[#FFFFFF] text-center gap-2 justify-center flex items-center text-black px-4 py-2 rounded-md w-full">
          <span className="">
            <Image src={google} alt="google" width={18} />
          </span>
          Sign Up With Google{" "}
        </button>
        <p className="text-[#4B2417] font-[400px]">
          Already have an account ?{" "}
          <Link className="text-[#4B2417] font-bold" href="/pages/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CreateAcctount;
