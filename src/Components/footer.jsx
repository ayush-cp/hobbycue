import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-gray-50 mt-[60px] w-full px-4 py-8">
      <div className="border-t border-gray-200 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-8 justify-between py-8">
          {/* Hobbycue Section */}
          <div className="w-full sm:w-[200px]">
            <h3 className="font-bold text-lg mb-4">Hobbycue</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Work with Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">FAQ</a></li>
            </ul>
          </div>

          {/* How Do I Section */}
          <div className="w-full sm:w-[200px]">
            <h3 className="font-bold text-lg mb-4">How Do I</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Sign Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Add a Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Claim Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Post a Query</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-[200px]">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Listings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Blog Posts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Shop / Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Community</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-[200px]">
            <h3 className="font-bold text-lg mb-4">Social Media</h3>
            <div className="flex gap-2 mb-6">
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">f</a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">t</a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">in</a>
              <a href="#" aria-label="Email" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100">
                <Mail size={16} />
              </a>
            </div>
            
            {/* Invite Friends Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Invite Friends</h3>
              <form className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email ID"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  required
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-700">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
