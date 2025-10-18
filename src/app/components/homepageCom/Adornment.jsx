"use client";
import React, { useContext } from "react";
import necklace from "../../../../public/images/bhnecklace.png";
import { useState, useEffect } from "react";

import { Bricolage_Grotesque } from "next/font/google";
import Product from "../Product";
import { AppContext } from "../Context";
import Loading from "../Loading";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Adornment = () => {
  // const [loading, setLoading] = useState(false);
  const { products, setCategory,loading, fetchProducts } = useContext(AppContext);
  useEffect(() => {
    setCategory("necklace");
    fetchProducts(1, 5, "necklace");
  }, []);

  const seeCategory = () => {
    setCategory("pottery");
    fetchProducts(1, 5, "pottery").then((res) => {
      console.log("Fetched Products:", res);
    });
  };

 

  return (
    <div>
      <div
        className={`${bricolage.className} relative bg-cover bg-no-repeat w-full bg-center h-[400px]`}
        style={{ backgroundImage: `url(${necklace.src})` }}
      >
        <div className="bg-black/35 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start">
          {" "}
          <h1 className="md:text-4xl lg:w-1/3 md:w-2xl w-3/4 md:leading-11 font-extrabold text-left px-4 md:px-10 text-[#FFFFFFCC] ">
            Adornment with meaning
          </h1>{" "}
          <button
            onClick={seeCategory}
            className="mt-5 mx-3 md:mx-10 px-3 md:px-6 py-3 shadow-neutral-50 shadow-md cursor-pointer bg-[#4B2417] text-[#FFFFFFCC] rounded-lg transition"
          >
            Shop Beadwork and Jewelry
          </button>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="px-4 md:px-10 bg-[#F0E0D0]  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 py-10"
      >
       
        {products && products.map((product) => {
          return (
            <div key={product.id}>
              <Product
                key={product.id}
                image={product.images?.[0]?.image}
                name={product.name}
                price={product.price}
                location={product.location}
                slug={product.slug}
                category={product.category}
                stock_quantity={product.stock_quantity}
                description={product.description}
                average_rating={product.average_rating}
                reviews={product.reviews}
                storefront={product.storefront}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Adornment;
