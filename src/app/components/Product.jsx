"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { Bricolage_Grotesque } from "next/font/google";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Product = (props) => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const hidepage = "/products";
  const hiddenPage = hidepage.includes(pathname);
  return (
    <Link href={`/product/${props.slug}`}>
      <div className={`${bricolage.className} space-y-2`}>
        <div className="relative">
          <Image
            src={props.image || "/fallback.png"}
            alt={props.name}
            height={300}
            width={400}
          />
          <span className="absolute top-2 right-4">
            <CiHeart className="text-[#0f0907]" />
          </span>
        </div>
        <h1 className="text-sm sm:text-  font-bold">{props.name}</h1>
        <p className="text-xs sm:text-sm">₦{props.price}</p>
        <p>{props.location}</p>
        <div className="flex items-center justify-between flex-nowrap w-full">
          <div className="flex items-center text-xs gap-1">
            <FaStar className="text-[#F4B400] text-xs" />
            <h1 className="text-xs sm:text-sm">{props.rating}</h1>
            <p className="text-xs flex sm:text-sm">({props.reviews} reviews)</p>
          </div>
          <div>
            {!hiddenPage && (
              <button className="text-xs bg-[#4B2417] text-white px-2 py-1 rounded-md">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
