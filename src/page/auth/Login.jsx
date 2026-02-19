import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className="w-125">
          <h3 className=" text-4xl font-bold text-center ">LOGIN</h3>
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
                Username or email address *
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
            <div className=" flex justify-between my-5">
              <div className=" flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <h3 className=" font-medium text-[14px] text-[#767676]">
                  Remember me
                </h3>
              </div>
              <div className="">
                <Link to="" className=" underline font-medium">
                  Lost password?
                </Link>
              </div>
            </div>
            <div className=" flex justify-center mt-5">
              <Link to={""} className=" w-full">
                <button className=" font-medium text-[14px] bg-black text-white w-full py-4 cursor-pointer">
                  LOG IN
                </button>
              </Link>
            </div>
            <div className=" text-center mt-6">
              <h3 className=" text-[#767676] text-[14px]">
                No account yet?
                <Link
                  to={"/register"}
                  className=" underline font-medium text-black"
                >
                  {" "}
                  Create Account
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
