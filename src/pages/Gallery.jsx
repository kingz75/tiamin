import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // for safe CSV parsing
import CareerH from './careersH';

// Google Sheet CSV endpoint
const SHEET_CSV_URL =
	'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJSh_T6Ilo3rNou9sjgj69WmpkvsoqieKw_uX82_YNi-HZ0D4TfRa1SAGcmdjXozoeGXnZyvPJfQoA/pub?gid=0&single=true&output=csv';

// Static Google Form link (same for all jobs)
const STATIC_FORM_LINK =
	'https://docs.google.com/forms/d/e/1FAIpQLSfO8R-iUZbSmlvcGGXDhIKV9_vJ-FMW0jl55sntNat01tOPWQ/viewform?usp=dialog';

export default function Careers() {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch(SHEET_CSV_URL);
				const csvText = await response.text();

				// Parse CSV safely (supports commas & long text)
				Papa.parse(csvText, {
					header: true,
					skipEmptyLines: true,
					complete: results => {
						setJobs(results.data);
					},
				});
			} catch (err) {
				console.error('Error loading jobs', err);
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	return (
		<div className="min-h-screen bg-white max-w-[1320px] mx-auto font-Montserrat ">
			<CareerH />
			<div className="max-w-[50%] mt-[111px]">
				<h1 className="text-[30px] leading-[42px] text-[#002B45] font-extrabold ">
					Build a future you can feature in
				</h1>
				<p className="text-[16px] leading-[30px] text-[#002B45] pt-[18px]">
					Join a team of passionate engineers, project managers, and innovators
					driving the future of energy infrastructure in Nigeria and West
					Africa. Explore our current job openings below.
				</p>
			</div>
			<div className="max-w-[50%] mt-[90px]">
				<h1 className="text-[30px] leading-[42px] text-[#002B45] font-extrabold ">
					Open roles
				</h1>
				<p className="text-[16px] leading-[30px] text-[#002B45] pt-[18px]">
					We are always happy to receive open applications, even if we are not
					actively hiring.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-[90px]">
				<h2 className="col-span-3 text-[30px] leading-[42px] font-extrabold text-[#002B45]">
					Job Title
				</h2>
				<h2 className="col-span-6 text-[30px] leading-[42px] font-extrabold text-[#002B45]">
					Description
				</h2>
			</div>

			{loading ? (
				<p>Loading job listings...</p>
			) : (
				jobs.map((job, index) => (
					<div
						key={index}
						className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-[110px]"
					>
						{/* Job Title */}
						<div className="col-span-3">
							<p className="text-[#FAA419] text-[16px]  font-medium">
								{job.Type}
							</p>
							<p className="text-[#002B45] text-[16px] font-bold">
								{job.Title}
							</p>
						</div>

						{/* Job Description */}
						<div className="col-span-6 text-sm text-[#002B45] text-[16px] leading-[30px] font-medium">
							<p>{job.Description}</p>
							<p className="mt-1 text-[#F4A300]">
								Location: {job.Location} | Experience: {job.Experience} |
								Deadline: {job.Deadline}
							</p>
						</div>

						{/* Apply Button */}
						<div className="col-span-3 flex justify-start md:justify-end">
							<button
								onClick={() => window.open(job.FormLink, '_blank')}
								className="bg-[#002B45] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#014166] transition"
							>
								Apply
							</button>
						</div>
					</div>
				))
			)}
		</div>
	);
}
