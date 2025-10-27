"use client";
import { AppContext } from "@/app/components/Context";
import Loading from "@/app/components/Loading";
import React, { use, useContext } from "react";
import { useState, useEffect } from "react";
import Product from "@/app/components/Product";
import { useParams } from "next/navigation";

const Category = ({params}) => {
  const {
    products,
    fetchProducts,
    setCategory,
    loading,
  } = useContext(AppContext);
//   const { slug } = use(params);
  const { slug } = useParams();


  useEffect(() => {
    setCategory(slug);
    fetchProducts(1, 5, slug).then((res) => {
      console.log("Fetched Products:", res);
    });
  }, [slug]);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!slug) return null;

  return (
    <div className="px-4 md:px-10 py-30">
      <h1 className="text-3xl font-bold mb-8 capitalize">{slug}</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10">
        {products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product.id}
              image={product.images?.[0]?.image}
              name={product.name}
              price={product.price}
              slug={product.slug}
              category={product.category}
            />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
