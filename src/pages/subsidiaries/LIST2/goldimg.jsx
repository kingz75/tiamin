import React from "react";
import Goldimg from "../../../assets/images/goldimg.jpg";



const goldimg = () => {
  return (
    <div className="flex  justify-center bg-cover bg-center py-16  bg-white">
      <div className=" flex flex-col  place-items-center  gap-6 ">
        <div>
          <img src={Goldimg} alt="" className="w-20" />
        </div>
        <div>
          <p className="text-[38px] font-extrabold text-[#4BAF47]">Tiamin Gold & Jewelleries LCC</p>
        </div>
      </div>
    </div>
  );
};

export default goldimg;
