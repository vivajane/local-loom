"use client";
import { fetchCategory } from "./api/category";
import { getAllProducts } from "./api/products";
import React, { createContext, useEffect, useState } from "react";


export const AppContext = createContext(null);

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page = 1, limit = 10, selectedCat = category) => {
    try {
      const response = await getAllProducts(page, limit, selectedCat);
      console.log("API Response:", response.data);
      setProducts(response.data.results);
      setTotalPages(response.data.count || 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCategory = async () => {
    try {
      const res = await fetchCategory(category);
      return res?.data?.category;
      // console.log("cate",res?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const contextValue = {
    products,
    fetchProducts,
    setProducts,
    loading,
    setLoading,
    getCategory,
    category,
    setCategory,

    totalPages,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default Context;
