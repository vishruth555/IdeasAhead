// components/Navbar.js
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Variants for the mobile menu animation
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Full-width Navbar container with glassmorphism effect */}
      <div className="w-full px-4 sm:px-6 lg:px-8 bg-black bg-opacity-40 backdrop-blur-md">
        <div className="flex justify-between items-center py-4">
          <div className="text-white font-bold text-2xl">Ideas ahead</div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              About us
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Contact
            </a>
          </nav>
          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                // Close (X) icon
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black bg-opacity-80 backdrop-blur-md"
          >
            <div className="px-6 pt-4 pb-6 space-y-4">
              <a
                href="#"
                onClick={toggleMenu}
                className="block text-white text-lg hover:text-blue-300 transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="block text-white text-lg hover:text-blue-300 transition duration-300"
              >
                Services
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="block text-white text-lg hover:text-blue-300 transition duration-300"
              >
                About us
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="block text-white text-lg hover:text-blue-300 transition duration-300"
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
