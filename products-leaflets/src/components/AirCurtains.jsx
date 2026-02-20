import React from 'react';

const AirCurtainLeaflet = () => {
  const techSpecs = [
    { label: "Available Sizes", value: "3ft, 4ft, 5ft, 6ft & Custom" },
    { label: "Velocity", value: "18 m/s to 25 m/s" },
    { label: "Noise Level", value: "< 55 dB" },
    { label: "MOC", value: "CRCA Powder Coated / SS 304" },
    { label: "Motor", value: "Double Shaft / High Speed" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none font-sans">
      
      {/* Visual Accent: Top Flow Lines */}
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-blue-50 to-white -z-0 opacity-50"></div>

      {/* 1. Header */}
      <header className="flex justify-between items-end mb-12 relative z-10 border-b-2 border-slate-100 pb-6">
        <div>
          <img src="footer-logo.png" alt="Filtotech" className="h-10 mb-4" />
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
            ELITE SERIES <br/> <span className="text-blue-600">AIR CURTAINS</span>
          </h1>
        </div>
        <div className="text-right">
          <span className="bg-slate-900 text-white text-[10px] px-4 py-1 font-bold rounded-full uppercase tracking-widest">
            Energy Saver 2026
          </span>
          <p className="mt-2 text-slate-400 font-bold text-xs">MODEL: FT-AC-TURBO</p>
        </div>
      </header>

      {/* 2. Horizontal Hero Section */}
      <div className="relative mb-12">
        <div className="bg-slate-50 rounded-[30px] p-12 border border-slate-100 flex flex-col items-center">
          {/* Main Image - Usually horizontal */}
          <img 
            src="aircartain2-Photoroom.png" 
            alt="Industrial Air Curtain" 
            className="w-full h-48 object-contain drop-shadow-2xl mb-8 scale-200 skew-y-10" 
          />
          
          {/* Flow Indicator Graphic */}
          {/* <div className="w-full flex justify-around opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 w-[1px] bg-blue-600 animate-pulse"></div>
            ))}
          </div>
          <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mt-2">Laminar Air Shield</p> */}
        </div>
      </div>

      {/* 3. Features & Data Grid */}
      <div className="grid grid-cols-12 gap-10 items-start flex-grow">
        
        {/* Left: Value Proposition */}
        <div className="col-span-5 space-y-8">
          <div>
            <h3 className="text-xl font-black text-slate-800 mb-3 uppercase italic">The Invisible Door</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Filtotech Air Curtains create a high-velocity air stream to prevent the entry of dust, insects, and unconditioned air, maintaining your internal climate and reducing energy costs by up to 40%.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest">Applications</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Cold Storage", "Pharma Labs", "Hotels", "Malls"].map((app) => (
                <div key={app} className="bg-blue-50 text-blue-700 text-[10px] font-bold p-2 rounded text-center border border-blue-100 uppercase">
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Technical Matrix */}
        <div className="col-span-7 bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full"></div>
          
          <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-8">Technical Parameters</h4>
          
          <div className="space-y-6">
            {techSpecs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase">{spec.label}</span>
                <span className="text-xs font-black text-white">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4">
             <div className="flex-1 border border-slate-700 p-4 rounded-2xl text-center">
                <p className="text-[8px] text-slate-500 uppercase">Operation</p>
                <p className="text-xs font-bold">Remote/Door Limit</p>
             </div>
             <div className="flex-1 border border-slate-700 p-4 rounded-2xl text-center">
                <p className="text-[8px] text-slate-500 uppercase">Maintenance</p>
                <p className="text-xs font-bold">Easy Filter Access</p>
             </div>
          </div>
        </div>
      </div>

      {/* 4. Footer */}
      <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs italic">F</div>
          <div>
            <p className="text-[9px] font-black text-slate-900 uppercase leading-none">Filtotech Air Control System</p>
            <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">Precision Air Shielding Division</p>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[10px] font-bold text-slate-300">PAGE</span>
          <span className="text-4xl font-black text-slate-100">08</span>
        </div>
      </footer>
    </div>
  );
};

export default AirCurtainLeaflet;