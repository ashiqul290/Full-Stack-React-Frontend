
import React, { useState } from "react";
import ReviwAndDescription from "./ReviwAndDescription";
import ReletedProduct from "./ReletedProduct";

const SlingleViewPage = () => {
  // Store which image is currently selected
  const [mainImage, setMainImage] = useState(
    "https://readymadeui.com/images/fashion-img-1.webp"
  );

  // Array of small product images
  const productImages = [
    "https://readymadeui.com/images/fashion-img-1.webp",
    "https://readymadeui.com/images/fashion-img-2.webp",
    "https://readymadeui.com/images/fashion-img-3.webp",
    "https://readymadeui.com/images/fashion-img-4.webp",
  ];

  return (
    <>
    <div className="p-4">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
                {productImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product ${index + 1}`}
                    className={`aspect-[64/85] object-cover object-top w-full cursor-pointer border-b-2 ${
                      mainImage === img ? "border-black" : "border-transparent"
                    }`}
                    onMouseEnter={() => setMainImage(img)} // Change main image on hover
                  />
                ))}
              </div>

              {/* Main flex-1 image */}
              <div className="flex-1">
                <img
                  src={mainImage}
                  alt="Product"
                  className="w-full aspect-[548/712] object-cover"
                />
              </div>
            </div>
          </div>

       <div className="w-full">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            Women Embroidered A-line Kurta
          </h3>
          
          <div className="flex items-center flex-wrap gap-4 mt-6">
            <h4 className="text-slate-900 text-2xl sm:text-3xl font-semibold">
              $12
            </h4>
            <p className="text-slate-500 text-lg">
              <strike>$16</strike>{" "}
              
            </p>
          </div>
              <p className="text-slate-500 mt-2 text-sm">
            Women Embroidered Georgette A-line Kurta With Attached Dupatta
            (Maroon)
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum debitis natus, eveniet nulla commodi asperiores voluptatum iste quisquam deserunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum debitis natus, eveniet nulla commodi asperiores voluptatum iste quisquam deserunt.
          </p>
        </div>
        <hr className="my-6 border-slate-300" />
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            Sizes
          </h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              type="button"
              className="w-10 h-9 border border-slate-300 hover:border-blue-600 text-sm cursor-pointer flex items-center justify-center shrink-0"
            >
              SM
            </button>
            <button
              type="button"
              className="w-10 h-9 border border-blue-600 hover:border-blue-600 text-sm cursor-pointer flex items-center justify-center shrink-0"
            >
              MD
            </button>
            <button
              type="button"
              className="w-10 h-9 border border-slate-300 hover:border-blue-600 text-sm cursor-pointer flex items-center justify-center shrink-0"
            >
              LG
            </button>
            <button
              type="button"
              className="w-10 h-9 border border-slate-300 hover:border-blue-600 text-sm cursor-pointer flex items-center justify-center shrink-0"
            >
              XL
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              className="px-4 py-3 w-[45%] cursor-pointer border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium"
            >
              Order Confirm
            </button>
            <button
              type="button"
              className="px-4 py-3 w-[45%] cursor-pointer border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
            >
              Add to cart
            </button>
          </div>
        </div>
      
       
      </div>
        </div>
      </div>
    </div>

   <ReviwAndDescription />

    <div className="">
                <ReletedProduct />


    </div>

        

    </>
  );
};

export default SlingleViewPage;
