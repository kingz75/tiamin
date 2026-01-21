import React from "react";
import Discoverbg from "../../../assets/back/discoverbg.png";

export default function Discover() {
  return (
    <div
      className=" bg-cover bg-center items-center flex px-[100px]   h-[200px]    "
      style={{
        backgroundImage: `url(${Discoverbg})`,
      }}
    >
      <div className="flex justify-between max-w-[1300px] mx-auto gap-[300px]">
        <div className="">
          <p className="text-[#EEC044]  text-[18px] font-semibold mt-3 drop-shadow ">
            Agriculture Market Leaders
          </p>
          <p className="text-[#ffffff]   text-[30px] font-extrabold drop-shadow-lg">
            We’re popular in agriculture market globally
          </p>
        </div>
        <div>
          <button className="bg-[#EEC044] text-[#ffffff] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg w-fit hover:opacity-90">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
