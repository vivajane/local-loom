"use client";
import React from "react";
import { useState } from "react";
import headerImg from "../../../../public/images/header.png";
import { Bricolage_Grotesque } from "next/font/google";
import { useRouter } from "next/navigation";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Step = () => {
    const router = useRouter();
  const onClickBuyer = () => {
    router.push("/pages/products");
    localStorage.setItem("role", "BUYER");
  };
  const onClickArtisan = () => {
    router.push("/pages/signup");
    localStorage.setItem("role", "ARTISAN");
  };
  return (
    <div
      className={`${bricolage.className} relative  py-40 bg-cover bg-no-repeat w-full bg-center h-[500px]`}
      style={{ backgroundImage: `url(${headerImg.src})` }}
    >
      <div className="bg-black/35 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start">
        {" "}
        <h1 className="md:text-4xl lg:w-1/2 md:w-2xl w-3/4 md:leading-11 font-extrabold text-left px-10 text-[#FFFFFFCC] ">
          STEP INTO A WORLD OF HANDMADE BEAUTY, WHERE EVERY ITEM TELLS A STORY
        </h1>{" "}
        <div className="sm:flex px-10 justify-center space-x-4 mt-8">
          <button
            onClick={onClickBuyer}
            className="mt-5 px-3 md:px-6 py-3 shadow-neutral-50 hover:text-[#4B2417] hover:bg-[#F0E0D0] shadow-md cursor-pointer bg-[#4B2417] text-[#FFFFFFCC] rounded-lg transition"
          >
            SHOP NOW
          </button>
          <button
            onClick={onClickArtisan}
            className="mt-5 px-3 md:px-6 py-3 border hover:shadow-neutral-50 hover:text-[#F0E0D0] hover:bg-[#4B2417] border-[#4B2417] cursor-pointer hover:shadow-md bg-[#F0E0D0] text-[#4B2417] rounded-lg transition"
          >
            SELL ON LOCALLOOM
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default Step;
