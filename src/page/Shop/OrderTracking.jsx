import React from 'react'
import Container from '../../Components/Container'
import { Link } from 'react-router'

const OrderTracking = () => {
  return (
    <>
    <div className=" my-20">
        <Container>
        <div className="w-125 mx-auto text-center">
            <h3 className=' font-bold text-[35px] '>Order Tracking</h3>
            <p className='mt-10 text-[#767676] text-[14px] font-medium'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>

            <div className="">
                 <div className="relative border border-gray-300 rounded-md w-full mt-7.5">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full px-3 py-4 text-[16px] focus:outline-none"
                  />

                  <label
                    className="
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
                   Order ID
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
                  Billing email
                  </label>
                </div>

                 <div className=" flex justify-center mt-5">
                <Link to={''} className=" w-full">
                <button className=" font-medium text-[14px] bg-black text-white w-full py-4 cursor-pointer">
                  TRACK
                </button>
                </Link>
              </div>
            </div>
        </div>
        </Container>
    </div>
    </>
  )
}

export default OrderTracking