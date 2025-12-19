import React from "react";
import Newsbg from "../../assets/back/newsbg.png";

export default function Careerhero() {
  return (
    <div className="relative w-full pt-20 md:pt-0">
      {/* Background Image */}
      <img
        src={Newsbg}
        alt="career background"
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <p className="text-[#ffffff] text-xs sm:text-sm lg:text-[14px] font-semibold mt-3 drop-shadow">
          Home / Blog
        </p>
        <h1 className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold drop-shadow-lg">
          News & Insights
        </h1>
      </div>
    </div>
  );
}
