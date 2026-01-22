import React from "react";
import Over from "../../assets/images/overimage2.png";

export default function Knowus() {
  return (
    <section className=" bg-white  py-8 md:py-14">
      <div className="  px-4 lg:px-[100px] grid grid-cols-1 md:grid-cols-2 lg:gap-8 md:gap-16 items-center max-w-[1370px] mx-auto ">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold text-[#4BAF47] leading-tight mb-6 ">
            Corporate Overview
          </h2>

          <p className="text-[#878680] mb-4 leading-relaxed font-medium text-sm md:text-base lg:text-[16px] text-justify">
            Tiamin Group’s diverse portfolio includes road construction, rice
            processing, farming, charcoal production, commodity exchange, and
            international gold trading in Dubai. This versatility underscores
            our dynamic approach and dedication to growth.
          </p>
          <p className="text-[#878680] mb-4 leading-relaxed font-medium text-sm md:text-base lg:text-[16px] text-justify">
            Headquartered in Kano and Bauchi, Nigeria, with a combined workforce
            of around 600 employees, Tiamin Group prides itself on its ethical
            practices, ambitious spirit, and relentless pursuit of success. We
            aim to be a catalyst for future growth, achieving remarkable
            outcomes in every endeavour, from corporate negotiations to
            community engagements.
          </p>
        </div>
        {/* RIGHT IMAGE  */}
        <div className="">
          <img src={Over} alt="Agriculture" className="w-full" />
        </div>
      </div>
    </section>
  );
}
