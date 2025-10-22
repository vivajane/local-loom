import React from "react";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Ready = () => {
  return (
   <div className="">
     <div
      className={`py-8 sm:px-10 px-6  bg-[#E3D2C1]/95  md:px-22 text-center  ${manrope.className}`}
    >
      <div className="space-y-3 md:w-1/2  mx-auto">
        <h1 className="font-extrabold md:text-2xl text-base sm:text-lg ">
          Ready to Share Your Craft?
        </h1>
        <p className="text-xs sm:text-sm md:text-base">
          Join LoocalLoom today and start your journey towards turning your
          passion into a profitable venture
        </p>
        <div className="flex  py-3 gap-2.5 justify-center md:gap-8 items-center">
          <div className="bg-[#4B2417] rounded-md text-white">
            <Link href="/pages/signup">
              <button className="px-2 text-xs sm:text-sm md:text-base cursor-pointer py-1.5">Get Started</button>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-xs sm:text-sm md:text-base">Already have an account?</p>
            <span className="text-[#94664F]">
              <Link className="cursor-pointer" href="/pages/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Ready;
