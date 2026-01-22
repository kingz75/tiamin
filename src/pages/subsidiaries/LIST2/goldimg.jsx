import React from "react";
import Goldimg from "../../../assets/images/goldimg.jpg";

const goldimg = () => {
  return (
    <div className="flex justify-center bg-cover bg-center py-6 sm:py-12 md:py-16 bg-white">
      <div className="flex flex-col place-items-center gap-4 sm:gap-6">
        <div>
          <img src={Goldimg} alt="" className="w-12 sm:w-16 md:w-20" />
        </div>
        <div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] font-extrabold text-[#4BAF47] text-center">
            Tiamin Gold & Jewelleries LCC
          </p>
        </div>
      </div>
    </div>
  );
};

export default goldimg;
