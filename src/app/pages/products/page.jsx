"use client";
import React, { useContext, useEffect } from "react";
import { Newsreader } from "next/font/google";
import forth from "../../../../public/images/lovecarrier.png";
import last from "../../../../public/images/paste.png";

import necklacethree from "../../../../public/images/woodentray.png";
import two from "../../../../public/images/woodenflowevase.png";
import Product from "@/app/components/Product";
import { AppContext } from "@/app/components/Context";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ProductPage = () => {
  const { products, fetchProducts } = useContext(AppContext);
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products:", products);
  return (
    <div className={`${newsreader.className} bg-[#F0E0D0] sm:px-12 px-4  md:px-24 pt-30`}>
      <h1 className="text-xl pt-8 font-bold">All Products</h1>
      <div className="flex gap-10 md:overflow-hidden overflow-x-scroll py-8 md:py-10">
        <div className="bg-[#FBF5EB] p-2 border border-[#3F2010] rounded-lg px-4 py-1.5">
          <p>Sort: Price (Low to High)</p>
        </div>
        <div className="bg-[#FBF5EB] p-2 border border-[#3F2010] rounded-lg px-4 py-1.5">
          <p>Sort: Price (High to Low)</p>
        </div>
        <div className="bg-[#FBF5EB] p-2 border border-[#3F2010] rounded-lg px-4 py-1.5">
          <p>Sort: Newest</p>
        </div>
        <div className="bg-[#FBF5EB] p-2 border border-[#3F2010] rounded-lg px-4 py-1.5">
          <p>Sort: Best Selling</p>
        </div>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-10 py-10">
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              image={product.image}
       
              name={product.name}
              price={product.price}
              location={product.location}
              average_rating={product.average_rating}
              reviews={product.reviews}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
