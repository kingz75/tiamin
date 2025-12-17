import React from 'react';

// Import images at the top
import gasPlantImg from '../../../assets/images/gasprocessing.png';
import consultantImg from '../../../assets/images/serviceContact.png';

export default function OilContent() {
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
							<li>Separation & Treatment</li>
							<li>Systems</li>
							<li>Pumping & Compressor Stations</li>
							<li>Metering & Custody Transfer (Including LACT Units)</li>
							<li>Utility & Safety Systems</li>
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
										'Hello, I am interested in your Oil & Gas Production Facilities service.'
									)}`,
									'_blank'
								)
							}
						>
							Consult Now
						</button>
					</div>

					<p className="text-[16px] leading-[20px] text-[#FAA419] font-medium">
						Engineering the Frontline of Energy Production
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
							Oil & Gas Production Facilities
						</h1>
						<div className="text-[18px] leading-[26px] text-[#ffffff] text-justify">
							<p className=" mb-6">
								Oil and gas production begins at the wellhead and the
								reliability of downstream assets depends on the performance of
								surface production systems. At Cozym Limited, we design,
								engineer, construct, and commission comprehensive production
								facilities that ensure hydrocarbons are safely, efficiently, and
								reliably brought to market.
							</p>

							<p className=" mb-6">
								Our expertise spans onshore and offshore facilities, flowlines
								and tie-ins, separation systems, pumping and compressor
								stations, produced water treatment units, stabilization systems,
								condensate tanks, chemical injection systems, and custody
								transfer metering skids.
							</p>

							<p className="">
								By integrating multidisciplinary EPC capabilities with strict
								QA/QC and HSE compliance, we help clients achieve reliable
								production, reduced downtime, and regulatory alignment.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
