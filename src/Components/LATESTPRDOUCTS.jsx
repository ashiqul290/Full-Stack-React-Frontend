import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Container from './Container';
import bannerIMG from "../assets/image 103.png";
import { FaRegHeart } from 'react-icons/fa';


const LATESTPRDOUCTS = () => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed:3000,
    cssEase: "linear"
  };
  return (
    <>
        
    <Container>
        <h3 className=' font-bold text-[35px] text-center mt-23.5'>LATEST PRDOUCTS</h3>
 <div className="slider-container my-8.75 ">
      <Slider {...settings}>
       <div className="">
          <div className="group p-4 inline-block">
             <div className="    h-100 bg-gray-200 relative ">
                <div className=" flex items-center w-full h-full">
                  <img src={bannerIMG} alt="" />
                </div>
                 <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                     <button className=' bg-red-700 px-2 py-1 text-white font-medium'>-77%</button>
                     <button className="bg-white p-2 rounded-full cursor-pointer"><FaRegHeart /></button>
                 </div>
                 <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>ADD TO CART</button>
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>QUICK VIEW</button>
                 </div>
             </div>
             <div className="">
             <h5 className='text-[#B9A16B] font-normal text-[16px] '>Jean</h5>
             <h3 className='text-[#222222] font-bold text-[17px]'>Kirby T-Shirt</h3>
             <p className='text-[#767676] font-normal text-[16px]'>$17</p>
             </div>
         
             </div>
             </div>
          <div className="group p-4 inline-block">
             <div className="    h-100 bg-gray-200 relative ">
                <div className=" flex items-center w-full h-full">
                  <img src={bannerIMG} alt="" />
                </div>
                 <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                     <button className=' bg-red-700 px-2 py-1 text-white font-medium'>-77%</button>
                     <button className="bg-white p-2 rounded-full cursor-pointer"><FaRegHeart /></button>
                 </div>
                 <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>ADD TO CART</button>
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>QUICK VIEW</button>
                 </div>
             </div>
             <div className="">
             <h5 className='text-[#B9A16B] font-normal text-[16px] '>Jean</h5>
             <h3 className='text-[#222222] font-bold text-[17px]'>Kirby T-Shirt</h3>
             <p className='text-[#767676] font-normal text-[16px]'>$17</p>
             </div>
         
             </div>
          <div className="group p-4 inline-block">
             <div className="    h-100 bg-gray-200 relative ">
                <div className=" flex items-center w-full h-full">
                  <img src={bannerIMG} alt="" />
                </div>
                 <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                     <button className=' bg-red-700 px-2 py-1 text-white font-medium'>-77%</button>
                     <button className="bg-white p-2 rounded-full cursor-pointer"><FaRegHeart /></button>
                 </div>
                 <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>ADD TO CART</button>
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>QUICK VIEW</button>
                 </div>
             </div>
             <div className="">
             <h5 className='text-[#B9A16B] font-normal text-[16px] '>Jean</h5>
             <h3 className='text-[#222222] font-bold text-[17px]'>Kirby T-Shirt</h3>
             <p className='text-[#767676] font-normal text-[16px]'>$17</p>
             </div>
         
             </div>
          <div className="group p-4 inline-block">
             <div className="    h-100 bg-gray-200 relative ">
                <div className=" flex items-center w-full h-full">
                  <img src={bannerIMG} alt="" />
                </div>
                 <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                     <button className=' bg-red-700 px-2 py-1 text-white font-medium'>-77%</button>
                     <button className="bg-white p-2 rounded-full cursor-pointer"><FaRegHeart /></button>
                 </div>
                 <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>ADD TO CART</button>
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>QUICK VIEW</button>
                 </div>
             </div>
             <div className="">
             <h5 className='text-[#B9A16B] font-normal text-[16px] '>Jean</h5>
             <h3 className='text-[#222222] font-bold text-[17px]'>Kirby T-Shirt</h3>
             <p className='text-[#767676] font-normal text-[16px]'>$17</p>
             </div>
         
             </div>
          <div className="group p-4 inline-block">
             <div className="    h-100 bg-gray-200 relative ">
                <div className=" flex items-center w-full h-full">
                  <img src={bannerIMG} alt="" />
                </div>
                 <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                     <button className=' bg-red-700 px-2 py-1 text-white font-medium'>-77%</button>
                     <button className="bg-white p-2 rounded-full cursor-pointer"><FaRegHeart /></button>
                 </div>
                 <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>ADD TO CART</button>
                     <button className='text-white font-medium text-[14px] py-3 cursor-pointer px-6'>QUICK VIEW</button>
                 </div>
             </div>
             <div className="">
             <h5 className='text-[#B9A16B] font-normal text-[16px] '>Jean</h5>
             <h3 className='text-[#222222] font-bold text-[17px]'>Kirby T-Shirt</h3>
             <p className='text-[#767676] font-normal text-[16px]'>$17</p>
             </div>
         
             </div>
        
    
      </Slider>
    </div>
    </Container>
    </>
  )
}

export default LATESTPRDOUCTS