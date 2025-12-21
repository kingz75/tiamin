import React from "react";
import Videobg from "../../../assets/back/list1videobg.png";

const video = () => {
  return (
    <div>
      <div
        className=" px-[100px] bg-cover bg-center items-center flex -mt-9  h-[500px] justify-center  "
        style={{
          backgroundImage: `url(${Videobg})`,
        }}
      ></div>
    </div>
  );
};

export default video;
