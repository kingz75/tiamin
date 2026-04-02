import React, { useState, useEffect } from "react";
import farm1 from "../../assets/images/knowimage1.png";
import farm2 from "../../assets/images/knowimage2.png";

export default function Knowus() {
  const images = [farm1, farm2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className=" bg-white py-10 md:py-20">
      <div className="  px-4 lg:px-[100px] grid grid-cols-1 md:grid-cols-2 lg:gap-8 md:gap-16 items-center max-w-[1370px] mx-auto ">
        {/* LEFT IMAGE SLIDER */}
        <div className="md:order-first order-last overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100.1}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Agriculture"
                className="w-full flex-shrink-0"
              />
            ))}
          </div>

          {/* Button */}
          <button className="bg-lime-500 hover:bg-lime-600 text-white lg:hidden px-4 md:px-8 py-3 rounded-md font-medium transition mt-3" style={{ fontFamily: '"Covered By Your Grace", cursive' }}>
            Discover More
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:order-last order-first">
          <p className="text-[#EEC044] text-lg md:text-xl lg:text-[24px] mb-2">
            Get To Know Us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold text-[#1F1E17] leading-tight mb-4">
            Home-Grown Excellence <br /> in Agribusiness
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
