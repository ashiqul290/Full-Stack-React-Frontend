import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";
import Slider from "react-slick";
import bannerIMG from "../assets/image 103.png";
import { FaRegHeart } from "react-icons/fa";

const LATESTNEWS = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="">
        <h3 className=" font-bold text-[35px] text-center mt-23.5">
          LATEST NEWS
        </h3>
        <Container>
          <div className="slider-container my-8.75 ">
            <Slider {...settings}>
              <div className="">
                <div className="group p-4 inline-block">
                  <div className="    h-100 bg-gray-200 relative ">
                    <div className=" flex items-center w-full h-full">
                      <img src={bannerIMG} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-[#767676] mt-3.5 font-medium text-[14px]">
                      BY ADMIN <span>APRIL 05, 2020</span>
                    </h3>
                    <p className="text-[#222222] mt-1 font-normal text-[18px]">
                      Woman with good shoes is never be ugly place
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="group p-4 inline-block">
                  <div className="    h-100 bg-gray-200 relative ">
                    <div className=" flex items-center w-full h-full">
                      <img src={bannerIMG} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-[#767676] mt-3.5 font-medium text-[14px]">
                      BY ADMIN <span>APRIL 05, 2020</span>
                    </h3>
                    <p className="text-[#222222] mt-1 font-normal text-[18px]">
                      Woman with good shoes is never be ugly place
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="group p-4 inline-block">
                  <div className="    h-100 bg-gray-200 relative ">
                    <div className=" flex items-center w-full h-full">
                      <img src={bannerIMG} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-[#767676] mt-3.5 font-medium text-[14px]">
                      BY ADMIN <span>APRIL 05, 2020</span>
                    </h3>
                    <p className="text-[#222222] mt-1 font-normal text-[18px]">
                      Woman with good shoes is never be ugly place
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="group p-4 inline-block">
                  <div className="    h-100 bg-gray-200 relative ">
                    <div className=" flex items-center w-full h-full">
                      <img src={bannerIMG} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-[#767676] mt-3.5 font-medium text-[14px]">
                      BY ADMIN <span>APRIL 05, 2020</span>
                    </h3>
                    <p className="text-[#222222] mt-1 font-normal text-[18px]">
                      Woman with good shoes is never be ugly place
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="group p-4 inline-block">
                  <div className="    h-100 bg-gray-200 relative ">
                    <div className=" flex items-center w-full h-full">
                      <img src={bannerIMG} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-[#767676] mt-3.5 font-medium text-[14px]">
                      BY ADMIN <span>APRIL 05, 2020</span>
                    </h3>
                    <p className="text-[#222222] mt-1 font-normal text-[18px]">
                      Woman with good shoes is never be ugly place
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LATESTNEWS;
