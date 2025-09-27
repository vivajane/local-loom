import React from "react";
import whitecup from "../../../../public/images/cups.png";
import two from "../../../../public/images/two.png";
import three from "../../../../public/images/three.png";
import four from "../../../../public/images/four.png";
import cupswhite from "../../../../public/images/cupwhites.png";

import { Bricolage_Grotesque } from "next/font/google";
import Product from "../Product";

const bricolage = Bricolage_Grotesque({
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
  {
    id: 4,
    title: "5pcs Stoneware",
    image: four,
    price: "56,000",
     rating: "3.5",
    reviews: "10",
    location: "Lagos, Nigeria",
  },
  {
    id: 5,
    title: "Large Ceramic Bowl",
    image: cupswhite,
    price: "56,000",
    rating: "4.5",
    reviews: "12",
    location: "Lagos, Nigeria",
  },
];

const Earth = () => {
  
  return (
    <div>
      <div
        className={`${bricolage.className} relative bg-cover bg-no-repeat w-full bg-center h-[400px]`}
        style={{ backgroundImage: `url(${whitecup.src})` }}
      >
        <div className="bg-black/35 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start">
          {" "}
          <h1 className="md:text-4xl lg:w-1/3 md:w-2xl w-3/4 md:leading-11 font-extrabold text-left px-10 text-[#FFFFFFCC] ">
            EARTH MEET ARTS. MOULDED WITH CARE
          </h1>{" "}
          <button className="mt-5 mx-10 px-3 md:px-6 py-3 shadow-neutral-50 shadow-md cursor-pointer bg-[#4B2417] text-[#FFFFFFCC] rounded-lg transition">
            Shop Pottery and Ceramics
          </button>
        </div>
      </div>
      <div className="px-10 bg-[#FBF5EB]  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 py-10">
        {
          earths.map((earth) => {
            return (
              <div key={earth.id}>
                <Product {...earth} />

              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Earth;


