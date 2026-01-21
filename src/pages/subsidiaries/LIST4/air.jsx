import React from "react";
import AirLogo from "../../../assets/icons/airlogo.svg";

export default function Air() {
  return (
    <section className="w-full bg-white pt-20 pb-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <img src={AirLogo} alt="Tiamin Air" className="h-36 w-auto" />
            </div>

            {/* Text */}
            <div className="space-y-5 text-[16px] leading-[27px] text-[#878680] text-justify">
              <p>
                Agricultural aviation, also known as “crop dusting,” involves
                the use of airplanes or helicopters to apply fertilizers,
                pesticides, and other agricultural products to crops. This
                venture has the potential to contribute to increased
                productivity, improved crop health, and sustainable agriculture
                practices.
              </p>

              <p>
                In the future we will be an emerging player in the aviation
                industry, that will be offering crop-dusting services, Tourist
                Flights and Private air services to destinations around the
                country. With a commitment to safety, comfort, and convenience,
                Tiamin Air will provide customers with a premium flying
                experience that is unmatched by traditional airlines.
              </p>
            </div>

            {/* CTA */}
            <button className="mt-8 rounded-2xl bg-[#4BAF47] px-10 py-4 text-[16px] font-extrabold text-[#ffffff] hover:bg-[#43a047] transition">
              Contact us now
            </button>
          </div>

          {/* RIGHT FULL-BLEED STRIP */}
          <div className="relative">
            {/* Green strip */}
            <div className="absolute top-0 left-0 h-[150px] w-[200vw] bg-[#4BAF47] rounded-l-xl" />

            {/* Text inside strip */}
            <div className="relative h-[72px] flex items-center pl-12 max-w-[600px] mt-9 text-justify">
              <p className="text-[#ffffff] text-[16px] leading-[24px] font-extrabold">
                “Tiamin Air is our forth coming venture that will be providing
                agricultural aviation services that could have significant
                benefits for the agricultural industry in Nigeria.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
