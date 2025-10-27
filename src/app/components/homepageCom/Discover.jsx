"use client";
import React, { useContext } from "react";
import bgbasket from "../../../../public/images/bgbasket.png";
import { Bricolage_Grotesque } from "next/font/google";
import Product from "../Product";
import { useState, useEffect } from "react";
import { AppContext } from "../Context";
import Loading from "../Loading";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Discover = () => {
  const [loading, setLoading] = useState(false);
  const { products, setCategory, category, fetchProducts } =
    useContext(AppContext);

  useEffect(() => {
    const categoryName = "baskets";
    setCategory(categoryName);
    fetchProducts(1, 5, categoryName);
  }, []);
  if (loading) return <Loading />;

  return (
    <div>
      <div
        className={`${bricolage.className} relative bg-cover bg-no-repeat w-full bg-center h-[400px]`}
        style={{ backgroundImage: `url(${bgbasket.src})` }}
      >
        <div className="bg-black/35 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start">
          {" "}
          <h1 className="md:text-4xl lg:w-1/2 md:w-2xl w-3/4 md:leading-11 font-extrabold text-left px-4 md:px-10 text-[#FFFFFFCC] ">
            DISCOVER WOODEN WONDER
          </h1>{" "}
        <Link href="/category/baskets">
          <button className="mt-5 mx-3 md:mx-10 px-3 md:px-6 py-3 shadow-neutral-50 shadow-md cursor-pointer bg-[#4B2417] text-[#FFFFFFCC] rounded-lg transition">
            Shop Basket and Cane
          </button>
        </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="px-4 md:px-10 bg-[#F0E0D0]  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 py-10"
      >
        {products &&
          products.map((product) => {
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

export default Discover;
