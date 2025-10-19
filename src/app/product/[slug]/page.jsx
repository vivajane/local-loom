"use client";
import React, { use } from "react";
import { getSlug } from "@/app/components/api/slug";
import { useState, useEffect } from "react";
import NotFoundProduct from "@/app/components/NotFoundProduct";
import Loading from "@/app/components/Loading";
import ProductDetail from "@/app/components/ProductDetail";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = use(params);
  console.log(slug, "slug");

  useEffect(() => {
    console.log("11111");
    if (!slug) return;

    const fetchSlug = async () => {
      try {
        setLoading(true);
        const res = await getSlug(slug);

        const productData = res?.data;
        console.log("data from pro", res?.data);
        setProduct(productData);
      } catch (error) {
        console.log("error from slug");
      } finally {
        setLoading(false);
      }
    };

    fetchSlug();
  }, [slug]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <NotFoundProduct />
      </div>
    );
  }

  return (
    <div>
      <div className="py-3"></div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
