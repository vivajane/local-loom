import React from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const jarkata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Footer = () => {
  return (
    <div className={`bg-[#000000] py-10 px-5 sm:px-10 ${jarkata.className}`}>
      <div>
        <div className="md:flex block justify-between">
          <div>
            <div className="bg-[#FBF5EB] inline-flex h-12 px-2">
              <Link href="/">
                <Image className="" src={logo} alt="logo" width={150} />
              </Link>
            </div>
            <div className="flex pt-30  text-white gap-10 flex-end ">
              <FaSquareInstagram size={30} />
              <FaFacebook size={30} />
              <FaSquareXTwitter size={30} />
            </div>
          </div>

          <div className="flex justify-between sm:gap-10 py-3 sm:py-0 gap-3 md:gap-30">
            <div className="text-[#FBF5EB]">
              <h1 className="font-bold sm:text-sm md:text-base text-xs py-3">About</h1>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <Link href="#">How it works</Link>
                </li>
                <li>
                  <Link href="#">Featured</Link>
                </li>
                <li>
                  <Link href="#">Partnership</Link>
                </li>
                <li>
                  <Link href="#">Business Relation</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#FBF5EB]">
              <h1 className="font-bold sm:text-sm md:text-base text-xs py-3">Community</h1>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="space-y-2">
                  <Link href="#">Events</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Podcast</Link>
                </li>
                <li>
                  <Link href="#">Invite a Friend</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#FBF5EB]">
              <h1 className="font-bold sm:text-sm md:text-base text-xs py-3">Socials</h1>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="space-y-2">
                  <a href="#Instagram">Instagram</a>
                </li>
                <li>
                  <a href="#Twitter">Twitter</a>
                </li>
                <li>
                  <a href="#Facebook">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#FBF5EB] py-8 md:flex block text-xs md:text-sm justify-between">
        <p>
          ©2025 LocalLoom. Supporting local artisans worldwide. All rights
          reserved
        </p>
        <div >
          <ul className="flex py-5  justify-between gap-20">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
