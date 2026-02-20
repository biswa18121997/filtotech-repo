// // import React from 'react';

// // const AxialFanLeaflet = () => {
// //   const specs = [
// //     { label: "Impeller", value: "Cast Aluminium Alloy" },
// //     { label: "Drive Type", value: "Direct / Belt Driven" },
// //     { label: "Airflow", value: "Up to 150,000 CFM" },
// //     { label: "Pressure", value: "Up to 100mm W.G." },
// //     { label: "Mounting", value: "Duct / Wall / Roof" },
// //   ];

// //   return (
// //     <div className="bg-white w-[210mm] h-[297mm] mx-auto relative overflow-hidden font-sans shadow-2xl print:shadow-none">
// //       {/* Top Accent Bar */}
// //       <div className="absolute top-0 right-0 w-1/2 h-2 bg-blue-600"></div>
      
// //       {/* Background Graphic - Subtle Technical Grid */}
// //       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
// //            style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
// //       </div>

// //       <div className="p-16 relative z-10 h-full flex flex-col">
// //         {/* Header Section */}
// //         <header className="flex justify-between items-end border-b-2 border-gray-900 pb-6 mb-12">
// //           <div>
// //             <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-1">Heavy Duty Series</h4>
// //             <h1 className="text-6xl font-black text-gray-900 leading-none">AXIAL FLOW <br/> <span className="text-blue-700">FANS</span></h1>
// //           </div>
// //           <div className="text-right">
// //             <img src="footer-logo.png" alt="Filtotech" className="h-12 ml-auto mb-2" />
// //             <p className="text-xs font-bold text-gray-400">ENGINEERED FOR EXCELLENCE</p>
// //           </div>
// //         </header>

// //         <div className="grid grid-cols-12 gap-8 flex-grow">
// //           {/* Left Column: Visuals */}
// //           <div className="col-span-7 flex flex-col gap-6">
// //             <div className="relative group">
// //               {/* Main Image Container */}
// //               <div className="bg-gray-100 rounded-2xl p-4 border-l-8 border-blue-600 overflow-hidden shadow-xl">
// //                 <img 
// //                   src="air3.jpeg" 
// //                   alt="Axial Fan" 
// //                   className="w-full h-[400px] object-contain mix-blend-multiply"
// //                 />
// //               </div>
// //               {/* Floating Badge */}
// //               <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-6 rounded-lg shadow-lg rotate-3">
// //                 <p className="text-xs uppercase opacity-80">Peak Performance</p>
// //                 <p className="text-2xl font-black">150K CFM</p>
// //               </div>
// //             </div>

// //             <div className="mt-8">
// //               <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
// //                 <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
// //                 Product Overview
// //               </h5>
// //               <p className="text-gray-600 leading-relaxed italic">
// //                 Designed for high-volume air movement in industrial environments. Our axial fans feature aerofoil blades for maximum efficiency and minimum noise pollution, ensuring a perfect balance of power and performance.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Right Column: Technical Specs & Features */}
// //           <div className="col-span-5 flex flex-col">
// //             <div className="bg-gray-900 text-white p-8 rounded-3xl h-full shadow-2xl">
// //               <h5 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">Technical Matrix</h5>
              
// //               <div className="space-y-6 mb-10">
// //                 {specs.map((spec, i) => (
// //                   <div key={i} className="flex flex-col border-b border-gray-700 pb-2">
// //                     <span className="text-gray-400 text-xs uppercase">{spec.label}</span>
// //                     <span className="text-lg font-medium">{spec.value}</span>
// //                   </div>
// //                 ))}
// //               </div>

// //               <h5 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Core Features</h5>
// //               <ul className="space-y-3">
// //                 {["Energy Efficient Motors", "Vibration Free Operation", "Weatherproof Coating", "Adjustable Pitch Impeller"].map((feat, i) => (
// //                   <li key={i} className="flex items-start text-sm">
// //                     <svg className="w-5 h-5 text-blue-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
// //                     </svg>
// //                     {feat}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer Info */}
// //         <footer className="mt-auto pt-8 flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-tighter border-t border-gray-100">
// //           <span>Filtotech Air Control System Pvt Ltd</span>
// //           <span>ISO 9001:2015 Certified Company</span>
// //           <span className="text-blue-600">www.filtotech.com</span>
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AxialFanLeaflet;

