import { NavLink, Link, useLocation } from "react-router-dom";
import {
  FaShoppingCart,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

import Call from "../assets/icons/callicon.svg";
import Mainicon from "../assets/icons/mainicon.svg";

export default function Header() {
  const location = useLocation();
  const [projectOpen, setProjectOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubsOpen, setMobileSubsOpen] = useState(false);
  const isProjectActive = location.pathname.startsWith("/subsidiaries");

  const navClass = ({ isActive }) =>
    `hover:text-yellow-400 ${
      isActive ? "text-yellow-400 font-extrabold" : " "
    }`;

  return (
    <header className="py-[5px] px-4 lg:px-[60px] bg-cover bg-center z-50 relative ">
      <div className="max-w-[1370px] mx-auto gap-10 flex items-center justify-between text-white">
        {/* Left section: Logo + Socials */}
        <div className="flex items-center gap-24">
          <Link to="/">
            <img src={Mainicon} alt="Logo" className="w-[80px]" />
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            <div className="w-8 h-8 rounded-full  bg-[#ffffff10] flex items-center justify-center text-[#ffffff] hover:bg-[#ffffff70] cursor-pointer">
              <FaXTwitter size={14} />
            </div>
            <div className="w-8 h-8 rounded-full  bg-[#ffffff10] flex items-center justify-center text-[#ffffff] hover:bg-[#ffffff70] cursor-pointer">
              <FaFacebook size={14} />
            </div>
            <div className="w-8 h-8 rounded-full  bg-[#ffffff10] flex items-center justify-center text-[#ffffff] hover:bg-[#ffffff70] cursor-pointer">
              <FaInstagram size={14} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
            }
          >
            Gallery
          </NavLink>

          {/* Subsidiaries Dropdown */}

          <div
            className={`relative ${projectOpen ? "min-h-[200px]" : ""}`}
            onMouseEnter={() => setProjectOpen(true)}
            onMouseLeave={() => setProjectOpen(false)}
          >
            <span
              className={`flex items-center gap-1 cursor-pointer ${
                isProjectActive ? "text-[#FAA419]" : "hover:text-[#FAA419]"
              }`}
            >
              Subsidiaries{" "}
              {projectOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </span>

            {projectOpen && (
              <div className="absolute top-6 left-0 bg-white/10 backdrop-blur-[10px] shadow-lg rounded w-[350px] py-6 z-20">
                <NavLink
                  to="/subsidiaries/list1"
                  className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                             after:content-[''] after:absolute after:left-0 after:-bottom-1
                                             after:h-[2px] after:w-0 after:bg-[#FAA419]
                                             after:transition-all after:duration-300
                                             hover:after:w-28 hover:text-[#ffffff]"
                >
                  Tiamin Rice Limited
                </NavLink>
                <br />

                <NavLink
                  to="/subsidiaries/list2"
                  className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                             after:content-[''] after:absolute after:left-0 after:-bottom-1
                                             after:h-[2px] after:w-0 after:bg-[#FAA419]
                                             after:transition-all after:duration-300
                                             hover:after:w-28 hover:text-[#ffffff]"
                >
                  Tiamin Gold & Jewelleries LCC
                </NavLink>
                <br />

                <NavLink
                  to="/subsidiaries/list3"
                  className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                             after:content-[''] after:absolute after:left-0 after:-bottom-1
                                             after:h-[2px] after:w-0 after:bg-[#FAA419]
                                             after:transition-all after:duration-300
                                             hover:after:w-28 hover:text-[#ffffff]"
                >
                  Tiamin Commodity Exchange
                </NavLink>
                <br />

                <NavLink
                  to="/subsidiaries/list4"
                  className="relative inline-block px-4 pt-4 text-[#ffffff99]
                                             after:content-[''] after:absolute after:left-0 after:-bottom-1
                                             after:h-[2px] after:w-0 after:bg-[#FAA419]
                                             after:transition-all after:duration-300
                                             hover:after:w-28 hover:text-[#ffffff]"
                >
                  Tiamin Air
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="bg-[#ffffff60] w-[0.07px] h-8"></div>

          <div className="flex items-center gap-4">
            <CiSearch className="cursor-pointer text-[20px]" />
            <FaShoppingCart className="cursor-pointer text-[20px]" />
          </div>

          <div className="flex items-center gap-2 px-4 py-1 text-sm">
            <img src={Call} alt="" className="w-[35px]" />
            <div className="leading-tight">
              <p className="text-[12px] font-medium">Call Anytime</p>
              <p className="font-semibold text-[16px]">+234 803 687 4426</p>
            </div>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden  p-2 rounded">
          {menuOpen ? (
            <FaTimes
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-[24px]"
            />
          ) : (
            <FaBars
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-[24px]"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-[10px] rounded-b-2xl shadow-lg z-50">
          <nav className="flex flex-col items-start gap-4 py-4 px-4 text-[#ffffff99] ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419] font-bold" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink>

            {/* Subsidiaries Dropdown */}
            <div className="flex flex-col items-start">
              <span
                className={`flex items-center gap-1 cursor-pointer ${
                  isProjectActive ? "text-[#FAA419]" : "hover:text-[#FAA419]"
                }`}
                onClick={() => setMobileSubsOpen(!mobileSubsOpen)}
              >
                Subsidiaries{" "}
                {mobileSubsOpen ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </span>

              {mobileSubsOpen && (
                <div className="flex flex-col items-start gap-2 mt-2 ml-4">
                  <NavLink
                    to="/subsidiaries/list1"
                    className="text-[#ffffff99] hover:text-[#ffffff]"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubsOpen(false);
                    }}
                  >
                    Tiamin Rice Limited
                  </NavLink>
                  <NavLink
                    to="/subsidiaries/list2"
                    className="text-[#ffffff99] hover:text-[#ffffff]"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubsOpen(false);
                    }}
                  >
                    Tiamin Gold & Jewelleries LCC
                  </NavLink>
                  <NavLink
                    to="/subsidiaries/list3"
                    className="text-[#ffffff99] hover:text-[#ffffff]"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubsOpen(false);
                    }}
                  >
                    Tiamin Commodity Exchange
                  </NavLink>
                  <NavLink
                    to="/subsidiaries/list4"
                    className="text-[#ffffff99] hover:text-[#ffffff]"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubsOpen(false);
                    }}
                  >
                    Tiamin Air
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#FAA419] ${isActive ? "text-[#FAA419]" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
