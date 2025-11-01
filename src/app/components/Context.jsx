"use client";
import { fetchCategory } from "./api/category";
import { getAllProducts } from "./api/products";
import React, { createContext, useEffect, useState } from "react";


export const AppContext = createContext(null);

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [productCategory, setProductCategory] = useState({});

  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page = 1, limit = 10, fetchedCategory = category) => {
    try {
      setLoading(true);
      const response = await getAllProducts(page, "", limit, fetchedCategory);
      console.log("API Response:", response.data);
      setProducts(response.data.results);
      setTotalPages(response.data.count || 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductCategory = async(page = 1, limit = 10, fetchedCategory = category) => {
    if(!fetchedCategory) return;
    try {
      const response = await getAllProducts(page, limit, fetchedCategory);
      setProductCategory((prev) =>({
        ...prev,
        [fetchedCategory]: response?.data?.results || []
      }))
      setTotalPages(response.data.count || 1);
    } catch (error) {
      
    }
    
    
  }

  const getCategory = async () => {
    try {
      const res = await fetchCategory(category);
      console.log("cate",res?.data?.category);
      return res?.data?.category;
      
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
    productCategory,
    setProductCategory,
    fetchProductCategory,

    totalPages,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default Context;
