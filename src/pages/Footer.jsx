'use client';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4">
      {/* Top navigation links */}
      <div className="flex flex-wrap justify-center space-x-6 border-b border-gray-700 pb-6 mb-6">
        <a href="#" className="hover:text-white transition">Privacy Notice</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <a href="#" className="hover:text-white transition">Cookie Policy</a>
        <a href="#" className="hover:text-white transition">Company Information</a>
        <a href="#" className="hover:text-white transition">Cookie Preferences</a>
      </div>

      {/* Bottom section */}
      <div className="text-center space-y-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} GameQuest, Inc. All rights reserved.</p>

        <div className="flex justify-center space-x-4">
          <a href="#" className="border border-gray-400 rounded-md p-2 hover:bg-white hover:text-black transition">
            <FaTwitter />
          </a>
          <a href="#" className="border border-gray-400 rounded-md p-2 hover:bg-white hover:text-black transition">
            <FaFacebookF />
          </a>
          <a href="#" className="border border-gray-400 rounded-md p-2 hover:bg-white hover:text-black transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
