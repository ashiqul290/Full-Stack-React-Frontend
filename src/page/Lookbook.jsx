import React from "react";
import Container from "../Components/Container";
import bannerIMG from "../assets/image 103.png";

const Lookbook = () => {
  return (
    <>
      <div className=" mb-25">
        <Container>
          <h3 className=" text-[35px] font-bold my-10">LOOKBOOK</h3>
          <div className=" h-150 w-full grid grid-cols-4 grid-rows-2 gap-7.5">
         
            <div className="w-full h-full col-span-2 row-span-1  bg-red-500 relative flex justify-end items-end overflow-hidden">
              <div className="h-full w-80 bg-fuchsia-500 flex items-end justify-end">
                <img src={bannerIMG} className=" " alt="" />
              </div>
              <div className=" absolute bottom-10 left-10 ">
                <h5 className=" text-[14px] font-normal text-white">HOT LIST</h5>
                <h2 className=" font-bold text-[26px] text-white">MEN COLLECTION</h2>
                <button className=" cursor-pointer border-b-2 text-[14px] font-medium text-white">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="w-full h-full col-span-2 row-span-2  bg-[#EFF0F2] relative flex justify-end items-end overflow-hidden">
              <div className="h-full w-80  flex items-end justify-end">
                <div className="">

                <img src={bannerIMG} className=" w-118.25" alt="" />
                </div>
              </div>
              <div className=" absolute bottom-10 left-10 ">
                <h5 className=" text-[14px] font-normal">HOT LIST</h5>
                <h2 className=" font-bold text-[26px]">MEN COLLECTION</h2>
                <button className=" cursor-pointer border-b-2 text-[14px] font-medium">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="w-full h-full col-span-2 row-span-2  bg-[#EFF0F2] relative flex justify-end items-end overflow-hidden">
              <div className="h-full w-80 bg-fuchsia-500 flex items-end justify-end">
                <img src={bannerIMG} className=" " alt="" />
              </div>
              <div className=" absolute bottom-10 left-10 ">
                <h5 className=" text-[14px] font-normal">HOT LIST</h5>
                <h2 className=" font-bold text-[26px]">MEN COLLECTION</h2>
                <button className=" cursor-pointer border-b-2 text-[14px] font-medium">
                  SHOP NOW
                </button>
              </div>
            </div>
          
          
          </div>
          <div className=" h-150 mt-9 w-full grid grid-cols-4 grid-rows-2 gap-7.5">
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
                <button className=" cursor-pointer border-b-2 text-[14px] font-medium">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="w-full h-full col-span-2 row-span-1  bg-[#EFF0F2] relative flex justify-end items-end overflow-hidden">
              <div className="h-full w-80 bg-fuchsia-500 flex items-end justify-end">
                <img src={bannerIMG} className=" " alt="" />
              </div>
              <div className=" absolute bottom-10 left-10 ">
                <h5 className=" text-[14px] font-normal">HOT LIST</h5>
                <h2 className=" font-bold text-[26px]">MEN COLLECTION</h2>
                <button className=" cursor-pointer border-b-2 text-[14px] font-medium">
                  SHOP NOW
                </button>
              </div>
            </div>
          
           
          </div>

          <div className="">
            <button className=" font-medium text-[14px] underline">SHOW MORE</button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Lookbook;
