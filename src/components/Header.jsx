import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Mainicon from "../assets/icons/mainicon.svg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Header() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <header className="w-full shadow">
      {/* TOP BAR */}
      <div className="bg-[#002b45] text-[#FFFFFF] text-[12px] font-medium py-2 px-[300px] flex justify-between items-center">
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
              <FaTwitter size={14} />
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

      {/* NAV BAR */}
      <div className="py-[25px] px-[120px] flex justify-between items-center gap-2 bg-white relative">
        {/* Logo */}
        <Link to="/">
          <img src={Mainicon} alt="logo" />
        </Link>

        <nav>
          <ul className="flex items-center gap-6 text-[#002b45] font-semibold">
            <NavLink to="/" className="hover:text-[#FAA419]">
              Home
            </NavLink>

            <NavLink to="/about" className="hover:text-[#FAA419]">
              About
            </NavLink>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <span className="flex items-center gap-1 hover:text-[#FAA419] cursor-pointer">
                Services{" "}
                {serviceOpen ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </span>

              {serviceOpen && (
                <div className="absolute top-6 left-0 bg-white shadow-lg rounded w-[350px] py-2 z-20">
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
              <span className="flex items-center gap-1 hover:text-[#FAA419] cursor-pointer">
                Projects{" "}
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

            <NavLink to="/academy" className="hover:text-[#FAA419]">
              Cozym Academy
            </NavLink>

            <NavLink to="/careers" className="hover:text-[#FAA419]">
              Careers
            </NavLink>

            <NavLink to="/news" className="hover:text-[#FAA419]">
              News & Insights
            </NavLink>

            <NavLink to="/contact" className="hover:text-[#FAA419]">
              Contacts
            </NavLink>
          </ul>
        </nav>

        {/* Download Button */}
        <button className="bg-[#002b45] text-white px-[50px] py-[15px] rounded">
          Download Our Profile
        </button>
      </div>
    </header>
  );
}
