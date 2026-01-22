import React from "react";
import Videobg from "../../assets/back/videobg.png";

const video = () => {
  return (
    <div>
      <div
        className=" px-4 lg:px-[100px] bg-cover bg-center items-center flex -mt-9  h-[300px] md:h-[400px] lg:h-[500px] justify-center  "
        style={{
          backgroundImage: `url(${Videobg})`,
        }}
      ></div>
    </div>
  );
};

export default video;
