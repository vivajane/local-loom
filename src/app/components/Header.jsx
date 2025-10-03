"use client";
import React from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import AccountModal from "./modals/AccountModal";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const jarkata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Header = () => {
  const [account, setAccount] = useState(false);
  const [show, setShow] = useState(false);

  const showAccount = () => {
    setAccount((prev) => !prev);
  };

  const clickShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <header
      className={`w-screen fixed z-20 top-0 border-b border-b-[#486284]  bg-[#F0E0D0]  ${jarkata.className} py-6 font-semibold  `}
    >
      <div className="flex text-[#3F2010]  px-8 justify-between items-center">
        <div>
          <Link href="/">
            <Image className="" src={logo} alt="logo" width={150} />
          </Link>
        </div>

        <div className="md:flex hidden gap-1">
          <h1 className="text-base">Categories</h1>
          <FaCaretDown size={20} />
        </div>

        <div className=" md:block hidden w-1/3 relative">
          <input
            className="border w-full  border-[#4B241780] placeholder:text-[M3/sys/light/on-surface-variant] bg-[#FBF5EB] rounded-full px-4 py-2"
            type="       search"
            name="search"
            id="search"
            placeholder="search products and categories"
          />
          <IoIosSearch className="absolute right-2 top-3" size={20} />
        </div>
        <div className="lg:hidden md:flex gap-6 hidden">
          <div className="relative">
            <div className="cursor-pointer" onClick={showAccount}>
              <MdAccountCircle size={30} />
            </div>
            {account && <AccountModal />}
          </div>
          <Link href="/support">
            <IoMdHelpCircleOutline size={30} />
          </Link>
          <Link href="/cart">
            <FaCartShopping size={30} />
          </Link>
        </div>
        <div
          className={`  ${jarkata.className} text-sm font-semibold hidden lg:flex items-center justify-center gap-12`}
        >
          <div className="relative">
            <div className="cursor-pointer" onClick={showAccount}>
              <MdAccountCircle size={30} />
              <h1>My Account</h1>
            </div>
            {account && <AccountModal />}
          </div>
          <div>
            <IoMdHelpCircleOutline size={30} />
            <h1>Support</h1>
          </div>
          <div>
            <FaCartShopping size={30} />
            <h1>Cart</h1>
          </div>
        </div>

        <div className="md:hidden block" onClick={clickShow}>
          {show ? <FaTimes size={30} /> : <GiHamburgerMenu size={30} />}
        </div>

        {/* for smaller screens */}
      </div>
      {/* <hr className=" text-[#486284]" /> */}
      <section
        className={`transition-all duration-1000 w-full  overflow-hidden  bg-[#F0E0D0] ${
          show ? "max-h-screen " : "max-h-0"
        }  `}
      >
        <div className="flex flex-col  justify-center h-screen items-center gap-12">
          <input
            className="border w-3/4 border-[#4B241780] placeholder:text-[M3/sys/light/on-surface-variant] bg-[#FBF5EB] rounded-full px-4 py-2"
            type="       search"
            name="search"
            id="search"
            placeholder="search products and categories"
          />
          <div className="flex gap-2">
            <IoMdHelpCircleOutline size={30} />
            <Link href="/support">Support</Link>
          </div>
          <div className="flex gap-2">
            <FaCartShopping size={30} />
            <Link href="/cart">Cart</Link>
          </div>
          <div className="">
            <div
              className="cursor-pointer relative flex gap-2"
              onClick={showAccount}
            >
              <MdAccountCircle size={30} />
              <Link href="/account">My Account</Link>
            </div>
            {account && (
              <div className="z-50">
                {" "}
                <AccountModal />
              </div>
            )}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
