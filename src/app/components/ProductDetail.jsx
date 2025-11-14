"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { Noto_Serif } from "next/font/google";
import RatingChart from "./RatingChart";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import ProductDetailsActive from "./ActiveTab/ProductDetailsActive";
import Review from "./ActiveTab/Review";
import About from "./ActiveTab/About";
import Story from "./ActiveTab/Story";
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { AppContext } from "./Context";

const noto = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const productOutlet = [
  {
    id: 1,
    name: "Product Details",
  },
  {
    id: 2,
    name: "Story",
  },
  {
    id: 3,
    name: "About Artisan",
  },
  {
    id: 4,
    name: "Reviews",
  },
];

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
   const { addToCart} = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Product Details");
  const ratingCount = [1, 2, 3, 4, 5].map((numb) => ({
    rating: numb.toString(),
    count:
      product?.reviews?.filter((review) => review.rating === numb).length || 0,
  }));
  console.log("ratingCount", ratingCount);

  const increaseCount = () => {
    if (quantity >= 0) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseCount = () => {
    if (quantity >= 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const buyNow = () => {
    setLoading(true)
    setTimeout(() => {
      router.push("/pages/checkout");
    })
  };

  console.log("Product in ProductDetail:", product);
  if(loading) {
    return <div><Loading/></div>
  }

  return (
    <div
      className={`${noto.className} bg-[#F0E0D0] md:gap-10 lg:gap-0  w-full md:px-6 lg:px-30 sm:px-10 px-6 md:flex pb-10 pt-40`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={
            product?.images?.length > 0
              ? product.images[0].image
              : "/images/deco.png"
          }
          alt={product.name || "/images/deco.png"}
          width={400}
          height={200}
        />
        <div className="flex gap-6 overflow-x-scroll sm:overflow-hidden md:gap-2 lg:gap-5">
          <Image
            className="min-w-[150px] sm:min-w-0"
            src={
              product?.images?.length > 0
                ? product.images[0].image
                : "/images/deco.png"
            }
            alt="flower"
            width={120}
            height={100}
          />
          <Image
            className="min-w-[150px] sm:min-w-0"
            src={
              product?.images?.length > 0
                ? product.images[0].image
                : "/images/deco.png"
            }
            alt="flowers"
            width={120}
            height={100}
          />
          <Image
            className="min-w-[150px] sm:min-w-0"
            src={product.images[0].image}
            alt="flowerss"
            width={120}
            height={100}
          />
        </div>
        <div className="md:flex hidden cursor-pointer gap-8 py-6">
          {productOutlet.map((item) => {
            return (
              <div
                onClick={() => setActiveTab(item.name)}
                className={` text-xs md:text-xs lg:text-sm ${
                  activeTab === item.name
                    ? "text-[#59260D] font-extrabold"
                    : "text-[#877063]"
                }`}
                key={item.id}
              >
                <div className="text-[#877063]">{item.name}</div>
              </div>
            );
          })}
        </div>
        <div className="md:block hidden">
          {activeTab === "Product Details" && (
            <ProductDetailsActive product={product} />
          )}
          {activeTab === "Story" && (
            <div>
              <Story />
            </div>
          )}
          {activeTab === "About Artisan" && (
            <div>
              <About />
            </div>
          )}
          {activeTab === "Reviews" && (
            <div>
              <Review />
            </div>
          )}
        </div>
      </div>
      <div className="md:block hidden md:w-1/2 gap-5 py-3">
        <div className="space-y-3">
          <h1 className="text-[#3F2010] font-bold md:text-2xl">
            {product.name}
          </h1>
          <p className="text-[#877063] text-xs md:text-sm">
            {product.description}
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-[#3F2010] pt-3 font-[5]">SKU: {product.sku}</h1>
          <p className="text-[#3F2010] font-[500]">
            Handcrafted in {product.location}
          </p>
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <div>{product.average_rating}</div>
              <div className="flex gap-1 ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar />
              </div>
            </div>
            <div className="w-[200px] h-[150px]">
              <RatingChart ratings={ratingCount} />
            </div>
          </div>

          <div className="flex sm:py-8 py-2 items-center gap-3">
            <h1>Quantity</h1>
            <div className="flex items-center gap-3">
              <button
                className="border-[#3F2010] border w-8 rounded-full aspect-square bg-white"
                onClick={decreaseCount}
              >
                -
              </button>
              <span className="border-[#3F2010] border py-1.5 rounded-full px-14 bg-white">
                {quantity}
              </span>
              <button
                className="border-[#3F2010] border w-8 rounded-full aspect-square bg-white"
                onClick={increaseCount}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-[#171212] font-bold ">
              ₦{product.price * quantity}
            </h1>
            <div className="flex gap-6 py-4 items-center">
              <div className="bg-[#59260D] rounded-full text-white">
                <button
                  onClick={buyNow}
                  className="cursor-pointer px-8 py-1.5 rounded-full"
                >
                  Buy Now
                </button>
              </div>
              <div className="bg-white rounded-full border-[#59260D] border">
                <button
                    onClick={() => addToCart(product.id, 1) }
                  className="px-8 py-1.5 cursor-pointer "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <h1 className="text-[#3F2010]  py-4 font-bold text-xl">
          {product.name}
        </h1>
        <div className="flex justify-between">
          <h1 className="text-[#171212] font-bold ">
            ₦{product.price * quantity}
          </h1>
          <div className="flex items-center gap-2">
            <div className=" ">
              <FaStar
                size={20}
                className="text-yellow-500 shadow-[#3F2010] shadow-2xl "
              />
            </div>
            <div className="font-bold">{product.average_rating}</div>
          </div>
        </div>
        <div>
          <div className="flex md:hidden cursor-pointer gap-3 py-6">
            {productOutlet.map((item) => {
              return (
                <div
                  onClick={() => setActiveTab(item.name)}
                  className={` text-xs ${
                    activeTab === item.name
                      ? "text-[#59260D] font-extrabold"
                      : "text-[#877063]"
                  }`}
                  key={item.id}
                >
                  <div className="text-[#877063]">{item.name}</div>
                </div>
              );
            })}
          </div>
          <div className="block md:hidden">
            {activeTab === "Product Details" && (
              <ProductDetailsActive product={product} />
            )}
            {activeTab === "Story" && (
              <div>
                <Story />
              </div>
            )}
            {activeTab === "About Artisan" && (
              <div>
                <About />
              </div>
            )}
            {activeTab === "Reviews" && (
              <div>
                <Review />
              </div>
            )}
          </div>
        </div>
        <div className="py-8">
          <h1 className="font-extrabold text-[#171412]">Colours</h1>
          <div className="flex text-[#171412] py-2 gap-10">
            <div>White</div>
            <div>Red</div>
            <div>Orange</div>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="cursor-pointer" onClick={addToCart}>
            <FaCartShopping className="text-[#4B2417]  " size={30} />{" "}
          </div>
          <div className="w-full rounded-full text-center bg-[#4B2417] text-white">
            <button onClick={buyNow} className=" py-2 px-4 cursor-pointer ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
