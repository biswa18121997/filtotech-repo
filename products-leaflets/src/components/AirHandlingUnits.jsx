

import { Globe, Mail } from 'lucide-react';
import React from 'react';

const AirHandlingUnitLeaflet = () => {
  const techSpecs = [
    { label: "Frame Type", value: "Thermal Bridge Free Profile" },
    { label: "Panel", value: "Double Skin (25/50mm)" },
    { label: "Insulation", value: "PUF / Rockwool (High Density)" },
    { label: "Filter Section", value: "G4 / F7 / F9 / HEPA" },
    { label: "Certification", value: "Eurovent / AHRI Standard" },
  ];

  return (
    // h-[297mm]
    <div className="h-fit w-[210mm] p-12 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden">
      
      {/* 1. ARCHITECTURAL GEOMETRY (Background) */}
      <div className="absolute top-0 right-0 w-[40%] h-fit bg-slate-50 -z-0"></div>
      <div className="absolute top-[15%] right-0 w-32 h-1 bg-emerald-500"></div>

      {/* 2. HEADER SECTION */}
      <header className="flex justify-between items-end mb-8 relative z-10 border-b-2 border-slate-900 pb-8">
        <div>
         <span className='flex justify-center items-center text-xl gap-2 text-blue-600'><img src="footer-logo.png" alt="Filtotech" className="h-10 mb-6 object-contain" />FILTOTECH AIR CONTROL SYSTEM PVT. LTD.</span>
          <h1 className="text-[5.5rem] font-black text-slate-900 leading-[0.75] tracking-tighter">
            AIR <br/> <span className="text-emerald-600">HANDLING</span>
          </h1>
          <p className="text-2xl font-light text-slate-400 tracking-[0.2em] mt-2">UNITS [AHU]</p>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="bg-emerald-600 text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-4">
            Eurovent Certified
          </div>
          <p className="text-xs font-mono text-slate-400">SERIES: NEXUS-V2</p>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <div className="grid grid-cols-12 gap-12 mb-16 relative z-10">
        
        {/* Left: Industrial Visual */}
        <div className="col-span-8">
          <div className="relative group">
            {/* The "Shadow" Box */}
            <div className="absolute inset-0 bg-emerald-100/50 rounded-[3rem] translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            
            <div className="bg-white rounded-[3rem] p-2 border border-slate-100 shadow-2xl flex items-center justify-center min-h-[420px]">
              <img 
                src="air2-Photoroom.png" 
                alt="Custom Air Handling Unit" 
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]" 
              />
              
              {/* Floating Performance Tag */}
              <div className="absolute bottom-10 right-10 bg-slate-900 text-white p-6 rounded-2xl">
                 <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1 text-center">Efficiency</p>
                 <p className="text-2xl font-black italic">LOW-LEAK</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Feature Content */}
        <div className="col-span-4 flex flex-col justify-end space-y-10">
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-4 border-l-4 border-emerald-500 pl-4 uppercase">
              The Heart of <br/> Ventilation.
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed italic">
              Our NEXUS series AHUs are designed with modularity in mind, offering precise temperature, humidity, and air quality control for the most demanding environments.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <span className="text-emerald-600 text-lg font-black italic">01.</span>
               <span className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">Thermal Break Construction</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-emerald-600 text-lg font-black italic">02.</span>
               <span className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">Plug Fan Technology</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-emerald-600 text-lg font-black italic">03.</span>
               <span className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">Integrated Heat Recovery</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* 4. TECHNICAL DATA TABLE */}
      <div className="  ">
        <div className="bg-slate-50 border border-slate-100 rounded-[2rem] h-fit p-8">
          <div className="grid grid-cols-5 gap-8">
            {techSpecs.map((spec, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[9px] font-black text-emerald-600 uppercase mb-2 tracking-widest">{spec.label}</span>
                <span className="text-[11px] font-bold text-slate-900 leading-tight uppercase">{spec.value}</span>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
      

      {/* 5. FOOTER */}
      <footer className=" mt-4 pt-8 border-t border-slate-100 flex justify-between items-end">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Sustainability</span>
            <span className="text-[11px] font-bold text-emerald-700">Green Building Ready</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Control</span>
            <span className="text-[11px] font-bold text-slate-700">BMS Integrated</span>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-black text-slate-900">FILTOTECH AIR CONTROL SYSTEM</p>
             <p className="text-[9px] font-medium text-slate-400 italic">Precision Engineered Climates</p><hr />
        </div>
        <div className="relative translate-x-25 flex items-center gap-8">
          <div className="text-right flex flex-col">
             
            <div className='text-left'>
             <p className='text-[12px] mt-4 font-medium text-slate-400 italic'>Contact us : </p>

             <p className='text-[10px] mt-4 font-medium text-slate-400 italic'>Address (Office): ASO-111, Astra Tower,<br /> Rajarhat, New Town, Kolkata- 700161</p>
             <p className='text-[10px] font-medium text-slate-400 italic flex gap-2'><img src='whatsapp-svgrepo-com.svg' className='h-3 w-3'/> Whatsapp : 9851793249</p>
             <p className='text-[10px] font-medium text-slate-400 italic flex gap-2'><Mail className='h-3 w-3' /> E-Mail : filtotech@yahoo.in</p>
             <p className='text-[10px] font-medium text-slate-400 italic flex gap-2'><Globe className='h-3 w-3' /> Website : www.filtotech.co.in/</p>
             </div>
          </div>
          <span className="text-6xl font-black text-slate-100 leading-none">15</span>
        </div>
      </footer>
    </div>
  );
};

export default AirHandlingUnitLeaflet;