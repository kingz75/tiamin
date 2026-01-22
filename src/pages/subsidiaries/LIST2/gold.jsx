import React from "react";
import GoldImage from "../../../assets/images/gold.jpg";
import goldbg from "../../../assets/back/goldbg.jpg";
import Truck from "../../../assets/icons/goldtruk.svg";

export default function Gold() {
  return (
    <section className="bg-white pb-8 sm:py-12 md:py-16">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-3">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-[#fafaf2] rounded-xl p-4 sm:p-6 md:p-8 lg:p-12">
              <h3 className="font-extrabold text-gray-900 mb-4 text-sm sm:text-base md:text-lg">
                Categories
              </h3>
              <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base font-semibold text-gray-600">
                <li>Tiamin Gold</li>
                <li>Tiamin Jewelleries</li>
                <li>Gold Products</li>
                <li>Diamonds Products</li>
                <li>Others</li>
              </ul>
            </div>

            {/* UAE Office Card */}
            <div
              className="relative overflow-hidden rounded-xl text-white px-4 sm:px-6 py-8 sm:py-12 lg:block hidden"
              style={{
                backgroundImage: `url(${goldbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 opacity-10" />

              <div className="relative z-10 flex flex-col place-items-center">
                <h3 className="font-semibold mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 text-sm sm:text-base">
                  UAE
                  <img
                    src="https://flagcdn.com/48x36/eh.png"
                    alt="UAE Flag"
                    className="w-4 sm:w-6 h-3 sm:h-4"
                  />
                  Office:
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed sm:leading-[30px] text-[#C3F5C1] font-medium text-center mb-4">
                  TIAMIN Gold & General Trading LLC
                  <br />
                  402, Sheikh Hasher Building, Naif Street,
                  <br />
                  Al Dhagaya, Deira – Dubai, United Arab
                  <br />
                  Emirates P.O. Box 71426
                </p>

                <p className="font-semibold mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-[28px]">
                  Tel: +971 525825838
                </p>

                <button className="bg-[#f4c430] text-[#ffffff] px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-md text-xs sm:text-sm font-bold hover:bg-yellow-500 transition">
                  Contact us now
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 lg:space-y-8 space-y-4">
            {/* Image */}
            <div className="relative">
              <img
                src={GoldImage}
                alt="Gold Bars"
                className="w-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 right-4  rounded-lg flex items-center justify-center">
                <span className="">
                  <img src={Truck} alt="" />
                </span>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-[#878680] font-medium text-justify leading-relaxed sm:leading-[27px]">
              <p>
                Tiamin Gold & Jewelleries have a highly experienced professional
                skilled team that can handle sale, purchase, export, import of
                physical gold in local and international market. Our team are
                well trained to provide support to our individual or corporate
                partners and investors in daily trade as well as price fixing
                for jewellery shop owners. We observe high standards of
                professionalism that allows us to generate profit for both
                individual and corporate customers through investing and saving
                in gold and other precious metal. New technology aspires us to
                adopt new technical methods and ideas to improve quality in
                management of gold trade locally and globally, which give us
                chance to bring investors and many individuals from all over the
                world.
              </p>

              <p>
                Dubai has evolved over the years to become one of the renowned
                gold industry in the world. Tiamin Gold has been a part of that
                advancement that have greatly contributed to the glittering gold
                culture of Dubai. We can say with great honour and pride that
                since 2017, Tiamin Gold has developed and expanded so much to be
                one of the fast-growing gold traders in Dubai.
              </p>

              <p>
                Trust, Quality and integrity have always been principles which
                enabled us a rapid growth. Perseverance and productive
                development are always our concerns thereby contributing towards
                the socio-economic development of the UAE at large.
              </p>

              <p>
                We are recently generating a new concept in Gold Industry that
                will enrich the individuals and the corporate financial freedom
                through finding and sourcing the right and sustainable solution
                to protect themselves from economic downturn and sudden
                unexpected surprises.
              </p>

              <p>
                Since formation of Tiamin Gold in Dubai and the International
                markets our professionalism and trustworthiness in the bullion
                trading has been growing.
              </p>

              <p>
                We are wholesale traders of Fine gold bars of high purity. Over
                the last 5 years we have employed and trained high level of
                experienced and proficient team in bullion trading. Our team has
                made us a reputable name in the trading of gold and jewellery in
                Dubai.
              </p>

              <p>
                As our desire is to serve our customers loyally and sincerely;
                purity and commitment has always been our primary focus.
              </p>

            </div>
            {/* UAE Office Card */}
            <div
              className="relative overflow-hidden rounded-xl text-white px-4 sm:px-6 py-8 sm:py-12  lg:hidden"
              style={{
                backgroundImage: `url(${goldbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 opacity-10" />

              <div className="relative z-10 flex flex-col place-items-center">
                <h3 className="font-semibold mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 text-sm sm:text-base">
                  UAE
                  <img
                    src="https://flagcdn.com/48x36/eh.png"
                    alt="UAE Flag"
                    className="w-4 sm:w-6 h-3 sm:h-4"
                  />
                  Office:
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed sm:leading-[30px] text-[#C3F5C1] font-medium text-center mb-4">
                  TIAMIN Gold & General Trading LLC
                  <br />
                  402, Sheikh Hasher Building, Naif Street,
                  <br />
                  Al Dhagaya, Deira – Dubai, United Arab
                  <br />
                  Emirates P.O. Box 71426
                </p>

                <p className="font-semibold mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-[28px]">
                  Tel: +971 525825838
                </p>

                <button className="bg-[#f4c430] text-[#ffffff] px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-md text-xs sm:text-sm font-bold hover:bg-yellow-500 transition">
                  Contact us now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
