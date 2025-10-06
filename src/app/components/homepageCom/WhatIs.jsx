import React from "react";
import brownbasket from "../../../../public/images/brownbasket.png";
import tree from "../../../../public/images/tree.png";
import { Bricolage_Grotesque } from "next/font/google";
import { Manrope } from "next/font/google";
import { FaPiedPiperSquare } from "react-icons/fa";
import Image from "next/image";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const WhatIs = () => {
  return (
    <div
      className={`text-[#4B2417] md:flex block  pt-2 pb-10 px-4 md:px-10  items-center justify-between w-full bg-[#866054cc] ${bricolage.className}`}
    >
      <div className=" ">
        <div className="space-y-2 text-center mx-auto">
          <h1 data-aos="fade-right" className="font-extrabold text-2xl">WHAT IS LOCALLOOM?</h1>
          <p className={`font-bold text-base ${manrope.className}`}>
            Every thread tells a story
          </p>
        </div>
        <div className="grid lf:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-6 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base">CELEBRATING CRAFTMANSHIP</h1>
              <FaPiedPiperSquare />
            </div>
            <p className="text-xs">
              LocalLoom is an online marketplace where skilled artisans connect
              with the world, sharing their one-of-a-kind creations. From
              pottery to handwoven baskets, we give local talent the platform
              they deserve.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base">SUPPORT LOCAL ARTISANS</h1>
              <FaPiedPiperSquare />
            </div>
            <p className="text-xs">
              LocalLoom is an online marketplace where skilled artisans connect
              with the world, sharing their one-of-a-kind creations. From
              pottery to handwoven baskets, we give local talent the platform
              they deserve.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base">CRAFTED WITH CARE</h1>
              <FaPiedPiperSquare />
            </div>
            <p className="text-xs">
              LocalLoom is an online marketplace where skilled artisans connect
              with the world, sharing their one-of-a-kind creations. From
              pottery to handwoven baskets, we give local talent the platform
              they deserve.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image src={tree} alt="tree" width={500} />
      </div>
    </div>
  );
};

export default WhatIs;
