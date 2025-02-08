// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} AV Systems Integrator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
