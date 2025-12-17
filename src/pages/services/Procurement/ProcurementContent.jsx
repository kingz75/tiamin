import React from 'react';

// Import images at the top
import gasPlantImg from '../../../assets/images/procurement.png';
import consultantImg from '../../../assets/images/serviceContact.png';

export default function ProcurementContent() {
	return (
		<div className="w-full py-12">
			<div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8">
				{/* ---------- LEFT COLUMN (FULL HEIGHT) ---------- */}
				<div className="flex flex-col justify-between h-full space-y-6">
					{/* Capabilities Box */}
					<div className="bg-[#FAA419]/20 py-[40px] px-[50px] rounded-xl shadow-sm w-full ">
						<h3 className="text-[#FAA419] font-extrabold text-[20px] leading-[30px]  mb-4">
							Our Capabilities Include
						</h3>

						<ul className="text-[16px] leading-[20px] text-[#ffffff] space-y-4">
							<li>Delivering strategic supply chain solutions</li>
							<li> Logistics coordination</li>
							<li>Technical expertise </li>
							<li>High-quality materials </li>
						</ul>
					</div>

					{/* Need Help Box */}
					<div className="bg-[#0C3B5A]/90 p-6 rounded-xl shadow-lg relative overflow-hidden w-full h-full flex flex-col justify-between">
						<div
							className="absolute inset-0  bg-cover bg-top"
							style={{ backgroundImage: `url(${consultantImg})` }}
						></div>

						<div className="relative z-10 text-center">
							<h3 className="text-white text-[24px] leading-[30px] font-extrabold mb-2">
								Need Help?
							</h3>
							<p className="text-[#FAA419] text-[16px]">
								speak with our consultant
							</p>
						</div>

						<button
							className="relative text-[14px] z-10 mt-6 bg-[#FAA419] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#e57a00]"
							onClick={() =>
								window.open(
									`https://wa.me/234907000253?text=${encodeURIComponent(
										'Hello, I am interested in your Procurement service.'
									)}`,
									'_blank'
								)
							}
						>
							Consult Now
						</button>
					</div>

					<p className="text-[16px] leading-[20px] text-[#FAA419] font-medium">
						Delivering Energy Safely, Efficiently, and at Scale
					</p>
				</div>

				{/* ---------- RIGHT CONTENT (70%) ---------- */}
				<div className="space-y-8">
					{/* Large Image */}
					<div className="rounded-xl overflow-hidden">
						<img
							src={gasPlantImg}
							alt="Gas Processing Plant"
							className="w-full h-[350px] object-cover"
						/>
					</div>

					{/* Main Text Section */}
					<div>
						<h1 className="text-3xl lg:text-[40px] leading-[56px] font-extrabold text-[#ffffff] mb-4">
							Utility & Support Infrastructure
						</h1>
						<div className="text-[18px] leading-[26px] text-[#ffffff] text-justify">
							<p className=" mb-6">
								At Cozym Limited, we elevate procurement beyond sourcing by
								delivering strategic supply chain solutions that power
								efficient, high-performance project execution. With a robust
								global network spanning the US, EU, and Asia, we procure
								high-quality materials and specialized equipment that meet the
								demanding standards of the oil and gas industry.
							</p>

							<p className=" mb-6">
								From essential components such as valves, fittings, and line
								pipes to complex, project-critical systems; including Early
								Production Facilities (EPFs), gas processing units, liquefaction
								modules, dehydration packages, LPG storage tanks, Pressure
								Reduction and Metering Stations (PRMS), and compression skids,
								we ensure every item is sourced with precision and compliance.
							</p>
							<p className=" mb-6">
								Our procurement process is strengthened by rigorous vendor
								qualification, transparent logistics coordination, and thorough
								quality assurance, guaranteeing timely deliveries and seamless
								integration into your projects. Whether you are building,
								expanding, or optimizing operations, Cozym Limited provides the
								reliability and technical expertise needed to keep your supply
								chain running at peak performance. With Cozym as your
								procurement partner, you gain more than equipment but trusted
								extension of your project team.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
