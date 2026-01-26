import React from "react";
import ShopBg from "../../assets/back/shophero.png"; // Fallback to aboutbg if specific shop bg not found

export default function ShopHero() {
    return (
        <div
            className="relative px-4 lg:px-[100px] bg-cover bg-center items-center flex -mt-9 h-[200px] md:h-[250px] lg:h-[300px] justify-center"
            style={{
                backgroundImage: `url(${ShopBg})`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-center">
                <p className="text-[#ffffff] text-sm md:text-[14px] font-semibold mt-3 drop-shadow uppercase tracking-wider">
                    Home / SHOP / AGRICULTURE / PRODUCTS
                </p>
                <h1 className="text-[#ffffff] text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold drop-shadow-lg mt-2 font-Montserrat">
                    Our Shop
                </h1>
            </div>
        </div>
    );
}
