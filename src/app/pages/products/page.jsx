"use client";
import React, { useContext, useState, useEffect } from "react";
import { Newsreader } from "next/font/google";
import Product from "@/app/components/Product";
import { AppContext } from "@/app/components/Context";
import Loading from "@/app/components/Loading";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ProductPage = () => {
  const [page, setPage] = useState(1);
  // const [sortBy, setSortBy] = useState("price");
  // const [sortOrder, setSortOrder] = useState("asc");
  const limit = 10;
  const {
    products,
    fetchProducts,
    category,
    totalPages,
    loading,
  } = useContext(AppContext);
  useEffect(() => {
    fetchProducts(page, limit, category);
  }, [page, category]);


  console.log("Products:", products);

  if (loading) {
    return (
      <h1>
        <Loading />
      </h1>
    );
  }
  return (
    <div
      className={`${newsreader.className} bg-[#F0E0D0] sm:px-12 px-4  md:px-24 pt-30`}
    >
      <h1 className="text-xl pt-8 font-semi-bold">All Products </h1>
      <div className="flex gap-10 md:overflow-hidden overflow-x-scroll py-8 md:py-10">
        <div  className="bg-[#FBF5EB] p-2 border border-[#3F2010] rounded-lg px-4 py-1.5">
          <p>Sort: Price (Low to High)</p>
        </div>
        <div  className="bg-[#FBF5EB] p-2 border border-[#3F2010] rounded-lg px-4 py-1.5">
          <p>Sort: Price (High to Low)</p>
        </div>
        <div  className="bg-[#FBF5EB] p-2 border border-[#3F2010] rounded-lg px-4 py-1.5">
          <p>Sort: Newest</p>
        </div>
        <div className="bg-[#FBF5EB] p-2 border border-[#3F2010] rounded-lg px-4 py-1.5">
          <p>Sort: Best Selling</p>
        </div>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-10 py-10">
        {products &&
          products.map((product) => {
            return (
              <Product
                key={product.id}
                image={product.images?.[0]?.image}
                name={product.name}
                id={product.id}
                price={product.price}
                location={product.location}
                slug={product.slug}
                category={product.category}
                created_at={product.created_at}
                stock_quantity={product.stock_quantity}
                description={product.description}
                average_rating={product.average_rating}
                reviews={product.reviews}
                sales_count={product.sales_count}
                storefront={product.storefront}
              />
            );
          })}
      </div>
      <div className="flex justify-center py-10 items-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 border border-[#3F2010] rounded-md bg-[#FBF5EB]"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 border border-[#3F2010] rounded-md bg-[#FBF5EB]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
