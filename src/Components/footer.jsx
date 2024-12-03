import React, { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaGooglePlusG,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white mt-8 w-full px-4 py-8">
      <div className="md:max-w-7xl md:mx-auto ">
        <div className="w-full flex md:flex-row justify-between py-8 flex-col">
          <div className="w-full sm:w-24">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg mb-4">Hobbycue</h3>
              <FaAngleUp className="md:hidden block mt-1" />
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Work with Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-24">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg mb-4">How Do I</h3>
              <FaAngleUp className="md:hidden block mt-1" />
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Add a Listing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Claim Listing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Post a Query
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-24">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <FaAngleUp className="md:hidden block mt-1" />
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Listings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Blog Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Shop / Store
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 md:text-black font-[400] hover:text-purple-600"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full sm:w-54">
              <h3 className="font-bold text-lg mb-4">Social Media</h3>
              <div className="flex space-x-4 text-purple-600">
                <div className="w-[30px]  p-1 flex justify-center items-center rounded-full h-[30px] bg-gray-200">
                  <FaFacebookF className="text-[#6D747A]   hover:text-purple-700" />
                </div>
                <div className="w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] bg-gray-200">
                  <FaTwitter className="text-[#6D747A]   hover:text-purple-700" />
                </div>
                <div className="w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] bg-gray-200">
                  <FaInstagram className="text-[#6D747A]   hover:text-purple-700" />
                </div>
                <div className="w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] bg-gray-200">
                  <FaPinterest className="text-[#6D747A]   hover:text-purple-700" />
                </div>
                <div className="w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] bg-gray-200">
                  <FaGooglePlusG className="text-[#6D747A]   hover:text-purple-700" />
                </div>
                <div className="w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] bg-gray-200">
                  <FaYoutube className="text-[#6D747A]   hover:text-purple-700" />
                </div>
                <div className="w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] bg-gray-200">
                  <FaTelegramPlane className="text-[#6D747A]   hover:text-purple-700" />
                </div>
                <div className="w-[30px] p-1 flex justify-center items-center rounded-full h-[30px] bg-gray-200">
                  <IoMdMail className="text-[#6D747A]   hover:text-purple-700" />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-48">
              <h3 className="font-bold text-lg mb-4">Invite Friends</h3>
              <form
                className="relative flex md:w-[160%] w-[100%] rounded-lg"
                style={{ border: "1px solid #8064A2" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email ID"
                  className="w-full pl-3 pr-0 py-1 rounded-lg focus:outline-none focus:border-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#8064A2] text-white px-3 py-1 rounded-r-lg  hover:bg-purple-700"
                >
                  Invite
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <div className="bg-[#F7F5F9] font-[500] text-md text-center text-[#08090A]">
          © Purple Cues Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
