"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();

    const onClickLogin = () => {
        router.push("/pages/login");
    }
  return (
    <div className="text-center py-20  bg-gray-200 ">
      <h1 className="text-4xl font-bold">
        This is the home page, still in progress
      </h1>
      <div className="flex justify-center space-x-4 mt-8">
        <button  onClick={onClickBuyer} className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          SignUp as a buyer
        </button>
        <button onClick={onClickArtisan} className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          SignUp as a Artisan
        </button>
        <button onClick={onClickLogin} className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default Hero;
