import React from 'react';

// Using the reusable Header/Footer from our previous step
const PackagedACLeaflet = () => {
  const features = [
    "High Efficiency Scroll Compressor",
    "Anti-Corrosive Blue Fin Coating",
    "Intelligent Microprocessor Control",
    "Quiet Operation < 58 dB",
    "Plug-and-Play Installation"
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none">
      
      {/* 1. REUSABLE HEADER */}
      <header className="flex justify-between items-center mb-10 border-b-2 border-slate-900 pb-4">
        <div>
          <img src="footer-logo.png" alt="Filtotech" className="h-10 mb-1" />
          <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">Filtotech Air Control Systems Pvt. Ltd.</span>
        </div>
        <div className="text-right">
          <p className="text-3xl font-black text-slate-900 tracking-tighter">PAC-SERIES</p>
          <p className="text-[10px] font-bold text-slate-400">ESTD 1997 | KOLKATA</p>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-grow flex flex-col">
        
        {/* Title Block */}
        <div className="mb-12">
          <h1 className="text-7xl font-black text-slate-900 leading-[0.8] tracking-tighter mb-4">
            PACKAGED <br/> <span className="text-blue-500 italic">AIR CONDITIONER</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-lg">
            A complete self-contained cooling solution designed for commercial spaces, 
            offering unmatched reliability and rapid deployment.
          </p>
        </div>

        {/* Hero & Tech Split */}
        <div className="grid grid-cols-12 gap-0 flex-grow mb-12 border border-slate-200 rounded-[40px] overflow-hidden shadow-2xl">
          
          {/* Left: Product Visual */}
          <div className="col-span-7 bg-slate-50 flex items-center justify-center p-10 relative bg-neutral-200/10">
            <div className="absolute top-8 left-8">
              <span className="text-[100px] font-black text-slate-200/50 leading-none">5-25<br/>TR</span>
            </div>
            <img 
              src="pack-Photoroom.png" 
              alt="Packaged Air Conditioner" 
              className="w-full h-auto object-contain z-10 scale-150 drop-shadow-2xl" 
            />
          </div>

          {/* Right: Feature Matrix */}
          <div className="col-span-5 bg-slate-900 p-10 text-white flex flex-col">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-8 underline underline-offset-8">Core Advantages</h3>
            
            <ul className="space-y-6 mb-12">
              {features.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                    ✓
                  </span>
                  <span className="text-xs font-medium text-slate-300 leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto bg-blue-600 p-6 rounded-2xl">
              <p className="text-[10px] uppercase font-bold opacity-80 mb-1">Cooling Capacity</p>
              <p className="text-2xl font-black">60,000 — 300,000 BTU/h</p>
            </div>
          </div>
        </div>

        {/* Detailed Specs Grid */}
        <div className="grid grid-cols-3 gap-8">
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Refrigerant</h4>
            <p className="text-sm font-bold text-slate-800">R-410A Eco-Friendly</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Controller</h4>
            <p className="text-sm font-bold text-slate-800">LCD Touch Interface</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1">Mounting</h4>
            <p className="text-sm font-bold text-slate-800">Floor / Roof Top</p>
          </div>
        </div>
      </main>

      {/* 3. REUSABLE FOOTER */}
      <footer className="mt-12 pt-6 border-t border-slate-100 flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Engineering Tomorrow's Comfort</p>
          <p className="text-[10px] text-slate-800 font-bold">Filtotech Air Control System Pvt Ltd</p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] font-bold text-slate-300">PAGE</span>
          <span className="text-4xl font-black text-slate-200">06</span>
        </div>
      </footer>
    </div>
  );
};

export default PackagedACLeaflet;