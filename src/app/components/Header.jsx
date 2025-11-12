"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { IoIosHome, IoIosSearch, IoMdHelpCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaCartShopping, FaFirstOrder } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Plus_Jakarta_Sans } from "next/font/google";
import AccountModal from "./modals/AccountModal";
import CategoryModal from "./modals/CategoryModal";
import { useRouter } from "next/navigation";
import CategoryHeaderModal from "./modals/CategoryHeaderModal";
import { TbCategory } from "react-icons/tb";
import { IoCall, IoLogOut, IoSettings } from "react-icons/io5";

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

  const hideNavar = () => {
    setShowCategory(false);
  }

  const showCategoryHandler = () => {
    setShowCategory((prev) => !prev);
  };

  const addToCart = () => {
    router.push("/pages/cart");
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-20 border-b border-b-[#486284] bg-[#F0E0D0] ${jarkata.className}`}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-8 py-5 text-[#3F2010]">
        <div className="">
          <Link href="/">
            <Image src={logo} alt="LocalLoom" width={150} />
          </Link>
        </div>
        <div className="hidden md:flex justify-between">
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
              <FaCartShopping
                onClick={addToCart}
                size={28}
                className="mx-auto"
              />
              <h1 className="text-sm font-semibold">Cart</h1>
            </Link>
          </div>
        </div>

        <div className="md:hidden block">
          <div onClick={showCategoryHandler}>
            {showCategory ? (
              <FaTimes size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          showCategory ? "max-h-screen" : "max-h-0"
        }  overflow-hidden relative transition-all duration-300 ease-in-out`}
      >
        <div onClick={hideNavar} className="flex flex-col items-center space-y-10 h-screen py-18 px-8 gap-4 bg-[#F0E0D0]">
          <div className="hover:bg-[#F0E0D0] hover:px-4 hover:py-2 hover:rounded-xl flex gap-6 items-center">
            <IoIosHome />
            <Link href="/">Home</Link>
          </div>
          <div className="flex hover:bg-[#F0E0D0] hover:px-4 hover:py-2 hover:rounded-xl gap-6 items-center">
            <TbCategory />
            <Link href="/categories">Categories</Link>
          </div>

          <div className="flex hover:bg-[#F0E0D0] hover:px-4 hover:py-2 hover:rounded-xl gap-6 items-center">
            <FaFirstOrder />
            <Link href="/orders">Orders</Link>
          </div>
          <div className="flex hover:bg-[#F0E0D0] hover:px-4 hover:py-2 hover:rounded-xl gap-6 items-center">
            <IoSettings />
            <Link href="/settings">Settings</Link>
          </div>
          <div className="flex hover:bg-[#F0E0D0] hover:px-4 hover:py-2 hover:rounded-xl gap-6 items-center">
            <IoMdHelpCircle />
            <Link href="/help">Help</Link>
          </div>
          <div className="flex hover:bg-[#F0E0D0] hover:px-4 hover:py-2 hover:rounded-xl gap-6 items-center">
            <IoCall />
            <Link href="/support">Support</Link>
          </div>
          <div className="flex hover:bg-[#F0E0D0] hover:px-4 hover:py-2 hover:rounded-xl  gap-6 items-center">
            <IoLogOut />
            <Link href="/logout">Logout</Link>
          </div>
          <div className="relative w-1/3">
            <input
              className="border border-[#4B241780] bg-[#FBF5EB] rounded-full px-4 py-2 w-full placeholder:text-[#6E5A4A]"
              type="search"
              placeholder="Search products and categories"
            />
            <IoIosSearch className="absolute right-3 top-3" size={15} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
