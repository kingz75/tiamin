import { Check } from "lucide-react";
import Grainicon from "../../../assets/icons/riceicon.svg";
import Rice1 from "../../../assets/images/riceimage1.jpg";
import Rice2 from "../../../assets/images/riceimage2.jpg";
import Rice3 from "../../../assets/images/riceimage3.jpg";

export default function Rice() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-20 pt-8 sm:pt-12 md:pt-16">
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-extrabold text-[#4BAF47] mb-10">
          Tiamin Rice Limited
        </h1>

        <p className="text-xs sm:text-sm font-medium text-[#878680] ">
          Tiamin Rice Mills Limited is a leading Nigerian agro-industrial
          company incorporated under Nigerian law. Its corporate head office is
          at the company's operational complex in Kano and Bauchi.
        </p>
        <p className="text-xs sm:text-sm font-medium text-[#878680] ">
          Tiamin operates two state-of-the-art integrated rice mills: a 320
          MT/day facility in Kano and a 600 MT/day facility in Bauchi. With a
          combined daily milling capacity of 920 MT, it is the largest rice
          milling operation in Nigeria, producing over 3.3 million bags of 50kg
          premium parboiled rice annually. The company also holds a sprawling
          52,811.53-hectare farmland in Udubo, Gamawa and Toro
        </p>
        <p className="text-xs sm:text-sm font-bold text-[#878680] mb-4">
          Local Government Areas of Bauchi State, ensuring a vital supply of
          high-quality stock feed.
        </p>

        <h5 className="font-extrabold text-[#4BAF47] ">Tiamin today consists of:</h5>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm font-medium text-[#878680] ">
          <li>
            Integrated rice mills with a total annual milling capacity of
            276,000 tons.
          </li>
          <li>
            A 52,811.53-hectare company-owned farmland for quality paddy
            cultivation.
          </li>
          <li>
            An out-grower scheme (Tiamin Rice Contract Farming Initiative)
            engaging local farmers across over 52,000 hectares in Bauchi State.
          </li>
          <li>
            A sustainable by-product utilization system, converting rice husk
            into environmentally friendly briquette charcoal.
          </li>
        </ul>
        <p className="text-xs sm:text-sm font-medium text-[#878680] mb-4 ">
          Tiamin has in its employment over 1,500 people directly, with
          thousands more engaged through its contract farming initiatives.
        </p>

        <h5 className="font-extrabold text-[#4BAF47] ">Key Initiatives & Expansion Drive</h5>
        <p className="text-xs sm:text-sm font-medium text-[#878680]">
          Committed to sustainability and social impact, Tiamin is implementing
          initiatives to empower local communities and enhance environmental
          stewardship:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm font-medium text-[#878680]">
          <li>
            Women & Youth Empowerment: Providing micro-loans for rice-based
            businesses and establishing training centres in agricultural best
            practices and entrepreneurship.
          </li>
          <li>
            Sustainable Agriculture: Promoting green farming practices and
            investing in R&D for resilient rice varieties.
          </li>
          <li>
            Community Energy: Expanding rice husk biomass energy projects and
            establishing community energy cooperatives focused on renewable
            solutions.
          </li>
        </ul>
        <p className="text-xs sm:text-sm font-medium text-[#878680]">
          Tiamin is a privately held Nigerian company dedicated to setting the
          standard for quality, innovation, and sustainable growth in the
          Nigerian rice industry.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-6 lg:mt-20 mt-8">
        {/* Left Column */}
        <div>
          <div className="mb-4">
            <img src={Rice1} alt="" />
          </div>
          <div className="flex gap-3">
            <img
              src={Grainicon}
              alt="grain"
              className="w-8 sm:w-10 md:w-12 -mt-8 -ml-8 sm:-ml-12 md:-ml-[60px]"
            />

            <h3 className="text-[#4BAF47] font-extrabold text-base sm:text-lg md:text-xl lg:text-[20px] lg:mb-4 mb-2  leading">
              Tiamin Rice Husk Charcoal Briquettes Premium Rice Husk Charcoal
            </h3>
          </div>

          <p className="text-xs sm:text-sm font-medium text-[#878680] mb-2">
            We are proud producers of 100% natural food-grade charcoal
            briquettes, with a focus on impeccable service and quality.
          </p>

          <p className="text-xs sm:text-sm font-medium text-[#878680] mb-4">
            Tiamin is a Nigerian rice charcoal briquette manufacturer and
            exporter who focuses on briquettes with green material (rice husks).
          </p>

          <ul className="space-y- text-xs sm:text-sm font-bold text-[#878680]">
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml- sm:-ml-6 md:-ml-[25px] w-4 h-4" />
              100% Rice Husks Material (picture)
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml- sm:-ml-6 md:-ml-[25px] w-4 h-4" />
              Odorless
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml- sm:-ml-6 md:-ml-[25px] w-4 h-4" />
              Low Ash Content
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml- sm:-ml-6 md:-ml-[25px] w-4 h-4" />
              Long Burning Time
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml- sm:-ml-6 md:-ml-[25px] w-4 h-4" />
              Quick Ignition Time
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml- sm:-ml-6 md:-ml-[25px] w-4 h-4" />
              International Standard
            </li>
          </ul>
        </div>

        {/* Middle Column */}
        <div>
          <div className="mb-4">
            <img src={Rice2} alt="" />
          </div>
          <div className="flex gap-3">
            <img
              src={Grainicon}
              alt="grain"
              className="w-8 sm:w-10 md:w-12 -ml-8 sm:-ml-12 md:-ml-[60px]"
            />
            <h3 className="text-[#4BAF47] font-extrabold text-base sm:text-lg md:text-xl lg:text-[20px] lg:mb-4 mb-2">
              Product Category
            </h3>
          </div>

          <p className="text-xs sm:text-sm font-medium text-[#878680] leading-relaxed text-justify">
            We produce different types of rice husk charcoal briquettes for
            wholesale buyers BBQ, Incense, and Hookah. Our briquettes are
            processed from high-grade agricultural waste (rice husks) and are
            being used for starting and maintaining fires for various
            applications.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <div className="mb-4">
            <img src={Rice3} alt="" />
          </div>
          <div className="flex gap-3">
            <img
              src={Grainicon}
              alt="grain"
              className="w-8 sm:w-10 md:w-12 -ml-8 sm:-ml-12 md:-ml-[60px]"
            />
            <h3 className="text-[#4BAF47] font-extrabold text-base sm:text-lg md:text-xl lg:text-[20px] lg:mb-4 mb-2">
              Manufacturing Process
            </h3>
          </div>

          <p className="text-xs sm:text-sm font-medium text-[#878680] leading-relaxed text-justify">
            Our Carbon is manufactured from selected Rice Husk using a steam/air
            activation technique. The husks are first carbonized and the
            carbonized material is fed into a rotary kiln & reaction with
            steam/air is carried at 800°C to 1000°. At this temperature the
            chemical reaction between Carbon and steam/air takes place at all
            internal surfaces of carbon, opening new pores and enlarging them to
            achieve high internal surface area.
          </p>
        </div>
      </div>
    </section>
  );
}
