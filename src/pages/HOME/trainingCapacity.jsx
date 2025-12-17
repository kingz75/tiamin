import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// IMPORT IMAGES HERE
import slide1 from '../../assets/images/train1.png';
import slide2 from '../../assets/images/train2.png';
import slide3 from '../../assets/images/train3.png';
import progress from '../../assets/icons/homeProgress.png';

function CircularProgress({ size = 110, stroke = 6, progress = 100 }) {
	const radius = (size - stroke) / 2;
	const circumference = 2 * Math.PI * radius;
	const dashOffset = circumference - (progress / 100) * circumference;

	return (
		<div
			style={{ width: size, height: size }}
			className="relative flex items-center justify-center"
		>
			{/* BACKGROUND CIRCLE */}
			<svg
				width={size}
				height={size}
			>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="#ffffff40"
					strokeWidth={stroke}
					fill="none"
				/>
			</svg>

			{/* PROGRESS CIRCLE */}
			<svg
				width={size}
				height={size}
				className="absolute top-0 left-0"
				style={{ transform: 'rotate(-90deg)' }}
			>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="url(#gradient)"
					strokeWidth={stroke}
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={dashOffset}
					strokeLinecap="round"
					className="transition-all duration-700"
				/>
				<defs>
					<linearGradient
						id="gradient"
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%"
					>
						<stop
							offset="0%"
							stopColor="#4ade80"
						/>
						<stop
							offset="100%"
							stopColor="#FAA419"
						/>
					</linearGradient>
				</defs>
			</svg>

			{/* TEXT */}
			<span className="absolute text-white font-semibold text-[20px]">
				{progress}%
			</span>
		</div>
	);
}

export default function TrainingCapacity() {
	const sectionRef = useRef(null);
	const [inView, setInView] = useState(false);
	const slides = [slide1, slide2, slide3];
	const [current, setCurrent] = useState(0);
	const [progressValue, setProgressValue] = useState(0);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
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

	useEffect(() => {
		if (!inView) return;

		let start = 0;
		const timer = setInterval(() => {
			start += 1;
			if (start <= 100) {
				setProgressValue(start);
			} else {
				clearInterval(timer);
			}
		}, 20);

		return () => clearInterval(timer);
	}, [inView]);

	// Animated percentage
	const [percent, setPercent] = useState(0);

	// Auto slide every 3 sec
	useEffect(() => {
		const change = setInterval(() => {
			setCurrent(prev => (prev + 1) % slides.length);
		}, 3000);
		return () => clearInterval(change);
	}, [slides.length]);

	// Animate the orange circle (87%)
	useEffect(() => {
		let start = 0;
		const end = 87;
		const step = 1;

		const interval = setInterval(() => {
			start += step;
			setPercent(start);
			if (start >= end) clearInterval(interval);
		}, 20);

		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="trainingCapacity"
			ref={sectionRef}
			className="w-full bg-[#002B45] text-white"
		>
			{/* FULL SCREEN WIDTH */}
			<div className="w-full flex flex-col md:flex-row gap-[6%] px-6 md:px-0">
				{/* LEFT — FULL SCREEN SLIDER */}
				<div className="relative w-[47%] h-[200px] md:h-auto overflow-hidden">
					{slides.map((img, index) => (
						<img
							key={index}
							src={img}
							alt=""
							className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
								current === index ? 'opacity-100' : 'opacity-0'
							}`}
						/>
					))}

					{/* DOTS */}
					<div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
						{slides.map((_, i) => (
							<div
								key={i}
								onClick={() => setCurrent(i)}
								className={`w-3 h-3 rounded-full cursor-pointer ${
									current === i
										? 'bg-[#FAA419]'
										: 'bg-white/40 w-2 h-2 align-middle'
								}`}
							></div>
						))}
					</div>
				</div>

				{/* RIGHT — TEXT CONTENT */}
				<div className="flex flex-col justify-center  py-20 w-[47%]">
					<h2 className="text-[40px] leading-[50px] font-semibold ">
						Cozym Academy — Training & <br /> Capacity Development
					</h2>

					<p className=" text-[#CCCCCC] text-[20px] leading-[29px] mt-11  max-w-lg">
						We deliver hands-on technical training to build local capacity
						across oilfield surface operations, gas distribution, CNG/LPG
						infrastructure, metering & custody transfer, storage & terminal
						operations, and process safety.
					</p>

					<div className="flex gap-10 mt-8 items-center ">
						{/* ANIMATED PROGRESS CIRCLE */}
						<div>
							<div className=" flex justify-center border-r px-4 border-r-[#ffffff]/30">
								<CircularProgress
									size={120}
									stroke={6}
									progress={progressValue}
								/>
							</div>
							<p className="flex justify-center items-center text-[20px] font-semibold pt-5">
								Certification{' '}
							</p>
						</div>

						{/* BULLET LIST + BUTTON */}
						<div>
							<ul className="space-y-3">
								{[
									'Classroom instruction • hands-on workshops',
									'Customized corporate training for operators and EPC teams',
									'Supporting local content and sustainable operations',
								].map((item, i) => (
									<li
										key={i}
										className="flex items-center text-[16px] font-medium gap-3"
									>
										<span className="w-4 h-4 border border-white rounded-sm flex items-center justify-center text-xs">
											✓
										</span>
										{item}
									</li>
								))}
							</ul>

							<Link
								to="/careers"
								className="mt-8 bg-[#FAA419] hover:bg-orange-400 text-white px-[45px] py-3 rounded-md font-semibold w-fit inline-block text-center transition-colors duration-200"
								aria-label="Join Cozym Academy for training and capacity development"
							>
								Join Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
