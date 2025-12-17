import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Mainicon from '../assets/icons/mainicon.svg';
import {
	FaMapMarkerAlt,
	FaEnvelope,
	FaTwitter,
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram,
	FaChevronDown,
	FaChevronUp,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Header() {
	const [serviceOpen, setServiceOpen] = useState(false);
	const [projectOpen, setProjectOpen] = useState(false);

	// Detect active path
	const { pathname } = useLocation();
	const isServiceActive = pathname.startsWith('/services');
	const isProjectActive = pathname.startsWith('/projects');

	const isHome = pathname === '/';

	return (
		<header
			className={`w-full ${isHome ? 'absolute top-0 left-0 right-0 z-50' : ''}`}
		>
			{/* TOP BAR */}
			<div className={`${isHome ? 'bg-black/50' : 'bg-[#002b45]'}`}>
				<div className="text-[#FFFFFF] text-[12px] font-medium py-2 px-[20px] md:px-[40px] lg:px-[80px] max-w-[1200px] mx-auto flex justify-between items-center">
					<div className="flex items-center gap-2">
						<FaMapMarkerAlt size={14} />
						<span>
							Plot 2, Block 115, Ayo Babatunde Crescent, Off Oniru New Market
							Road, Lekki, Lagos State, Nigeria
						</span>
					</div>

					<div className="flex items-center gap-28">
						<div className="flex items-center gap-2">
							<FaEnvelope size={14} />
							<span>cozym@cozymtld.com</span>
						</div>

						<div className="flex gap-4">
							<a
								href="https://twitter.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[#FAA419]"
							>
								<FaXTwitter size={14} />
							</a>

							<a
								href="https://facebook.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[#FAA419]"
							>
								<FaFacebookF size={14} />
							</a>

							<a
								href="https://linkedin.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[#FAA419]"
							>
								<FaLinkedinIn size={14} />
							</a>

							<a
								href="https://instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[#FAA419]"
							>
								<FaInstagram size={14} />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* NAV BAR */}
			<div className={`${isHome ? 'bg-black/30' : 'bg-white'} bg-contain`}>
				<div className="py-[25px] px-[20px] md:px-[60px] lg:px-[80px] max-w-[1370px] mx-auto flex justify-between items-center gap-4 relative">
					{/* Logo */}
					<div className=" h-[40px] md:h-[53px] w-[150px] md:w-[210px] ">
						<Link to="/">
							<img
								src={Mainicon}
								alt="logo"
								className="w-full h-full object-contain"
							/>
						</Link>
					</div>

					<nav>
						<ul
							className={`flex items-center gap-6 font-semibold ${
								isHome ? 'text-white' : 'text-[#002b45]'
							}`}
						>
							{/* HOME */}
							<NavLink
								to="/"
								className={({ isActive }) =>
									`hover:text-[#FAA419] ${isActive ? 'text-[#FAA419]' : ''}`
								}
							>
								Home
							</NavLink>

							{/* ABOUT */}
							<NavLink
								to="/about"
								className={({ isActive }) =>
									`hover:text-[#FAA419] ${isActive ? 'text-[#FAA419]' : ''}`
								}
							>
								About
							</NavLink>

							{/* SERVICES DROPDOWN */}
							<div
								className="relative"
								onMouseEnter={() => setServiceOpen(true)}
								onMouseLeave={() => setServiceOpen(false)}
							>
								<span
									className={`flex items-center gap-1 cursor-pointer ${
										isServiceActive ? 'text-[#FAA419]' : 'hover:text-[#FAA419]'
									}`}
								>
									Services{' '}
									{serviceOpen ? (
										<FaChevronUp size={12} />
									) : (
										<FaChevronDown size={12} />
									)}
								</span>

								{serviceOpen && (
									<div className="absolute top-6 left-0 bg-white shadow-lg rounded w-[350px] py-2 z-50">
										<NavLink
											to="/services/oilngas"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Oil & Gas Production Facilities
										</NavLink>

										<NavLink
											to="/services/gasprocessing"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Gas Processing & Conditioning
										</NavLink>

										<NavLink
											to="/services/gasdistribution"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Gas Distribution & Terminals
										</NavLink>

										<NavLink
											to="/services/pipeline"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Pipelines & Distribution Networks
										</NavLink>

										<NavLink
											to="/services/technical"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Technical Training
										</NavLink>

										<NavLink
											to="/services/storage"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Storage Facilities
										</NavLink>

										<NavLink
											to="/services/utility"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Utility & Support Infrastructure
										</NavLink>

										<NavLink
											to="/services/procurement"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Procurement Services
										</NavLink>
									</div>
								)}
							</div>

							{/* PROJECTS DROPDOWN */}
							<div
								className="relative"
								onMouseEnter={() => setProjectOpen(true)}
								onMouseLeave={() => setProjectOpen(false)}
							>
								<span
									className={`flex items-center gap-1 cursor-pointer ${
										isProjectActive ? 'text-[#FAA419]' : 'hover:text-[#FAA419]'
									}`}
								>
									Projects{' '}
									{projectOpen ? (
										<FaChevronUp size={12} />
									) : (
										<FaChevronDown size={12} />
									)}
								</span>

								{projectOpen && (
									<div className="absolute top-6 left-0 bg-white shadow-lg rounded w-[350px] py-2 z-20">
										<NavLink
											to="/projects/lpg"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											LPG Storage & Distribution Terminal
										</NavLink>

										<NavLink
											to="/projects/feed"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											FEED — 1.6 km LPG Onshore Pipeline
										</NavLink>

										<NavLink
											to="/projects/ded"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											DED — 18 km Onshore Gas Distribution
										</NavLink>

										<NavLink
											to="/projects/integrity"
											className="block px-4 py-2 hover:bg-gray-100"
										>
											Integrity Assessment & FEED
										</NavLink>
									</div>
								)}
							</div>

							{/* OTHER LINKS */}
							{/* <button
								onClick={() => {
									if (pathname === '/') {
										// Already on homepage, scroll to training capacity section
										const element = document.getElementById('trainingCapacity');
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' });
										}
									} else {
										// Navigate to homepage first, then scroll
										window.location.href = '/#trainingCapacity';
									}
								}}
								className="hover:text-[#FAA419] cursor-pointer"
							>
								Academy
							</button> */}
							<button
								onClick={() => {
									if (pathname === '/') {
										// Already on homepage, scroll to training capacity section
										const element = document.getElementById('trainingCapacity');
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' });
										}
									} else {
										// Navigate to homepage first, then scroll
										window.location.href = '/#trainingCapacity';
									}
								}}
								className="hover:text-[#FAA419] cursor-pointer"
							>
								Academy
							</button>

							<NavLink
								to="/careers"
								className={({ isActive }) =>
									`hover:text-[#FAA419] ${isActive ? 'text-[#FAA419]' : ''}`
								}
							>
								Careers
							</NavLink>

							<NavLink
								to="/news"
								className={({ isActive }) =>
									`hover:text-[#FAA419] ${isActive ? 'text-[#FAA419]' : ''}`
								}
							>
								News
							</NavLink>

							<NavLink
								to="/contact"
								className={({ isActive }) =>
									`hover:text-[#FAA419] ${isActive ? 'text-[#FAA419]' : ''}`
								}
							>
								Contacts
							</NavLink>
						</ul>
					</nav>

					{/* Download Button */}
					<div>
						<a
							href="/cozymprofile.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#002b45] text-white px-[25px] py-[10px] rounded inline-block"
						>
							Download Profile
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
