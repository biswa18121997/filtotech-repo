"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, Award, Globe } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Global Clients", value: "120+" },
];

const values = [
  {
    title: "Precision Engineering",
    desc: "Adhering to global ISO and ASHRAE standards for cleanroom environments.",
    icon: <Factory className="text-blue-500" size={24} />,
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous validation and testing for every AHU and HVAC system we manufacture.",
    icon: <Award className="text-blue-500" size={24} />,
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden md:mt-15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image & Stats Card */}
          <div className="relative w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://filtotech.co.in/images/all-service/s3.jpeg" 
                alt="Filtotech Manufacturing Plant" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-0 md:right-10 z-20 bg-blue-600 p-8 rounded-xl shadow-xl text-white grid grid-cols-2 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-blue-100 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            
            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">
                Since 1997
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Pioneering Excellence in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Cleanroom Solutions
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Filtotech is a premier manufacturer specializing in high-performance HVAC systems and controlled environments. We bridge the gap between complex engineering and reliable execution for the food processing, pharmaceutical, medical and biotech industries.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {values.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h5 className="font-bold text-slate-900">{item.title}</h5>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-slate-800 transition-all"
            >
              Learn More About Our Journey
              <CheckCircle2 size={18} className="text-blue-400" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}