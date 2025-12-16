import React from 'react';
import img2 from '../../assets/images/homeTwo.jpg';

export default function SlideTwo({ active }) {
	return (
		<div
			className={`absolute inset-0 transition-opacity duration-[1200ms] 
      ${active ? 'opacity-100 z-20' : 'opacity-0 z-0'}
    `}
		>
			<div
				className="absolute inset-0 bg-cover bg-center scale-110 animate-parallax"
				style={{ backgroundImage: `url(${img2})` }}
			/>

			<div className="absolute inset-0 bg-black/20" />

			<div className="relative max-w-[1370px] px-[100px] font-Montserrat  mx-auto h-full w-full flex flex-col items-end pt-[10%]  text-white animate-fadeSlide">
				<div>
					<h1 className="text-[48px] text-[#FAA419] font-extrabold">
						Key Fact
					</h1>
					<li className="text-[18px] leading-[29px] text-[#ffffff] font-medium">
						Founded 2012 — Licensed by NUPRC & NMDPRA
					</li>
					<li className="text-[18px] leading-[29px] text-[#ffffff] font-medium">
						Delivered 25+ LPG, CNG & terminal projects
					</li>
					<li className="text-[18px] leading-[29px] text-[#ffffff] font-medium">
						Integrated EPC delivery + Cozym Academy
					</li>
				</div>
			</div>
		</div>
	);
}
