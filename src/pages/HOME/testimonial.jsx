import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import testQuote from '../../assets/icons/testQuote.svg';

const TestimonialSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const timerRef = useRef(null);

	const testimonials = [
		{
			type: 'video',
			videoId: '2PA7lCcgftY', // Replace with your actual YouTube video ID
			name: 'Matthew J. Wyman',
			role: 'Managing Director',
			company: 'Agios MultiSport Ltd',
			rating: 4.5,
		},
		{
			type: 'text',
			text: 'The Cozym team provided us with outstanding engineering and training support. Their technical knowledge and local expertise made all the difference.',
			name: 'Matthew J. Wyman',
			role: 'Operations Manager',
			company: 'Syncbox Energy',
			rating: 4.5,
		},
		{
			type: 'text',
			text: 'From design to commissioning, Cozym demonstrated transparency, quality, and consistency. We’re proud to have partnered with them.',
			name: 'Ahmad A. Nanahawau ',
			role: 'CEO',
			company: 'TechVision Solutions',
			rating: 5,
		},
	];

	const startAutoPlay = () => {
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			nextSlide();
		}, 5000);
	};

	const stopAutoPlay = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
	};

	useEffect(() => {
		if (isPlaying) {
			startAutoPlay();
		} else {
			stopAutoPlay();
		}

		return () => stopAutoPlay();
	}, [isPlaying, currentSlide]);

	const nextSlide = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide(prev => (prev + 1) % testimonials.length);
		setTimeout(() => setIsTransitioning(false), 600);
	};

	const prevSlide = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide(
			prev => (prev - 1 + testimonials.length) % testimonials.length
		);
		setTimeout(() => setIsTransitioning(false), 600);
	};

	const goToSlide = index => {
		if (isTransitioning || index === currentSlide) return;
		setIsTransitioning(true);
		setCurrentSlide(index);
		setTimeout(() => setIsTransitioning(false), 600);
	};

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	const renderStars = rating => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<span
					key={i}
					className="text-amber-400 text-3xl"
				>
					★
				</span>
			);
		}

		if (hasHalfStar) {
			stars.push(
				<span
					key="half"
					className="text-amber-400 text-3xl relative inline-block"
				>
					<span className="absolute inset-0 overflow-hidden w-1/2">★</span>
					<span className="text-gray-300">★</span>
				</span>
			);
		}

		const emptyStars = 5 - Math.ceil(rating);
		for (let i = 0; i < emptyStars; i++) {
			stars.push(
				<span
					key={`empty-${i}`}
					className="text-gray-300 text-2xl"
				>
					★
				</span>
			);
		}

		return stars;
	};

	const getInitials = name => {
		return name
			.split(' ')
			.map(n => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	};

	return (
		<div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16 animate-fade-in">
					<span className="inline-block  text-[#FAA419] text-[24px] font-semibold mb-3">
						Customers’ Review
					</span>
					<h2 className="text-[50px] font-bold text-[#002B45]">
						What people say?
					</h2>
				</div>

				{/* Slider Container */}
				<div className="relative bg-white rounded-3xl border-gray-400 border-b-[2px] shadow-sm pb-20 overflow-hidden">
					{/* Previous Button */}
					<button
						onClick={prevSlide}
						disabled={isTransitioning}
						className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-100 hover:bg-[#FAA419] hover:text-white text-slate-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-110"
						aria-label="Previous testimonial"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					{/* Next Button */}
					<button
						onClick={nextSlide}
						disabled={isTransitioning}
						className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-110"
						aria-label="Next testimonial"
					>
						<ChevronRight className="w-6 h-6" />
					</button>

					<div className="p-8 md:p-16 ">
						{/* Slides */}
						<div className="relative min-h-[500px]">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className={`absolute inset-0 transition-all duration-600 ease-in-out ${
										index === currentSlide
											? 'opacity-100 translate-x-0'
											: index < currentSlide
											? 'opacity-0 -translate-x-8 pointer-events-none'
											: 'opacity-0 translate-x-8 pointer-events-none'
									}`}
								>
									{testimonial.type === 'video' ? (
										/* Video Testimonial */
										<div className="space-y-8">
											<div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden">
												<iframe
													src={`https://www.youtube.com/embed/${testimonial.videoId}?enablejsapi=1`}
													title="Customer Testimonial Video"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
													className="absolute inset-0 w-full h-full"
												/>
											</div>
											{/* Name and Role below video */}
											<div className="text-center space-y-3">
												<h3 className="text-[28px] leading-[33px] font-semibold">
													{testimonial.name}
												</h3>
												<p className="text-[#FAA419] font-medium text-[18px] leading-[32px] uppercase tracking-wide">
													{testimonial.role}
												</p>
											</div>
											{/* Stars below video */}
											<div className="flex gap-1 justify-center">
												{renderStars(testimonial.rating)}
											</div>
										</div>
									) : (
										/* Text Testimonial */
										<div className="flex flex-col items-center justify-center min-h-[450px] space-y-8">
											{/* Stars before text */}
											<div className="flex gap-1">
												{renderStars(testimonial.rating)}
											</div>
											{/* Quote */}
											<div className="relative max-w-3xl">
												<p className="text-[24px] text-[#002B45] leading-[45px] text-center px-8">
													{testimonial.text}
												</p>
											</div>
										</div>
									)}

									{/* Common Footer */}
									<div className="text-center space-y-3">
										{testimonial.type === 'text' && (
											<>
												{/* <svg
													className="mx-auto w-16 h-16 text-orange-200 opacity-50"
													fill="currentColor"
													viewBox="0 0 32 32"
												>
													<path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
												</svg> */}

												<div className="mx-auto w-16 h-16">
													<img
														src={testQuote}
														alt=""
													/>
												</div>
												<h3 className="text-[28px] leading-[33px] font-semibold">
													{testimonial.name}
												</h3>
												<p className="text-[#FAA419] font-medium text-[18px] leading-[32px] uppercase tracking-wide">
													{testimonial.role}
												</p>
											</>
										)}
										{/* Dots Indicator */}
										<div className="flex gap-2 justify-center">
											{testimonials.map((_, index) => (
												<div
													key={index}
													className={`w-4 h-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
														index === currentSlide
															? 'bg-blue-500'
															: 'bg-gray-300'
													}`}
													onClick={() => goToSlide(index)}
												>
													<div
														className={`w-2 h-2 rounded-full ${
															index === currentSlide
																? 'bg-yellow-500'
																: 'bg-gray-500'
														}`}
													></div>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Decorative Elements */}
					<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-32 -translate-y-32" />
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-32 translate-y-32" />
				</div>
			</div>
		</div>
	);
};

export default TestimonialSlider;
