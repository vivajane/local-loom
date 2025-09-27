"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { Bricolage_Grotesque } from "next/font/google";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";



const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
const Product = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Link href={`/product/${props.slug}`}>
      <div className={`${bricolage.className} space-y-2`}>
        <div className="relative">
          <Image src={props.image} alt={props.title} width={200} />
          <span className="absolute top-2 right-4">
            <CiHeart className="text-[#4B2417]" />
          </span>
        </div>
        <h1 className="text-sm sm:text-  font-bold">{props.title}</h1>
        <p className="text-xs sm:text-sm">₦{props.price}</p>
        <p>{props.location}</p>
        <div className="flex items-center gap-1">
          <FaStar className="text-[#F4B400]"/>
          <h1 className="text-xs sm:text-sm">{props.rating}</h1>
          <p className="text-xs sm:text-sm">({props.reviews} reviews)</p>


        </div>
      </div>
    </Link>
  );
};

export default Product;
