"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "clean-room2-10_02_2026.jpeg",
    title: "Innovate Your Vision",
    subtitle: "We Beleive in Optimal Delivery and Utmost Precision. ",
  },
  {
    id: 2,
    image: "clean-room1-10_02_2026.jpeg",
    title: "Design with Purpose",
    subtitle: "Our Primary Concern is Our Service to Our Customers. ",
  },
  {
    id: 3,
    image: "sink2.jpeg",
    title: "Leaders In Closed Environment & Containments",
    subtitle: "Our Responsibility is Satisfaction to Our Customers. ",
  },
  {
    id: 4,
    image: `image8.jpeg`,
    title: "We Engineer The Path , Air Travels",
    subtitle: "We Pricesely Engineer, So Our Clients Can Build with Absolute Confidence..",
  },
  {
    id: 5,
    image: `image7.jpeg`,
    title: "The Standard of Absolute Isolation",
    subtitle: "Engineering world-class containment systems where failure isn't an option and precision is a requirement.",
  },
  {
    id: 6,
    image: `image6.jpeg`,
    title: "Global Reach",
    subtitle: "Where absolute containment meets total control.",
  },
  // Add 2 more images here
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  // Auto-play the slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
          />
          
          {/* Dark Overlay for professional text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            >
              {slides[index].title}
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl"
            >
              {slides[index].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === index ? "w-12 bg-white" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}