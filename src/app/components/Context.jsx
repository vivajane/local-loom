"use client";
import { fetchCategory } from "./api/category";
import { getAllProducts } from "./api/products";
import React, { createContext, useEffect, useState } from "react";
import { seeCart } from "./api/cart";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { updateCart } from "./api/updateCart";

export const AppContext = createContext(null);

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [productCategory, setProductCategory] = useState({});

  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (
    page = 1,
    limit = 10,
    fetchedCategory = category
  ) => {
    try {
      setLoading(true);
      const response = await getAllProducts(page, limit, fetchedCategory);
      console.log("API Response:", response.data);
      setProducts(response.data.results);
      setTotalPages(response.data.count || 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductCategory = async (
    page = 1,
    limit = 10,
    fetchedCategory = category
  ) => {
    if (!fetchedCategory) return;
    try {
      const response = await getAllProducts(page, limit, fetchedCategory);
      setProductCategory((prev) => ({
        ...prev,
        [fetchedCategory]: response?.data?.results || [],
      }));
      setTotalPages(response.data.count || 1);
    } catch (error) {}
  };

  const getCategory = async () => {
    try {
      const res = await fetchCategory(category);
      console.log("cate", res?.data?.category);
      return res?.data?.category;
    } catch (error) {
      console.log("error", error);
    }
  };

  const addToCart = async (product, quantity) => {
    try {
      const res = await seeCart(product.id, quantity);

      const cartItem = {
        ...product,
        quantity,
        image: product.image || "/images/deco.png",
        cartId: uuidv4(),
        price: Number(product.price) || 0,
      };
      setCart((prev) => [...prev, cartItem]);
      console.log("Added cart item:", cartItem);
      toast.success("Item added to cart");
      localStorage.setItem("cart", JSON.stringify([...cart, cartItem]));
      return res;
    } catch (error) {
      console.log("Add to cart error:", error);
    }
  };

  

  const updateCartItems = async (productId, quantity) => {
    try {
      const response = await updateCart(productId, quantity);
      console.log("Updated cart items:", response);
      return response
    } catch (error) {
      console.log("Error updating cart items:", error);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

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
    addToCart,
   
    cart,
    setCart,
    cartId: uuidv4(),
    updateCartItems,

    totalPages,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default Context;
