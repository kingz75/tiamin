import React from "react";
import farm1 from "../../assets/images/knowimage.png";

export default function Knowus() {
  return (
    <section className=" bg-white py-10 md:py-20">
      <div className="  px-4 lg:px-[100px] grid grid-cols-1 md:grid-cols-2 lg:gap-8 md:gap-16 items-center max-w-[1370px] mx-auto ">
        {/* LEFT IMAGE  */}
        <div className="md:order-first order-last">
          <img src={farm1} alt="Agriculture" className="w-full" />

          {/* Button */}
          <button className="bg-lime-500 hover:bg-lime-600 text-white lg:hidden px-4 md:px-8 py-3 rounded-md font-medium transition mt-3">
            Discover More
          </button>
        </div>

        

        {/* RIGHT CONTENT */}
        <div className="md:order-last order-first">
          <p className="text-[#EEC044] text-lg md:text-xl lg:text-[24px] mb-2">
            Get To Know Us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold text-[#1F1E17] leading-tight mb-4">
            The Best Agriculture <br /> Market
          </h2>

          <p className="text-[#878680] mb-4 leading-relaxed font-medium text-sm md:text-base lg:text-[16px] text-justify">
            Since our inception as a road construction company in 2011, Tiamin
            Group has evolved into one of Nigeria’s leading manufacturing and
            agricultural firms. Over the past five years, we have set the
            standard for producing top-quality, home-grown rice and have
            maintained our commitment to excellence. Our vision is to reach new
            heights in agribusiness by delivering superior products and services
            to our loyal customers.
          </p>

          {/* Checklist */}
          <ul className="space-y-2 mb-8">
            {[
              "Business Excellence",
              "Customer Delight",
              "Leadership Skills",
              "Committed Dedication",
              "Innovative Thinking",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center font-bold text-sm md:text-base lg:text-[18px] text-[#1F1E17]"
              >
                <span className="text-[#C5CE38] mr-3">✔</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="bg-lime-500 hover:bg-lime-600 text-white lg:block hidden px-4 md:px-8 py-3 rounded-md font-medium transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
