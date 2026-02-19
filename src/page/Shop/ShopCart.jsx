import React from "react";
import Container from "../../Components/Container";
import img from "../../assets/image 103.png";
import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router";
const ShopCart = () => {
  return (
    <>
      <div className=" mb-25">
        <Container>
          <h3 className=" text-[35px] font-bold mt-4">CART</h3>

          <div className=" flex justify-between mt-12">
            <div className=" flex gap-2 border-b-2 w-full border-gray-900">
              <h4 className=" font-medium">01</h4>
              <div className="">
                <h2 className=" text-[18px] font-medium">SHOPPING BAG</h2>
                <h3 className=" text-[14px] font-normal text-[#767676]">
                  Manage Your Items List
                </h3>
              </div>
            </div>
            <div className=" flex gap-2 border-b w-full border-gray-400">
              <h4 className=" font-medium">02</h4>
              <div className="">
                <h2 className=" text-[18px] font-medium">
                  SHIPPING AND CHECKOUT
                </h2>
                <h3 className=" text-[14px] font-normal text-[#767676]">
                  Checkout Your Items List
                </h3>
              </div>
            </div>
            <div className=" flex gap-2 border-b w-full border-gray-400">
              <h4 className=" font-medium">03</h4>
              <div className="">
                <h2 className=" text-[18px] font-medium">CONFIRMATION</h2>
                <h3 className=" text-[14px] font-normal text-[#767676]">
                  Review And Submit Your Order
                </h3>
              </div>
            </div>
          </div>

          <div className=" mt-12.5 flex gap-5 items-start justify-between">
            <div className="w-220">
              <div className="flex justify-between py-2.5 border-b border-gray-200">
                <h3 className=" font-medium">PRODUCT</h3>
                <div className="flex gap-24">
                  <h3 className=" font-medium">PRICE</h3>
                  <h3 className=" font-medium">QUANTITY</h3>
                  <h3 className="mr-8 font-medium">SUBTOTAL</h3>
                </div>
              </div>
              <div className="">
                <div className=" relative flex items-center justify-between py-2 border-b border-gray-200">
                  <div className=" flex items-center gap-2">
                    <div className="w-30 h-30">
                      <img src={img} alt="" />
                    </div>
                    <div className="">
                      <h3 className=" font-medium">Zessi Dresses</h3>
                      <p className=" text-[14px] font-normal  text-[#767676] py-1">
                        Color: Yellow
                      </p>
                      <p className=" text-[14px] font-normal  text-[#767676]">
                        Size: L
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-25 pr-11">
                    <div className="">
                      <h3 className=" font-medium text-[16px] text-[#767676]">
                        $99
                      </h3>
                    </div>
                    <div className="w-27.5 h-12.5 border border-gray-200 flex justify-between items-center">
                      <button className=" px-3 py-3 text-[#767676] cursor-pointer">
                        <FaMinus />
                      </button>
                      <h3 className=" font-medium">3</h3>
                      <button className=" px-3 py-3 text-[#767676] cursor-pointer">
                        <TiPlus />
                      </button>
                    </div>
                    <div className="">
                      <h3 className=" font-medium text-[16px] text-black">
                        $399
                      </h3>
                    </div>
                  </div>
                  <div className=" absolute top-12.5 right-0 px-2 py-2 text-xl">
                    <IoCloseSharp />
                  </div>
                </div>
                <div className=" relative flex items-center justify-between py-2 border-b border-gray-200">
                  <div className=" flex items-center gap-2">
                    <div className="w-30 h-30">
                      <img src={img} alt="" />
                    </div>
                    <div className="">
                      <h3 className=" font-medium">Zessi Dresses</h3>
                      <p className=" text-[14px] font-normal  text-[#767676] py-1">
                        Color: Yellow
                      </p>
                      <p className=" text-[14px] font-normal  text-[#767676]">
                        Size: L
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-25 pr-11">
                    <div className="">
                      <h3 className=" font-medium text-[16px] text-[#767676]">
                        $99
                      </h3>
                    </div>
                    <div className="w-27.5 h-12.5 border border-gray-200 flex justify-between items-center">
                      <button className=" px-3 py-3 text-[#767676] cursor-pointer">
                        <FaMinus />
                      </button>
                      <h3 className=" font-medium">3</h3>
                      <button className=" px-3 py-3 text-[#767676] cursor-pointer">
                        <TiPlus />
                      </button>
                    </div>
                    <div className="">
                      <h3 className=" font-medium text-[16px] text-black">
                        $399
                      </h3>
                    </div>
                  </div>
                  <div className=" absolute top-12.5 right-0 px-2 py-2 text-xl">
                    <IoCloseSharp />
                  </div>
                </div>
                <div className=" relative flex items-center justify-between py-2 border-b border-gray-200">
                  <div className=" flex items-center gap-2">
                    <div className="w-30 h-30">
                      <img src={img} alt="" />
                    </div>
                    <div className="">
                      <h3 className=" font-medium">Zessi Dresses</h3>
                      <p className=" text-[14px] font-normal  text-[#767676] py-1">
                        Color: Yellow
                      </p>
                      <p className=" text-[14px] font-normal  text-[#767676]">
                        Size: L
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-25 pr-11">
                    <div className="">
                      <h3 className=" font-medium text-[16px] text-[#767676]">
                        $99
                      </h3>
                    </div>
                    <div className="w-27.5 h-12.5 border border-gray-200 flex justify-between items-center">
                      <button className=" px-3 py-3 text-[#767676] cursor-pointer">
                        <FaMinus />
                      </button>
                      <h3 className=" font-medium">3</h3>
                      <button className=" px-3 py-3 text-[#767676] cursor-pointer">
                        <TiPlus />
                      </button>
                    </div>
                    <div className="">
                      <h3 className=" font-medium text-[16px] text-black">
                        $399
                      </h3>
                    </div>
                  </div>
                  <div className=" absolute top-12.5 right-0 px-2 py-2 text-xl">
                    <IoCloseSharp />
                  </div>
                </div>
                <div className=" flex justify-between items-center mt-8">
                  <div className=" w-92.5 border border-gray-300 py-5 flex justify-between px-2">
                    <input
                      type="text"
                      className="pl-2 outline-none border-none"
                      placeholder="Coupon Code"
                    />
                    <button className=" font-medium cursor-pointer">
                      APPLY COUPON
                    </button>
                  </div>
                  <button className=" px-13.75 py-5.5 bg-[#E4E4E4] font-medium">
                    UPDATE CART
                  </button>
                </div>
              </div>
            </div>
          <div className=" w-90 ">
    <div className=" border border-gray-400 p-9.5">
    <h3 className=" font-bold text-[16px] mb-7">CART TOTALS</h3>
    <div className=" flex justify-between py-3 border-b border-gray-200">
    <h3 className=" font-medium text-[14px]">SUBTOTAL</h3>
    <p className=" font-medium text-[14px]">$1300</p>
    </div>
    <div className=" flex justify-between py-3 border-b border-gray-200">
    <h3 className=" font-medium text-[14px]">SHIPPING</h3>
    <div className="">
      <div className=" flex gap-3">
        <input type="checkbox"  />
        <label htmlFor="" className=" font-normal text-[14px]">Free shipping</label>
      </div>
      <div className=" flex gap-3 my-3">
        <input type="checkbox"  />
        <label htmlFor="" className=" font-normal text-[14px]">Flat rate: $49</label>
      </div>
      <div className=" flex gap-3">
        <input type="checkbox"  />
        <label htmlFor="" className=" font-normal text-[14px]">Local pickup: $8</label>
      </div>
      <div className="mb-1.5 mt-2.5">
        <h5 className=" font-normal text-[14px]">Shipping to AL.</h5>
      </div>
      <div className=" ">
        <h5 className=" font-medium text-[14px] border-b-2">CHANGE ADDRESS</h5>
      </div>
    </div>
    </div>
      <div className=" flex justify-between py-3 border-b border-gray-200">
    <h3 className=" font-medium text-[14px]">VAT</h3>
    <p className=" font-medium text-[14px]">$19</p>
    </div>
      <div className=" flex justify-between py-3 ">
    <h3 className=" font-medium text-[14px]">TOTAL</h3>
    <p className=" font-medium text-[14px]">$1319</p>
    </div>
    </div>
    <div className=" flex justify-center mt-5  w-full">
      <Link to={'/shop-checkout'} className=" w-full">
    
      <button className=" w-full font-medium text-[14px] bg-black text-white py-4 cursor-pointer">PROCEED TO CHECKOUT</button>
        </Link>
    </div>

          </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopCart;
