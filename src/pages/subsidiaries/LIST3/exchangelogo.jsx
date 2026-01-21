import React from "react";
import Exchangelogo from "../../../assets/images/exlogo.jpg";

const Exchange = () => {
  return (
    <div className="flex  justify-center bg-cover bg-center py-16  bg-white">
      <div className=" flex flex-col  place-items-center  gap-6 ">
        <div>
          <img src={Exchangelogo} alt="" className="w-56" />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
