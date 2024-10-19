import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 text-center">
      <p>© 2024 Stellara. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-125 hover:shadow-blue-500/50"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-125 hover:shadow-blue-500/50"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-125 hover:shadow-blue-500/50"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
