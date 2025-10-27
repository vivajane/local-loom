"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Bricolage_Grotesque } from "next/font/google";
import { FaStar } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { seeCart } from "./api/cart";
import Loading from "./Loading";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Product = (props) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const addToCart = async () => {
    setLoading(true);
    try {
      const res = await seeCart(props.id);
      setCart(res);
      toast.success("Item added to cart");
      setLoading(false);
    } catch (error) {
      console.log("error from cart ");
    } finally {
      setLoading(false);
    }
  };
  const pathname = usePathname();
  const hiddenPage = pathname.startsWith("/pages/products");
  console.log("🔍 Product images data:", props.image);

  const onClickHandler = () => {
    setLoading(true);
  }

  if(loading){
    return <div><Loading/></div>
  }

  return (
    <div className={`${bricolage.className} space-y-2`}>
      <Link onClick={onClickHandler} href={`/product/${props.slug ?? props.id}`}>
        <div className="relative hover:scale-105 duration-300">
          <Image
            src={props.image || "/images/deco.png"}
            alt={props.name || "product image"}
            width={400}
            height={400}
            priority
            unoptimized={
              typeof imageSrc === "string" && imageSrc.startsWith("/")
            }
            className="object-cover rounded-md"
          />
          <span className="absolute top-2 right-4">
            <CiHeart className="text-[#0f0907]" />
          </span>
        </div>
      </Link>

      <h1 className="text-sm font-bold">{props.name}</h1>
      <p className="text-xs sm:text-sm">{props.price}</p>
      <p className="text-xs sm:text-sm">{props.location}</p>

      <div className="flex items-center text-xs gap-1">
        <FaStar className="text-[#F4B400] text-xs" />
        <span>{props.average_rating ?? 0}</span>
        {Array.isArray(props.reviews) && (
          <span className="text-[10px] text-gray-500">
            ({props.reviews.length})
          </span>
        )}
      </div>

      {hiddenPage && (
        <button
          onClick={addToCart}
          className="text-xs bg-[#4B2417] text-white px-2 cursor-pointer py-1 rounded-md"
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      )}
    </div>
  );
};

export default Product;
