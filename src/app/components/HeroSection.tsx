"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the structure for a slide
interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Example slides (replace with your own image paths and content)
const slides: Slide[] = [
  {
    id: 1,
    title: "Slide One",
    description: "Experience cutting-edge visuals",
    image: "/images/slide1.jpg", // Replace with your image
  },
  {
    id: 2,
    title: "Slide Two",
    description: "Innovative designs for your business",
    image: "/images/slide2.jpg", // Replace with your image
  },
  {
    id: 3,
    title: "Slide Three",
    description: "Inspiration meets creativity",
    image: "/images/slide3.jpg", // Replace with your image
  },
];

// Animated decorative background elements (e.g. floating circles)
const AnimatedBackground: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute bg-white rounded-full opacity-20"
        style={{ width: 200, height: 200, top: "10%", left: "20%" }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-white rounded-full opacity-20"
        style={{ width: 150, height: 150, bottom: "15%", right: "25%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-white rounded-full opacity-20"
        style={{ width: 100, height: 100, top: "50%", left: "70%" }}
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
};

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = slides.length;

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideCount]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 z-0"
      />

      {/* Animated decorative elements */}
      <AnimatedBackground />

      {/* Carousel for background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative text-center text-white px-4 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
        >
          Ideas Ahead
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 drop-shadow-md"
        >
          AV Redefined
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
        >
          Discover More
        </motion.button>
      </motion.div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-10 flex space-x-4 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
