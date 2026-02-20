import React from 'react';

const CentrifugalFanLeaflet = () => {
  const technicalData = [
    { param: "Wheel Type", desc: "Backward Curved / Radial / Forward Curved" },
    { param: "Static Pressure", desc: "Up to 500mm W.G." },
    { param: "Drive System", desc: "Direct / V-Belt / Coupling Drive" },
    { param: "Housing", desc: "Heavy Gauge MS / SS 316 / PP-FRP" },
    { param: "Application", desc: "Dust Collection, Fume Exhaust, Boilers" },
  ];

  return (
    <div className="bg-white w-[210mm] h-[297mm] mx-auto relative overflow-hidden font-sans shadow-2xl print:shadow-none">
      
      {/* Industrial Accent - Top Left */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 -translate-x-16 -translate-y-16 rotate-45"></div>

      <div className="p-12 relative z-10 h-full flex flex-col">
        
        {/* Header with Series Designation */}
        <header className="flex items-center gap-6 mb-12">
          <div className="bg-gray-900 text-white p-4 font-black text-4xl rotate-[-90deg] h-fit">
            2026
          </div>
          <div className="flex-grow border-l-4 border-yellow-400 pl-6">
            <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">
              Centrifugal <br/> <span className="text-yellow-500">Blowers & Fans</span>
            </h1>
            <p className="text-gray-500 font-bold tracking-[0.2em] text-sm uppercase">High Pressure Air Solutions</p>
          </div>
          <img src="footer-logo.png" alt="Filtotech" className="h-16 object-contain" />
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8 mb-8">
          
          {/* Left: Engineering Breakdown */}
          <div className="col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner">
              <h3 className="text-gray-900 font-black uppercase text-xs mb-4 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Performance Range
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                    <span>Efficiency</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 mt-1 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                    <span>Pressure</span>
                    <span>High</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 mt-1 rounded-full overflow-hidden">
                    <div className="bg-gray-800 h-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-black text-gray-900 mb-4 uppercase text-sm">Design Advantages</h4>
              <ul className="space-y-4">
                {[
                  { title: "Aerodynamic Scroll", body: "Optimized casing for smooth airflow conversion." },
                  { title: "Dynamic Balancing", body: "G2.5 balancing for vibration-free longevity." },
                  { title: "Modular Build", body: "Easy access for maintenance and impeller cleaning." }
                ].map((item, i) => (
                  <li key={i} className="relative pl-6">
                    <span className="absolute left-0 top-1.5 w-3 h-0.5 bg-yellow-500"></span>
                    <p className="font-bold text-xs text-gray-800 uppercase">{item.title}</p>
                    <p className="text-[11px] text-gray-500 leading-tight">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Large Visual Area */}
          <div className="col-span-8">
            <div className="relative h-[450px] bg-gray-100 rounded-[40px] flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
              {/* This would be air4.jpeg or similar */}
              <img src="Centrifugal Blower 1.webp" alt="Centrifugal Blower" className="w-4/5 h-4/5 object-contain" />
              
              {/* Technical Callout */}
              <div className="absolute top-10 right-10 text-right">
                <span className="block text-[40px] font-black text-gray-200 leading-none">TYPE-CB</span>
                <span className="block text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 inline-block">SISW / DIDW Config</span>
              </div>
            </div>
          </div>
          <img src="centrifugal-blower-1062432.jpg" className=' w-full h-full scale-600 relative left-20  object-contain' alt="" />
        </div>
        <div>
                
            </div>

        {/* Bottom Technical Table */}
        <div className="mt-auto">
          <div className="grid grid-cols-5 gap-0 border-t-2 border-gray-900">
            {technicalData.map((item, i) => (
              <div key={i} className={`p-4 ${i !== 4 ? 'border-r border-gray-100' : ''}`}>
                <p className="text-[9px] font-black text-yellow-600 uppercase mb-1">{item.param}</p>
                <p className="text-[11px] font-bold text-gray-800 leading-tight uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Engineering Footer */}
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
          {/* <div className="bg-gray-900 text-white p-6 mt-4 flex justify-between items-center rounded-br-[50px]">
            <div className="flex gap-8">
              <div>
                <p className="text-[8px] text-gray-400 uppercase tracking-widest">Inlet Diameter</p>
                <p className="text-sm font-bold">150mm - 2500mm</p>
              </div>
              <div>
                <p className="text-[8px] text-gray-400 uppercase tracking-widest">Compliance</p>
                <p className="text-sm font-bold">AMCA Certified</p>
              </div>
            </div>
            
            
            <div className="text-right">
              <p className="text-[10px] font-mono opacity-60">FILTO-TECH INDUSTRIAL SYSTEMS PVT LTD</p>
              <p className="text-[10px] font-mono opacity-60">ASTRA TOWER, ACTION AREA 2C, KOLKATA</p>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default CentrifugalFanLeaflet;