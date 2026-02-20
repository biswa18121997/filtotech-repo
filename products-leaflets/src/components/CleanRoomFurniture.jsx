import React from 'react';

const CleanroomFurnitureLeaflet = () => {
  // Array for your 8-10 images
  const furnitureItems = [
    { id: 1, name: "SS Work Table", img: "im1.jpeg" },
    { id: 2, name: "Cross-Over Bench", img: "im2.jpeg" },
    { id: 3, name: "Garment Locker", img: "im3.jpeg" },
    { id: 4, name: "Shoe Rack", img: "im4.jpeg" },
    { id: 5, name: "Instrument Trolley", img: "im5.jpeg" },
    { id: 6, name: "Sterile Stool", img: "im6.jpeg" },
    { id: 7, name: "Waste Bin", img: "im7.jpeg" },
    { id: 8, name: "Storage Cupboard", img: "im8.jpeg" },
    { id: 9, name: "Gowning Cabinet", img: "im9.jpeg" },
    { id: 10, name: "Hand Wash Sink", img: "im10.jepg" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-10 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <header className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-neutral-500 rounded-lg"><img src="footer-logo.png" alt="" /></div>
            <span className="font-black text-2xl tracking-tighter text-slate-900">FILTOTECH</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 leading-none tracking-tight">
            CLEAN ROOM <br/> 
            <span className="text-lime-500">FURNITURE</span>
          </h1>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Series: Modulus-X</p>
          <div className="bg-slate-100 px-4 py-2 rounded-xl">
             <span className="text-xs font-black text-slate-800 uppercase">Sterile & Durable</span>
          </div>
        </div>
      </header>

      {/* 2. SUB-HEADER / VALUE PROP */}
      <div className="flex gap-10 mb-8 items-center">
        <div className="h-[2px] flex-grow bg-slate-100"></div>
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
          ISO Class 5 & 6 Compliant Design
        </p>
        <div className="h-[2px] flex-grow bg-slate-100"></div>
      </div>

      {/* 3. THE IMAGE GRID (8-10 IMAGES) */}
      <div className="grid grid-cols-4 grid-rows-3 gap-3 flex-grow mb-8">
        {furnitureItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`relative group rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 
              ${index === 0 ? 'col-span-2 row-span-2' : ''} 
              ${index === 5 ? 'col-span-2' : ''}`}
          >
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-slate-900/60 to-transparent">
              <p className="text-[10px] font-bold text-white uppercase tracking-tight">{item.name}</p>
            </div>
            
            {/* Corner Accent for the large image */}
            {index === 0 && (
              <div className="absolute top-4 left-4 bg-lime-500 text-slate-900 px-3 py-1 rounded-full text-[9px] font-black uppercase shadow-lg">
                Featured Product
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 4. TECHNICAL HIGHLIGHTS FOOTER */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-lime-500/20 rounded-full"></div>
          <h4 className="text-lime-400 font-bold text-[10px] uppercase mb-2">Material Specification</h4>
          <p className="text-xs text-slate-300">High Grade SS 304/316L with non-shedding surfaces and seamless welding.</p>
        </div>
        <div className="bg-lime-500 rounded-3xl p-6 text-slate-900">
          <h4 className="text-slate-900 font-black text-[10px] uppercase mb-2">Key Highlight</h4>
          <p className="text-xs font-bold leading-tight">"Ergonomically designed for maximum comfort in sterile environments."</p>
        </div>
        <div className="border-2 border-slate-100 rounded-3xl p-6 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold text-slate-400">Customization</span>
            <span className="text-[10px] font-black text-slate-800">100%</span>
          </div>
          <div className="w-full bg-slate-100 h-1 rounded-full">
            <div className="bg-slate-800 h-full w-full rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 5. REUSABLE FOOTER */}
      <footer className="pt-6 border-t border-slate-100 flex justify-between items-end">
        <div>
          <p className="text-[10px] font-black text-slate-900">FILTOTECH AIR CONTROL SYSTEM PVT LTD</p>
          <p className="text-[9px] text-slate-400 uppercase tracking-tighter">Modular Cleanroom Solutions // 2026</p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] font-bold text-slate-300 tracking-widest">PAGE</span>
          <span className="text-5xl font-black text-slate-200 leading-none">10</span>
        </div>
      </footer>
    </div>
  );
};

export default CleanroomFurnitureLeaflet;