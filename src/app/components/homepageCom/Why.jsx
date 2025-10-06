import React from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { BiRectangle } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import whitevase from "../../../../public/images/whitevase.png";
import { FaArrowRightLong } from "react-icons/fa6";
import sculpture from "../../../../public/images/sculpturee.png";
import flowervase from "../../../../public/images/flowervase.png";
import basket from "../../../../public/images/basket.png";
import pillow from "../../../../public/images/pillow.png";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";


const products = [
  {
    id: 1,
    icon: <BiRectangle />,
    title: "Quality Craftsmanship",
    desc: "Each item is crafted with care and attention to detail by skilled artisans",
  },
  {
    id: 2,
    icon: <FaShippingFast />,
    title: "Fast Shipping",
    desc: "Enjoy quick and reliable delivery of your unique finds",
  },
  {
    id: 3,
    icon: <RiSecurePaymentLine />,
    title: "Secure Payments",
    desc: "Shop with confidence knowing your transactions are safe and secure.",
  },
];
const crafts = [
  {
    id: 1,
    title: "Handcrafted Ceramic Vase",
    image: flowervase,
    price: 56000,
  },
  {
    id: 2,
    title: "Traditional Handwoven Basket",
    image: basket,
    price: 74000,
  },
  {
    id: 3,
    title: "Unique Wooden Sculpture",
    image: sculpture,
    price: 26000,
  },
  {
    id: 4,
    title: "Embroidered Cushion Cover",
    image: pillow,
    price: 86000,
  },
];
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Why = () => {
  return (
    <div className={`bg-[#F0E0D0] px-4 md:px-10 py-10 ${manrope.className}`}>
      <div>
        <h1 className="font-extrabold py-2 text-2xl md:text-4xl">
          Why Choose LocalLoom?
        </h1>
        <p className="text-[#1C120D] text-base">
          Experience the difference of handmade goods
        </p>
        <div  className="md:grid lg:grid-cols-3 md:overflow-hidden md:grid-cols-2 flex overflow-x-scroll gap-14 py-10">
          {products.map((product) => {
            return (
              <div className="flex flex-col items-center" key={product.id}>
                <Product product={product} />
              </div>
            )
          
          })}
        </div>
      </div>
      <div className="md:flex sm:pt-10 pt-10 block gap-10">
        <div
          className="relative bg-cover bg-no-repeat w-56 bg-center h-[400px]"
          style={{ backgroundImage: `url(${whitevase.src})` }}
        >
          <div className="bg-black/55 absolute top-0 left-0 w-full flex  rounded-md flex-col justify-center items-center h-full">
            <h1
              className={`text-white font-bold text-center text-2xl  ${bricolage.className}`}
            >
              New Arrivals, Authentic Crafts.
            </h1>
            <div className=" text-sm flex gap-2 items-center mt-5 px-1 md:px-2 py-3 cursor-pointer bg-[#4B2417] text-[#FFFFFFCC] rounded-lg transition">
              <button className=" ">SEE MORE</button>
              <FaArrowRightLong className="" />
            </div>
          </div>
        </div>
        <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 hidden gap-2 py-10">
          {
            crafts.map((craft) => {
              return (
                <div key={craft.id}>
                  <Crafts craft={craft} />
                </div>
              );
            })
          }
        </div>
        <div className=" py-10">
         <div className="flex overflow-x-scroll space-y-3 sm:hidden gap-6">
           {
            crafts.map((craft) => {
              return (
                <div className="min-w-[200px]" key={craft.id}>
                  <Crafts craft={craft} />
                </div>
              );
            })
          }
         </div>
        </div>
      </div>
      <hr className="my-10 text-[#4B2417]" />
    </div>
  );
};

const Product = ({ product }) => {
  return (
    <div data-aos="fade-right" className="bg-[#FAFAF7] h-80 sm:h-auto rounded-md shadow-amber-950 shadow-md p-6 space-y-2 border border-[#4B2417] ">
      <div className="text-[#4B2417]">{product.icon}</div>
      <h1 className="font-bold md:text-xl">{product.title}</h1>
      <p className="text-[#94664F] font-medium text-base">{product.desc}</p>
    </div>
  );
};

export default Why;

const Crafts = ({ craft }) => {
  return (
    <div data-aos="fade-right">
      <Image src={craft.image} alt={craft.title} width={200} />
      <h1 className={`font-bold  text-[#3F2010] ${bricolage.className}`}>{craft.title}</h1>
      <p>{craft.price}</p>
      <div className="flex items-center gap-2">
        <CiHeart className="text-[#4B2417]" />

        <p>Add to Wishlist</p>
      </div>
    </div>
  );
};
