import React from "react";
import List from "../../../assets/back/listicon1.png";

const logo = () => {
  return (
    <div
      className="bg-cover bg-center min-h-[150px] sm:min-h-[180px] md:min-h-[200px] max-w-[1440px] mx-auto mb-10"
      style={{
        backgroundImage: `url(${List})`,
      }}
    ></div>
  );
};

export default logo;
