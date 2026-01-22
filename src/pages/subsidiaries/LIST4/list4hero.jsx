import React from "react";
import Herobg from "../../../assets/back/list4hero.jpg";

export default function Hero() {
  return (
    <div
      className=" px-4 sm:px-6 md:px-8 lg:px-[100px] bg-cover bg-center items-center flex -mt-9 h-48 sm:h-56 md:h-64 lg:h-[300px] justify-center  "
      style={{
        backgroundImage: `url(${Herobg})`,
      }}
    >
      <div>
        <p className="text-[#ffffff] text-xs sm:text-sm font-semibold mt-3 drop-shadow text-center">
          Home <span className="ml-6"> Tiamin Air</span>
        </p>
        <h1 className="text-[#ffffff] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold drop-shadow-lg">
          Subsidiaries
        </h1>
      </div>
    </div>
  );
}
