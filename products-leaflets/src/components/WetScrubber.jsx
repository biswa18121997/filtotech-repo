import React from 'react';

const WetScrubberLeaflet = () => {
  const specs = [
    { label: "Scrubbing Efficiency", value: "Up to 99.5%" },
    { label: "MOC", value: "PP, FRP, SS 316, MS-RL" },
    { label: "Gas Flow Rate", value: "500 to 60,000 CFM" },
    { label: "Packing Media", value: "Pall Rings / Tellerette" },
  ];

  return (
    <div className="bg-slate-50 w-[210mm] h-[297mm] mx-auto relative overflow-hidden font-sans shadow-2xl print:shadow-none">
      
      {/* Editorial Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-10 left-10 w-1 h-32 bg-teal-500"></div>

      <div className="p-16 relative z-10 h-full flex flex-col">
        
        {/* Top Navigation-Style Header */}
        <div className="flex justify-between items-start mb-20">
          <div className="space-y-1">
            <div className="h-1 w-12 bg-teal-600"></div>
            <p className="text-[10px] font-black tracking-[0.3em] text-teal-700 uppercase">Pollution Control Division</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-slate-800 tracking-tighter">FILTOTECH</p>
            <p className="text-[8px] font-bold text-slate-400">SERIES 2026 // EMISSION TECH</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-4 mb-0">
          <div className="col-span-8">
            <h1 className="text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6">
              WET <br/> <span className="text-teal-600">SCRUBBER</span> <br/> SYSTEMS.
            </h1>
            <p className="max-w-md text-slate-500 text-sm leading-relaxed border-l-2 border-slate-200 pl-6">
              Advanced chemical absorption and particulate removal designed for corrosive industrial environments. High-efficiency neutralisation for acidic and alkaline fumes.
            </p>
          </div>
          <div className="col-span-4 flex flex-col justify-end">
            <div className="bg-teal-600 text-white p-6 rounded-tl-[40px]">
              <p className="text-[10px] uppercase font-bold mb-2 opacity-80">System Type</p>
              <p className="text-lg font-bold leading-tight">Packed Bed Vertical Column</p>
            </div>
          </div>
        </div>

        {/* Magazine Grid Layout */}
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* Main Product Image */}
          <div className="flex flex-col object-contain col-span-7 bg-white p-4 shadow-xl rounded-lg">
            <img 
              src="wet2-removebg-preview.png" 
              alt="Wet Scrubber Unit" 
              className="w-full h-[250px] object-contain"
            /> <hr />
            <img 
              src="wet1-Photoroom.png" 
              alt="Wet Scrubber Unit" 
              className="w-full h-[200px] object-contain"
            />
          </div>

          {/* Side Info Panel */}
          <div className="col-span-5 space-y-10">
            
            {/* Spec Table */}
            <div>
              <h3 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Engineering Data</h3>
              <div className="space-y-3">
                {specs.map((s, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-200 pb-1">
                    <span className="text-xs text-slate-600">{s.label}</span>
                    <span className="text-xs font-bold text-slate-900">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Flow Diagram Placeholder */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden">
              <h3 className="text-[10px] font-bold uppercase text-teal-400 mb-6">Scrubbing Process</h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border border-teal-500 flex items-center justify-center text-[10px]">1</div>
                  <p className="text-[11px] font-medium italic">Inlet Gas Entry</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border border-teal-500 flex items-center justify-center text-[10px]">2</div>
                  <p className="text-[11px] font-medium italic">Counter-Current Spray</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border border-teal-500 flex items-center justify-center text-[10px]">3</div>
                  <p className="text-[11px] font-medium italic">Mist Elimination</p>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-4 border-teal-500/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Footer Area */}
                <footer className=" mt-4 pt-8 border-t border-slate-100 flex justify-between items-end">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Sustainability</span>
            <span className="text-[11px] font-bold text-emerald-700">Green Building Ready</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Control</span>
            <span className="text-[11px] font-bold text-slate-700">BMS Integrated</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-right">
             <p className="text-[11px] font-black text-slate-900">FILTOTECH AIR CONTROL SYSTEM</p>
             <p className="text-[9px] font-medium text-slate-400 italic">Precision Engineered Climates</p>
          </div>
          <span className="text-6xl font-black text-slate-100 leading-none">15</span>
        </div>
      </footer>

        {/* <div className="mt-auto flex items-end justify-between">
          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
            Sustainable Air Solutions // 2026
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] text-slate-500">Page</span>
            <span className="text-4xl font-black text-slate-300">04</span>
          </div>
        </div> */}
      </div>
      
    </div>
  );
};

export default WetScrubberLeaflet;