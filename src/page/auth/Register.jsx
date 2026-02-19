import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className="w-125">
          <h3 className=" text-4xl font-bold text-center ">REGISTER</h3>
          <div className="">
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
               Username
              </label>
            </div>
            <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
              <input
                type="email"
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
               Email address  * 
              </label>
            </div>
            <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
              <input
                type="password"
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
                Password *
              </label>
            </div>
            <div className="">
                <p className=" text-[#767676] font-medium text-[14px] mb-3.5 mt-5">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
            </div>
            <div className=" flex justify-center mt-5">
              <Link to={""} className=" w-full">
                <button className=" font-medium text-[14px] bg-black text-white w-full py-4 cursor-pointer">
                 REGISTER
                </button>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
