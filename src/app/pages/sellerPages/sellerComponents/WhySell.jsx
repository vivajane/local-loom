import React from "react";
import { Manrope } from "next/font/google";
import { IoPersonOutline } from "react-icons/io5";
import { TbTools } from "react-icons/tb";
import { LuMove3D } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sales = [
  {
    id: 1,
    title: "Reach New Customers",
    icon: IoPersonOutline,
    desc: "Connect With Buyers Who Value Authentic, Handmade, And Locally Crafted Products.",
  },
  {
    id: 2,
    icon: TbTools,
    title: "Easy-to-Use Tools",
    desc: "From Uploading Products To Managing Orders, Our Tools Are Designed For Artisans (Even With Limited Tech Experience). We Simplify The Process So Selling Is Easier.",
  },
  {
    id: 3,
    title: "Secure Payments",
    icon: RiSecurePaymentLine,
    desc: "Get Paid Directly And Safely Through Trusted Payments Method",
  },
  {
    id: 4,
    icon: LuMove3D,
    title: "Flexible Growth Options",
    desc: "Scale your business at your own pace with our supportive resources and features.",
  },
];

const WhySell = () => {
  return (
    <div
      className={` sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${manrope.className}`}
    >
      <h1 className="text-[#171412] font-extrabold sm:text-xl text-sm md:text-2xl text-center md:py-4">
        Why Sell on LocalLoom
      </h1>
      <div className="grid md:grid-cols-4 py-8 sm:grid-cols-2 grid-cols-1 gap-4">
        {sales.map((sale) => (
          <div
            className="space-y-3 shadow-2xl shadow-black border- border-black p-4 rounded-md"
            key={sale.id}
          >
            <div className=" text-center mx-auto space-y-3">
              <div className="bg-[#FBF5EB] w-10 h-10  rounded-full flex items-center justify-center">
                <sale.icon size={20} className="text-[#3F2010] " />
              </div>
              <h1 className="font-bold">{sale.title}</h1>
              <p className="sm:text-sm text-xs">{sale.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySell;
