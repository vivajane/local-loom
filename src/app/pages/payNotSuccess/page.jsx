import React from "react";
import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PaymentNotSuccessful = () => {
  return (
    <div
      className={`sm:pt-30 pt-20 text-center text-xs sm:text-sm md:text-base space-y-4 h-screen sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${worksans.className}`}
    >
      <h1 className="font-bold text-center text-[#171412]">Payment Unsuccessful!</h1>
      <p className="text-[#171412] font-[400px] text-sm">
        We were unable to process your payment. Please check your payment
        details and try again, or contact support for assistance
      </p>

      <div className="flex justify-center gap-4 md:gap-10">
        <div className="py-3 font-bold ">
          <button className="bg-[#3F2010] w-36 sm:w-46 md:w-60 text-center cursor-pointer text-[#FAFAF7] py-2 px-4 rounded-md">
            RETRY PAYMENT
          </button>
        </div>
        <div className="py-3">
          <button className="bg-white w-38 sm:w-46 md:w-60 border font-bold border-[#3F2010] text-center cursor-pointer text-[#3F2010] py-2 px-4 rounded-md">
            CONTACT SUPPORT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentNotSuccessful;
