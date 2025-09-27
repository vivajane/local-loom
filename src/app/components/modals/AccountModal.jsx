"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { IoMdClose } from "react-icons/io"; 
// import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const AccountModal = () => {
  const router = useRouter();

  const onClickBuyer = () => {
    router.push("/pages/signup");
    localStorage.setItem("role", "BUYER");
  };
  const onClickArtisan = () => {
    router.push("/pages/signup");
    localStorage.setItem("role", "ARTISAN");
  };

  const onClickLogin = () => {
    router.push("/pages/login");
  };
  return (
    <div className="bg-white absolute w-40 rounded-md px-6 py-2 ">
      <div>

        <button
          onClick={onClickLogin}
          className="mt-5 px-6 py-2 bg-[#4B2417] text-white rounded-lg transition"
        >
          Login
        </button>
        <hr className="my-4" />
        <div className="flex items-center gap-2 mt-5">
          <FaHeart size={20} />
          <h1>Wishlist</h1>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
