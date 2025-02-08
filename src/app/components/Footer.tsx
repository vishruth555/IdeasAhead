// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()}</p>
        <p>this is a demo website. contact me at vishruth555@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
