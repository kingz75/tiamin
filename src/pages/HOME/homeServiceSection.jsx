import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import bgImage from '../../assets/images/ssbg.png';
import img1 from '../../assets/images/ser1.png';
import img2 from '../../assets/images/ser2.png';
import img3 from '../../assets/images/ser3.png';
import img4 from '../../assets/images/ser4.png';
import img5 from '../../assets/images/ser5.png';
import img6 from '../../assets/images/ser6.png';
import img7 from '../../assets/images/ser7.png';
import img8 from '../../assets/images/ser8.png';

export default function HomeServiceSection() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animatedCards, setAnimatedCards] = useState([]);

	const cards = [
		{
			img: img1,
			title: 'Oil & Gas Production Facilities',
			desc: 'Design and EPC of onshore & offshore production facilities, flowlines, separators, pumping and compressor stations, custody transfer metering, and utility systems.',
			list: [
				'Flowlines & wellhead tie-ins',
				'Separation & treatment systems',
				'Metering & LACT units',
			],
			link: '/services/oilngas',
		},
		{
			img: img2,
			title: 'Gas Processing & Conditioning',
			desc: 'End-to-end EPC for gas conditioning, dehydration, dew-point control, compression, mini-LNG, and flare elimination systems.',
			list: [
				'Dehydration & dew-point units',
				'Compression & boosting systems',
				'Hydrocarbon recovery & fractionation',
			],
			link: '/services/gasprocessing',
		},
		{
			img: img3,
			title: 'Gas Distribution & Terminals',
			desc: 'CNG/LPG stations, pipelines, PRMS, bulk storage terminals, bottling plants, and fuel retail solutions.',
			list: [
				'CNG mother & daughter stations',
				'LPG terminals & depots',
				'White product terminals & fueling stations',
			],
			link: '/services/gasdistribution',
		},
		{
			img: img4,
			title: 'Technical Training',
			desc: 'Cozym Limited’s Technical Training services equip your project teams with the essential competencies required to excel across every phase of Engineering, Procurement, Construction, and Commissioning (EPCC).',
			list: [],
			link: '/services/technical',
		},
		{
			img: img5,
			title: 'Pipelines & Distribution Networks',
			desc: 'EPC for transmission and distribution pipelines, metering, pigging, integrity systems, and cathodic protection.',
			list: [],
			link: '/services/pipeline',
		},
		{
			img: img6,
			title: 'Storage Facilities',
			desc: 'Design and construction of tank farms, LPG bullets and spheres, firewater systems, and depot automation.',
			list: [],
			link: '/services/storage',
		},
		{
			img: img7,
			title: 'Utility & Support Infrastructure',
			desc: 'Civil works, buildings, structural steel, water/wastewater systems, electrical & instrumentation, and fire protection systems.',
			list: [],
			link: '/services/utility',
		},
		{
			img: img8,
			title: 'Procurement Services',
			desc: 'At Cozym Limited, we elevate procurement beyond sourcing by delivering high-grade supply chain solutions that power efficient, high-performance project execution. With a robust global network spanning the US, EU, and Asia, we procure high-quality materials and specialized equipment that meet the demanding standards of the oil and gas industry.',
			list: [],
			link: '/services/procurement',
		},
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					// Animate cards with varied staggered delays and patterns
					cards.forEach((_, index) => {
						setTimeout(() => {
							setAnimatedCards(prev => [...prev, index]);
						}, index * 200); // 200ms delay between each card for more dramatic effect
					});
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	// Function to get staggered animation delay
	const getAnimationDelay = index => {
		return `${index * 300}ms`; // 300ms delay between each card
	};

	return (
		<div
			ref={sectionRef}
			className="w-full py-16"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="max-w-[1370px] mx-auto px-[100px]">
				<div className=" mb-[42px]">
					<p className="text-[36px] leading-[43px] font-semibold text-[#002B45] inline-block">
						Our Services
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-[100px]">
					{cards.map((card, i) => (
						<div
							key={i}
							className={`bg-white rounded-xl flex flex-col overflow-hidden transition-all duration-700 ease-out cursor-pointer group relative
								${
									animatedCards.includes(i)
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-8'
								}
								hover:scale-105 transform-gpu`}
							style={{
								transitionDelay: animatedCards.includes(i)
									? getAnimationDelay(i)
									: '0ms',
							}}
						>
							{/* Image */}
							<div className="overflow-hidden">
								<img
									src={card.img}
									alt={card.title}
									className="w-full object-cover bg-center transition-transform duration-300 group-hover:scale-105"
								/>
							</div>

							{/* Content */}
							<div className="flex flex-col mt-5 px-7 py-7 bg-transparent flex-grow border-2 border-[#E7E7E7] rounded-lg">
								<h3 className="text-[24px] leading-[28px] font-semibold text-[#002B45] mb-5 transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#002B45] group-hover:to-[#000e17] group-hover:bg-clip-text group-hover:transform group-hover:scale-105">
									{card.title}
								</h3>

								<p className="text-[#666666] text-[16px] leading-[24px] mb-4">
									{card.desc}
								</p>

								{/* Bullet list */}
								{card.list.length > 0 && (
									<ul className="text-[#666666] text-[16px] leading-[24px] space-y-2 mb-6">
										{card.list.map((item, index) => (
											<li
												key={index}
												className="list-disc ml-5"
											>
												{item}
											</li>
										))}
									</ul>
								)}

								{/* Push button to bottom */}
								<div className="mt-auto">
									<Link
										to={card.link}
										className="w-full bg-[#07355A] hover:bg-[#0A426F] text-white py-3 rounded-lg text-sm font-medium transition-colors duration-300 inline-block text-center"
									>
										View More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
