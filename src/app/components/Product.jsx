"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { Bricolage_Grotesque } from "next/font/google";
import { FaStar } from "react-icons/fa";
import { usePathname } from "next/navigation";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const Product = (props) => {
  const pathname = usePathname();
  const hiddenPage = pathname.startsWith("/pages/products");
  console.log("🔍 Product images data:", props.images);

 

  return (
    <Link href={`/product/${props.slug ?? props.id}`}>
      <div className={`${bricolage.className} space-y-2`}>
        <div className="relative hover:scale-105 duration-300">
          <Image
            src={props.image || "/images/deco.png"}
            alt={props.name || "product image"}
            width={400}
            height={400}
            priority
            // If it's a local path (starts with "/") disable optimization to avoid build-time issues
            unoptimized={
              typeof imageSrc === "string" && imageSrc.startsWith("/")
            }
            className="object-cover rounded-md"
          />
          <span className="absolute top-2 right-4">
            <CiHeart className="text-[#0f0907]" />
          </span>
        </div>

        <h1 className="text-sm font-bold">{props.name}</h1>
        <p className="text-xs sm:text-sm">₦{props.price}</p>

        <div className="flex items-center text-xs gap-1">
          <FaStar className="text-[#F4B400] text-xs" />
          <span className="text-xs sm:text-sm">
            {props.average_rating ?? 0}
          </span>
          {Array.isArray(props.reviews) && (
            <span className="text-[10px] text-gray-500">
              {" "}
              ({props.reviews.length})
            </span>
          )}
        </div>

        {hiddenPage && (
          <button className="text-xs bg-[#4B2417] text-white px-2 py-1 rounded-md">
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default Product;
