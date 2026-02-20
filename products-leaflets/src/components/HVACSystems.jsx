
import React from 'react';

const HVACSystemLeaflet = () => {
  const pillars = [
    {
      title: "Climate Control",
      text: "Control of temperature and humidity as per requirement of product.",
      icon: "RH"
    },
    {
      title: "Pressure Management",
      text: "Maintenance of differential pressure in between clean rooms and CNC area.",
      icon: "ΔP"
    },
    {
      title: "Contamination Shield",
      text: "Control of airborne particles - contaminants to achieve required level of cleanliness.",
      icon: "ISO"
    },
    {
      title: "Regulatory Compliance",
      text: "Compliance of statutory requirement for production of drug - cosmetics and other arena.",
      icon: "GMP"
    }
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden">
      
      {/* 1. PREMIUM ACCENT GEOMETRY */}
      <div className="absolute top-0 right-0 w-1/2 h-[400px] bg-slate-900 rounded-bl-[120px] -z-0"></div>
      <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-amber-400 opacity-40"></div>

      {/* 2. HEADER */}
      <header className="flex justify-between items-start mb-14 relative z-10">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-6">
          
            <span className="text-blue-600 font-black tracking-[0.4em] flex justify-center items-center text-lg uppercase"><img src="footer-logo.png" alt="Filtotech" className="h-8 mb-4 " />Filtotech Air Control System Pvt. Ltd</span>
            {/* <div className="w-10 h-1 bg-amber-500"></div> */}
            <hr />
          </div>
          <h1 className="text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter">
            INTEGRAT<span className='text-white'>ED</span><br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">
              HVAC SOLUTIONS
            </span>
          </h1>
        </div>
        <div className="text-right text-white pt-6">
          
          <p className="text-[10px] font-bold tracking-[0.3em] opacity-60">Brochure 2026</p>
        </div>
      </header>

      {/* 3. MULTI-IMAGE GALLERY */}
      <div className="grid grid-cols-12 gap-5 mb-14 relative z-10">
        <div className="col-span-8 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white h-[400px]">
          <img src="s3.jpeg" alt="HVAC System" className="w-full h-full object-contain" />
        </div>
        <div className="col-span-4 flex flex-col gap-5">
          <div className="h-[190px] rounded-[40px] overflow-hidden shadow-xl border-4 border-white">
            <img src="s2.jpeg" alt="Detail" className="w-full h-full object-contain" />
          </div>
          <div className="h-[190px] rounded-[40px] bg-amber-500 p-8 flex flex-col justify-end text-white shadow-xl">
             <p className="text-[10px] font-black uppercase mb-1">Standard</p>
             <h4 className="text-2xl font-black leading-none italic uppercase">Reliable <br/> Airflow.</h4>
          </div>
        </div>
      </div>

      {/* 4. PERFORMANCE PILLARS (Your requested text) */}
      <div className="relative z-10 mb-10">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.5em] mb-8 text-center underline decoration-amber-500 underline-offset-8 decoration-2">
          Critical Performance Requirements
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-400 font-black text-sm">
                {pillar.icon}
              </div>
              <div>
                <h5 className="font-black text-slate-900 text-xs uppercase mb-2 tracking-tight">{pillar.title}</h5>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium italic">
                  "{pillar.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-end">
        <div>
          <p className="text-[10px] font-black text-slate-900">FILTOTECH AIR CONTROL SYSTEM PVT LTD</p>
          <div className="flex gap-4 mt-1">
            <span className="text-[9px] text-amber-600 font-bold uppercase tracking-widest">Global Pharma Standards</span>
            <span className="text-[9px] text-slate-300">|</span>
            <span className="text-[9px] text-slate-400">www.filtotech.com</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-right flex flex-col">
             <span className="text-[8px] font-black text-slate-300 uppercase">Audit Ready</span>
             <span className="text-[10px] font-bold text-slate-700 uppercase">ISO • GMP • NABH</span>
          </div>
          <span className="text-6xl font-black text-slate-100 italic leading-none">18</span>
        </div>
      </footer>
    </div>
  );
};

export default HVACSystemLeaflet;