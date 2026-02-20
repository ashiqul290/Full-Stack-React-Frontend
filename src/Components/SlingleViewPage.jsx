import React, { useState } from "react";
import ReviwAndDescription from "./ReviwAndDescription";
import ReletedProduct from "./ReletedProduct";
import { FaMinus, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";

const SlingleViewPage = () => {
  // Store which image is currently selected
  const [mainImage, setMainImage] = useState(
    "https://readymadeui.com/images/fashion-img-1.webp",
  );

  // Array of small product images
  const productImages = [
    "https://readymadeui.com/images/fashion-img-1.webp",
    "https://readymadeui.com/images/fashion-img-2.webp",
    "https://readymadeui.com/images/fashion-img-3.webp",
    "https://readymadeui.com/images/fashion-img-4.webp",
  ];

  return (
    <>
      <div className="p-4">
        <div className="lg:max-w-6xl max-w-xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
            <div className="w-full lg:sticky top-0">
              <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
                  {productImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Product ${index + 1}`}
                      className={`aspect-[64/85] object-cover object-top w-full cursor-pointer border-b-2 ${
                        mainImage === img
                          ? "border-black"
                          : "border-transparent"
                      }`}
                      onMouseEnter={() => setMainImage(img)} // Change main image on hover
                    />
                  ))}
                </div>

                {/* Main flex-1 image */}
                <div className="flex-1">
                  <img
                    src={mainImage}
                    alt="Product"
                    className="w-full aspect-[548/712] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div>
                <h4 className=" text-[14px] font-medium">HOME / THE SHOP</h4>
                <h3 className="text-[26px] sm:text-xl font-bold text-slate-900 mt-2">
                  Lightweight Puffer Jacket With a Hood
                </h3>

                <div className="flex items-center flex-wrap gap-4 mt-6">
                  <h4 className="text-slate-900 text-2xl sm:text-3xl font-semibold">
                    $12
                  </h4>
                  {/* <p className="text-slate-500 text-lg">
              <strike>$16</strike>{" "}
              
            </p> */}
                </div>
                <p className="text-slate-500 mt-2 text-sm">
                  Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                  elementum gravida nec dui. Aenean aliquam varius ipsum, non
                  ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                  aliquet magna posuere eget.
                </p>
              </div>
              <hr className="my-6 border-slate-300" />
              <div>
                <div className=" flex justify-between items-center">
                  <div className=" flex items-center gap-5 my-7">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                      SIZES
                    </h3>
                    <div className="flex flex-wrap  gap-4 ">
                      <button
                        type="button"
                        className="w-10 h-9 border border-slate-300 hover:border-blue-600 text-sm cursor-pointer flex items-center justify-center shrink-0"
                      >
                        SM
                      </button>
                      <button
                        type="button"
                        className="w-10 h-9 border border-blue-600 hover:border-blue-600 text-sm cursor-pointer flex items-center justify-center shrink-0"
                      >
                        MD
                      </button>
                      <button
                        type="button"
                        className="w-10 h-9 border border-slate-300 hover:border-blue-600 text-sm cursor-pointer flex items-center justify-center shrink-0"
                      >
                        LG
                      </button>
                      <button
                        type="button"
                        className="w-10 h-9 border border-slate-300 hover:border-blue-600 text-sm cursor-pointer flex items-center justify-center shrink-0"
                      >
                        XL
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <button className=" text-[13px] font-medium underline">
                      SIZE GUIDE
                    </button>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    COLOR
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 ">
                    <button
                      type="button"
                      className="w-4 h-4 bg-black rounded-full"
                    ></button>
                    <button
                      type="button"
                      className="w-4 h-4 bg-red-600 rounded-full"
                    ></button>
                    <button
                      type="button"
                      className="w-4 h-4 bg-pink-500 rounded-full"
                    ></button>
                    <button
                      type="button"
                      className="w-4 h-4 bg-blue-600 rounded-full"
                    ></button>
                  </div>
                </div>
                <div className="mt-9 flex flex-wrap gap-4">
                  <div className="w-27.5 h-12.5 border border-gray-200 flex justify-between items-center">
                    <button className=" px-3 py-3 text-[#767676] cursor-pointer">
                      <FaMinus />
                    </button>
                    <h3 className=" font-medium">3</h3>
                    <button className=" px-3 py-3 text-[#767676] cursor-pointer">
                      <TiPlus />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-3 w-[45%] cursor-pointer border border-black bg-black hover:bg-black/80 text-white text-sm font-medium"
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="mt-9 flex flex-wrap gap-10">
                <button  className=" text-sm font-medium hover:border-b   cursor-pointer flex gap-1 items-center"><FaRegHeart /> ADD TO WISHLIST</button>
                  <button
                    type="button"
                   className=" text-sm font-medium hover:border-b cursor-pointer flex gap-1 items-center"
                  >
                   <FaShareAlt />SHARE
                  </button>
                </div>
                <div className=" mt-8">
                  <p className=" text-[13px] font-medium"><span className=" text-[#767676] font-medium">SKU:</span> N/A</p>
                  <p className=" text-[13px] font-medium my-1"><span className=" text-[#767676] font-medium ">Categories:</span> Casual & Urban Wear, Jackets, Men</p>
                  <p className=" text-[13px] font-medium"><span className=" text-[#767676] font-medium">Tags:</span> biker, black, bomber, leather</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReviwAndDescription />

      <div className="">
        <ReletedProduct />
      </div>
    </>
  );
};

export default SlingleViewPage;
