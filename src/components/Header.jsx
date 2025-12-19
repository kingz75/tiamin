import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaShoppingCart,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="w-full h-[90px] bg-cover bg-center"
      style={{ backgroundImage: "url('/header-bg.png')" }}
    >
      <div className="w-full h-full bg-black/40">
        <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between text-white">
          {/* Left section: Logo + Socials */}
          <div className="flex items-center gap-6">
            <img src="/logo.png" alt="Logo" className="h-12" />
            <div className="hidden lg:flex items-center gap-3 text-sm">
              <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
              <FaInstagram className="cursor-pointer hover:text-yellow-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
            <a className="hover:text-yellow-400">Home</a>
            <a className="hover:text-yellow-400">About</a>
            <a className="hover:text-yellow-400">Services</a>

            <a className="hover:text-yellow-400">Gallery</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              <span>Subsidiaries</span>
              <FaChevronDown className="text-xs" />
            </div>
            <a className="hover:text-yellow-400">Shop</a>
            <a className="hover:text-yellow-400">Contact</a>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <FaSearch className="cursor-pointer" />
            <div className="relative cursor-pointer">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 text-black text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div className="flex items-center gap-2  px-4 py-1 text-sm">
              <FaPhoneAlt className="text-yellow-400" />
              <div className="leading-tight">
                <p className="text-[11px]">Call Anytime</p>
                <p className="font-semibold text-[13px]">+2348036874426</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
