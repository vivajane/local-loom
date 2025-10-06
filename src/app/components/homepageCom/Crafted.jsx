import React from "react";
import bgwood from "../../../../public/images/bgwood.png";
import one from "../../../../public/images/deco.png";
import forth from "../../../../public/images/lovecarrier.png";
import last from "../../../../public/images/paste.png";

import necklacethree from "../../../../public/images/woodentray.png";
import two from "../../../../public/images/woodenflowevase.png";




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
    image: one,
    price: "56,000",
     rating: "6.5",
    reviews: "42",
    location: "Lagos, Nigeria",
    show: true
  },
  {
    id: 2,
    title: "Dinner Set",
    image: two,
    price: "56,000",
     rating: "4.5",
    reviews: "22",
    location: "Abuja, Nigeria",
    show: true
  },
  {
    id: 3,
    title: "Charming Mini Pot",
    image: necklacethree,
    price: "56,000",
     rating: "5",
    reviews: "20",
    location: "Osun, Nigeria",
    show: true
  },
  {
    id: 4,
    title: "5pcs Stoneware",
    image: forth,
    price: "56,000",
     rating: "3.5",
    reviews: "10",
    location: "Lagos, Nigeria",
    show : true
  },
  {
    id: 5,
    title: "Large Ceramic Bowl",
    image: last,
    price: "56,000",
    rating: "4.5",
    reviews: "12",
    location: "Lagos, Nigeria",
    show : true
  },
];

const Crafted = () => {
  
  return (
    <div>
      <div
        className={`${bricolage.className} relative bg-cover bg-no-repeat w-full bg-center h-[400px]`}
        style={{ backgroundImage: `url(${bgwood.src})` }}
      >
        <div className="bg-black/35 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start">
          {" "}
          <h1 className="md:text-4xl lg:w-1/2 md:w-2xl w-3/4 md:leading-11 font-extrabold text-left px-4 md:px-10 text-[#FFFFFFCC] ">
            Crafted from nature, Craved with SOUL
          </h1>{" "}
          <button className="mt-5 mx-3 md:mx-10 px-3 md:px-6 py-3 shadow-neutral-50 shadow-md cursor-pointer bg-[#4B2417] text-[#FFFFFFCC] rounded-lg transition">
            Shop Woodwork and Sculpture
          </button>
        </div>
      </div>
      <div data-aos="fade-up" className="px-4 md:px-10 bg-[#F0E0D0]  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 py-10">
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

export default Crafted;


