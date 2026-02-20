"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, FileText, Wind, ShieldCheck, 
  Settings, Zap, Droplets, Thermometer, Box 
} from "lucide-react";

const fullCatalog = [
  {
    id: "air-management",
    name: "Air Handling & HVAC Solutions",
    icon: <Wind className="text-blue-500" />,
    products: [
      {
        name: "Air Handling Units (AHU)",
        subtypes: ["Double Skin", "Single Skin", "Hygienic Units"],
        specs: { "Standard": "ASHRAE/EUROVENT", "Frame": "Thermal Break Aluminum", "Filter": "HEPA/EU-9" },
        image: "https://filtotech.co.in/images/10-02-2026/IMG_1134.JPG.jpeg"
      },
      {
        name: "Packaged Air Conditioners",
        subtypes: ["Air Cooled", "Water Cooled"],
        specs: { "Compressor": "Scroll/Reciprocating", "Control": "Microprocessor", "Safety": "HP/LP Cutout" },
        image: "https://filtotech.co.in/images/filto-product/pack.jpeg"
      },
      {
        name: "Dehumidifiers",
        subtypes: ["Desiccant", "Refrigerant"],
        specs: { "Application": "Pharma/Food", "Moisture Control": "Precision RH%", "Type": "Rotary/Fixed" },
        image: "https://filtotech.co.in/images/filto-product/deumidifier.webp"
      }
    ]
  },
  {
    id: "cleanroom-equipment",
    name: "Cleanroom Equipment & Barrier Systems",
    icon: <ShieldCheck className="text-blue-500" />,
    products: [
      {
        name: "Laminar Air Flow (LAF)",
        subtypes: ["Vertical Flow", "Horizontal Flow"],
        specs: { "Class": "100 (ISO 5)", "MOC": "SS 304 / 316", "Motor": "Static Balanced" },
        image: "https://filtotech.co.in/images/filto-product/Laminar-Flow1.jpeg"
      },
      {
        name: "Pass Boxes",
        subtypes: ["Static", "Dynamic", "Chemical"],
        specs: { "Interlocking": "Electromagnetic", "Lighting": "UV/Visible", "Validation": "DOP Testable" },
        image: "https://filtotech.co.in/images/10-02-2026/IMG_1139.JPG.jpeg"
      },
      {
        name: "Barrier Isolation Systems",
        subtypes: ["Aseptic Isolators", "Containment Systems"],
        specs: { "Pressure": "Positive/Negative", "Leakage": "Class 1 (ISO 10648)", "Gloves": "Hypalon/Neoprene" },
        image: "https://filtotech.co.in/images/all-service/AS.jpeg"
      }
    ]
  },
  {
    id: "ventilation",
    name: "Industrial Ventilation & Fans",
    icon: <Settings className="text-blue-500" />,
    products: [
      {
        name: "Centrifugal Fans",
        subtypes: ["Forward/Backward Curved", "Aerofoil", "Radial Blades"],
        specs: { "Drive": "Direct/V-Belt", "Static Pressure": "Up to 500mm WG", "Efficiency": "High" },
        image: "https://filtotech.co.in/images/filto-product/airdis2.jpeg"
      },
      {
        name: "Axial Flow Fans",
        subtypes: ["Propeller", "Tubeaxial", "Vaneaxial"],
        specs: { "Usage": "Exhaust/Supply", "Blade Material": "Alum/Fiber/Steel", "Temp": "High Temp Versions" },
        image: "https://filtotech.co.in/images/filto-product/axial.jpeg"
      },
      {
        name: "Air Curtains",
        subtypes: ["Industrial", "Insect Control"],
        specs: { "Protection": "Dust/Insect/Temp", "Velocity": "15-20 m/s", "Operation": "Auto/Manual" },
        image: "https://filtotech.co.in/images/filto-product/aircartain2.jpeg"
      }
    ]
  },
  {
    id: "support-systems",
    name: "Utility & Environmental Support",
    icon: <Zap className="text-blue-500" />,
    products: [
      {
        name: "BMS & EMS",
        subtypes: ["Control Panels", "Monitoring Sensors"],
        specs: { "Protocol": "BACnet/Modbus", "Software": "21 CFR Part 11 Compliance", "Parameters": "Temp/RH/DP" },
        image: "https://filtotech.co.in/images/filto-product/bred2.jpeg"
      },
      {
        name: "Dust Collectors & Scrubbers",
        subtypes: ["Pulse Jet", "Wet Scrubber"],
        specs: { "Cleaning": "Automatic Pulse", "MOC": "MS/SS/PP", "Filter": "Polyester Needle Felt" },
        image: "https://filtotech.co.in/images/filto-product/dust2.jpeg"
      },
      {
        name: "Process Piping",
        subtypes: ["High Purity Piping", "Clean Room Utility"],
        specs: { "Welding": "Orbital TIG", "Material": "SS 316L EP", "Testing": "Hydro/Borescope" },
        image: "https://filtotech.co.in/images/all-service/PIPE.jpeg"
      }
    ]
  },
  {
    id: "sterile-furniture",
    name: "Sterile Furniture & Hygiene",
    icon: <Box className="text-blue-500" />,
    products: [
      {
        name: "Clean Room Furniture",
        subtypes: ["Cross Over Benches", "Tables", "Lockers"],
        specs: { "MOC": "SS 304 Hairline Finish", "Corners": "Coved/Fully Welded", "Design": "Ergonomic" },
        image: "https://filtotech.co.in/images/filto-product/im2.jpeg"
      },
      {
        name: "Surgical Scrub Sinks",
        subtypes: ["1-Bay", "2-Bay", "Automatic"],
        specs: { "Operation": "Infrared Sensor", "Water": "Mixing Valve Controlled", "Mounting": "Wall/Floor" },
        image: "https://filtotech.co.in/images/filto-product/sink.jpeg"
      },
      {
        name: "Hygienic Drain Traps",
        subtypes: ["SS 304", "SS 316"],
        specs: { "Design": "Anti-Bacterial", "Access": "Removable Sieve", "Finish": "Mirror/Satin" },
        image: "https://filtotech.co.in/images/filto-product/drain-tap2.jpeg"
      }
    ]
  }
];

export default function ProductCatalog() {
  const [activeId, setActiveId] = useState("air-management");

  return (
    <div className="min-h-screen bg-[#fcfcfc] py-20 px-4 md:px-10 md:mt-25">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation - Professional Catalog Style */}
          <div className="lg:col-span-1 space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Product Divisions</h2>
            {fullCatalog.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-4 rounded-lg transition-all text-left font-semibold ${
                  activeId === cat.id 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.icon}
                <span className="text-sm">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Detailed Content View */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                {fullCatalog.find(c => c.id === activeId)?.products.map((prod, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-slate-100 h-64 md:h-auto overflow-hidden">
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-slate-900">{prod.name}</h3>
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-tighter">Filtotech Engineering</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {prod.subtypes.map(s => (
                          <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded border border-blue-100">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl">
                        {Object.entries(prod.specs).map(([label, value]) => (
                          <div key={label}>
                            <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">{label}</p>
                            <p className="text-sm font-semibold text-slate-800">{value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 flex gap-4">
                         <button className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                           Technical Drawings
                         </button>
                         <button className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                           DOP Validation
                         </button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}