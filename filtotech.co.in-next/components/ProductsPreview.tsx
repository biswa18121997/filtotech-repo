"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, ShieldCheck, Fan, Thermometer, Wind, Settings } from "lucide-react";

const items = [
  {
    title: "Industrial HVAC",
    desc: "Custom cooling & ventilation for pharmaceutical plants.",
    icon: <Thermometer className="w-6 h-6" />,
    image: "https://filtotech.co.in/images/all-service/s3.jpeg",
  },
  {
    title: "Clean Room Design",
    desc: "Turnkey sterile environments & particle control.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "https://filtotech.co.in/images/all-service/clean.jpeg",
  },
  {
    title: "Air Handling Units",
    desc: "Single & Double Skin AHUs with high-efficiency filtration.",
    icon: <Fan className="w-6 h-6" />,
    image: "https://filtotech.co.in/images/10-02-2026/IMG_1134.JPG.jpeg",
  },
  {
    title: "Electrical Panels",
    desc: "Power solutions and control panels for industrial plants.",
    icon: <Zap className="w-6 h-6" />,
    image: "https://filtotech.co.in/images/10-02-2026/IMG_1135.JPG.jpeg",
  },
  {
    title: "Laminar Air Flow",
    desc: "Vertical & Horizontal units for sterile work zones.",
    icon: <Wind className="w-6 h-6" />,
    image: "https://filtotech.co.in/images/filto-product/Laminar-Flow1.jpeg",
  },
  {
    title: "BMS & EMS Systems",
    desc: "Automated Environmental Monitoring and control and Building Management System.",
    icon: <Settings className="w-6 h-6" />,
    image: "https://filtotech.co.in/images/filto-product/bred2.jpeg",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              Engineering Excellence
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Precision-engineered solutions for high-stakes industrial environments.
            </p>
          </div>
          <button className="hidden md:block text-blue-500 font-medium hover:underline">
            View All Products
          </button>
          <button className="hidden md:block text-blue-500 font-medium hover:underline">
            View All Services & Solutions
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-2xl bg-zinc-900"
            >
              {/* Image Background with zoom effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                   <div className="p-2 bg-blue-600/20 backdrop-blur-md rounded-lg text-blue-400 mb-4 border border-blue-500/30">
                     {item.icon}
                   </div>
                   <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="p-2 bg-white/10 rounded-full text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                   >
                     <ArrowUpRight size={20} />
                   </motion.div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                
                <motion.p 
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: "auto", opacity: 1 }}
                  className="text-gray-400 text-sm overflow-hidden"
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}