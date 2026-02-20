"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, PhoneCall, CheckCircle2 } from "lucide-react";

// Images updated to reflect professional cleanroom/industrial environments
const slides = [
  {
    image: "blowers.jpg",
    title: "Engineering Precision",
    desc: "Leader In Centrifugal Blowers and Air Handling Equipments Since 1997 ."
  },
  {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
    title: "Climate Controlled",
    desc: "Advanced Clean Rooms, Closed Environment & Containment Specialist For Pharmaceuticals, Medical Industries & Food Processing ."
  },
  {
    image: "validation.jpeg",
    title: "Certified Safety",
    desc: "Validation services & Integrity testing."
  }
];

const productHighlights = [
  "HVAC & Air Handling Units",
  "Laminar Air Flow (LAF)",
  "Modular Operation Theatres",
  "Barrier Isolation Systems",
  "Validation & DOP Testing",
  "BMS & Power Solutions"
];

export default function FiltotechHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT: TEXT CONTENT (60%) */}
        <div className="w-full lg:w-3/5 p-8 md:p-20 flex flex-col justify-center z-10 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
              Established 1997 | Kolkata, India
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Welcome to <span className="text-blue-600 text-glow">Filtotech</span>:<br /> 
              Engineering Cleanroom Excellence.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Filtotech specializes in the turnkey design and installation of 
              <span className="font-semibold text-slate-900"> Pharmaceutical & Healthcare cleanrooms</span>. 
              From Air Handling Units to high-precision Modular Operation Theatres, 
              we deliver purity with engineering precision.
            </p>

            {/* PRODUCT GRID - Clean and Readable */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {productHighlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 group shadow-xl shadow-blue-200">
                View All Products
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-slate-200 hover:border-blue-600 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all">
                Our History
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: INTERACTIVE SLIDER (40%) */}
        <div className="w-full lg:w-2/5 relative min-h-[500px] lg:min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
              exit={{ opacity: 0, clipPath: "inset(0 100% 0 0%)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center object-contain"
                style={{ backgroundImage: `url(${slides[index].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
              </div>
              
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-2xl font-bold mb-2"
                >
                  {slides[index].title}
                </motion.p>
                <p className="text-white/80">{slides[index].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation */}
          <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            <button 
              onClick={() => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
              className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Call FAB */}
      <motion.a
        href="tel:+91XXXXXXXXXX"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
      >
        <PhoneCall size={28} />
      </motion.a>
    </section>
  );
}