import React, { useState } from "react";
import Container from "../Components/Container";
import logo from "../assets/logo (1).png";
import { Link } from "react-router";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline, IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  let routeBar = [
    { nav: "HOME", link: "" },
    { nav: "SHOP", link: "shop" },
    { nav: "COLLECTION", link: "collection" },
    { nav: "JOURNAL", link: "journal" },
    { nav: "LOOKBOOK", link: "lookbook" },
    { nav: "PAGES", link: "pages" },
  ];

  return (
    <>
      <header className="py-7 bg-white z-999 border-b border-gray-300 sticky top-0 left-0 w-full">
        <Container>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img src={logo} alt="Logo" />
              <ul className="flex items-center gap-5 ml-3">
                {routeBar.map((item) => (
                  <Link to={`/${item.link}`}>
                    <li className=" font-medium text-[17px]">{item.nav}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 items-center ">
              <div
                onClick={() => setSearchOpen(true)}
               className={` text-3xl relative text-gray-700 cursor-pointer ${searchOpen ? " hidden" : " block"}`}
              >
                <IoMdSearch />
              </div>
              <div
                onClick={() => setSearchOpen(false)}
                className={` text-3xl relative text-gray-700 cursor-pointer ${searchOpen ? "block" : "hidden"}`}
              >
                <IoClose />
              </div>
              <div className=" text-2xl text-gray-700 cursor-pointer">
                <FaRegUser />
              </div>
              <div className=" text-2xl text-gray-700 cursor-pointer">
                <FaRegHeart />
              </div>
              <div className=" text-2xl text-gray-700 cursor-pointer">
                <IoBagHandleOutline />
              </div>
              <div className=" text-2xl text-gray-700 cursor-pointer">
                <FaBarsStaggered />
              </div>
            </div>
          </div>
        </Container>
      </header>
      {searchOpen && (
        <div     onClick={() => setSearchOpen(false)}  className="fixed inset-0  bg-black/40 z-40 flex justify-center items-start pt-20">
          <div   onClick={(e) => e.stopPropagation()} className="bg-white w-full  p-10 relative rounded shadow-lg">
            <Container>
              {/* Close Button */}
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute top-5 right-5 text-3xl cursor-pointer font-bold"
              >
                <IoClose />
              </button>

              <h2 className="text-[16px] font-medium text-[#767676] mb-4">
                WHAT ARE YOU LOOKING FOR?
              </h2>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full border-b border-gray-400 py-3 outline-none"
                />
                <IoMdSearch className="absolute right-2 top-4 text-2xl text-gray-500 cursor-pointer" />
              </div>
              <div className=" mt-5">
               <h2 className="text-[16px] font-medium text-[#767676] mb-4">
                QUICKLINKS
              </h2>
                <ul>
                    <li className=" mt-2 font-medium text-[14px]">New Arrivals</li>
                    <li className=" mt-2 font-medium text-[14px]">Dresses</li>
                    <li className=" mt-2 font-medium text-[14px]">Accessories</li>
                    <li className=" mt-2 font-medium text-[14px]">Footwear</li>
                    <li className=" mt-2 font-medium text-[14px]">Sweatshirt</li>
                </ul>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
