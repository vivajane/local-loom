import React from "react";
import { IoIosHome } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { FaFirstOrder } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";

const CategoryHeaderModal = () => {
  return (
    <div className="flex flex-col rounded-xl space-y-3 p-8 gap-4 bg-[#FBF5EB]">
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
    </div>
  );
};

export default CategoryHeaderModal;
