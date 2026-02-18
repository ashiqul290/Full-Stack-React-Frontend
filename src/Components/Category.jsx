import React from "react";
import Container from "./Container";
import bannerIMG from "../assets/image 103.png";

const Category = () => {
  return (
    <>
      <div className="mt-25.25">
        <Container>
          <div className=" h-150 w-full grid grid-cols-4 grid-rows-2 gap-7.5">
            <div className="bg-[#EFF0F2] row-span-2 col-span-2 w-full h-full relative flex justify-end items-end">
              <div className=" w-118.25">
                <img src={bannerIMG} alt="" />
              </div>
              <div className=" absolute bottom-10 left-10 ">
                <h5 className=" text-[14px] font-normal">HOT LIST</h5>
                <h2 className=" font-bold text-[26px]">WOMEN COLLECTION</h2>
                <button className=" text-[14px] font-medium">SHOP NOW</button>
              </div>
            </div>
            <div className="w-full h-full col-span-2 row-span-1  bg-[#EFF0F2] relative flex justify-end items-end overflow-hidden">
                <div className="h-full w-80 bg-fuchsia-500 flex items-end justify-end">
                    <img src={bannerIMG} className=" " alt="" />
                </div>
              <div className=" absolute bottom-10 left-10 ">
                <h5 className=" text-[14px] font-normal">HOT LIST</h5>
                <h2 className=" font-bold text-[26px]">MEN COLLECTION</h2>
                <button className=" cursor-pointer border-b-2 text-[14px] font-medium">SHOP NOW</button>
              </div>
            </div>
            <div className="w-full h-full  bg-[#EFF0F2] relative overflow-hidden">
                 <div className="h-full w-80 bg-fuchsia-500 flex items-end justify-end">
                    <img src={bannerIMG} className=" " alt="" />
                </div>
              <div className=" absolute bottom-10 left-10 ">
                <h5 className=" text-[14px] font-normal">HOT LIST</h5>
                <h2 className=" font-bold text-[26px]">KIDS COLLECTION</h2>
                <button className=" cursor-pointer border-b-2 text-[14px] font-medium">SHOP NOW</button>
              </div>
            </div>
            <div className="w-full h-full relative bg-[#F5E6E0] overflow-hidden">
                 
              <div className=" absolute bottom-10 left-10 ">
                
                <h2 className=" font-bold text-[26px]">E-GIFT CARDS</h2>
                <p className="w-53.25 mb-1 font-normal text-[14px]">Surprise someone with the gift they 
really want.</p>
                <button className=" cursor-pointer border-b-2 text-[14px] font-medium">DISCOVER MORE</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Category;
