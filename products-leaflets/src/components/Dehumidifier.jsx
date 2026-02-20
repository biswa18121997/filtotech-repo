import React from 'react';

const DehumidifierLeaflet = () => {
  const specs = [
    { label: "Extraction Capacity", value: "20L to 1000L / Day" },
    { label: "Technology", value: "Refrigerant / Desiccant Rotor" },
    { label: "Working Range", value: "5°C to 45°C" },
    { label: "Humidity Control", value: "30% - 90% RH (Digital)" },
    { label: "Refrigerant", value: "R-134a / R-410A Eco" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden">
      
      {/* 1. MOISTURE WAVE GRAPHIC (Top Decorative) */}
      <div className="absolute top-0 right-0 w-full h-64 bg-slate-900/50 -z-0 rounded-bl-[100px] flex items-end p-20 justify-end">
        <div className="text-right">
            <h2 className="text-blue-400 font-black tracking-[0.4em] text-[10px] uppercase mb-2">Humidity Control</h2>
            <h1 className="text-6xl font-black text-white leading-none tracking-tighter italic">
                DRY <br/> <span className="text-blue-500">ATMOS.</span>
            </h1>
        </div>
      </div>

      {/* 2. HEADER SECTION */}
      <header className="flex  justify-start items-center mb-24 relative z-10 w-full">
        <div className="flex  gap-1">
            <img src="footer-logo.png" alt="Filtotech" className="w-auto h-auto rounded-full" />
            <div className="h-1 text-lg font-bold underline  "> FILTOTECH AIR CONTROL SYSTEM PVT. LTD.</div>
        </div>
      </header>

      {/* 3. MAIN PRODUCT GRID */}
      <div className="grid grid-cols-12 gap-12 mb-12 relative z-10">
        
        {/* Left: Performance Narrative */}
        <div className="col-span-5 flex flex-col justify-center">
          <div className="mb-10">
            <h3 className="text-4xl font-black text-slate-900 leading-tight mb-4">
                Advanced <br/> Dehumidification <br/> <span className="text-blue-600 underline decoration-4 underline-offset-4">Technology.</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-blue-100 pl-6">
                Protecting sensitive inventory and machinery from moisture damage. Our industrial dehumidifiers ensure precise relative humidity control for pharmaceutical, food, and electronics storage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100">
                <p className="text-2xl font-black text-blue-600 leading-none mb-1">99%</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Uptime Reliability</p>
             </div>
             <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100">
                <p className="text-2xl font-black text-blue-600 leading-none mb-1">AUTO</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Defrost Mode</p>
             </div>
          </div>
        </div>

        {/* Right: Product Visual */}
        <div className="col-span-7 relative">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-[50px]  shadow-2xl border border-blue-50/50 flex items-center justify-center min-h-[480px]">
             <img 
               src="deumidifier-Photoroom.png" 
               alt="Industrial Dehumidifier" 
               className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" 
             />
             {/* Tech Callout */}
             <div className="absolute top-10 right-10 flex flex-col items-end">
                <span className="text-[10px] font-black text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-widest">Digital Hygrostat</span>
             </div>
          </div>
        </div>
      </div>

      {/* 4. TECHNICAL SPECIFICATION GRID */}
      <div className="flex-grow">
        <h4 className="text-[10px] font-black tracking-[0.5em] text-slate-300 uppercase mb-6 text-center">System Characteristics</h4>
        <div className="grid grid-cols-5 gap-6">
          {specs.map((spec, i) => (
            <div key={i} className="text-center group">
              <div className="h-1 w-full bg-slate-100 mb-4 group-hover:bg-blue-600 transition-colors duration-500"></div>
              <p className="text-[9px] font-black text-slate-400 uppercase mb-1">{spec.label}</p>
              <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-tight">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-slate-900 uppercase">FILTOTECH AIR CONTROL SYSTEM PVT LTD</p>
          <div className="flex gap-4">
             {/* <span className="text-[9px] text-blue-500 font-bold uppercase tracking-widest">Climate Control Division</span> */}
             <span className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">|</span>
             <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">sales@filtotech.com</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[10px] font-bold text-slate-300">PAGE</span>
          <span className="text-5xl font-black text-slate-200 tracking-tighter">13</span>
        </div>
      </footer>
    </div>
  );
};

export default DehumidifierLeaflet;