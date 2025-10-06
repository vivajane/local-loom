import React from "react";
import bgwood from "../../../../public/images/bgwood.png";
import one from "../../../../public/images/deco.png";


import necklacethree from "../../../../public/images/squarebag.png";
import two from "../../../../public/images/necklacefine.png";

import { Bricolage_Grotesque } from "next/font/google";
import Product from "../Product";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const favourites = [
  {
    id: 1,
    title: "3pcs Handmade Mugs",
    image: one,
    price: "56,000",

    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    title: "Dinner Set",
    image: two,
    price: "56,000",

    location: "Abuja, Nigeria",
  },
  {
    id: 3,
    title: "Charming Mini Pot",
    image: necklacethree,
    price: "56,000",

    location: "Osun, Nigeria",
  },

];

const Favourite = () => {
  return (
    <div className={`px-4 md:px-10 py-10 bg-[#F0E0D0]   ${bricolage.className}`}>
      <h1 className="font-extrabold py-2 text-2xl md:text-4xl text-center">
        FAVOURITE PICKS
      </h1>
      <h1 className="font-extrabold text-center">
        Discover our customers Favorite
      </h1>

      <div data-aos="fade-up" className="lg:px-60 md:px-30 sm:px-20 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-10  gap-4 py-10">
        {favourites.map((favour) => {
          return (
            <div key={favour.id}>
              <Product
                title={favour.title}
                image={favour.image}
                price={favour.price}
                location={favour.location}
              />
            </div>
          );
        })}
      </div>
      <button className="mt-5 mx-auto flex flex-col justify-center px-3 md:px-6 py-2  shadow-neutral-50 shadow-md cursor-pointer bg-[#4B2417CC] text-[#FBF5EB] rounded-lg transition">
            See More
          </button>
    </div>
  );
};

export default Favourite;
