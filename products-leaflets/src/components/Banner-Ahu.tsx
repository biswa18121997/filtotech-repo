import React from 'react';
import { 
  Wind, 
  ShieldCheck, 
  Settings, 
  Clock, 
  CheckCircle2, 
  Microscope,
  Zap,
  PhoneCall
} from 'lucide-react';

const FiltotechPrintBanner = () => {
  return (
    <div className="w-[1200px] min-h-[600px] bg-white text-slate-800 font-sans p-0 m-0 border border-slate-200 overflow-hidden flex flex-col">
      
      {/* Top Accent Bar */}
      <div className="h-3 bg-gradient-to-r from-blue-700 via-blue-500 to-gray-400 w-full" />

      <div className="flex flex-row flex-1">
        
        {/* LEFT COLUMN: Branding & Main Specs */}
        <div className="w-7/12 p-12 flex flex-col justify-between border-r border-gray-100">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-0 ">
                <img src="footer-logo.png" className="text-white h-15 w-15" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-blue-900">FILTOTECH AIR CONTROL SYSTEM </span>
            </div>
            
            <h1 className="text-6xl font-black text-slate-900 leading-tight mb-4">
              AIR HANDLING <br />
              <span className="text-blue-600">UNITS</span>
            </h1>
            
            <p className="text-xl text-slate-500 font-medium mb-8 max-w-md">
              Precision-engineered air control systems designed for industrial excellence and clinical purity.
            </p>

            {/* Core Specifications Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <SpecItem icon={<Zap size={18} />} label="High Energy Efficiency" />
              <SpecItem icon={<ShieldCheck size={18} />} label="Anti-Corrosive Build" />
              <SpecItem icon={<Settings size={18} />} label="Modular Configuration" />
              <SpecItem icon={<Microscope size={18} />} label="HEPA-Grade Filtration" />
            </div>
          </div>

          {/* Trust Footer (Replaces Buttons) */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex justify-between items-center">
            <TrustPoint icon={<Clock size={20} />} text="24x7 Support" />
            <div className="w-px h-10 bg-gray-300" />
            <TrustPoint icon={<CheckCircle2 size={20} />} text="Quality Assurance" />
            <div className="w-px h-10 bg-gray-300" />
            <TrustPoint icon={<Settings size={20} />} text="Custom Solutions" />
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Showcase */}
        <div className="w-5/12 bg-slate-100 relative p-8 flex flex-col justify-center items-center">
          {/* Main Image Placeholder */}
          <div className="w-full aspect-square bg-white rounded-3xl shadow-2xl border border-white flex items-center justify-center overflow-hidden relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
            <img 
              src="air2-Photoroom.png" 
              alt="AHU Unit Main View" 
              className="object-contain p-8"
            />
            <div className="absolute bottom-4 left-4 bg-blue-900 text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">
              Primary Model
            </div>
          </div>

          {/* Secondary Image Thumbs */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="aspect-video bg-white rounded-xl shadow-md border border-white overflow-hidden">
               <img src="AHU-exterior.jpeg" alt="Internal View" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-video bg-white rounded-xl shadow-md border border-white overflow-hidden">
               <img src="AHU-Internal2.jpeg" alt="Control System" className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Contact Details for Print */}
          <div className="mt-8 text-center">
            <div className="flex items-center gap-2 text-slate-600 font-bold mb-1">
              <PhoneCall size={16} /> <span>FOR INQUIRIES</span>
            </div>
            <p className="text-blue-900 font-black text-2xl tracking-tighter">WWW.FILTOTECH.CO.IN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components for cleaner code
const SpecItem = ({ icon, label }) => (
  <div className="flex items-center gap-3">
    <div className="text-blue-600 bg-blue-50 p-1.5 rounded-md leading-none">
      {icon}
    </div>
    <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{label}</span>
  </div>
);

const TrustPoint = ({ icon, text }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="text-blue-700 mb-1">{icon}</div>
    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none">Global Standard</span>
    <span className="text-sm font-bold text-slate-800">{text}</span>
  </div>
);

export default FiltotechPrintBanner;