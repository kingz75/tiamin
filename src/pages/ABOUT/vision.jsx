import { useState, useEffect } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Vision() {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((p) => Math.min(p + 1, 1));
  const prevPage = () => setPage((p) => Math.max(p - 1, 0));

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-[#F8F7F0] overflow-hidden text-white py-8 md:py-14">
      {" "}
      {/* MAIN SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${page * 100}%)` }}
      >
        {/* SLIDE 1 */}
        <div className="w-full flex-none flex items-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-28 max-w-[1200px] mx-auto px-4 md:px-10">
            {/* Vision */}
            <div className="space-y-3 px-4 md:px-10">
              <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold text-[#4BAF47] flex items-center gap-2 ">
                Our Vision
              </h2>
              <p className="text-sm md:text-base lg:text-[16px] leading-relaxed font-medium text-[#878680] text-justify">
                We aim to establish ourselves as a brand by providing superior
                quality products and best services. This is to be done by
                strengthening business relations with stakeholders that include
                the customers, suppliers and other business associates. We
                strive to contribute to the overall economy for the Nation’s
                development by good corporate governance and partnering social
                responsibilities.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-3 px-4 md:px-10">
              <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold text-[#4BAF47] flex items-center gap-2 sm:gap-4">
                Our Mission
              </h2>
              <p className="text-sm md:text-base lg:text-[16px] leading-relaxed font-medium text-[#878680] text-justify">
                Use the most appropriate technical capabilities and skills
                required to become a leader in the rice business alongside other
                agricultural commodity chain. As one of the nations leading rice
                millers, we are committed to deliver precision-perfect quality
                to our customers; nurture a professional work environment, which
                fosters employee excellence, growth and job satisfaction; and
                build a financially strong, growth oriented company that creates
                value of integrity and honesty in all business transactions.
              </p>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}

        <div className="w-full flex-none flex items-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-28 max-w-[1200px] mx-auto px-4 md:px-10 ">
            {/* corporate */}
            <div className="space-y-3 px-4 md:px-10 ">
              <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold text-[#4BAF47] flex items-center gap-2 ">
                Corporate Values
              </h2>
              <div className="space-y-3">
                <p className="text-sm md:text-base lg:text-[16px] leading-relaxed font-bold text-[#878680] text-justify">
                  Excellence:{" "}
                  <span className="font-medium">
                    {" "}
                    We strive to achieve the highest levels of quality and
                    innovation in all aspects of our operations.{" "}
                  </span>
                </p>
                <p className="text-sm md:text-base lg:text-[16px] leading-relaxed font-bold text-[#878680] text-justify">
                  Integrity:{" "}
                  <span className="font-medium">
                    We uphold the highest ethical standards and principles,
                    maintaining transparency in all our dealings with
                    stakeholders and partners.
                  </span>
                </p>
                <p className="text-sm md:text-base lg:text-[16px] leading-relaxed font-bold text-[#878680]">
                  Environmental Responsibility:{" "}
                  <span className="font-medium">
                    {" "}
                    We are committed to minimizing our environmental impact
                    through sustainable practices and eco-friendly products.
                  </span>
                </p>
              </div>
            </div>

            {/* social */}
            <div className="space-y-3 px-4 md:px-10 ">
              <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold text-[#4BAF47] flex items-center gap-2 ">
                Social Responsibility
              </h2>
              <p className="text-sm md:text-base lg:text-[16px] leading-relaxed font-medium text-[#878680] text-justify">
                We actively seek ways to give back to our community, supporting
                causes related to health, education, and environmental
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* NAVIGATION ARROWS - Hidden on mobile */}
      <button
        onClick={prevPage}
        className={`hidden md:block absolute left-5 top-1/2 -translate-y-1/2 text-[#D9D9D9] text-3xl ${
          page === 0 ? "opacity-20 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <BiSolidLeftArrow />
      </button>
      <button
        onClick={nextPage}
        className={`hidden md:block absolute right-5 top-1/2 -translate-y-1/2 text-[#D9D9D9] text-3xl ${
          page === 1 ? "opacity-20 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <BiSolidRightArrow />
      </button>
    </div>
  );
}
