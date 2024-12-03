import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Bell, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.dropdown-group')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="border-b border-gray-100 shadow-sm fixed w-full bg-white z-[100]">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo Section */}

          <div className="flex items-center gap-3">
            <Link to="/"><img 
              src="/images/logo.png" 
              alt="Hobbycue Logo" 
              className="h-12 md:h-16 object-contain"
            /></Link>
            
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center flex-1">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <button className="absolute right-0 top-0 h-full px-5 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-4">
              {/* Explore Section with Clickable Dropdown */}
              <div className="relative dropdown-group">
                <button 
                  className="flex items-center gap-1 text-gray-700 hover:text-purple-600"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Search size={20} />
                  <span>Explore</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-10 left-0 w-64 bg-white border border-gray-200 shadow-md rounded-lg">
                    <ul className="divide-y divide-gray-100">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">People - Community</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Places - Venues</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Programs - Events</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Products - Store</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blogs</li>
                    </ul>
                  </div>
                )}
              </div>

              <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
                <span className="text-purple-600">✚</span>
                <span>Hobbies</span>
                <ChevronDown size={16} />
              </button>

              <button className="text-gray-700 hover:text-purple-600">🔖</button>
              <button className="text-gray-700 hover:text-purple-600"><Bell size={20} /></button>
              <button className="text-gray-700 hover:text-purple-600"><ShoppingCart size={20} /></button>
              <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <button className="absolute right-0 top-0 h-full px-5 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700">
                <Search size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
                <Search size={20} />
                <span>Explore</span>
                <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
                <span className="text-purple-600">✚</span>
                <span>Hobbies</span>
                <ChevronDown size={16} />
              </button>
              <div className="flex gap-4">
                <button className="text-gray-700 hover:text-purple-600">🔖</button>
                <button className="text-gray-700 hover:text-purple-600"><Bell size={20} /></button>
                <button className="text-gray-700 hover:text-purple-600"><ShoppingCart size={20} /></button>
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
