import React from "react";
import Aboutbg from "../../assets/back/aboutbg.jpg";

export default function Abouthero() {
  return (
    <div
      className=" px-4 lg:px-[100px] bg-cover bg-center items-center flex -mt-9 h-[200px] md:h-[250px] lg:h-[300px] justify-center"
      style={{
        backgroundImage: `url(${Aboutbg})`,
      }}
    >
      <div>
        <p className="text-[#ffffff] text-sm md:text-[14px] font-semibold mt-3 drop-shadow text-center">
          Home / ABOUT
        </p>
        <h1 className="text-[#ffffff] text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold drop-shadow-lg">
          About
        </h1>
      </div>
    </div>
  );
}
