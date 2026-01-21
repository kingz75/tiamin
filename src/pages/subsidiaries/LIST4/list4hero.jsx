import React from "react";
import Herobg from "../../../assets/back/list4hero.jpg";

export default function Hero() {
  return (
    <div
      className=" px-[100px] bg-cover bg-center items-center flex -mt-9  h-[300px] justify-center  "
      style={{
        backgroundImage: `url(${Herobg})`,
      }}
    >
      <div>
        <p className="text-[#ffffff]  text-[14px] font-semibold mt-3 drop-shadow text-center">
          Home <span className="ml-6"> Tiamin Air</span>
        </p>
        <h1 className="text-[#ffffff]   text-[50px] font-extrabold drop-shadow-lg">
          Subsidiaries
        </h1>
      </div>
    </div>
  );
}
