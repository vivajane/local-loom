import React from "react";
import Image from "next/image";
import { Newsreader } from "next/font/google";
import notseen from "../../../public/images/notseen.png";
import whitecup from "../../../public/images/cups.png";
import two from "../../../public/images/two.png";
import three from "../../../public/images/three.png";
import Product from "../components/Product";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const earths = [
  {
    id: 1,
    title: "3pcs Handmade Mugs",
    image: whitecup,
    price: "56,000",
    rating: "6.5",
    reviews: "42",
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    title: "Dinner Set",
    image: two,
    price: "56,000",
    rating: "4.5",
    reviews: "22",
    location: "Abuja, Nigeria",
  },
  {
    id: 3,
    title: "Charming Mini Pot",
    image: three,
    price: "56,000",
    rating: "5",
    reviews: "20",
    location: "Osun, Nigeria",
  },
];

const NotFoundProduct = () => {
  return (
    <div
      className={`${newsreader.className} flex pt-30 flex-col justify-center  items-center bg-[#F0E0D0] gap-5`}
    >
      <div>
        <div className="py-3">
          <Image
            src={notseen}
            width={400}
            height={400}
            priority
            alt="Not Found"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-xl md:text-2xl">
            No results found
          </h1>
          <p className="text-xs md:text-sm">
            Try adjusting your search or explore our featured products
          </p>
        </div>
      </div>
      <div>
        <h1>Featured Products</h1>
      </div>
      <div className="w-full px-10 md:px-40 py-10">
        <div
        data-aos="fade-right"
        className="  bg-[#F0E0D0] hidden md:grid md:grid-cols-3 gap-10 "
      >
        {earths.map((earth) => {
          return (
            <div className="min-w-[200px]" key={earth.id}>
              <Product {...earth} />
            </div>
          );
        })}
      </div>
      <div
        data-aos="fade-right"
        className="px-10 md:px-40  bg-[#F0E0D0] flex md:hidden  gap-10 overflow-x-scroll  py-10"
      >
        {earths.map((earth) => {
          return (
            <div className="min-w-[200px]" key={earth.id}>
              <Product {...earth} />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default NotFoundProduct;
