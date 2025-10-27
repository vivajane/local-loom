import React from "react";
import { Work_Sans } from "next/font/google";
import Product from "@/app/components/Product";
import one from "../../../../public/images/deco.png";
import two from "../../../../public/images/woodenflowevase.png";
import necklacethree from "../../../../public/images/woodentray.png";
import { LiaFirstOrder } from "react-icons/lia";
import { TbSettings } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const favourites = [
  {
    id: 1,
    title: "3pcs Handmade Mugs",
    image: one,
    price: "56,000",

    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    title: "Dinner Set",
    image: two,
    price: "56,000",

    location: "Abuja, Nigeria",
  },
  {
    id: 3,
    title: "Charming Mini Pot",
    image: necklacethree,
    price: "56,000",

    location: "Osun, Nigeria",
  },
];
const TrackOrder = () => {
  return (
    <div
      className={`sm:pt-34 pt-20 text-left space-y-4  sm:px-10 px-6 md:px-32 bg-[#F0E0D0] ${worksans.className}`}
    >
      <h1 className="font-extrabold md:text-lg  text-base">My Items</h1>
      <div
        data-aos="fade-up"
        className=" grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-10  gap-4 py-10"
      >
        {favourites.map((fav) => {
          return <Product key={fav.id} title={fav.title} image={fav.image} />;
        })}
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-[#8A7361] text-sm md:text-sm ">
          Order Number <span>#1234567890</span>
        </h1>
      </div>
      <div className="space-y-4">
        <div className="flex gap-2 items-center">
          <div>
            <LiaFirstOrder size={20} />
          </div>
          <div>
            <h1 className="text-[#3F2010] font-bold">Order Placed</h1>
            <h1 className="text-[#8A7361]">July 15, 2024</h1>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <FaCheck size={20} />
          </div>
          <div>
            <h1 className="text-[#3F2010] font-bold">Order Confirmed</h1>
            <h1 className="text-[#8A7361]">July 15, 2024</h1>
          </div>
        </div>
        <div className="flex gap-2 ">
          <div>
            <LiaFirstOrder size={20} />
          </div>
          <div>
            <h1 className="text-[#3F2010] font-bold">Order Processing</h1>
            <h1 className="text-[#8A7361]">July 15, 2024</h1>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <LiaFirstOrder size={20} />
          </div>
          <div>
            <h1 className="text-[#6B728063] font-bold">Order Shipped</h1>
            <h1 className="text-[#6B728063]">July 15, 2024</h1>
          </div>
        </div>
        <div className="flex gap-2 pb-5 text-[#8888885C] items-center">
          <div>
            <MdHomeFilled size={20} />
          </div>
          <div>
            <h1 className="text-[#6B728063] font-bold">Delivered</h1>
            <h1 className="text-[#6B728063]">July 15, 2024</h1>
          </div>
        </div>
      </div>
      <div className="py-4">
        <h1 className="text-[#3F2010] font-bold">Write a review</h1>
        <div className="flex py-3 flex-col justify-center-safe">
          <textarea
            rows={10}
            cols={4}
            className=" border bg-white text-black rounded-md p-2"
          ></textarea>
        </div>
        <div className="bg-[#3F2010] inline-flex justify-center mx-auto text-white font-bold"><button className="py-1.5 px-3 ">Submit review</button></div>
      </div>
      <div className="pt-6 pb-1 flex gap-6 justify-center"><h1>Need Help?<span>Contact us</span></h1> </div>
    </div>
  );
};

export default TrackOrder;