// import React from "react";
// import { 
//   Wind, 
//   Zap, 
//   ShieldCheck, 
//   Settings2, 
//   Maximize2,
//   Factory
// } from "lucide-react";

// // Technical Grid Background Component
// const TechnicalGrid = () => (
//   <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
//     {/* Main Grid */}
//     <div 
//       className="absolute inset-0 opacity-[0.03]" 
//       style={{ 
//         backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', 
//         backgroundSize: '40px 40px' 
//       }}
//     />
//     {/* Sub Grid */}
//     <div 
//       className="absolute inset-0 opacity-[0.02]" 
//       style={{ 
//         backgroundImage: 'linear-gradient(#0f172a 0.5px, transparent 0.5px), linear-gradient(90deg, #0f172a 0.5px, transparent 0.5px)', 
//         backgroundSize: '10px 10px' 
//       }}
//     />
//     {/* Technical Crosshairs */}
//     <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-primary/40" />
//     <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-primary/40" />
//     <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-primary/40" />
//     <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-primary/40" />
//   </div>
// );

// export default function AxialFanLeaflet() {
//   const specs = [
//     { label: "Impeller", value: "Cast Alum. Alloy" },
//     { label: "Drive Type", value: "Direct / Belt" },
//     { label: "Airflow Max", value: "150,000 CFM" },
//     { label: "Static Press.", value: "100mm W.G." },
//     { label: "Diameter", value: "315mm - 2000mm" },
//     { label: "Motor Eff.", value: "IE2 / IE3 / IE4" },
//     { label: "Protection", value: "IP55 / IP65" },
//     { label: "Temp Class", value: "Class F / H" },
//   ];

//   const features = [
//     { 
//       icon: Zap, 
//       title: "High Efficiency", 
//       description: "Optimized aerofoil blade design delivers maximum airflow with minimal power consumption." 
//     },
//     { 
//       icon: ShieldCheck, 
//       title: "Durability", 
//       description: "Heavy-gauge steel casing with epoxy powder coating ensures long service life in harsh environments." 
//     },
//     { 
//       icon: Settings2, 
//       title: "Adjustable Pitch", 
//       description: "Manually adjustable blade pitch allows precise airflow calibration on-site." 
//     },
//     {
//       icon: Factory,
//       title: "Industrial Ready",
//       description: "Built for continuous operation in demanding manufacturing and ventilation applications."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-stone-50 flex items-center justify-center py-12 px-4 font-sans">
//       <div className="bg-white w-full max-w-[1200px] aspect-[1.414] relative shadow-2xl overflow-hidden flex flex-col md:flex-row border border-border/50">
//         <TechnicalGrid />
        
//         {/* Accent Bar */}
//         <div className="absolute top-0 left-0 w-2 h-full bg-primary z-20" />
//         <div className="absolute top-0 left-2 w-1 h-32 bg-accent z-20" />

//         {/* Content Container */}
//         <div className="flex-1 flex flex-col p-12 relative z-10 h-full">
          
//           {/* Header */}
//           <header className="flex justify-between items-start mb-12 border-b-2 border-primary/10 pb-8">
//             <div>
//               <div className="flex items-center gap-3 mb-2">
//                 <span className="bg-primary text-white text-[10px] font-mono px-2 py-1 uppercase tracking-widest">
//                   Series H-3000
//                 </span>
//                 <span className="text-accent text-[10px] font-mono uppercase tracking-widest flex items-center gap-1">
//                   <span className="w-2 h-2 rounded-full bg-accent" />
//                   Performance Certified
//                 </span>
//               </div>
//               <h1 className="font-heading font-bold text-6xl text-foreground leading-[0.9] tracking-tight">
//                 AXIAL FLOW<br />
//                 <span className="text-primary">FANS</span>
//               </h1>
//             </div>
            
//             <div className="text-right">
//               <div className="flex items-center justify-end gap-2 mb-1">
//                 <div className="w-8 h-8 bg-foreground flex items-center justify-center text-white font-bold font-heading">F</div>
//                 <span className="font-heading font-bold text-xl tracking-tight">FILTOTECH</span>
//               </div>
//               <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
//                 Air Control Systems
//               </p>
//             </div>
//           </header>

//           <div className="flex-1 grid grid-cols-12 gap-12">
            
