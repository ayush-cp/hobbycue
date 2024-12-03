import React, { useState, useEffect } from "react";
import { Search, ChevronDown,Menu, X } from "lucide-react";
import { FaCompass } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";import { Link } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-group")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="border-b border-gray-100 shadow-sm fixed w-full bg-white z-[100]">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-3">
            <Link to="/"><img 
              src="/images/logo.png" 
              alt="Hobbycue Logo" 
              className="h-12 md:h-16 object-contain"
            /></Link>
            
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center flex-1">
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <button className="absolute right-0 top-0 h-full px-5 bg-[#8064A2] text-white rounded-r-lg hover:bg-purple-700">
                  <Search size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative dropdown-group">
                <button
                  className="flex items-center justify-center gap-1 text-gray-700 hover:text-purple-600"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <FaCompass className="text-[#8064A2]" size={20} />
                  <span className="font-[500] text-black">Explore</span>
                  <ChevronDown size={16} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-10 left-0 w-64 bg-white border border-gray-200 shadow-md rounded-lg">
                    <ul className="divide-y divide-gray-100">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        People - Community
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Places - Venues
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Programs - Events
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Products - Store
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Blogs
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <button className="flex items-center justify-center gap-1 text-gray-700 hover:text-purple-600">
                <span className="text-[#8064A2] text-[20px]">✚</span>
                <span className="font-[500] text-black">Hobbies</span>
                <ChevronDown size={16} />
              </button>

              <button className="text-gray-700 hover:text-purple-600">
                <FaBookmark className="text-[#8064A2] text-[20px]" />
              </button>
              <button className="text-gray-700 hover:text-purple-600">
                <FaBell className="text-[#8064A2] text-[20px]" />
              </button>
              <button className="text-gray-700 hover:text-purple-600">
                <FaCartShopping className="text-[#8064A2] text-[20px]" />
              </button>
              <button className="font-[600] px-6 py-1 border h-[40px] w-[100px] border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
                Sign In
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <button className="absolute right-0 top-0 h-full px-5 bg-[#8064A2] text-white rounded-r-lg hover:bg-purple-700">
                <Search size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
                <FaCompass className="text-[#8064A2]" size={16} />
                <span className="font-[500] text-black">Explore</span>
                <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
                <span className="text-purple-600">✚</span>
                <span className="font-[500] text-black">Hobbies</span>
                <ChevronDown size={16} />
              </button>
              <div className="flex gap-4">
                <button className="text-gray-700 hover:text-purple-600">
                  <FaBookmark className="text-[#8064A2] text-[16px]" />
                </button>
                <button className="text-gray-700 hover:text-purple-600">
                  <FaBell className="text-[#8064A2] text-[16px]" />
                </button>
                <button className="text-gray-700 hover:text-purple-600">
                  <FaCartShopping className="text-[#8064A2] text-[16px]" />
                </button>
              </div>
              <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
