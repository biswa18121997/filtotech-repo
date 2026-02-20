import React from 'react';

const LaminarFlowLeaflet = () => {
  const lafSpecs = [
    { label: "Cleanliness Class", value: "ISO Class 5 / Class 100" },
    { label: "HEPA Filter", value: "H14 Efficiency 99.999%" },
    { label: "Air Velocity", value: "0.45 m/s ± 20%" },
    { label: "Illumination", value: "> 800 Lux (Shadowless)" },
    { label: "Noise Level", value: "< 60 decibels" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden">
      
      {/* Background Tech-Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* 1. Clinical Header */}
      <header className="flex justify-between items-start mb-16 relative z-10 border-b border-slate-100 pb-8">
        <div>
         <span className='flex justify-center items-center'> <img src="footer-logo.png" alt="Filtotech" className="h-10 mb-4" />FILTOTECH AIR CONTROL SYSTEMS PVT. LTD.</span>
          <h1 className="text-6xl font-light text-slate-900 tracking-tighter leading-none">
            LAMINAR <br/> <span className="font-black text-cyan-600">FLOW UNITS</span>
          </h1>
        </div>
        <div className="text-right">
          <div className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block border border-cyan-100">
            NABH & WHO-GMP Compliant
          </div>
          <p className="text-xs font-mono text-slate-400">SERIES: STERILE-X 2026</p>
        </div>
      </header>

      {/* 2. Main Product Showcase */}
      <div className="grid grid-cols-12 gap-10 mb-16 relative z-10">
        
        {/* Left: Product Image with Floating Stats */}
        <div className="col-span-7 relative">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-[40px] p-2 border border-slate-100 shadow-xl overflow-hidden">
            <img 
              src="Laminar-Flow1.jpeg" 
              alt="Laminar Air Flow Bench" 
              className="w-auto h-auto object-contain drop-shadow-2xl" 
            />
          </div>
          {/* Floating Feature Badges */}
          {/* <div className="absolute top-6 -right-4 bg-white shadow-lg p-4 rounded-2xl border-l-4 border-cyan-500">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Filtration</p>
            <p className="text-sm font-black text-slate-800 italic">H14 HEPA</p>
          </div> */}
        </div>

        {/* Right: The "Trust" Factor */}
        <div className="col-span-5 flex flex-col justify-center">
          <h3 className="text-2xl font-black text-slate-900 mb-6 italic underline decoration-cyan-400 decoration-4 underline-offset-8">
            Ultra-Clean Environment.
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Our LAF units provide a sterile working area by bathing the space in a high-efficiency, unidirectional stream of HEPA-filtered air. Perfect for tissue culture, pharmaceutical sampling, and precision electronics assembly.
          </p>

          <div className="space-y-4">
             <div className="flex gap-4">
                <div className="flex-1 bg-slate-900 text-white p-4 rounded-2xl">
                   <p className="text-[8px] text-cyan-400 uppercase font-bold">Standard</p>
                   <p className="text-xs font-bold">Horizontal / Vertical</p>
                </div>
                <div className="flex-1 border-2 border-slate-100 p-4 rounded-2xl">
                   <p className="text-[8px] text-slate-400 uppercase font-bold">MOC</p>
                   <p className="text-xs font-bold text-slate-800">SS 304 / 316L</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. Engineering Grid */}
      <div className="grid grid-cols-12 gap-8 flex-grow mb-12 relative z-10">
        <div className="col-span-12">
          <h4 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-[0.3em] text-center">Technical Specifications Matrix</h4>
          <div className="grid grid-cols-5 gap-4">
            {lafSpecs.map((spec, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-5 rounded-3xl text-center group hover:bg-cyan-600 transition-all duration-300">
                <p className="text-[9px] font-bold text-slate-400 uppercase mb-2 group-hover:text-cyan-100">{spec.label}</p>
                <p className="text-xs font-black text-slate-800 group-hover:text-white leading-tight uppercase">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Footer (Trust Badges) */}
      <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center">
        <div className="flex gap-12">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-slate-300 uppercase">Compliance</span>
            <span className="text-[10px] font-bold text-slate-600">ISO 9001 : 2015</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-slate-300 uppercase">Validation</span>
            <span className="text-[10px] font-bold text-slate-600">DOP / PAO Tested</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
             <p className="text-[9px] font-black text-slate-900 uppercase">Filtotech Air Control System</p>
             <p className="text-[9px] font-medium text-slate-400">www.filtotech.com</p>
          </div>
          <span className="text-5xl font-black text-slate-100">09</span>
        </div>
      </footer>
    </div>
  );
};

export default LaminarFlowLeaflet;