//             {/* Left Column: Product Visuals */}
//             <div className="col-span-12 md:col-span-7 flex flex-col">
//               <div className="relative flex-1 bg-muted/20 border border-border/60 rounded-sm p-8 flex items-center justify-center group overflow-hidden">
//                 {/* Background decorative circles (Static) */}
//                 <div className="absolute w-[400px] h-[400px] border border-primary/10 rounded-full" />
//                 <div className="absolute w-[300px] h-[300px] border border-dashed border-primary/20 rounded-full" />
                
//                 <img 
//                   src="axilflow2.jpg" 
//                   alt="Industrial Axial Fan" 
//                   className="relative z-10 w-full h-full object-contain drop-shadow-2xl mix-blend-normal"
//                 />

//                 {/* Technical Callout Overlay */}
//                 <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm border border-primary/20 p-4 shadow-lg max-w-[200px]">
//                   <p className="font-mono text-[10px] text-muted-foreground uppercase mb-1">Max Capacity</p>
//                   <p className="font-heading font-bold text-2xl text-primary">150K <span className="text-sm text-foreground">CFM</span></p>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <h3 className="font-heading font-bold text-lg uppercase mb-3 flex items-center gap-2">
//                   <Wind className="text-primary" size={20} />
//                   Product Overview
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed text-sm max-w-xl">
//                   Engineered for heavy-duty industrial applications, the H-3000 series delivers exceptional airflow performance with minimal noise. Featuring aerodynamically optimized cast aluminium impellers and robust casing construction, perfectly balanced for efficiency and longevity.
//                 </p>
//               </div>
//             </div>

//             {/* Right Column: Specifications */}
//             <div className="col-span-12 md:col-span-5 flex flex-col h-full">
//               <div className="bg-foreground text-white p-1 rounded-sm shadow-xl h-full flex flex-col">
//                 <div className="bg-card/5 border border-white/10 h-full p-6 flex flex-col">
//                   <div className="flex justify-between items-center mb-6">
//                     <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm">
//                       Technical Matrix
//                     </h3>
//                     <Maximize2 size={16} className="text-primary" />
//                   </div>
                  
//                   {/* Specs Table */}
//                   <div className="space-y-0 mb-8 bg-white/5 rounded-sm overflow-hidden">
//                     {specs.map((spec, i) => (
//                       <div key={i} className="flex justify-between items-center py-2 px-3 border-b border-white/10 last:border-0 hover:bg-white/10 transition-colors">
//                         <span className="text-[10px] font-mono text-white/60 uppercase">{spec.label}</span>
//                         <span className="text-xs font-bold font-mono text-white">{spec.value}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Features Grid */}
//                   <div className="mt-auto">
//                     <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-4">
//                       Key Capabilities
//                     </h3>
//                     <div className="grid grid-cols-2 gap-2">
//                         {features.map((f, i) => (
//                             <div key={i} className="bg-white/5 p-3 border border-white/5 hover:border-primary/50 transition-colors group">
//                                 <f.icon className="text-primary mb-2" size={16} />
//                                 <h4 className="font-heading text-xs font-bold text-white mb-1">{f.title}</h4>
//                             </div>
//                         ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <footer className="mt-auto pt-8 border-t border-border flex justify-between items-end text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
//             <div className="flex gap-8">
//               <span className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
//                 ISO 9001:2015 Certified
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
//                 AMCA Standard 210
//               </span>
//             </div>
//             <div className="text-right">
//               <p>www.filtotech.com</p>
//               <p>Made in India</p>
//             </div>
//           </footer>
//         </div>

//         {/* Decorative corner tag */}
//         <div className="absolute top-0 right-0 bg-accent text-white px-6 py-2 rounded-bl-xl font-bold font-heading text-sm shadow-lg z-20">
//           2025 EDITION
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

