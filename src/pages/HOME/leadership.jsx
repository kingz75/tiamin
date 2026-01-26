import React from "react";
import aminuAhmedVideo from "../../assets/images/videoBg.png";
import leadershipBg from "../../assets/images/leadershipBg.png";

export default function Leadership() {
    return (
        <section className="relative w-full bg-white overflow-hidden">

            {/* GREEN BACKGROUND (30%) - Hidden/Adjusted on mobile */}
            <div
                className="absolute left-0 top-0 h-full w-full lg:w-[40%] bg-cover bg-no-repeat opacity-20 lg:opacity-100"
                style={{
                    backgroundImage: `url(${leadershipBg})`,
                }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

                    {/* VIDEO CONTAINER */}
                    <div className="w-full lg:w-[50%] flex justify-center">
                        <div className="relative lg:translate-x-[15%] max-w-lg w-full">
                            <div className="relative overflow-hidden rounded-md shadow-xl">
                                <img
                                    src={aminuAhmedVideo}
                                    alt="Aminu Ahmed - GMD/CEO Tiamin Group"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="w-full lg:w-[50%] lg:pl-20 text-center lg:text-left">
                        <p className="text-[#EEC044] text-[20px] lg:text-[24px] leading-tight mb-3">
                            Versatile Dynamism
                        </p>

                        <h2 className="text-3xl lg:text-[44px] leading-tight lg:leading-[57.6px] font-extrabold text-[#1F1E17] mb-6">
                            From Agriculture to Global Trading Leadership
                        </h2>

                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-5">
                            Tiamin Group’s multi-business portfolio that encompasses a wide
                            range of businesses from road construction, rice processing,
                            farming, charcoal production, commodity exchange and even gold
                            trading on the international platform (Dubai) has added to our
                            versatile dynamism.
                        </p>

                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                            With our collective expertise and unwavering dedication to our
                            clients, we aim to become a global leader in food processing and
                            wellness, portfolio finance in commodity trading and travel.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
