import React from 'react';
import { Check } from 'lucide-react';
import homeWhy from '../../assets/images/homeWhy.png';
import { Link } from 'react-router-dom';

const WhyPartnerWithCozym = () => {
	const features = [
		{
			text: "Local expertise — deep knowledge of Nigeria's regulatory & operating environment.",
		},
		{
			text: 'Execution capacity — multidisciplinary EPC capabilities from FEED to commissioning.',
		},
		{
			text: 'Compliance — licensed by NMDPRA & NUPRC and aligned with international codes and standards.',
		},
		{
			text: 'Shared success— transparent partnership models and measurable results.',
		},
	];

	return (
		<div className="bg-[#002B45] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-[140px]">
			<div className="max-w-[1370px] px-[100px]  mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Side - Image */}
					<div className="relative">
						<img
							src={homeWhy}
							alt="Why Partner with Cozym"
							className="w-full h-auto object-cover rounded-lg shadow-xl"
						/>
					</div>

					{/* Right Side - Content */}
					<div className="text-white">
						<h2 className="text-[48px] font-extrabold mb-8">
							<span className="text-[#FAA419]">Why Partner With</span>
							<br />
							<span className="text-[#FAA419]">Cozym?</span>
						</h2>

						{/* Features List */}
						<div className="space-y-6 mb-10">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex items-start gap-3"
								>
									<Check className="w-5 h-5 text-[#FAA419] flex-shrink-0 mt-0.5" />
									<p className="text-[#FFFFFF] font-medium text-[16px] leading-[28px]">
										{feature.text}
									</p>
								</div>
							))}
						</div>

						{/* CTA Button */}
						<Link
							to="/projects/lpg"
							className="bg-[#FAA419] hover:bg-[#ffa30e] text-white  text-[14px] leading-[30px] font-bold px-[50px] py-3.5 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
						>
							Discover More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyPartnerWithCozym;
