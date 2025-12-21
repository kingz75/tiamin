import React from "react";
import Over from "../../assets/images/overimage2.png";

export default function Knowus() {
  return (
    <section className=" bg-white  py-14">
      <div className="  px-[100px] grid grid-cols-2 gap-16 items-center max-w-[1370px] mx-auto ">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[38px] font-extrabold text-[#4BAF47] leading-tight mb-6 ">
            Corporate Overview
          </h2>

          <p className="text-[#878680] mb-4 leading-[21px] font-medium text-[16px] text-justify">
            Tiamin Group’s diverse portfolio includes road construction, rice
            processing, farming, charcoal production, commodity exchange, and
            international gold trading in Dubai. This versatility underscores
            our dynamic approach and dedication to growth.
          </p>
          <p className="text-[#878680] mb-4 leading-[21px] font-medium text-[16px] text-justify">
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
          <img src={Over} alt="Agriculture" className=" " />
        </div>
      </div>
    </section>
  );
}
