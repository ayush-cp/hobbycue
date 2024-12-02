import React from 'react';
import { Search, ChevronDown, Bell, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/hobbycue-logo.png" 
            alt="Hobbycue Logo" 
            className="h-16 object-contain"
          />
        </div>

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
        <div className="flex items-center gap-6">
          {/* Explore Dropdown */}
          <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <Search size={20} />
            </div>
            <span>Explore</span>
            <ChevronDown size={16} />
          </button>

          {/* Hobbies Dropdown */}
          <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
            <div className="w-6 h-6 flex items-center justify-center text-purple-600">
              ✚
            </div>
            <span>Hobbies</span>
            <ChevronDown size={16} />
          </button>

          {/* Bookmark Icon */}
          <button className="text-gray-700 hover:text-purple-600">
            <div className="w-6 h-6 flex items-center justify-center">
              🔖
            </div>
          </button>

          {/* Bell Icon */}
          <button className="text-gray-700 hover:text-purple-600">
            <Bell size={20} />
          </button>

          {/* Cart Icon */}
          <button className="text-gray-700 hover:text-purple-600">
            <ShoppingCart size={20} />
          </button>

          {/* Sign In Button */}
          <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
