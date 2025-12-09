import React from 'react';
import projectOne from '../../../assets/images/projectCover.jpg';
export default function HeroSection() {
	return (
		<div>
			{' '}
			<div
				className="w-full h-[402px] bg-cover bg-center flex items-center justify-center relative"
				style={{
					backgroundImage: `url(${projectOne})`,
				}}
			>
				{/* <div className="absolute inset-0 bg-blue-900/60"></div> */}
				<div>
					<h1 className="text-center text-[#ffffff]">
						Home / Case Studies and Success Stories{' '}
					</h1>

					<h1 className="relative z-10 text-white text-[50px] font-bold text-center">
						Projects
					</h1>
				</div>
			</div>
		</div>
	);
}
