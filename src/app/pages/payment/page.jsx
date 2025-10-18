"use client"
import React, { useContext, useState } from "react";
import { Newsreader } from "next/font/google";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Payment = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const handlePayment=() => {
        setLoading(true)
        setTimeout(() => {
            router.push("/pages/paySuccess");
        })

    }
    if(loading) return <h1><Loading/></h1>
  return (
    <div
      className={`sm:pt-30 pt-20 sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${newsreader.className}`}
    >
      <div className="py-6">
        <h1 className="font-semibold text-[#8A7361]">
          Cart <span className="font-extrabold text-[#3F2010]">/Checkout</span>
        </h1>
        <h1 className="font-extrabold py-2 text-[#3F2010] text-xl">Payment</h1>
        <h1 className="text-sm py-2">Order Summary</h1>
        <div>
            <div className="flex justify-between space-y-3 items-center">
                <ul className="space-y-3 text-[#94664F]">
                    <li className="">Item Price</li>
                    <li>Shipping</li>
                    <li>Total</li>
                </ul>
                <ul className="space-y-3 text-[#94664F]">
                    <li>₦120,000</li>
                    <li>₦3500</li>
                    <li>₦165,000</li>
                </ul>
            </div>
            <h1 className="font-bold pt-3 text-[#3F2010]">Payment Method</h1>
            <div className="flex py-2 items-center gap-4">
                <FaRegCircleDot/>
                <h1>Pay with Card</h1>
            </div>
            <div className="py-3 text-[#3F2010]">
                <label htmlFor="">Card Number</label>
                <div className="w-full py-1">
                    <input className="placeholder:px-4 placeholder:text-[#94664F] w-60 rounded-md py-1.5 bg-white" type="text" placeholder="card number" name="cardno" id="cardno" />
                </div>
                
            </div>
            <div className="md:flex gap-6">
                <div className="py-3 text-[#3F2010]">
                <label htmlFor="">Expiry Date</label>
                <div className="w-full py-1">
                    <input className="placeholder:px-4 placeholder:text-[#94664F] w-60 rounded-md py-1.5 bg-white" type="date" placeholder="expiry date" name="expiry" id="expiry" />
                </div>
                
            </div>
            <div className="py-3 text-[#3F2010]">
                <label htmlFor="">CVV</label>
                <div className="w-full py-1">
                    <input className="placeholder:px-4 placeholder:text-[#94664F] w-60 rounded-md py-1.5 bg-white" type="text" placeholder="cvv" name="cvv" id="cvv" />
                </div>
                
            </div>

            </div>
            <div className="flex gap-2 items-center">
                <input type="checkbox" name="save" id="save" />
                <label htmlFor="save">Save Card Details</label>
            </div>
            <h1 className="text-[#3F2010] font-bold py-2">
                Pay With  USSD Or Bank Transfer
            </h1>
             <div className="flex py-2 items-center gap-4">
                <FaRegCircleDot/>
                <h1>Bank Transfer</h1>
            </div>
             <div className="flex py-2 items-center gap-4">
                <FaRegCircleDot/>
                <h1>MonnifyUSSD</h1>
            </div>
            <div className="py-3">
                <button onClick={handlePayment} className="bg-[#3F2010] w-60 text-center cursor-pointer text-[#FAFAF7] py-2 px-4 rounded-md">Pay Now</button>
            </div>
            <p className="text-sm text-[#3F2010]">Please note: We will never ask for your password, CVV, or card details over phone or email</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
