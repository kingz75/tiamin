import React, { useRef, useState, useEffect } from 'react';
import video from '../../assets/images/homeVideoo.mp4';

export default function SectionTwo() {
	const videoRef = useRef(null);
	const modalVideoRef = useRef(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.currentTime = 32; // Start thumbnail at 5 seconds into the video
		}
	}, []);

	const openModal = () => {
		setIsModalOpen(true);
		if (modalVideoRef.current) {
			modalVideoRef.current.play();
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
		if (modalVideoRef.current) {
			modalVideoRef.current.pause();
		}
	};

	return (
		<div>
			<div>
				<section className="py-[160px] max-w-[1370px] px-[100px] mx-auto flex flex-col md:flex-row gap-10">
					<div className="bg-white p-8 rounded-xl shadow-lg w-1/2 h-[584px]">
						<h3 className="text-[24px] font-semibold mb-4">About Us</h3>
						<h2 className="text-[36px] text-[#002B45] leading-[43px] font-bold mb-4">
							Cozym Limited provides integrated EPC capabilities across the oil
							& gas project lifecycle
						</h2>
						<p className="text-[#666666] leading-[28px] text-[20px]">
							From feasibility and FEED to engineering, procurement,
							construction, commissioning, and post-handover training. We align
							every scope with international standards (API, ASME, ISO, BS,
							NFPA) while applying deep local insight to deliver safe,
							compliant, and cost-effective assets.
						</p>
					</div>

					{/* VIDEO SECTION */}
					<div className="rounded-xl overflow-hidden shadow-lg w-1/2 h-[584px] relative cursor-pointer">
						{/* Video */}
						<video
							ref={videoRef}
							src={video}
							className="w-full h-full object-cover rounded-xl shadow-lg"
							muted
							loop
							playsInline
						/>

						{/* Overlay */}
						<div className="absolute inset-0 bg-black/40 rounded-xl transition"></div>

						{/* Play button */}
						<div className="absolute inset-0 flex justify-center items-center">
							<div
								className="w-16 h-14 bg-red-700 backdrop-blur-md rounded-lg flex items-center justify-center hover:opacity-35 transition cursor-pointer"
								onClick={openModal}
							>
								<div className="w-0 h-0 border-l-[28px] border-[#ffffff] border-y-[16px] border-y-transparent"></div>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
					onClick={closeModal}
				>
					<div
						className="relative max-w-4xl w-full mx-4"
						onClick={e => e.stopPropagation()}
					>
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition z-10"
							aria-label="Close video modal"
						>
							&times;
						</button>
						<video
							ref={modalVideoRef}
							src={video}
							className="w-full h-auto rounded-lg"
							controls
							autoPlay
						/>
					</div>
				</div>
			)}
		</div>
	);
}
