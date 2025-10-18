"use client"
import React, { useContext, useState } from "react";
import one from "../../../../public/images/deco.png";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import necklacethree from "../../../../public/images/woodentray.png";
import two from "../../../../public/images/woodenflowevase.png";

import { Work_Sans } from "next/font/google";
import { FaCaretUp, FaRegUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";
import Product from "@/app/components/Product";
import { AppContext } from "@/app/components/Context";
import Loading from "@/app/components/Loading";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const earths = [
  {
    id: 1,
    title: "3pcs Handmade Mugs",
    image: one,
    price: "56,000",
    rating: "6.5",
    reviews: "42",
    location: "Lagos, Nigeria",
    show: true,
  },
  {
    id: 2,
    title: "Dinner Set",
    image: two,
    price: "56,000",
    rating: "4.5",
    reviews: "22",
    location: "Abuja, Nigeria",
    show: true,
  },
  {
    id: 3,
    title: "Charming Mini Pot",
    image: necklacethree,
    price: "56,000",
    rating: "5",
    reviews: "20",
    location: "Osun, Nigeria",
    show: true,
  },
];

const CheckOut = () => {
  const [loading, setLoading ] = useState(false)
  const router = useRouter()
  const ProceedToPayment =() => { 
    setLoading(true)
    setTimeout(() => {
      router.push("/pages/payment");
    }, 1000);
  }
  if(loading) return <h1><Loading/></h1>
  return (
    <div
      className={`sm:pt-30 pt-20 sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${worksans.className}`}
    >
      <div className="py-6">
        <h1 className="font-semibold text-[#8A7361]">
          Cart <span className="font-extrabold text-[#3F2010]">/Checkout</span>
        </h1>
      </div>
      <div>
        <h1 className="font-extrabold text-[#3F2010]">Shipping Information</h1>

        <form className="md:flex  text-[#3F2010]  font-semibold w-full gap-20">
          <div className="space-y-3 pt-3">
            <div className="space-y-3">
              <label className="" htmlFor="name">
                Name
              </label>
              <input
                className="py-1.5 my-1 w-full placeholder:px-6 bg-white  rounded-lg"
                type="text"
                name="name"
                id="name"
                placeholder="Kosi  Ojiteli"
              />
            </div>
            <div className="space-y-3">
              <label className="" htmlFor="address">
                Shipping Address
              </label>
              <input
                className="py-1.5 my-1 w-full placeholder:px-6 bg-white  rounded-lg"
                type="text"
                name="address"
                id="address"
                placeholder="4 Lagos Island"
              />
            </div>
            <div>
              <label htmlFor="country">State</label>
              <select
                className="py-1.5 my-1 w-full placeholder:px-6 bg-white rounded-lg"
                name="state"
                id="state"
              >
                <option className="" value="Nig">
                  Enugu
                </option>
                <option value="Nig">Abia</option>
                <option value="Nig">Lagos</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 pt-3">
            <div>
              <label htmlFor="tel">Phone</label>
              <input
                className="py-1.5 my-1 w-full placeholder:px-6 bg-white rounded-lg"
                type="tel"
                name="tel"
                id="tel"
                placeholder="+234-81"
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <select
                className="py-1.5 my-1 w-full placeholder:px-6 bg-white rounded-lg"
                name="country"
                id="country"
              >
                <option value="Nig">Nigeria</option>
                <option value="Nig">Ghana</option>
                <option value="Nig">USA</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">City</label>
              <input
                className="py-1.5 my-1 w-full placeholder:px-6 bg-white rounded-lg"
                type="text"
                name="city"
                id="city"
                placeholder="Lekki"
              />
            </div>
          </div>
        </form>
        <div className="py-6">
          <h1 className="font-extrabold">
            Item Details <span className="font-bold">(3)</span>
          </h1>
          <div className="flex w-1/2 gap-6 py-6">
            {earths.map((earth) => {
              return (
                <div key={earth.id}>
                  <Product {...earth} />
                </div>
              );
            })}
          </div>
          <h1 className="font-bold text-[#3F2010]">Shipping Method</h1>
          <div className="space-y-5 py-4">
            <div className="flex gap-2">
              <div>
                <FaRegCircleDot className="text-[#3F2010] text-2xl" size={20} />
              </div>
              <div>
                <h1>Standard</h1>
                <h1>₦3000</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <FaRegCircleDot className="text-[#3F2010] text-2xl" size={20} />
              </div>
              <div>
                <h1>Express</h1>
                <h1> ₦6000</h1>
              </div>
            </div>
          </div>
          <div className="py-2">
            <h1 className="font-bold text-[#3F2010]">Order Summary</h1>
            <div className="flex space-y-3 py-3 gap-5">
              <div>
                <h1>Item(s) Price</h1>
                <h1 className="text-[#8A7361]">₦16,500</h1>
              </div>
              <div>
                <h1>Shipping Price</h1>
                <h1 className="text-[#8A7361]">₦3,500</h1>
              </div>
            </div>
            <div className="py-3">
              <h1>Total</h1>
              <h1 className="text-[#8A7361]">₦3,500</h1>
            </div>
            <h1 className="font-extrabold">Ship To:</h1>
            <div className=" py-6">
              <button onClick={ProceedToPayment} className="w-60 flex justify-center rounded-md bg-[#4B2417] text-center text-white py-1.5 px-3 cursor-pointer">Proceed To Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
