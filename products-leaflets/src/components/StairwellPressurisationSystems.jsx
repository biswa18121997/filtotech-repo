import React from 'react';

const StairwellPressurisationLeaflet = () => {
  const safetySpecs = [
    { label: "Compliance", value: "NFPA 92 / EN 12101-6" },
    { label: "Sensor Tech", value: "Differential Pressure (DP)" },
    { label: "Reaction Time", value: "< 3 Seconds (Variable)" },
    { label: "Controller", value: "PLC with VFD Integration" },
    { label: "Fire Link", value: "BMS / Fire Alarm System" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-slate-50 mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden">
      
      {/* 1. HIGH-VISIBILITY ACCENT */}
      <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 shadow-[2px_0_15px_rgba(249,115,22,0.3)]"></div>

      {/* 2. DYNAMIC HEADER SECTION */}
      <header className="flex justify-between items-start mb-16 relative z-10 pl-6">
        <div className="flex flex-col">
          <img src="footer-logo.png" alt="Filtotech" className="h-10 mb-6 object-contain self-start" />
          <p className="text-orange-500 font-black tracking-[0.5em] text-[10px] uppercase mb-2">Life Safety & Smoke Control</p>
          <h1 className="text-6xl font-black text-slate-900 leading-[0.85] tracking-tighter">
            STAIRWELL <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              PRESSURISATION
            </span>
          </h1>
        </div>
        <div className="text-right">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl mb-4 shadow-xl">
             <p className="text-[10px] font-bold tracking-widest uppercase">Series: AeroGuard</p>
          </div>
          <p className="text-[80px] font-black text-slate-100 leading-none absolute -top-4 right-10 -z-10 select-none">FIRE</p>
        </div>
      </header>

      {/* 3. HERO SECTION (THE CORE SYSTEM) */}
      <div className="grid grid-cols-12 gap-10 mb-12 relative z-10 pl-6">
        
        {/* Left: Industrial Visual with 'Pressure' Glow */}
        <div className="col-span-7">
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-500/5 rounded-[40px] blur-xl"></div>
            <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl relative overflow-hidden">
               {/* Vertical Flow Indicators */}
               <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-12 bg-orange-500 rounded-full animate-pulse"></div>
                  ))}
               </div>
               
               <img 
                 src="stairwell.webp" 
                 alt="Stairwell Pressurisation Fan" 
                 className="w-full h-[400px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]" 
               />
            </div>
          </div>
        </div>

        {/* Right: The Safety Mission */}
        <div className="col-span-5 flex flex-col justify-center">
          <h3 className="text-2xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 inline-block pb-2">
            Secure the Escape.
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-10">
            Filtotech’s AeroGuard systems create a positive pressure barrier in building stairwells, preventing smoke infiltration during a fire. This ensures a clear, breathable escape route for occupants and a safe entry point for firefighters.
          </p>
          
          <div className="space-y-4">
             <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full -mr-12 -mt-12"></div>
                <p className="text-[10px] font-bold text-orange-400 uppercase mb-2 tracking-widest">Variable Pressure Control</p>
                <p className="text-sm font-medium leading-tight">Automated VFD modulation maintains 50Pa pressure even with doors open.</p>
             </div>
          </div>
        </div>
      </div>

      {/* 4. TECHNICAL DATA MATRIX */}
      <div className="flex-grow pl-6 pr-6">
        <div className="grid grid-cols-5 gap-4">
          {safetySpecs.map((spec, i) => (
            <div key={i} className="border-t-2 border-slate-200 pt-4 group hover:border-orange-500 transition-colors duration-500">
              <p className="text-[9px] font-black text-slate-400 uppercase mb-2 group-hover:text-orange-600">{spec.label}</p>
              <p className="text-xs font-black text-slate-800 leading-tight uppercase tracking-tight">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-end pl-6">
        <div className="flex gap-12">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Certification</span>
            <span className="text-[10px] font-bold text-slate-700">UL / AMCA / CE Listed</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Service</span>
            <span className="text-[10px] font-bold text-slate-700">24/7 Fire-Safety Support</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
             <p className="text-[10px] font-black text-slate-900 uppercase">FILTOTECH AIR CONTROL SYSTEM</p>
             <p className="text-[9px] font-bold text-orange-500 uppercase tracking-tighter">Life Safety Division // 2026</p>
          </div>
          <span className="text-6xl font-black text-slate-100 leading-none">14</span>
        </div>
      </footer>
    </div>
  );
};

export default StairwellPressurisationLeaflet;