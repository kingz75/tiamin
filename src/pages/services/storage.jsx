import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#002845] text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* COLUMN 1 */}
        <div>
          <h2 className="text-xl font-bold mb-3">COZYM</h2>
          <p className="text-sm leading-6">
            We deliver innovative tech solutions, transforming ideas into
            digital excellence for businesses across Africa and beyond.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-yellow-400">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm">
            Plot 2, Block 115, Ayo Babatunde Crescent, Lekki, Lagos, Nigeria
          </p>
          <p className="text-sm mt-2">Email: support@cozym.com</p>

          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
            <FaTwitter className="cursor-pointer hover:text-yellow-400" />
            <FaInstagram className="cursor-pointer hover:text-yellow-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
          </div>
        </div>
      </div>

      <hr className="border-gray-500 my-6" />

      <p className="text-center text-sm">
        © {new Date().getFullYear()} COZYM LTD — All Rights Reserved.
      </p>
    </footer>
  );
}
