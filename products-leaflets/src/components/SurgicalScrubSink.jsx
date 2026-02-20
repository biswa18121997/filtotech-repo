import React from 'react';

const SurgicalScrubLeaflet = () => {
  const specs = [
    { label: "Operation", value: "Fully Hands-Free (Sensor/Knee)" },
    { label: "Material", value: "Anti-Bacterial SS 304 / 316L" },
    { label: "Water Control", value: "Thermostatic Mixing Valve" },
    { label: "Dispenser", value: "Integrated Automatic Soap/Betadine" },
    { label: "Filter", value: "Built-in 0.2 Micron Water Filter" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-slate-950 mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden text-white">
      
      {/* 1. NEON ACCENT ELEMENTS */}
      <div className="absolute top-0 right-0 w-64 h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
      <div className="absolute top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* 2. HEADER SECTION */}
      <header className="flex justify-between items-start mb-16 relative z-10">
        <div>
          <p className="text-cyan-400 font-black tracking-[0.4em] text-[10px] uppercase mb-2">Hospitality & OT Series</p>
          <h1 className="text-6xl font-black tracking-tighter leading-none italic">
            SURGICAL <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              SCRUB SINKS
            </span>
          </h1>
        </div>
        <div className="text-right flex flex-col items-end">
          <img src="footer-logo.png" alt="Filtotech" className="h-10 brightness-0 invert mb-4" />
          <span className="border border-slate-700 px-4 py-1 rounded-full text-[9px] font-bold text-slate-400 tracking-widest uppercase">
            Model: FT-MED-2026
          </span>
        </div>
      </header>

      {/* 3. HERO DISPLAY */}
      <div className="grid grid-cols-12 gap-10 mb-12 relative z-10">
        <div className="col-span-8 relative">
          {/* Main Visual Frame */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-12 backdrop-blur-sm shadow-2xl">
            <img 
              src="sink.jpeg" 
              alt="Surgical Scrub Sink" 
              className="w-full h-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            />
          </div>
          {/* Neon Callout Badge */}
          <div className="absolute -bottom-6 -right-6 bg-cyan-500 text-slate-950 px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(34,211,238,0.4)]">
            <p className="text-[10px] font-black uppercase tracking-widest leading-none">Hygiene Standard</p>
            <p className="text-2xl font-black italic">ZERO TOUCH</p>
          </div>
        </div>

        {/* Side Text */}
        <div className="col-span-4 flex flex-col justify-end gap-8">
          <div className="border-l-2 border-cyan-400 pl-6">
            <h3 className="text-xl font-bold mb-2">Aseptic Precision</h3>
            <p className="text-slate-400 text-xs leading-relaxed italic">
              Engineered for the modern Operating Theatre. Eliminates cross-contamination through fully automated sensor-driven water and soap dispensing.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
             <p className="text-cyan-400 text-[10px] font-black uppercase mb-4">Configurations</p>
             <ul className="text-[11px] space-y-2 font-bold text-slate-300">
                <li className="flex justify-between"><span>Single Bay</span> <span className="text-white">750mm</span></li>
                <li className="flex justify-between"><span>Double Bay</span> <span className="text-white">1500mm</span></li>
                <li className="flex justify-between"><span>Triple Bay</span> <span className="text-white">2100mm</span></li>
             </ul>
          </div>
        </div>
      </div>

      {/* 4. TECHNICAL MATRIX GRID */}
      <div className="flex-grow">
        <h4 className="text-center text-[10px] font-black tracking-[0.5em] text-slate-500 uppercase mb-8">System Engineering Data</h4>
        <div className="grid grid-cols-5 gap-4">
          {specs.map((spec, i) => (
            <div key={i} className="bg-slate-900/30 border border-slate-800 p-6 rounded-3xl text-center flex flex-col justify-center min-h-[120px]">
              <p className="text-[9px] font-bold text-cyan-500 uppercase mb-2">{spec.label}</p>
              <p className="text-[11px] font-black text-white leading-tight uppercase tracking-tight">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="mt-12 pt-8 border-t border-slate-800/50 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="h-10 w-1 bg-cyan-500"></div>
          <div>
            <p className="text-[10px] font-black text-white tracking-widest">FILTOTECH MEDICAL SOLUTIONS</p>
            <p className="text-[9px] text-slate-500 uppercase">Hospital & Healthcare Infrastructure</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-500 mb-1">PAGE</p>
          <p className="text-5xl font-black text-slate-800 tracking-tighter leading-none">11</p>
        </div>
      </footer>
    </div>
  );
};

export default SurgicalScrubLeaflet;