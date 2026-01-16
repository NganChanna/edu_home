import React, { useState } from "react";
import { Bell, Search, X } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="w-full h-[70px] bg-[#1f232a] px-4 md:px-6 flex items-center justify-between shadow-lg">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#2c313a] flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="logo"
              className="w-6 md:w-7"
            />
          </div>

          <h1 className="text-white text-lg md:text-xl font-semibold hidden sm:block">
            Edu Home
          </h1>
        </div>

        {/* Desktop Search */}
        {!isMobile && (
          <div className="flex-1 max-w-[520px] mx-6">
            <div className="flex items-center gap-2 bg-[#2c313a] px-4 py-3 rounded-full">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Find course"
                className="w-full bg-transparent outline-none text-white placeholder:text-gray-400 text-[15px]"
              />
            </div>
          </div>
        )}

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Mobile Search Button */}
          {isMobile && (
            <button
              onClick={() => setOpenSearch(!openSearch)}
              className="w-10 h-10 rounded-xl bg-[#2c313a] flex items-center justify-center text-white hover:bg-[#3a404b] duration-200"
            >
              {openSearch ? <X size={18} /> : <Search size={18} />}
            </button>
          )}

          {/* ✅ Dark Mode Toggle */}
          <ThemeToggle />

          {/* Notification */}
          <button className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#2c313a] flex items-center justify-center text-white hover:bg-[#3a404b] duration-200">
            <Bell size={18} className="md:size-5" />
          </button>

          {/* Hide flag on mobile */}
          {!isMobile && (
            <img
              src="https://flagcdn.com/w40/kh.png"
              alt="flag"
              className="w-8 rounded-md cursor-pointer"
            />
          )}

          {/* Profile */}
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="profile"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-[#3a404b] cursor-pointer"
          />
        </div>
      </nav>

      {/* Mobile Search Dropdown */}
      {isMobile && openSearch && (
        <div className="mt-3 w-full bg-[#1f232a] rounded-2xl px-4 py-3 shadow-lg">
          <div className="flex items-center gap-2 bg-[#2c313a] px-4 py-3 rounded-full">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Find course"
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-400 text-[15px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
