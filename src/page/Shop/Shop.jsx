import React from "react";
import { FaRegHeart } from "react-icons/fa";
import bannerIMG from "../../assets/image 103.png";
import { Link } from "react-router";

const Shop = () => {
  return (
    <>
      <div className="px-6 sm:px-8 py-6">
        <div className="mb-10">
          <h3 className="text-slate-900 text-lg font-semibold">Categories</h3>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Jackets
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Shirts
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Jeans
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              T-Shirts
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Dresses
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Shoes
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Accessories
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Hoodies
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Sweatshirts
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:border-blue-700 font-medium py-1 px-2"
            >
              Shorts
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="bg-white w-full max-w-67.5 border-r border-gray-300 shrink-0 pr-6">
            <div className="flex items-center border-b border-gray-300 pb-2 mb-8">
              <h3 className="text-slate-900 text-lg font-semibold">Filter</h3>
              <button
                type="button"
                className="text-sm text-red-500 font-semibold ml-auto cursor-pointer"
              >
                Clear all
              </button>
            </div>
            <div className="filter-options space-y-6">
              <div>
                <div className="header flex items-center gap-2 justify-between cursor-pointer">
                  <h4 className="text-slate-900 text-base font-semibold">
                    Size
                  </h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow w-[14px] h-[14px] fill-slate-800 transition-all duration-300 rotate-90"
                    viewBox="0 0 492.004 492.004"
                  >
                    <path
                      d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <div className="collape-content overflow-hidden transition-all duration-300">
                  <div className="mt-4 pb-1">
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                      >
                        XS
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                      >
                        S
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                      >
                        M
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                      >
                        L
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                      >
                        XL
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                      >
                        XXL
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                      >
                        XXXL
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                      >
                        4XL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="header flex items-center gap-2 justify-between cursor-pointer">
                  <h4 className="text-slate-900 text-base font-semibold">
                    Brand
                  </h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow w-[14px] h-[14px] fill-slate-800 transition-all duration-300 rotate-90"
                    viewBox="0 0 492.004 492.004"
                  >
                    <path
                      d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <div className="collape-content overflow-hidden transition-all duration-300">
                  <div className="mt-4 pb-1">
                    <div className="flex px-3 py-2 rounded-sm border border-gray-300 bg-gray-50 focus-within:bg-white overflow-hidden">
                      <input
                        type="email"
                        placeholder="Search brand"
                        className="w-full bg-transparent outline-none text-gray-900 text-sm"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192.904 192.904"
                        className="w-3 fill-gray-600"
                      >
                        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                      </svg>
                    </div>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-center gap-3">
                        <input
                          id="zara"
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor="zara"
                          className="text-slate-600 font-medium text-sm cursor-pointer"
                        >
                          Zara
                        </label>
                      </li>
                      <li className="flex items-center gap-3">
                        <input
                          id="hm"
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor="hm"
                          className="text-slate-600 font-medium text-sm cursor-pointer"
                        >
                          H&amp;M
                        </label>
                      </li>
                      <li className="flex items-center gap-3">
                        <input
                          id="uniqlo"
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor="uniqlo"
                          className="text-slate-600 font-medium text-sm cursor-pointer"
                        >
                          Uniqlo
                        </label>
                      </li>
                      <li className="flex items-center gap-3">
                        <input
                          id="levis"
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor="levis"
                          className="text-slate-600 font-medium text-sm cursor-pointer"
                        >
                          Levi’s
                        </label>
                      </li>
                      <li className="flex items-center gap-3">
                        <input
                          id="nike"
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor="nike"
                          className="text-slate-600 font-medium text-sm cursor-pointer"
                        >
                          Nike
                        </label>
                      </li>
                      <li className="flex items-center gap-3">
                        <input
                          id="adidas"
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor="adidas"
                          className="text-slate-600 font-medium text-sm cursor-pointer"
                        >
                          Adidas
                        </label>
                      </li>
                      <li className="flex items-center gap-3">
                        <input
                          id="puma"
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor="puma"
                          className="text-slate-600 font-medium text-sm cursor-pointer"
                        >
                          Puma
                        </label>
                      </li>
                      <li className="flex items-center gap-3">
                        <input
                          id="tommy"
                          type="checkbox"
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor="tommy"
                          className="text-slate-600 font-medium text-sm cursor-pointer"
                        >
                          Tommy Hilfiger
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="header flex items-center gap-2 justify-between cursor-pointer">
                  <h4 className="text-slate-900 text-base font-semibold">
                    Color
                  </h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow w-[14px] h-[14px] fill-slate-800 transition-all duration-300 rotate-90"
                    viewBox="0 0 492.004 492.004"
                  >
                    <path
                      d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <div className="collape-content overflow-hidden transition-all duration-300">
                  <div className="mt-4 pb-1">
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-blue-700 w-8 h-8 hover:scale-[1.05] transition-all"
                      />
                      <button
                        type="button"
                        className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-purple-700 w-8 h-8 hover:scale-[1.05] transition-all"
                      />
                      <button
                        type="button"
                        className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-pink-700 w-8 h-8 hover:scale-[1.05] transition-all"
                      />
                      <button
                        type="button"
                        className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-orange-700 w-8 h-8 hover:scale-[1.05] transition-all"
                      />
                      <button
                        type="button"
                        className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-red-700 w-8 h-8 hover:scale-[1.05] transition-all"
                      />
                      <button
                        type="button"
                        className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-yellow-700 w-8 h-8 hover:scale-[1.05] transition-all"
                      />
                      <button
                        type="button"
                        className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-black w-8 h-8 hover:scale-[1.05] transition-all"
                      />
                      <button
                        type="button"
                        className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-gray-700 w-8 h-8 hover:scale-[1.05] transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                  <h4 className="text-slate-900 text-base font-semibold">
                    Price
                  </h4>
                </div>
                <div className="relative mt-4">
                  <div className="h-1.5 bg-gray-300 relative">
                    <div
                      id="activeTrack"
                      className="absolute h-1.5 bg-pink-500 rounded-full w-9/12"
                    />
                  </div>
                  <input
                    type="range"
                    id="minRange"
                    min={0}
                    max={1000}
                    defaultValue={0}
                    className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:w-5 
                [&::-webkit-slider-thumb]:h-5 
                [&::-webkit-slider-thumb]:bg-pink-500 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:border-2 
                [&::-webkit-slider-thumb]:border-white 
                [&::-webkit-slider-thumb]:shadow-md 
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-5 
                [&::-moz-range-thumb]:h-5 
                [&::-moz-range-thumb]:bg-pink-500 
                [&::-moz-range-thumb]:rounded-full 
                [&::-moz-range-thumb]:border-2 
                [&::-moz-range-thumb]:border-white 
                [&::-moz-range-thumb]:shadow-md 
                [&::-moz-range-thumb]:cursor-pointer
                [&::-moz-range-thumb]:border-none"
                  />
                  <input
                    type="range"
                    id="maxRange"
                    min={0}
                    max={1000}
                    defaultValue={750}
                    className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:w-5 
                [&::-webkit-slider-thumb]:h-5 
                [&::-webkit-slider-thumb]:bg-pink-500 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:border-2 
                [&::-webkit-slider-thumb]:border-white 
                [&::-webkit-slider-thumb]:shadow-md 
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-5 
                [&::-moz-range-thumb]:h-5 
                [&::-moz-range-thumb]:bg-pink-500 
                [&::-moz-range-thumb]:rounded-full 
                [&::-moz-range-thumb]:border-2 
                [&::-moz-range-thumb]:border-white 
                [&::-moz-range-thumb]:shadow-md 
                [&::-moz-range-thumb]:cursor-pointer
                [&::-moz-range-thumb]:border-none"
                  />
                  <div className="flex justify-between text-slate-600 font-medium text-sm mt-4">
                    <span id="minPrice">$750</span>
                    <span id="maxPrice">$1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div>
              <h3 className="text-slate-900 text-lg font-semibold mb-4">
                Recent Searches
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 border border-gray-300 rounded-md text-[13px] text-slate-600 font-medium py-1 px-2"
                >
                  Jackets
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    />
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 border border-gray-300 rounded-md text-[13px] text-slate-600 font-medium py-1 px-2"
                >
                  Tommy Hilfiger
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    />
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 border border-gray-300 rounded-md text-[13px] text-slate-600 font-medium py-1 px-2"
                >
                  Orange
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    />
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 border border-gray-300 rounded-md text-[13px] text-slate-600 font-medium py-1 px-2"
                >
                  Zara
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    />
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 border border-gray-300 rounded-md text-[13px] text-slate-600 font-medium py-1 px-2"
                >
                  Dresses
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    />
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
              <div className="group inline-block">
                <div className="    h-100 bg-gray-200 relative ">
                  <div className=" flex items-center w-full h-full">
                    <img src={bannerIMG} alt="" />
                  </div>
                  <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                    <button className=" bg-red-700 px-2 py-1 text-white font-medium">
                      -77%
                    </button>
                    <button className="bg-white p-2 rounded-full cursor-pointer">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                    <button className="text-white font-medium text-[14px] py-3 cursor-pointer px-6">
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
                <div className="">
                  <h5 className="text-[#B9A16B] font-normal text-[16px] ">
                    Jean
                  </h5>
                  <h3 className="text-[#222222] font-bold text-[17px]">
                    Kirby T-Shirt
                  </h3>
                  <p className="text-[#767676] font-normal text-[16px]">$17</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
