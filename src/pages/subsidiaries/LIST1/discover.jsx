import React from "react";
import Discoverbg from "../../../assets/back/discoverbg.png";

export default function Discover() {
  return (
    <div
      className=" bg-cover bg-center items-center flex px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[100px] min-h-[150px] sm:min-h-[180px] md:min-h-[200px]"
      style={{
        backgroundImage: `url(${Discoverbg})`,
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1300px] mx-auto gap-4 sm:gap-8 md:gap-16 lg:gap-20 xl:gap-[300px] w-full">
        <div className="text-center sm:text-left">
          <p className="text-[#EEC044] text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold mt-3 drop-shadow">
            Agriculture Market Leaders
          </p>
          <p className="text-[#ffffff] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] font-extrabold drop-shadow-lg">
            We’re popular in agriculture market globally
          </p>
        </div>
        <div>
          <button className="bg-[#EEC044] text-[#ffffff] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg w-fit hover:opacity-90 lg:mb-0 mb-7">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
