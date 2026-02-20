import React from 'react';

const CatalogFrontCover = () => {
  return (
    <div className="h-[297mm] w-[210mm] flex flex-col bg-neutral-950 mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden text-white">
      
      {/* 1. BACKGROUND TEXTURE (Blueprint Grid) */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. ACCENT GEOMETRY */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-500"></div>

      {/* 3. TOP BRANDING SECTION */}
      <header className="p-20 relative z-10 flex justify-between items-start">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl inline-block shadow-[0_0_30px_rgba(255,255,255,0.1)]">
             <img src="footer-logo.png" alt="Filtotech Logo" className="h-12 object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tighter text-white">FILTOTECH</h2>
            <p className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">Air Control System Pvt. Ltd.</p>
          </div>
        </div>
        {/* <div className="text-right">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Edition</p>
          <p className="text-lg font-black italic text-slate-300">2026 // 27</p>
        </div> */}
      </header>

      {/* 4. MAIN TITLE SECTION (EYE-CATCHING) */}
      <main className="px-20 mt-10 relative z-10 flex-grow">
        <div className="relative">
          <p className="text-blue-500 font-black text-sm uppercase tracking-[0.6em] mb-4">Industrial Excellence</p>
          <h1 className="text-[8rem] font-black leading-[0.75] tracking-[ -0.05em] mb-8">
            PRODUCTS <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">
                BROCHURE
            </span>
          </h1>
          <div className="w-32 h-2 bg-blue-600 mb-12"></div>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium italic">
            "Advanced air handling, contamination control, and high-precision ventilation solutions engineered for the next generation of industrial infrastructure."
          </p>
          <div className="space-y-4 border-l border-slate-800 pl-8">
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest underline decoration-blue-500 underline-offset-8 mb-6">Product Segments</p>
             <ul className="grid grid-cols-1 gap-2 text-[11px] font-bold text-slate-200 uppercase tracking-tighter">
                <li>• HVAC & Air Handling</li>
                <li>• Cleanroom Environment</li>
                <li>• Industrial Ventilation</li>
                <li>• Life Safety Systems</li>
                <li> and many more..</li>
             </ul>
          </div>
        </div>
      </main>

      {/* 5. FOOTER / ADDRESS SECTION */}
      <footer className="p-20 mt-auto relative z-10 bg-slate-900/50 backdrop-blur-md">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-8">
            <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Corporate Headquarters</h3>
            <div className="grid grid-cols-2 gap-8 text-xs text-slate-300 leading-relaxed">
              <div>
                <p className="font-black text-white uppercase mb-1">Registered Office</p>
                <p>Astra Tower, Unit No. 502, Action Area 2C,</p>
                <p>New Town, Kolkata - 700161, India.</p>
              </div>
              <div>
                <p className="font-black text-white uppercase mb-1">Manufacturing Unit</p>
                <p>Filtotech Industrial Park, Phase II,</p>
                <p>West Bengal, India.</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 text-right flex flex-col items-end">
            <div className="mb-6">
               <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Contact Support</p>
               <p className="text-sm font-bold text-white">+91 33 4000 0000</p>
               <p className="text-sm font-bold text-blue-400">www.filtotech.co.in</p>
               <p className="text-sm font-bold text-blue-400">sales.filtotech@gmail.com</p>
            </div>
            {/* Minimalist QR Placeholder */}
            {/* <div className="w-16 h-16 bg-white p-2 rounded-lg">
               <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[8px] text-center font-bold">QR CODE</div>
            </div> */}
          </div>
        </div>
      </footer>

      {/* Decorative vertical text */}
      <div className="absolute top-1/2 -right-24 -rotate-90 origin-center text-[100px] font-black text-slate-900/40 select-none uppercase tracking-tighter">
        PRECISION 2026
      </div>
    </div>
  );
};

export default CatalogFrontCover;