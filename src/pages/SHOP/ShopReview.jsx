import React, { useState } from 'react';
import reviewTag from "../../assets/images/reviewTag.png";

const StarIcon = ({ filled }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={filled ? "#4caf50" : "none"}
        stroke={filled ? "#4caf50" : "#d1d5db"}
        strokeWidth="2"
        className="cursor-pointer transition-colors"
    >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

export default function ShopReview() {
    const [rating, setRating] = useState(0);

    return (
        <section className="bg-white font-Montserrat mt-12 mb-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-[100px]">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    {/* Left Column - Form */}
                    <div className="w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a review</h2>

                        <div className="flex items-center gap-3 mb-6 text-gray-600 text-sm">
                            <input
                                type="checkbox"
                                id="saveInfo"
                                className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <label htmlFor="saveInfo" className="cursor-pointer">
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-600 text-[15px] mb-2">Your rating</p>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <div key={star} onClick={() => setRating(star)}>
                                        <StarIcon filled={star <= rating} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="relative">
                                <textarea
                                    placeholder="Your Review..."
                                    className="w-full bg-[#f1f8f1] border-none rounded-xl p-6 min-h-[200px] text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-shadow"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-[#f1f8f1] border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-shadow"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-[#f1f8f1] border-none rounded-xl p-5 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-shadow"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#4caf50] hover:bg-[#43a047] text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg block"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>

                    {/* Right Column - Logo Tag */}
                    <div className="w-full lg:w-1/3 mt-10 flex justify-end items-end h-full self-end">
                        <img
                            src={reviewTag}
                            alt="Tiamin Group Certification Tag"
                            className="max-w-[400px] w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
