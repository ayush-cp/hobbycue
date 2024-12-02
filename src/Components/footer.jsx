import React from 'react';
import { Mail, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-y-8">
          {/* Left Section - Hobbycue */}
          <div className="w-full sm:w-48">
            <h3 className="font-bold text-lg mb-6">Hobbycue</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Work with Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Center Section - How Do I */}
          <div className="w-full sm:w-48">
            <h3 className="font-bold text-lg mb-6">How Do I</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Sign Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Add a Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Claim Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Post a Query</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Add a Blog Post</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Other Queries</a></li>
            </ul>
          </div>

          {/* Center-Right Section - Quick Links */}
          <div className="w-full sm:w-48">
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Listings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Blog Posts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Shop / Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Community</a></li>
            </ul>
          </div>

          {/* Right Section - Social Media & Invite */}
          <div className="w-full sm:w-auto sm:min-w-[300px]">
            <h3 className="font-bold text-lg mb-6">Social Media</h3>
            <div className="flex gap-4 mb-12">
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">
                <span className="text-gray-600">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">
                <span className="text-gray-600">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">
                <span className="text-gray-600">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">
                <span className="text-gray-600">p</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">
                <span className="text-gray-600">g+</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">
                <Send size={18} />
              </a>
            </div>

            <h3 className="font-bold text-lg mb-6">Invite Friends</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email ID"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-purple-500"
              />
              <button className="px-8 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700">
                Invite
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-gray-600">
          © Purple Cues Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
