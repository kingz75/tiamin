import React from 'react';

// Import images at the top
import gasPlantImg from '../../../assets/images/storage.png';
import consultantImg from '../../../assets/images/serviceContact.png';

export default function StorageContent() {
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
							<li>Petroleum & White Product</li>
							<li>Storage Tank</li>
							<li>LPG Bulk Storage Facilities</li>
							<li>LPG Terminals & Depots</li>
							<li>Crude Oil & Condensate Tanks</li>
							<li>Firewater & Utility Tanks</li>
							<li>Integrated Tank Farms & Depots</li>
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
										'Hello, I am interested in your Storage Facilities service.'
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
							Storage Facilities
						</h1>
						<div className="text-[18px] leading-[26px] text-[#ffffff] text-justify">
							<p className=" mb-6">
								Storage infrastructure is the backbone of oil and gas logistics,
								ensuring that hydrocarbons and utilities are safely contained,
								efficiently managed, and readily available for transportation or
								consumption. At Cozym Limited, we design, engineer, and
								construct storage facilities that comply with international
								codes and Nigerian regulatory standards, providing clients with
								safe, scalable, and durable solutions.
							</p>

							<p className=" mb-6">
								Our portfolio spans petroleum tank farms, LPG bulk storage,
								firewater tanks, utility tanks, and integrated depot facilities.
								Whether part of a terminal, distribution hub, or standalone
								project, we deliver storage systems that combine engineering
								precision, operational safety, and long-term durability.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
