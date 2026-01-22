import React from "react";
import Videobg from "../../../assets/back/list1videobg.png";

const video = () => {
  return (
    <div>
      <div
        className=" px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[100px] bg-cover bg-center items-center flex -mt-9 min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] justify-center"
        style={{
          backgroundImage: `url(${Videobg})`,
        }}
      ></div>
    </div>
  );
};

export default video;
