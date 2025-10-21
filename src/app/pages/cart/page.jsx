"use client";
import React, { useState } from "react";
import { Newsreader } from "next/font/google";
import one from "../../../../public/images/deco.png";
import necklacethree from "../../../../public/images/woodentray.png";
import two from "../../../../public/images/woodenflowevase.png";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Loading from "@/app/components/Loading";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const carts = [
  {
    id: 1,
    img: one,
    name: "Necklace One",
    price: 100,
  },
  {
    id: 2,
    img: two,
    name: "Necklace Two",
    price: 200,
  },
  {
    id: 3,
    img: necklacethree,
    name: "Necklace Three",
    price: 300,
  },
];
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const increaseCount = () => {
    if (quantity >= 0) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseCount = () => {
    if (quantity >= 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  if(loading) {
    return (
      <h1>
        <Loading />
      </h1>
    );
  }

 const  onClickHandler = () => {
    setLoading(true);
  }

  return (
    <div
      className={`sm:pt-30 pt-20 sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${newsreader.className}`}
    >
      <h1 className="text-[#1C120D] font-bold py-4 text-lg ">My Cart</h1>
      <div>
        {carts.map((cart) => (
          <div className="flex space-y-6 md:space-y-0 md:gap-50 sm:gap-20 gap-10 items-center" key={cart.id}>
            <div className="md:flex flex-col items-center gap-10">
              <Image src={cart.img} alt={cart.name} width={200} height={150} />
              <div className="space-y-1">
                <h1 className="md:text-base sm:text-sm text-xs">{cart.name}</h1>
                <h1 className="text-[#94664F] d:text-base sm:text-sm text-xs">₦{cart.price}</h1>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <button
                  className="border-[#3F2010] border px-3 rounded-full aspect-square bg-[#C7B4AB]"
                  onClick={decreaseCount}
                >
                  -
                </button>
                <span className=" text-center py-1.5">{quantity}</span>
                <button
                  className="border-[#3F2010] border px-3 rounded-full aspect-square bg-[#C7B4AB]"
                  onClick={increaseCount}
                >
                  +
                </button>
              </div>

              <div>
                <MdDelete size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end py-4 ">
        <button className="px-6 py-1.5 rounded-md bg-red-800">
          Delete All
        </button>
      </div>
      <div className="bg-white px-8 py-4">
        <div className="flex justify-between">
          <h1>SubTotal</h1>
          <h1>₦7,300</h1>
        </div>
        <div className="sm:flex flex-col justify-between pt-1 pb-4 gap-4 md:gap-10">
          <div className="py-3 font-bold ">
            <Link href="/pages/checkout">
              <button onClick={onClickHandler} className="bg-[#3F2010] sm:w-46 md:w-60 text-center text-sm sm:text-base cursor-pointer text-[#FAFAF7] py-2 px-4 rounded-md">
                CHECKOUT
              </button>
            </Link>
          </div>
          <div className="py-3">
            <Link href="/pages/products">
            <button onClick={onClickHandler} className="bg-white w-30 sm:w-46 md:w-60 border font-bold border-[#3F2010] text-center cursor-pointer text-[#3F2010] text-sm sm:text-base py-2 px-4 rounded-md">
              CONTINUE SHOPPING
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
