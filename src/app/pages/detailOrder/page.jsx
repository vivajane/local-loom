"use client"
import React from "react";
import { Work_Sans } from "next/font/google";
import one from "../../../../public/images/deco.png";
import two from "../../../../public/images/woodenflowevase.png";
import necklacethree from "../../../../public/images/woodentray.png";
import Product from "@/app/components/Product";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

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

const OrderDetail = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onClickHandler = () => {
        setLoading(true);
        router.push("/pages/track")
    }
    if (loading) {
        return (
          <div className="">
            <Loading />
          </div>
        );
      }
  return (
    <div
      className={`sm:pt-34 pt-30 text-xs sm:text-sm md:text-base text-left space-y-4  sm:px-10 px-6 md:px-32 bg-[#F0E0D0] ${worksans.className}`}
    >
      <div className="space-y-2">
        <h1 className="font-bold text-[#3F2010] ">Order Successful</h1>
        <p className="text-[#8A7361]">
          Thank you, your order has been placed. You will receive an email
          confirmation shortly
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-[#3F2010] text-sm ">Order Number</h1>
        <p className="text-[#8A7361]">12345678</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-[#3F2010] text-sm ">Order Total</h1>
        <p className="text-[#8A7361]">$125.00</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-[#3F2010] text-sm ">Order Summary</h1>
        <p className="text-[#8A7361]">
          Order Total: <span> $125.00</span>
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-[#3F2010] text-sm ">Ship To:</h1>
        <p className="text-[#8A7361]">Kosi Ojiteli</p>
        <h1 className="font-bold text-[#3F2010] text-sm ">123 Maple Street</h1>
        <p className="text-[#8A7361]">Anytown, CA 91234</p>
      </div>
      <div>Change Address</div>
      <div className="font-bold pb-3">
        <h1>
          Items <span>(3)</span>
        </h1>
      </div>
      <div data-aos="fade-up" className=" grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-10  gap-4 py-10">
        {favourites.map((fav) => {
            return (
                <Product key={fav.id} title= {fav.title} image={fav.image} />
            )
        })}

      </div>
      <div className="mspace-y-2">
        <h1 className="font-bold text-[#3F2010] text-sm md:text-sm ">Payment Details</h1>
        <p className="text-[#8A7361]">Order Total</p>
        <p className="text-[#8A7361]">₦123,500</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-[#3F2010] text-sm md:text-sm ">Payment Method</h1>
        <p className="text-[#8A7361]">Bank Transfer</p>
       
      </div>
      <div className="flex justify-left pt-1 pb-4 gap-4 md:gap-10">
        <div className="py-3 font-bold ">
          <button onClick={onClickHandler}
            
            className="bg-[#3F2010] w-3w sm:w-46 md:w-60 text-center cursor-pointer text-[#FAFAF7] py-2 px-4 rounded-md"
          >
            TRACK ORDER
          </button>
        </div>
        <div className="py-3">
          <button className="bg-white w-38 sm:w-46 md:w-60 border font-bold border-[#3F2010] text-center cursor-pointer text-[#3F2010] py-2 px-4 rounded-md">
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
