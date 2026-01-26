import React from 'react';

const benefits = [
    {
        title: "Free Land Access:",
        description: "No initial cost for land or agro-inputs.",
        color: "text-green-600"
    },
    {
        title: "Precision Land Preparation:",
        description: "Advanced methods to ensure optimal growth.",
        color: "text-green-600"
    },
    {
        title: "Premium Seedlings:",
        description: "Rare paddy seedlings for high yield.",
        color: "text-green-600"
    },
    {
        title: "State-of-the-Art Transplanting:",
        description: "Cutting-edge technology for efficient planting.",
        color: "text-green-600"
    },
    {
        title: "Complete Agrochemical Inputs:",
        description: "All necessary inputs are provided at no initial charge.",
        color: "text-green-600"
    },
    {
        title: "Sustainable Irrigation:",
        description: "Solar-powered pumps for reliable water supply.",
        color: "text-green-600"
    },
    {
        title: "Combined Harvesting:",
        description: "Modern harvesters for maximum efficiency.",
        color: "text-green-600"
    }
];

export default function ShopContent() {
    return (
        <div className="bg-white font-Montserrat">
            <div className="max-w-7xl mx-auto px-4 lg:px-[100px] py-12">
                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-green-600 mb-4">Shop Online</h2>
                    <p className="text-gray-700 font-semibold mb-6">Unlock Your Farming Potential with Tiamin Rice Limited!</p>

                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                        <p>Are you a local farmer in Bauchi looking to cultivate paddy and secure a steady income?</p>
                        <p>Tiamin Rice offers an incredible opportunity to utilize part of our 10,000 hectares of farmland with unparalleled support.</p>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className={`font-bold ${benefit.color} mb-2 text-[15px]`}>
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* After Harvest Support Card */}
                <div className="bg-[#f0f8f1] rounded-3xl p-8 md:p-12 mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">After Harvest Support!</h2>

                    <div className="space-y-8">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                <p><span className="font-semibold italic">Paddy Drying Services:</span> Prevent post-harvest losses with our drying solutions.</p>
                            </li>
                            <li className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                <p><span className="font-semibold italic">Guaranteed Market:</span> Sell your paddy to Tiamin's integrated rice mill.</p>
                            </li>
                        </ul>

                        <div>
                            <h4 className="font-bold text-green-600 mb-4 text-sm md:text-base uppercase tracking-tight">Why Partner with Tiamin Rice?</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    <p>Secure Income: Repay services with harvested paddy, ensuring a profitable venture.</p>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    <p>Comprehensive Support: From planting to market, we're with you every step of the way.</p>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    <p>Sustainable Practices: Embrace environmentally friendly farming.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-green-600 mb-4 text-sm md:text-base uppercase tracking-tight">Get Started Today!</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    <p>Steps to Join: Fill out the Expression of interest form and sign the Contract Farming Agreement.</p>
                                </li>
                            </ul>
                        </div>

                        <p className="font-bold text-green-600 italic text-sm md:text-base mt-8">
                            Transform your farming experience with Tiamin Rice. Together, we grow!
                        </p>
                    </div>
                </div>

                {/* Download Button */}
                <div className="flex justify-start">
                    <button className="bg-[#4caf50] hover:bg-[#43a047] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md flex items-center gap-2">
                        Download Contract farming form
                    </button>
                </div>
            </div>
        </div>
    );
}
