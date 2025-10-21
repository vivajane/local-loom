"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Plus_Jakarta_Sans } from "next/font/google";
import AccountModal from "./modals/AccountModal";
import CategoryModal from "./modals/CategoryModal";
import { useRouter } from "next/navigation";
import CategoryHeaderModal from "./modals/CategoryHeaderModal";

const jarkata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Header = () => {
  const [account, setAccount] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const router = useRouter();

  const showInputHandler = () => {
    setShowInput((prev) => !prev);
  };

  const showCategoryHandler = () => {
    setShowCategory((prev) => !prev);
  };

  const addToCart = () => {
    router.push("/pages/cart");

  }

  return (
    <header
      className={`w-full fixed top-0 left-0 z-20 border-b border-b-[#486284] bg-[#F0E0D0] ${jarkata.className}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 py-5 text-[#3F2010]">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Icon */}

          {/* Logo */}
          <div className="hidden md:block">
            <Link href="/">
              <Image src={logo} alt="LocalLoom" width={150} />
            </Link>
          </div>

          {/* Mobile Title */}
        </div>

        <div className="hidden md:flex items-center gap-4 flex-1 justify-center relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setShowCat(!showCat)}
          >
            <h1 className="text-base font-medium">Categories</h1>
            <FaCaretDown size={18} />
          </div>
          {showCat && (
            <div className="absolute top-10 right-0">
              <CategoryModal />
            </div>
          )}

          {/* Search */}
          <div className="relative w-1/3">
            <input
              className="border border-[#4B241780] bg-[#FBF5EB] rounded-full px-4 py-2 w-full placeholder:text-[#6E5A4A]"
              type="search"
              placeholder="Search products and categories"
            />
            <IoIosSearch className="absolute right-3 top-3" size={20} />
          </div>
        </div>

        {/* Right - Icons */}
        <div className="hidden md:flex items-center gap-10">
          {/* Account */}
          <div
            className="relative cursor-pointer text-center"
            onClick={() => setAccount(!account)}
          >
            <MdAccountCircle size={28} className="mx-auto" />
            <h1 className="text-sm font-semibold">My Account</h1>
            {account && <AccountModal />}
          </div>

          {/* Support */}
          <Link href="/support" className="text-center">
            <IoMdHelpCircleOutline size={28} className="mx-auto" />
            <h1 className="text-sm font-semibold">Support</h1>
          </Link>

          {/* Cart */}
          <Link href="/pages/cart" className="text-center">
            <FaCartShopping onClick={addToCart} size={28} className="mx-auto" />
            <h1 className="text-sm font-semibold">Cart</h1>
          </Link>
        </div>
      </div>

      {/* Mobile Search + Icons */}
      <div className=" px-4 pb-4 flex items-center justify-between gap-3">
        <div className="md:hidden flex relative items-center gap-3">
          <div
            onClick={showCategoryHandler}
            className="md:hidden  block "
          >
            {showCategory ? (
              <FaTimes size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </div>
          <div className="md:hidden">
            <Link href="/">
              <h1 className="text-lg font-bold">LocalLoom</h1>
            </Link>
          </div>
          {showCategory &&  (
            <div className="left-full top-10  absolute">
              <CategoryHeaderModal />
            </div>
          ) }
        </div>
        <div className="relative  ">
          <IoIosSearch
            className="relative sm:hidden block"
            onClick={showInputHandler}
            size={20}
          />
          {showInput && (
            <div className="absolute right-full top-10 w-full">
              <input
                className="border border-[#4B241780] bg-[#FBF5EB] rounded-full px-4 py-2 w-50 placeholder:text-[#6E5A4A]"
                type="search"
                placeholder="Search"
              />
            </div>
          )}
        </div>

        <input
          className="border border-[#4B241780] hidden sm:block md:hidden bg-[#FBF5EB] rounded-full px-4 py-2 w-full placeholder:text-[#6E5A4A]"
          type="search"
          placeholder="Search"
        />

        <div className="flex sm:hidden items-center gap-3">
          <MdAccountCircle
            size={22}
            onClick={() => setAccount(!account)}
            className="cursor-pointer"
          />
          <Link href="/support">
            <IoMdHelpCircleOutline size={22} />
          </Link>
          <Link href="/pages/cart">
            <FaCartShopping size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
