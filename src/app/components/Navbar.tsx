// components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6">
      <div className="logo text-white text-2xl font-bold">Ideas Ahead</div>
      <ul className="flex space-x-6 text-white">
        <li>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-300 transition-colors">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
