"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Cpu, Microscope } from 'lucide-react'; // Optional icons

const LeadershipVision = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const leaders = [
    {
      name: "Rajesh",
      role: "Chief Operations Executive",
      image: "/ceo-portrait.jpg", // Add your actual image paths
      message: "At Filtotech, our engineering precision in HVAC and AHU systems is more than a service—it’s a commitment to the safety of the global pharmaceutical supply chain."
    },
    {
      name: "Mr. Pradyut Ghosh",
      role: "Managing Director",
      image: "/md-portrait.jpg",
      message: "From turnkey clean rooms to advanced BMS monitoring, our philosophy is rooted in technical excellence and zero-compromise validation."
    }
  ];

  return (
    <section className="relative bg-slate-50 py-24 px-6 md:px-12 overflow-hidden">
      {/* Subtle Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 1v58h58V1H1z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Section 1: Core Values (Pharma/Engineering Focused) --- */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-blue-600 font-bold tracking-tighter uppercase text-sm flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-blue-600"></span> Technical Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">
              Precision Engineering for <span className="font-bold text-blue-700">Critical Environments.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-lg border border-slate-200">
                  <ShieldCheck className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Our Mission</h4>
                  <p className="text-slate-600 leading-relaxed">To engineer world-class HVAC and Air Handling solutions that exceed FDA and ISO validation standards for Pharma and Medical industries.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-lg border border-slate-200">
                  <Microscope className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Our Philosophy</h4>
                  <p className="text-slate-600 leading-relaxed">Integration of smart Building Management Systems (BMS) with robust hardware to ensure 100% uptime and environmental stability.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Abstract Engineering Graphic or Product Shot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            <Image 
              src="/images/all-service/clean.jpeg" // From your sitemap
              alt="Clean Room Engineering"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-xl">
              <p className="text-xs font-bold text-blue-700 uppercase">ISO Class Certified</p>
              <p className="text-sm text-slate-800">Turnkey Clean Room Solutions</p>
            </div>
          </motion.div>
        </div>

        {/* --- Section 2: Executive Leadership --- */}
        <div className="border-t border-slate-200 pt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900">Leadership Excellence</h3>
            <p className="text-slate-500 mt-2">Driven by decades of engineering expertise</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {leaders.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                  <div className="relative w-40 h-40 lg:w-48 lg:h-56 flex-shrink-0 overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <span className="absolute -top-6 -left-4 text-6xl text-blue-100 font-serif">“</span>
                      <p className="text-slate-700 text-lg leading-relaxed italic relative z-10">
                        {leader.message}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
                      <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{leader.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipVision;