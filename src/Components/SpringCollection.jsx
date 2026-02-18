import React from "react";
import bannerIMG from "../assets/image 103.png";
import Container from "./Container";

const SpringCollection = () => {
  return (
    <>
    <div className="bg-[#EFF0F2] mt-25">
      <Container>
        <div className=" w-full h-full flex justify-between items-center">
         
          <div className=" ">
            <h5 className=" text-[14px] font-medium text-red-700">DEAL OF THE WEEK</h5>
            <h2 className=" font-bold text-[70px] uppercase">Spring <span className=" font-medium lowercase">Collection</span></h2>
            <button className=" text-[18px] font-bold border-b-2">SHOP NOW</button>
          </div>
           <div className=" w-118.25">
            <img src={bannerIMG} alt="" />
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default SpringCollection;
