import React from "react";
import Over from "../../assets/images/overimage1.png";
import Overbg from "../../assets/back/overbg.png";

export default function Knowus() {
  return (
    <section
      className="  py-14"
      style={{
        backgroundImage: `url(${Overbg})`,
      }}
    >
      <div className="  px-[100px] grid grid-cols-2 gap-16 items-center max-w-[1370px] mx-auto ">
        {/* LEFT IMAGE  */}
        <div className="">
          <img src={Over} alt="Agriculture" className=" " />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-[38px] font-extrabold text-[#4BAF47] leading-tight mb-6 text-end">
            Pioneering Excellence in Manufacturing and Agriculture
          </h2>

          <p className="text-[#878680] mb-4 leading-[21px] font-medium text-[16px] text-justify">
            Tiamin has grown into one of the nation’s leading manufacturing and
            agricultural companies of the 21st century. Over the past five
            years, we have set the standard for producing the finest home-grown
            rice and have consistently maintained our reputation for excellence.
            Our vision is to reach new heights and explore new horizons in
            agribusiness by delivering top-quality products and services to our
            loyal consumers.
          </p>
          <p className="text-[#878680] mb-4 leading-[21px] font-medium text-[16px] text-justify">
            Our diverse portfolio includes road construction, rice processing,
            farming, charcoal production, commodity exchange, and even gold
            trading on the international stage in Dubai, showcasing our
            versatile dynamism.
          </p>
        </div>
      </div>
    </section>
  );
}
