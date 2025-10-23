import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SetUp = () => {
  return (
    <div
      className={` pt-30   sm:px-20 px-4 md:px-38 bg-[#F0E0D0] ${inter.className}`}
    >
      <div className="text-[#0D1C1C]">
        <h1 className="text-center font-bold ">
          Your account has been verified
        </h1>
        <p className="text-xs sm:text-sm text-center">
          Set up your storefront by completing the following details
        </p>
      </div>
      <div>
        <form className="w-1/2 space-y-3">
          <div className="">
            <label htmlFor="fullname">Full name</label>
            <input className="bg-[#F7FCFC] mt-1 border w-full border-[#4B2417] px-3 py-1.5" placeholder="Enter your full name" type="text" name="fullname" id="fullname" />
          </div>
          <div className="">
            <label htmlFor="number">Phone Number</label>
            <input className="bg-[#F7FCFC] mt-1 border w-full border-[#4B2417] px-3 py-1.5" placeholder="Enter your Phone Number" type="tel" name="number" id="number" />
          </div>
          <div className="">
            <label htmlFor="fullname">Full name</label>
            <input className="bg-[#F7FCFC] mt-1 border w-full border-[#4B2417] px-3 py-1.5" placeholder="Enter your full name" type="text" name="fullname" id="fullname" />
          </div>
          <div className="">
            <label htmlFor="fullname">Full name</label>
            <input className="bg-[#F7FCFC] mt-1 border w-full border-[#4B2417] px-3 py-1.5" placeholder="Enter your full name" type="text" name="fullname" id="fullname" />
          </div>
          <div className="">
            <label htmlFor="fullname">Full name</label>
            <input className="bg-[#F7FCFC] mt-1 border w-full border-[#4B2417] px-3 py-1.5" placeholder="Enter your full name" type="text" name="fullname" id="fullname" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetUp;
