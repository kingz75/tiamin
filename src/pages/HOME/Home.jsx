import React, { useState, useEffect } from 'react';
import SlideOne from './slideOne';
import SlideTwo from './slideTwo';
import SlideThree from './slideThree';
import SectionTwo from './sectionTwo';
import Key from '../ABOUT/key';
import HomeKey from './homeKey';
import HomeServiceSection from './homeServiceSection';
import ImageSliderSection from './imageSliderSection';
import TrainingCapacity from './trainingCapacity';
import CaseStudies from './case-studies';
import WhyPartnerWithCozym from './why-partner';
import ClientMarquee from './ClientMarquee';
import TestimonialSlider from './testimonial';

export default function Home() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex(prev => (prev + 1) % 3);
		}, 10000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className="relative w-full h-[calc(100vh-0px)] font-Montserrat  overflow-hidden">
				<SlideOne active={index === 0} />
				<SlideTwo active={index === 1} />
				<SlideThree active={index === 2} />
			</div>
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
