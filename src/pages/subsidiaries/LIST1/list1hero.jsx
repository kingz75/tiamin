import React from "react";
import Herobg from "../../../assets/back/hero1bg.jpg";

export default function Hero() {
  return (
    <div
      className=" px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[100px] bg-cover bg-center items-center flex -mt-9 min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[300px] justify-center"
      style={{
        backgroundImage: `url(${Herobg})`,
      }}
    >
      <div>
        <p className="text-[#ffffff] text-xs sm:text-sm font-semibold mt-3 drop-shadow text-center">
          Home / Subsidiaries
        </p>
        <h1 className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold drop-shadow-lg">
          Subsidiaries
        </h1>
      </div>
    </div>
  );
}
