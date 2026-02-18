import React from 'react'
import bannerIMG from '../assets/image 103.png'
import Container from './Container'
const Banner = () => {
  return (
    <>
    <div className="bg-gray-200 ">
    <Container>
    <div className=" flex justify-between items-center">
    <div className="">
        <h4 className=' font-medium text-[14px]'>SUMMER 2020</h4>
        <h1 className=' my-3 w-197 font-bold text-[70px]'>Hello New Season</h1>
        <p className=' text-[16px]'>LIMITED TIME OFFER - UP TO 60% OFF & FREE SHIPPING</p>
        <button className=' text-[14px] font-medium px-11 py-5 bg-white mt-8'>DISCOVER NOW</button>
    </div>
    <div className="">
        <img src={bannerIMG} alt="benner" />
    </div>

    </div>
    </Container>
    </div>
    
    </>
  )
}

export default Banner