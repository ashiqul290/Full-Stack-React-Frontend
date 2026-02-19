import React, { useState } from "react";
import Container from "../../Components/Container";
import { Link } from "react-router";

const ShopCheckout = () => {
  const [label, setLabel] = useState("Company Name (optional)");
  return (
    <>
      <div className="mb-25">
        <Container>
          <h3 className=" text-[35px] font-bold mt-4">SHIPPING AND CHECKOUT</h3>

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
            <div className=" flex gap-2 border-b-2 w-full border-gray-900">
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
              <h3 className=" font-medium mb-8.5">BILLING DETAILS</h3>
              <div className="">
                <div className=" flex justify-between gap-7.5">
                  <div className="relative border border-gray-300 rounded-md w-full">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                    />

                    <label
                      className="
                      pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative border border-gray-300 rounded-md w-full">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                    />

                    <label
                      className="
                      pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
                    pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                  >
                    Company Name (optional)
                  </label>
                </div>
                <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
                    pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                  >
                    Country / Region *
                  </label>
                </div>
                <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
                    pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                  >
                    Street Address *
                  </label>
                </div>
                <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
                    pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                  >
                    Town / City *
                  </label>
                </div>
                <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
                    pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                  >
                    Postcode / ZIP *
                  </label>
                </div>
                <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
                    pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                  >
                    Province *
                  </label>
                </div>
                <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
                    pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                  >
                    Phone *
                  </label>
                </div>
                <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
                    pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                  >
                    Your Mail
                  </label>
                </div>
                <div className="my-6.25 ">
                  <div className=" flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <h3 className=" font-medium text-[14px]">
                      CREATE AN ACCOUNT?
                    </h3>
                  </div>
                  <div className=" flex items-center gap-2 mt-1">
                    <input type="checkbox" name="" id="" />
                    <h3 className=" font-medium text-[14px]">
                      SHIP TO A DIFFERENT ADDRESS?
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                    <textarea
                      type="text"
                      placeholder=" "
                      className="peer w-full h-50 px-3 py-4 text-[16px] focus:outline-none"
                    />

                    <label
                      className="
                      pointer-events-none
      absolute left-3 
      top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                    >
                      Order Notes (optional)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" w-90 ">
                <div className=" border border-gray-400 p-9.5">
                  <h3 className=" font-bold text-[16px] mb-7">YOUR ORDER</h3>
                  <div className=" flex justify-between py-3 border-b border-gray-200">
                    <h3 className=" font-medium text-[14px]">PRODUCT</h3>
                    <p className=" font-medium text-[14px]">SUBTOTAL</p>
                  </div>

                  <div className="border-b border-gray-200">
                    <div className=" flex justify-between py-3 ">
                      <h3 className=" text-[#767676] font-medium text-[14px]">
                        Zessi Dresses x2
                      </h3>
                      <p className=" text-[#767676] font-medium text-[14px]">
                        $32.50
                      </p>
                    </div>
                    <div className=" flex justify-between py-3 ">
                      <h3 className=" text-[#767676] font-medium text-[14px]">
                        Kirby T-Shirt
                      </h3>
                      <p className=" text-[#767676] font-medium text-[14px]">
                        $29.90
                      </p>
                    </div>
                  </div>
                  <div className=" flex justify-between py-3 border-b border-gray-200">
                    <h3 className=" font-medium text-[14px]">SUBTOTAL</h3>
                    <p className=" font-medium text-[14px]">$89.90</p>
                  </div>
                  <div className=" flex justify-between py-3 border-b border-gray-200">
                    <h3 className=" font-medium text-[14px]">SHIPPING</h3>
                    <p className=" font-medium text-[14px]">Free shipping</p>
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
              </div>
              <div className=" w-90 mt-5">
                <div className="border border-gray-300 p-9.5">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-black"
                      defaultChecked
                    />
                    <h3 className="font-medium text-[16px]">
                      Direct bank transfer
                    </h3>
                  </div>

                  <p className="ml-5 mb-4 text-gray-600">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.
                  </p>

                  <div className="flex gap-2 mb-4">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-black"
                    />
                    <h3 className="font-medium text-[16px]">Check payments</h3>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-black"
                    />
                    <h3 className="font-medium text-[16px]">
                      Cash on delivery
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-black"
                    />
                    <h3 className="font-medium text-[16px]">PayPal</h3>
                  </div>
                  <p className=" mt-2 text-gray-600 font-normal text-[12px]">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <span className=" text-red-700">privacy policy</span>.
                  </p>
                </div>
              </div>
              <div className=" flex justify-center mt-5">
                <Link to={"/shop-confirmation"} className=" w-full">
                  <button className=" font-medium text-[14px] bg-black text-white w-full py-4 cursor-pointer">
                    PLACE ORDER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopCheckout;
