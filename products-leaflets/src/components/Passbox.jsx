import React from 'react';
import { CatalogHeader } from './Header';
import { CatalogFooter } from './Footer';
const PassboxLeaflet = () => {
  const technicalSpecs = [
    { label: "Type", value: "Static / Dynamic / UV-C" },
    { label: "Material", value: "SS 304 / SS 316L Finish" },
    { label: "Interlocking", value: "Electromagnetic / Mechanical" },
    { label: "UV Lamp", value: "254nm Philips Holland" },
    { label: "Filtration", value: "HEPA H14 (For Dynamic)" },
  ];

  return (
    <div className="bg-white w-[210mm] h-[297mm] mx-auto relative overflow-hidden font-sans shadow-2xl print:shadow-none">
      
      {/* Aesthetic Border Accent */}
      <div className="absolute inset-0 border-[15px] border-gray-50 pointer-events-none"></div>
      
      {/* Top Banner: Minimalist */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>

      <div className="p-20 relative z-10 h-full flex flex-col">
        
        {/* Header Section */}
        <header className="flex justify-between items-start mb-24">
          <div className="space-y-2">
            <h2 className="text-blue-600 font-black tracking-widest text-xs uppercase">Contamination Control</h2>
            <h1 className="text-6xl font-extralight text-slate-900 tracking-tighter">
              ULTRA-CLEAN <br/> <span className="font-black">PASSBOX</span>
            </h1>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-full w-24 h-24 flex items-center justify-center text-center">
            <p className="text-[10px] font-bold leading-tight">ISO-5<br/>COMPLIANT</p>
          </div>
        </header>

        {/* Hero Display */}
        <div className="relative mb-16">
          <div className="absolute -left-10 top-1/2 -rotate-90 origin-left text-[80px] font-black text-slate-50 tracking-tighter -z-10">
            PRECISION
          </div>
          
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-7">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-2xl">
                  {/* Image placeholder for passbox.jpg */}
                  <img 
                    src="passbox2.jpeg" 
                    alt="Cleanroom Passbox" 
                    className="w-full h-[350px] object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-5 space-y-8">
              <div>
                <h3 className="text-blue-600 font-bold text-sm uppercase mb-2">Interlocking System</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Advanced PLC-controlled electromagnetic interlocking prevents cross-contamination by ensuring only one door opens at a time.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 bg-slate-50 p-4 rounded-xl border-t-2 border-blue-500">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">UV-C Cycles</p>
                  <p className="text-lg font-black text-slate-800">Programmable</p>
                </div>
                <div className="flex-1 bg-slate-50 p-4 rounded-xl border-t-2 border-blue-500">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Door Seal</p>
                  <p className="text-lg font-black text-slate-800">Airtight</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Data Section */}
        <div className="grid grid-cols-12 gap-12 mt-auto">
          <div className="col-span-6">
            <h4 className="text-slate-900 font-black text-xs uppercase mb-6 tracking-widest border-b border-slate-200 pb-2">Technical Matrix</h4>
            <div className="grid grid-cols-1 gap-4">
              {technicalSpecs.map((spec, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="text-[11px] font-bold text-slate-400 uppercase group-hover:text-blue-600 transition-colors">{spec.label}</span>
                  <div className="flex-grow mx-4 border-b border-dotted border-slate-200"></div>
                  <span className="text-[11px] font-black text-slate-800 uppercase">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-6 bg-slate-900 rounded-3xl p-8 flex flex-col justify-between">
             <div className="space-y-4">
                <h4 className="text-white font-bold text-xs uppercase">Key Variants</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 border-b border-slate-700 pb-2">
                    <span>Static Pass Box</span>
                    <span className="text-blue-400">Internal Transfer</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 border-b border-slate-700 pb-2">
                    <span>Dynamic Pass Box</span>
                    <span className="text-blue-400">Class 100 Air</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 pb-2">
                    <span>UV Sanitization</span>
                    <span className="text-blue-400">Integrated</span>
                  </div>
                </div>
             </div>
             
             {/* <div className="flex items-center justify-between pt-6">
                <img src="footer-logo.png" className="h-6 brightness-0 invert opacity-50" alt="Filtotech" />
                <span className="text-[10px] font-mono text-slate-500 tracking-tighter">WWW.FILTOTECH.COM</span>
             </div> */}
          </div>
        </div>

      </div>
      <CatalogFooter />
    </div>
  );
};

export default PassboxLeaflet;