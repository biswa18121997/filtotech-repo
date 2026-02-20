import React from 'react';

const DustCollectorLeaflet = () => {
  const specs = [
    { label: "Blower Type", value: "High Static Centrifugal" },
    { label: "Filter Type", value: "Polyester Needle Felt / PTFE" },
    { label: "Cleaning", value: "Pulse Jet / Mechanical Shaking" },
    { label: "Efficiency", value: "99.9% up to 1 Micron" },
    { label: "Capacity", value: "500 CFM to 25,000 CFM" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-slate-50 mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden">
      
      {/* 1. INDUSTRIAL ACCENT - SIDE BAR */}
      <div className="absolute top-0 right-0 w-3 h-full bg-orange-500"></div>
      <div className="absolute top-0 right-3 w-1 h-full bg-slate-900 opacity-10"></div>

      {/* 2. HEADER SECTION */}
      <header className="flex justify-between items-start mb-16 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
             <img src="footer-logo.png" alt="Filtotech" className="h-8" />
             <div className="h-6 w-[2px] bg-slate-300"></div>
             <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">FILTOTECH Air Control System Pvt. Ltd.</span>
          </div>
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter leading-[0.8]">
            DUST <br/> 
            <span className="text-orange-500">COLLECTORS</span>
          </h1>
        </div>
        <div className="text-right">
          <p className="text-sm font-mono font-black text-slate-800">SERIES: VORTEX-2026</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Heavy Duty Filtration</p>
        </div>
      </header>

      {/* 3. HERO & PERFORMANCE BLOCK */}
      <div className="grid grid-cols-12 gap-8 mb-12 relative z-10">
        
        {/* Left: Product Image with Technical Overlay */}
        <div className="col-span-7 relative group">
          <div className="bg-white rounded-[2rem] p-10 shadow-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden">
             {/* Decorative Suction Pattern */}
             <div className="absolute top-0 right-0 p-4">
                <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => (
                     <div key={i} className="w-1 h-8 bg-orange-500/20 rounded-full"></div>
                   ))}
                </div>
             </div>
             
             <img 
               src="Dust-collector1.jpg" 
               alt="Industrial Dust Collector" 
               className="w-full h-[fit] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" 
             />
             <img 
               src="dust2-Photoroom.png" 
               alt="Industrial Dust Collector" 
               className="w-full h-[fit] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" 
             />
          </div>
          
          
          {/* Floating Data Badge */}
          <div className="absolute -bottom-6 left-10 bg-slate-900 text-white p-6 rounded-2xl shadow-xl border-b-4 border-orange-500">
             <p className="text-[10px] font-bold text-orange-400 uppercase mb-1">Filtration Grade</p>
             <p className="text-xl font-black italic">EU-12 / HEPA</p>
          </div>
        </div>

        {/* Right: Technical Narrative */}
        <div className="col-span-5 flex flex-col justify-center gap-8">
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">Eliminate airborne <br/> contaminants instantly.</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Our high-static pulse jet dust collectors are engineered for 24/7 industrial operation. Featuring aerodynamic intake and a modular hopper design for easy waste disposal.
            </p>
          </div>

          <div className="space-y-4">
             <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-[10px] font-black text-orange-600 uppercase mb-1">Cleaning Mechanism</p>
                <p className="text-sm font-bold text-slate-800 uppercase">Automatic Pulse Jet</p>
             </div>
             <div className="bg-slate-100 p-4 rounded-xl">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">MOC</p>
                <p className="text-sm font-bold text-slate-800 uppercase">Heavy Gauge MS / SS 304</p>
             </div>
          </div>
        </div>
      </div>

      {/* 4. SPECIFICATION GRID */}
      <div className="flex-grow">
        <div className="grid grid-cols-5 gap-0 border-2 border-slate-900 rounded-3xl overflow-hidden">
          {specs.map((spec, i) => (
            <div key={i} className={`p-6 text-center ${i !== 4 ? 'border-r-2 border-slate-900' : ''}`}>
              <p className="text-[9px] font-black text-slate-400 uppercase mb-2">{spec.label}</p>
              <p className="text-[11px] font-bold text-slate-900 leading-tight uppercase">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center">
        <div className="flex gap-10">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-400 uppercase">Applications</span>
            <span className="text-[10px] font-bold text-slate-800">Wood, Metal, Pharma, Powder</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-400 uppercase">Support</span>
            <span className="text-[10px] font-bold text-slate-800">AMC & Spares Available</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
             <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Filtotech Air Control System</p>
             <p className="text-[9px] font-medium text-slate-400">Precision Industrial Ventilation</p>
          </div>
          <span className="text-5xl font-black text-slate-200">12</span>
        </div>
      </footer>
    </div>
  );
};

export default DustCollectorLeaflet;