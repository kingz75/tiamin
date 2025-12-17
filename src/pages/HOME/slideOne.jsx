import React from 'react';
import img1 from '../../assets/images/homeOne.jpg';
import { Link } from 'react-router-dom';

export default function SlideOne({ active }) {
	return (
		<div
			className={`absolute inset-0  transition-opacity  duration-[1200ms] 
      ${active ? 'opacity-100 z-20' : 'opacity-0 z-0'}
    `}
		>
			<div
				className="absolute inset-0 bg-cover  bg-center scale-110 animate-parallax"
				style={{ backgroundImage: `url(${img1})` }}
			/>

			<div className="absolute inset-0 bg-black/20" />

			<div className="relative max-w-[1370px] px-[90px] pb-10   mx-auto h-full flex flex-col justify-center pt-[50px]  text-[#ffffff] animate-fadeSlide">
				<h1 className="text-[45px] leading-[58px] font-bold ">
					A 100% Nigerian EPC partner
				</h1>
				<h1 className="text-[45px] leading-[58px] font-bold ">
					Delivering oil & gas infrastructure
				</h1>
				<h1 className="text-[45px] leading-[58px] font-bold ">
					across Nigeria & West Africa
				</h1>
				<div
					className={`flex flex-col max-w-[780px] ml-auto transition-all duration-1000 delay-300 ease-out
						${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
					`}
				>
					<p className="text-[20px] leading-[29px]  text-[#ffffff] mt-[50px]">
						Established in 2012, Cozym began with water and environmental
						engineering and evolved into a trusted EPC partner for oil & gas
						projects — from FEED and detailed engineering to procurement,
						construction, commissioning, and local capacity development through
						Cozym Academy.
					</p>

					<Link
						to="/contact"
						className="bg-[#FAA419] hover:bg-yellow-400 w-fit mt-[11px] px-10 py-3 rounded text-[18px] leading-[27px] font-semibold transition-all transform hover:scale-105 inline-block"
					>
						Get in Touch
					</Link>
				</div>
			</div>
		</div>
	);
}
