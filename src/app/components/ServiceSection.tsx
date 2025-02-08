// components/ServicesSection.js
"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    image: "/images/service1.jpg",
    title: "Installation",
    link: "https://example.com/installation",
  },
  {
    image: "/images/service2.jpg",
    title: "Maintenance",
    link: "https://example.com/maintenance",
  },
  {
    image: "/images/service3.jpg",
    title: "Consultation",
    link: "https://example.com/consultation",
  },
  {
    image: "/images/service4.jpg",
    title: "Design",
    link: "https://example.com/design",
  },
  {
    image: "/images/service5.jpg",
    title: "Repair",
    link: "https://example.com/repair",
  },
  {
    image: "/images/service6.jpg",
    title: "Upgrade",
    link: "https://example.com/upgrade",
  },
];

const logos = [
  { image: "/images/logo1.jpeg", alt: "Company 1" },
  { image: "/images/logo2.png", alt: "Company 2" },
  { image: "/images/logo3.png", alt: "Company 3" },
  { image: "/images/logo4.png", alt: "Company 4" },
  { image: "/images/logo5.jpg", alt: "Company 5" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* 
                On mobile (below md): the overlay is always visible (opacity-100), 
                while on larger screens it starts hidden (md:opacity-0) and appears on hover (md:group-hover:opacity-100).
              */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-semibold">
                  {service.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* "Our Partners" Heading */}
        <motion.h3
          className="text-2xl font-bold text-center mt-16 mb-8 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Partners
        </motion.h3>

        {/* Horizontal list of company logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="mx-4 my-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
