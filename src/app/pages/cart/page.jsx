"use client";
import React, { useContext, useEffect, useState } from "react";
import { Newsreader } from "next/font/google";
import one from "../../../../public/images/deco.png";
import necklacethree from "../../../../public/images/woodentray.png";
import two from "../../../../public/images/woodenflowevase.png";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Loading from "@/app/components/Loading";
import { AppContext } from "@/app/components/Context";
import { updateCart } from "@/app/components/api/updateCart";


const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Cart = () => {
  const { cart, setCart, cartId} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
 const increaseCount = async (cartId, productId) => {
  let newQuantity = 0;
  setCart((prev) => {
    const updated = prev.map((item) => {
      if (item.cartId === cartId) {
        newQuantity = item.quantity + 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    return updated;
  });

  try {
    await updateCart(productId, newQuantity);
    console.log(`Product ${productId} updated to quantity ${newQuantity}`);
  } catch (err) {
    console.log("Error updating cart backend:", err);
  }
};

const decreaseCount = (cartId) => {
  setCart(prev => prev.map(item => 
    item.cartId === cartId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
  ));
};


  const deleteAll = () => {
    setCart([]);
  };

  const deleteCart = (id) => {
    setCart((prev) => prev.filter((item) => item.cartId !== id));
  };

  const subtotal = cart.reduce((sum, item) => {
  const price = parseFloat(item?.price || 0); 
  const qty = parseInt(item?.quantity || 1);
  return sum + price * qty;
}, 0);



  if (loading) {
    return (
      <h1>
        <Loading />
      </h1>
    );
  }

  const onClickHandler = () => {
    setLoading(true);
  };

  return (
    <div
      className={`sm:pt-30 pt-20 sm:px-10 px-6 md:px-22 bg-[#F0E0D0] ${newsreader.className}`}
    >
      <h1 className="text-[#1C120D] font-bold py-4 text-lg ">My Cart</h1>
      <div>
        {cart.length === 0 ? (
          <h1 className="text-[#1C120D] font-bold py-4 text-lg ">
            Your cart is empty
          </h1>
        ) : (
          cart.map((item) => (
            <div key={item.cartId}
              className="flex space-y-6 md:space-y-10 md:gap-50 sm:gap-20 gap-10 items-center"
              
            >
              <div className="md:flex block items-center gap-10">
                <Image
                  src={item.image || "/images/deco.png"}
                  alt={item.name || "product image"}
                  width={200}
                  height={150}
                />
                <div className="space-y-1 pt-10">
                  <h1 className="md:text-base sm:text-sm text-xs">
                    {item.name}
                  </h1>
                  <h1 className="text-[#94664F] d:text-base sm:text-sm text-xs">
                    ₦{item.price * item.quantity}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                  <button
                    className="border-[#3F2010] border px-3 rounded-full aspect-square bg-[#C7B4AB]"
                    onClick={() => decreaseCount(item.cartId)}
                  >
                    -
                  </button>
                  <span className=" text-center py-1.5">{item.quantity}</span>
                  <button
                    className="border-[#3F2010] border px-3 rounded-full aspect-square bg-[#C7B4AB]"
                    onClick={() => increaseCount(item.cartId, item.id)}
                  >
                    +
                  </button>
                </div>

                <div onClick={() => deleteCart(item.cartId)}>
                  <MdDelete size={20} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-end py-4 ">
        <button
          onClick={deleteAll}
          className="px-6 py-1.5 rounded-md bg-red-800"
        >
          Delete All
        </button>
      </div>
      <div className="bg-white px-8 py-4">
        <div className="flex justify-between">
          <h1>SubTotal</h1>
          <h1>₦{subtotal}</h1>
        </div>
        <div className="block md:flex  justify-between pt-1 pb-4 gap-4 md:gap-10">
          <div className="py-3 font-bold ">
            <Link href="/pages/checkout">
              <button
                onClick={onClickHandler}
                className="bg-[#3F2010] sm:w-46 md:w-60 text-center text-sm sm:text-base cursor-pointer text-[#FAFAF7] py-2 px-4 rounded-md"
              >
                CHECKOUT
              </button>
            </Link>
          </div>
          <div className="py-3">
            <Link href="/pages/products">
              <button
                onClick={onClickHandler}
                className="bg-white w-30 sm:w-46 md:w-60 border font-bold border-[#3F2010] text-center cursor-pointer text-[#3F2010] text-sm sm:text-base py-2 px-4 rounded-md"
              >
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
