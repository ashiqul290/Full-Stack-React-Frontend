import React from 'react'
import Container from '../../Components/Container'
import { FaCheck } from 'react-icons/fa'

const OrderReceived = () => {
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
            <div className=" flex gap-2 border-b-2 w-full border-gray-900">
              <h4 className=" font-medium">03</h4>
              <div className="">
                <h2 className=" text-[18px] font-medium">CONFIRMATION</h2>
                <h3 className=" text-[14px] font-normal text-[#767676]">
                  Review And Submit Your Order
                </h3>
              </div>
            </div>
          </div>

        <div className=" text-center mt-12.5">
            <div className=" bg-[#B9A16B] w-20 h-20 rounded-full flex justify-center items-center text-white text-4xl mx-auto">
                <FaCheck />
            </div>
            <h3 className=' text-[35px] font-medium'>Your order is completed!</h3>
            <p className=' font-normal text-[14px] text-gray-500'>Thank you. Your order has been received.</p>
        </div>
    <div className="w-225 p-10 border border-dashed flex justify-between mx-auto mt-8.75">
        <div className="">
            <h3 className=' text-[14px] font-medium text-[#767676]'>Order Number</h3>
            <p className=' font-medium text-[16px]'>13119</p>
        </div>
        <div className="">
            <h3 className=' text-[14px] font-medium text-[#767676]'>Date</h3>
            <p className=' font-medium text-[16px]'>27/11/2020</p>
        </div>
        <div className="">
            <h3 className=' text-[14px] font-medium text-[#767676]'>Total</h3>
            <p className=' font-medium text-[16px]'>$40.10</p>
        </div>
        <div className="">
            <h3 className=' text-[14px] font-medium text-[#767676]'>Payment Method</h3>
            <p className=' font-medium text-[16px]'>Direct Bank Transfer</p>
        </div>
    </div>
    <div className="w-225 p-10 border   mx-auto mt-8.75">
        <h3 className=" font-bold text-[16px] mb-7">ORDER DETAILS</h3>
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
                  <div className=" flex justify-between py-3 border-b border-gray-200">
                    <h3 className=" font-medium text-[14px]">PAYMENT METHOD</h3>
                    <p className=" font-medium text-[14px]">Direct bank transfer</p>
                  </div>
                  <div className=" flex justify-between py-3 ">
                    <h3 className=" font-medium text-[14px]">TOTAL</h3>
                    <p className=" font-medium text-[14px]">$1319</p>
                  </div>
    </div>

        </Container>

        </div>
    
    </>
  )
}

export default OrderReceived