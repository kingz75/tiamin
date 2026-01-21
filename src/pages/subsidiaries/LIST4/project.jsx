import React from "react";

export default function ProductsAndServices() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-[1400px] mx-auto px-[100px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-extrabold text-[#4BAF47] mb-3">
            Product and Services
          </h2>
          <p className="max-w-[800px] mx-auto text-[16px] text-[#878680]">
            At Tiamin Air, we offer premier crop-dusting and air travel services
            that are designed to enhance our clients’ experiences. Our products
            include:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="rounded-[28px] bg-[#EEF8EE] p-8">
            <h3 className="text-[20px] font-extrabold text-[#4BAF47] mb-4">
              Gold Bars & Coins
            </h3>
            <p className="text-[16px] leading-[24px] text-[#878680] text-justify font-medium">
              Our crop-dusting services are the perfect solution for farmers and
              landowners looking for an efficient and effective way to apply
              fertilizers, pesticides, and other agricultural chemicals to their
              crops. We offer state-of-the-art aircraft, trained pilots, and
              strict safety procedures to ensure that chemicals are applied
              accurately and safely every time. With our crop dusting services,
              you can enhance your crop yields and promote food production, all
              while saving time and minimizing costs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[28px] bg-[#FFF9E6] p-8">
            <h3 className="text-[20px] font-extrabold text-[#4BAF47] mb-4">
              Private Jet Charters
            </h3>
            <p className="text-[16px] leading-[24px] text-[#878680] text-justify font-medium">
              Our Private Jet Charters will include a personalized and luxurious
              flying experience, designed to cater to our clients’ unique travel
              needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[28px] bg-[#EEF8EE] p-8">
            <h3 className="text-[20px] font-extrabold text-[#4BAF47] mb-4">
              Private Jet Charters
            </h3>
            <p className="text-[16px] leading-[24px] text-[#878680] text-justify font-medium">
              Our Tourist Flights will provide our clients with an aerial view
              of some of the country’s most beautiful landscapes, making for an
              unforgettable travel experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-[28px] bg-[#EEF8EE] p-8">
            <h3 className="text-[20px] font-extrabold text-[#4BAF47] mb-4">
              Quality Control
            </h3>
            <p className="text-[16px] leading-[24px] text-[#878680] text-justify font-medium">
              We will maintain the highest standards of safety and security in
              all our operations, ensuring that our clients’ travel experiences
              are seamless and worry-free. All our pilots are trained and
              certified to meet global aviation standards, and our planes will
              undergo regular maintenance and safety inspections.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-[28px] bg-[#FFF9E6] p-8">
            <h3 className="text-[20px] font-extrabold text-[#4BAF47] mb-4">
              Customer Service
            </h3>
            <p className="text-[16px] leading-[24px] text-[#878680] text-justify font-medium">
              Our customer service team is dedicated to providing exceptional
              service, ensuring that all our clients’ travel needs are met
              promptly and efficiently. We provide customized travel packages
              and flexible schedules, designed to cater to our clients’ unique
              travel preferences. Additionally, we will also offer concierge
              services, including ground transportation and catering, to ensure
              that our clients’ travel experiences are as smooth as possible.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-[28px] bg-[#EEF8EE] p-8">
            <h3 className="text-[20px] font-extrabold text-[#4BAF47] mb-4">
              Customer Satisfaction
            </h3>
            <p className="text-[16px] leading-[24px] text-[#878680] text-justify font-medium">
              At Tiamin Air, we adhere to the highest levels of safety and
              security in all our operations. We maintain compliance with all
              relevant aviation regulations and standards and go above and
              beyond to ensure that our planes, pilots, and crew members are
              well-trained and equipped for every flight. Our planes undergo
              regular maintenance and safety inspections to ensure that they are
              in optimal condition for every flight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
