import React from "react";
import Herobg from "../../../assets/back/list3hero.jpg";

export default function Hero() {
  return (
    <div
      className=" px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px] bg-cover bg-center items-center flex -mt-9 h-48 sm:h-64 md:h-80 lg:h-[300px] justify-center  "
      style={{
        backgroundImage: `url(${Herobg})`,
      }}
    >
      <div>
        <p className="text-[#ffffff] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[14px] font-semibold mt-3 drop-shadow text-center">
          Home <span className="ml-6"> TIAMIN GOLD & JEWELLERIES LCC </span>
        </p>
        <h1 className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold drop-shadow-lg">
          Subsidiaries
        </h1>
      </div>
    </div>
  );
}
