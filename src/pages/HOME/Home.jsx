import React, { useState, useEffect } from 'react';
import SlideOne from './slideOne';
import SlideTwo from './slideTwo';
import SlideThree from './slideThree';
import SectionTwo from './sectionTwo';
import HomeKey from './homeKey';
import HomeServiceSection from './homeServiceSection';
import TrainingCapacity from './trainingCapacity';
import CaseStudies from './case-studies';
import WhyPartnerWithCozym from './why-partner';
import ClientMarquee from './ClientMarquee';
import TestimonialSlider from './testimonial';

import x from '../../assets/icons/hx.svg';
import facebook from '../../assets/icons/hf.svg';
import insta from '../../assets/icons/hi.svg';
import linkedin from '../../assets/icons/hl.svg';

export default function Home() {
	const [index, setIndex] = useState(0);
	const [showFooter, setShowFooter] = useState(true);

	// Auto slide change
	useEffect(() => {
		const timer = setInterval(() => {
			setIndex(prev => (prev + 1) % 3);
		}, 10000);

		return () => clearInterval(timer);
	}, []);

	// Hide footer immediately on scroll
	useEffect(() => {
		const handleScroll = () => {
			setShowFooter(window.scrollY === 0);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			{/* HERO / SLIDER SECTION */}
			<div className="relative w-full h-screen font-Montserrat overflow-hidden">
				<SlideOne active={index === 0} />
				<SlideTwo active={index === 1} />
				<SlideThree active={index === 2} />

				{/* FIXED FOOTER — ONLY WHEN AT TOP */}
				{showFooter && (
					<div
						id="homefooter"
						className="bg-[#002B45] py-0 flex justify-center fixed bottom-0 left-0 right-0 z-50"
					>
						<div className="text-[#FFFFFF] text-[12px] font-medium py-2 px-[20px] md:px-[40px] lg:px-[80px] max-w-[1200px] mx-auto flex justify-between items-center">
							<div className="flex  items-center gap-28 border-r-[1px] border-l-[1px] border-[#ffffff]/20 px-24">
								<div className="flex gap-4">
									<a
										href="https://twitter.com/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={x}
											alt="x"
										/>
									</a>
									<a
										href="https://facebook.com/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={facebook}
											alt=""
										/>
									</a>
									<a
										href="https://linkedin.com/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={linkedin}
											alt=""
										/>
									</a>
									<a
										href="https://www.instagram.com/cozymlimited/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={insta}
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* OTHER SECTIONS */}
			<div className="font-Montserrat">
				<SectionTwo />
				<HomeKey />
				<HomeServiceSection />
				<TrainingCapacity />
				<CaseStudies />
				<WhyPartnerWithCozym />
				<TestimonialSlider />
				<ClientMarquee />
			</div>
		</>
	);
}
