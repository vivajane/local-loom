"use client";
import React from "react";
import { Work_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PaymentSuccessful = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/pages/detailOrder");
  };
  return (
    <div
      className={`sm:pt-30 pt-20 w-full text-center space-y-4 h-screen sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${worksans.className}`}
    >
      <h1 className="font-bold text-[#171412]">Payment Successful!</h1>
      <p className="text-[#171412] font-[400px] text-sm">
        Your order has been placed and is being processed. You will receive an
        email confirmation shortly
      </p>
      <p>
        Estimated delivery: <span>July 20</span> - <span>July 24</span>
      </p>
      <div className="flex justify-center gap-4 text-xs sm:text-sm md:text-base  md:gap-10">
        <div className="py-3 font-bold ">
          <button
            onClick={onClickHandler}
            className="bg-[#3F2010] w-40 sm:w-46 md:w-60 text-center cursor-pointer text-[#FAFAF7] py-2 px-1.5 md:px-4 rounded-md"
          >
            VIEW ORDER DETAILS
          </button>
        </div>
        <div className="py-3">
          <button className="bg-white w-32 sm:w-40 md:w-60  border font-bold border-[#3F2010] text-center cursor-pointer text-[#3F2010] px-2 py-2 md:px-4 rounded-md">
            TRACK ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
