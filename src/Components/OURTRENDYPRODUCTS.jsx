import React, { useEffect, useState } from "react";
import Container from "./Container";
import { FaRegHeart } from "react-icons/fa";
import bannerIMG from "../assets/image 103.png";
import { Link } from "react-router";
import productsData from "../data/data.js";

const OURTRENDYPRODUCTS = () => {
  const [category, setCategory] = useState("JEANS");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const filtered = productsData.filter((item) => item.category === category);

    // API এর মতো delay দেখানোর জন্য
    setTimeout(() => {
      setProducts(filtered);
    }, 300);
  }, [category]);
  return (
    <>
      <div className="">
        <Container>
          <div className="">
            <h3 className=" font-bold text-[35px] text-center mt-23.5">
              BEST SELLING
            </h3>
            <div className="">
              <ul className="flex justify-center gap-7 mt-4">
                <li
                  onClick={() => setCategory("TOPS")}
                  className={`cursor-pointer font-medium text-[16px] ${category === "TOPS" ? "border-b-2 text-black" : "text-[#767676]"}`}
                >
                  TOPS
                </li>

                <li
                  onClick={() => setCategory("JEANS")}
                  className={`cursor-pointer font-medium text-[16px] ${category === "JEANS" ? "border-b-2 text-black" : "text-[#767676]"}`}
                >
                  JEANS
                </li>

                <li
                  onClick={() => setCategory("BAGS")}
                  className={`cursor-pointer font-medium text-[16px] ${category === "BAGS" ? "border-b-2 text-black" : "text-[#767676]"}`}
                >
                  BAGS
                </li>

                <li
                  onClick={() => setCategory("ACCESSORIES")}
                  className={`cursor-pointer font-medium text-[16px] ${category === "ACCESSORIES" ? "border-b-2 text-black" : "text-[#767676]"}`}
                >
                  ACCESSORIES
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-13">
              {products.map((item) => (
                <div key={item.id} className="group inline-block">
                  <div className="h-100 bg-gray-200 relative">
                    <div className="flex items-center w-full h-full">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                      <button className="bg-red-700 px-2 py-1 text-white font-medium">
                        -{item.discount}%
                      </button>
                    </div>

                    <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                      <button className="text-white font-medium text-[14px] py-3 px-6">
                        ADD TO CART
                      </button>
                      <Link
                        to={"/single-view-page"}
                        className="text-white font-medium text-[14px] py-3 px-6"
                      >
                        QUICK VIEW
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[#B9A16B]">{item.category}</h5>
                    <h3 className="text-[#222222] font-bold">{item.title}</h3>
                    <p className="text-[#767676]">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className=" text-center mt-[71px]">
              <Link to={`/shop?category=${category}`}>
                <button className="bg-black cursor-pointer text-white font-medium px-3 py-2">
                  SEE ALL PRODUCT
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OURTRENDYPRODUCTS;
