"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// Sample client data based on your Pharmaceutical & Healthcare focus
const clients = [
  { name: "Dey's Medical", logo: "deysmedicallogo.png" }, 
  { name: "Cradel Pharmaceuticals", logo: "cradelpharma.png" },
  { name: "Rotomotive", logo: "Rotomotive_LOGO_01.png" },
  { name: "Anmol Industries", logo: "anmol.jpg" },
  { name: "Dr. Reddy's", logo: "cradelpharma.png" },
  { name: "Biocon", logo: "cradelpharma.png" },
  // Duplicate the list to create a seamless infinite loop
];

const tickerVariants = {
  animate: {
    x: [0, -1035], // Adjust this value based on your total content width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Lower is faster
        ease: "linear",
      },
    },
  },
};

export default function ClientTicker() {
  // We double the array to ensure the tail of the first loop matches the head of the second
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-slate-400 font-semibold uppercase tracking-[0.2em] text-sm">
          Trusted by Industry Leaders in Pharma & Healthcare
        </h3>
        <h1 className="text-xl text-red-800 font-extrabold">
            Our Partners, Associates & Clients
        </h1>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Faded edges for a professional look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-12 items-center"
          variants={tickerVariants}
          animate="animate"
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer px-4"
            >
              {/* Replace the 'logo' text with an <img> tag for your actual SVGs/PNGs */}
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden">
      {/* Logical Check: If it ends in a common image extension, use <img> */}
      {client.logo.includes('.') ? (
        <Image
          width={50}
          height={50}
          src={`/${client.logo}`} 
          alt={client.name} 
          className="w-full h-full object-contain p-2" 
        />
      ) : (
        <span className="text-2xl">{client.logo}</span>
      )}
    </div>
              <span className="text-xl font-bold text-slate-700 tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}