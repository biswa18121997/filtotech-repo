import React from 'react';

const DrainTrapLeaflet = () => {
  const trapSpecs = [
    { label: "Material", value: "Transparent Acrylic / UPVC / SS" },
    { label: "Negative Pressure", value: "Up to 2500 Pa" },
    { label: "Connection", value: "32mm / 40mm / 50mm Outlet" },
    { label: "Operation", value: "Self-Priming / Mechanical" },
    { label: "Compliance", value: "HVAC Drainage Standards" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 pt-4 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none">
      
      {/* Decorative Fluid Element (Top Right) */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 -z-0 rounded-bl-full"></div>

      {/* 1. Header (Reusable Style) */}
      <header className="flex justify-between items-center mb-16 relative z-10 border-b-4 border-slate-800 pb-6">
        <div>
          <h2 className="text-blue-600 font-black tracking-widest text-xs uppercase mb-1">HVAC Accessories</h2>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
            <span className="text-blue-500">DRAIN TRAPS</span>
          </h1>
        </div>
        <div className="text-right">
          <img src="footer-logo.png" alt="Filtotech" className="h-10 ml-auto mb-2" />
          <p className="text-[10px] font-mono text-slate-400">MODEL: FT-DT-2026</p>
        </div>
      </header>

      {/* 2. Main Visual & Concept Section */}
      <div className="grid grid-cols-12 gap-10 mb-16">
        {/* Left: Product Image */}
        <div className="col-span-7 bg-slate-50 rounded-3xl p-8 flex items-center justify-center border border-slate-100 shadow-inner">
          {/* Replace with drain-trap.jpg */}
          <img 
            src="drain-tap2-Photoroom.png" 
            alt="HVAC Drain Trap" 
            className="w-full h-[380px] object-contain drop-shadow-xl" 
          />
                  <img src="drain-tap1-Photoroom.png" alt="" className='h-[150px] w-[200px]' />

        </div>

        {/* Right: Summary & Highlight */}
        <div className="col-span-5 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-slate-900 font-bold text-xl mb-4">Airtight Condensate Management</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Designed specifically for Air Handling Units (AHUs), our drain traps prevent air bypass and eliminate foul odors while ensuring smooth condensate discharge even under high negative pressure.
            </p>
          </div>
          
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <p className="text-[10px] font-bold uppercase opacity-80 mb-2">Key Advantage</p>
            <p className="text-lg font-bold leading-tight italic">"Prevents AHU air leakage, increasing system efficiency by up to 15%."</p>
          </div>
        </div>
      </div>

      {/* 3. Technical Specs & Features Grid */}
      <div className="grid grid-cols-12 gap-8 flex-grow">
        {/* Features Checklist */}
        <div className="col-span-6">
          <h4 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-widest underline decoration-blue-500 underline-offset-8">Standard Features</h4>
          <ul className="space-y-4">
            {[
              "Transparent body for easy blockage inspection",
              "Self-cleaning smooth internal bore",
              "Removable cap for easy maintenance",
              "UV resistant high-impact construction",
              "Compact footprint for tight plenum spaces"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Data Table */}
        <div className="col-span-6 bg-slate-900 rounded-3xl p-8 text-white">
          <h4 className="text-[10px] font-bold uppercase text-blue-400 mb-6 tracking-[0.2em]">Engineering Specification<hr /></h4>
          <div className="space-y-4">
            {trapSpecs.map((spec, i) => (
              <div key={i} className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-[11px] text-slate-400 uppercase tracking-tighter">{spec.label}</span>
                <span className="text-[11px] font-bold text-white uppercase">{spec.value}</span>
              </div>
            ))}
          </div>
          
          {/* Schematic Placeholder */}
          {/* <div className="mt-8 pt-8 border-t border-slate-700">
             <div className="h-20 border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center text-[10px] text-slate-500 font-mono">
               [ DIMENSIONAL SCHEMATIC DRAWING ]
             </div>
          </div> */}
        </div>
      </div>

      {/* 4. Footer */}
      <footer className="mt-12 pt-6 border-t border-slate-100 flex justify-between items-end">
        <div className="text-[9px] text-slate-400 leading-tight">
          <p className="font-bold text-slate-900">FILTOTECH AIR CONTROL SYSTEM PVT LTD</p>
          <p>ISO 9001:2015 CERTIFIED | MADE IN INDIA</p>
        </div>
        <div className="text-right">
          <span className="text-4xl font-black text-slate-100">07</span>
        </div>
      </footer>
    </div>
  );
};

export default DrainTrapLeaflet;