import { Check } from "lucide-react";
import Grainicon from "../../../assets/icons/riceicon.svg";

export default function Rice() {
  return (
    <section className="w-full bg-white px-20 pt-16">
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[38px] font-extrabold text-[#4BAF47] mb-3">
          Tiamin Rice Limited
        </h1>

        <p className="text-[14px] font-bold text-[#878680] mb-2">
          276,000 Metric Tons Annual Milling Capacity
        </p>

        <p className="text-[14px] font-medium text-[#878680] max-w-3xl">
          This translates to producing 3.3 million bags of premium quality 50kg
          Tiamin rice each year—making us the largest rice mill in Nigeria.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
        {/* Left Column */}
        <div>
          <div className="flex gap-3  ">
            <img src={Grainicon} alt="grain" className="  w-12  -mt-8 -ml-[60px] " />

            <h3 className="text-[#4BAF47] font-extrabold text-[20px] mb-4 leading">
              Tiamin Rice Husk Charcoal Briquettes Premium Rice Husk Charcoal
            </h3>
          </div>

          <p className="text-[14px] font-medium text-[#878680] mb-2">
            We are proud producers of 100% natural food-grade charcoal
            briquettes, with a focus on impeccable service and quality.
          </p>

          <p className="text-[14px] font-medium text-[#878680] mb-4">
            Tiamin is a Nigerian rice charcoal briquette manufacturer and
            exporter who focuses on briquettes with green material (rice husks).
          </p>

          <ul className="space-y- text-[14px] font-bold text-[#878680]">
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml-[25px] w-4 h-4" />
              100% Rice Husks Material (picture)
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml-[25px] w-4 h-4" />
              Odorless
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml-[25px] w-4 h-4" />
              Low Ash Content
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml-[25px] w-4 h-4" />
              Long Burning Time
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml-[25px] w-4 h-4" />
              Quick Ignition Time
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#C5CE38] -ml-[25px] w-4 h-4" />
              International Standard
            </li>
          </ul>
        </div>

        {/* Middle Column */}
        <div>
          <div className="flex gap-3">
            <img src={Grainicon} alt="grain" className="  w-12 -ml-[60px] " />
            <h3 className="text-[#4BAF47] font-extrabold text-[20px] mb-4">
              Product Category
            </h3>
          </div>

          <p className="text-[14px] font-medium text-[#878680] leading-relaxed text-justify">
            We produce different types of rice husk charcoal briquettes for
            wholesale buyers BBQ, Incense, and Hookah. Our briquettes are
            processed from high-grade agricultural waste (rice husks) and are
            being used for starting and maintaining fires for various
            applications.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <div className="flex gap-3">
            <img src={Grainicon} alt="grain" className="  w-12 -ml-[60px]  " />
            <h3 className="text-[#4BAF47] font-extrabold text-[20px] mb-4">
              Manufacturing Process
            </h3>
          </div>

          <p className="text-[14px] font-medium text-[#878680] leading-relaxed text-justify">
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
