import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const categories = [
  "Pottery and Ceramics",
  "Baskets & Cane",
  "Textiles & Fibre weaving",
  "Woodwork & Carving",
  "Beadwork & Jewelry",
  "Leather Work",
  "Art Work",
  "Home & Lifestyle Crafts",
];
const CategoryModal = () => {
  return (
    <div
      className={`text-[#94664F] ${jarkata.className} bg-[#FBF5EB] border border-[#3F2010] rounded-md p-4 w-50 shadow-lg`}
    >
      {categories.map((category, index) => (
        <div
          key={index}
          className="py-1 border-b last:border-b-0 hover:bg-[#EADBC8] cursor-pointer"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryModal;