const AxialFanLeaflet = () => {
  const fanSpecs = [
    { label: "Impeller", value: "Aerofoil Adjustable Pitch (AL)" },
    { label: "Casing", value: "Heavy Gauge MS / Hot Dip Galv." },
    { label: "Motor", value: "Class H / IP55 (High Temp)" },
    { label: "Efficiency", value: "Up to 85% Total Efficiency" },
    { label: "Volume", value: "2,000 to 2,00,000 CMH" },
  ];

  return (
    <div className="h-[297mm] w-[210mm] p-12 flex flex-col bg-white mx-auto relative page-break shadow-2xl print:shadow-none font-sans overflow-hidden">
      
      {/* 1. INDUSTRIAL STRIPE (Top Edge) */}
      <div className="absolute top-0 left-0 w-full h-4 bg-slate-900 flex">
         {[...Array(20)].map((_, i) => (
           <div key={i} className="flex-grow h-full bg-yellow-400 skew-x-[45deg] mr-8 first:ml-[-20px]"></div>
         ))}
      </div>

      {/* 2. HEADER SECTION */}
      <header className="flex justify-between items-start mt-8 mb-16 relative z-10">
        <div>
          <h2 className="text-yellow-500 font-black tracking-[0.3em] text-[10px] uppercase mb-1">Industrial Ventilation</h2>
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter leading-[0.8]">
            AXIAL FLOW <br/> 
            <span className="text-slate-400 underline decoration-yellow-400 decoration-8 underline-offset-[12px]">FANS</span>
          </h1>
        </div>
        <div className="text-right">
          <img src="footer-logo.png" alt="Filtotech" className="h-10 ml-auto mb-4" />
          <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg border-r-4 border-yellow-500">
             <p className="text-[10px] font-bold text-slate-500 uppercase">Series</p>
             <p className="text-sm font-black text-slate-900 italic">TURBO-VENT 2026</p>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (Dynamic & Large) */}
      <div className="grid grid-cols-12 gap-10 mb-12 items-center">
        
        {/* Left: Product Image with Motion Blur Effect Background */}
        <div className="col-span-7 relative">
          <div className="absolute -inset-10 bg-slate-50 rounded-full scale-90 -z-10 border-4 border-dashed border-slate-100 rotate-45"></div>
          <div className="relative p-6">
            <img 
              src="axilflow3-removebg-preview.png" 
              alt="Industrial Axial Fan" 
              className="w-full h-[400px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]" 
            />
            {/* <img 
              src="axial Flow fan 2.jpg" 
              alt="Industrial Axial Fan" 
              className="w-fit h-fit object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]" 
            /> */}
          </div>
        </div>

        {/* Right: Bullet Focus */}
        <div className="col-span-5 space-y-10">
          <div className="relative">
            <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">Engineered for <br/> High-Pressure Flow.</h3>
            <p className="text-slate-500 text-sm leading-relaxed italic">
              Built for extreme environments, Filtotech Axial Fans offer superior aerodynamic efficiency with adjustable-pitch impellers for precise performance tuning.
            </p>
          </div>

          <div className="space-y-4">
             <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-yellow-400 flex items-center justify-center font-black transition-transform group-hover:rotate-90">
                   01
                </div>
                <p className="text-xs font-bold text-slate-700 uppercase">Aerofoil Blade Design</p>
             </div>
             <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center font-black transition-transform group-hover:rotate-90">
                   02
                </div>
                <p className="text-xs font-bold text-slate-700 uppercase">Direct & Belt Drive Options</p>
             </div>
             <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center font-black transition-transform group-hover:rotate-90">
                   03
                </div>
                <p className="text-xs font-bold text-slate-700 uppercase">Fire Rated (250°C / 2 hrs)</p>
             </div>
          </div>
        </div>
      </div>

      {/* 4. PERFORMANCE DATA GRID */}
      <div className="flex-grow">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
          {/* Decorative Grid Line */}
          <div className="absolute top-0 right-20 w-[1px] h-full bg-white/10"></div>
          
          <h4 className="text-[10px] font-black tracking-[0.4em] text-yellow-500 uppercase mb-8">Technical Matrix</h4>
          <div className="grid grid-cols-5 gap-4">
            {fanSpecs.map((spec, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-500 uppercase mb-2">{spec.label}</span>
                <span className="text-xs font-black text-white leading-tight uppercase tracking-tight">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-end">
        <div className="flex gap-12">
          <div className="flex flex-col">
             <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Testing</span>
             <span className="text-[10px] font-bold text-slate-700">AMCA 210 Standard</span>
          </div>
          <div className="flex flex-col">
             <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Balancing</span>
             <span className="text-[10px] font-bold text-slate-700">ISO 1940 G2.5 Grade</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
             <p className="text-[10px] font-black text-slate-900 uppercase">FILTOTECH AIR CONTROL SYSTEM</p>
             <p className="text-[9px] font-medium text-slate-400">Engineering Tomorrow's Airflow</p>
          </div>
          <span className="text-5xl font-black text-slate-100 leading-none">17</span>
        </div>
      </footer>
    </div>
  );
};

export default AxialFanLeaflet;