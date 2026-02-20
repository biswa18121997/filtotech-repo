import React from 'react';
import { 
  ShieldCheck, Settings, Clock, CheckCircle2, 
  Layers, QrCode, LayoutGrid, Zap, AirVent
} from 'lucide-react';

const FiltotechTechnicalBanner = () => {
  const ahFueatures = [
    "Energy-efficient design for cost savings",
    "Customizable options to meet specific requirements",
    "Advanced filtration for air quality",
    "Precise control for optimal performance"
  ];

  const ahuBenefits = [
    "Improved IAQ for healthier environments",
    "Energy savings through efficient operation",
    "Enhanced thermal comfort control",
    "Reduced long-term maintenance costs"
  ];

  const ahuApplications = [
    "Commercial & Data Centers",
    "Hospitals & Healthcare",
    "Manufacturing & Industrial",
    "Hotels & Hospitality"
  ];

  return (
    <>
      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .no-print { display: none; }
        }
      `}</style>

      {/* Main Container - Strict A4 Dimensions */}
      <div className="w-[210mm] h-[297mm] bg-white text-slate-800 font-sans flex flex-col overflow-hidden shadow-none mx-auto border-0">
        
        {/* Modernized Header */}
        <header className="relative h-[180px] text-white flex items-center px-12 overflow- bg-slate-900">
          <div 
            className="absolute inset-0 z-0 opacity-40"
            style={{
              background: `radial-gradient(circle at 20% 50%, #2563eb 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1e40af 0%, transparent 50%)`,
            }}
          />
          
          <div className="relative z-10 flex justify-between items-center w-full">
            <div className="flex flex-col gap-2">
               <img src='FiltotechNewLogo.png' alt="Logo" className='h-24 w-auto ' />
               <div className="h-1 w-24 bg-blue-500 rounded-full" />
            </div>

            <div className="text-right">
              <p className="text-blue-400 text-xs uppercase tracking-[0.4em] font-bold mb-1">Technical Datasheet</p>
              <h1 className="text-4xl font-black tracking-tighter">SERIES-2024</h1>
              <p className="text-white/60 text-sm font-mono mt-1 italic">High-Efficiency AHU Systems</p>
            </div>
          </div>
        </header>

        <div className="flex flex-row flex-1  h-fit">
          
          {/* LEFT COLUMN */}
          <div className="w-[42%] p-8 flex flex-col gap-6 bg-slate-50/50 border-r border-slate-100">
            
            <section>
              <h2 className="text-blue-700 font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                <AirVent size={14}/> Profile
              </h2>
              <p className="text-slate-600 leading-relaxed text-xs">
                Engineered for peak performance, Filtotech AHUs provide superior indoor air quality and climate control through advanced filtration and thermal management.
              </p>
            </section>

            <div className="space-y-5">
              <ListSection title="Core Features" items={ahFueatures} icon={<ShieldCheck className="text-blue-600" size={16} />} />
              <ListSection title="Key Benefits" items={ahuBenefits} icon={<CheckCircle2 className="text-green-600" size={16} />} />
              <ListSection title="Applications" items={ahuApplications} icon={<LayoutGrid className="text-slate-600" size={16} />} />
            </div>

            {/* Compressed Service Section */}
            <section className="mt-4 pt-4 border-t border-slate-200">
               <h2 className="text-blue-700 font-black text-[10px] uppercase tracking-widest mb-3">Service Excellence</h2>
               <div className="grid grid-cols-1 gap-2">
                  <CompactService icon={<Clock size={14}/>} title="24/7 Support" />
                  <CompactService icon={<ShieldCheck size={14}/>} title="Certified Quality" />
               </div>
            </section>

            <div className="mt-auto bg-slate-900 p-4 rounded-xl text-white flex items-center justify-between">
              <div>
                <p className="text-[9px] uppercase text-blue-400 font-bold">Contact Sales</p>
                <p className="text-sm font-bold">sales@filtotech.com</p>
              </div>
              <QrCode className="text-white opacity-80" size={24} />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 p-8 flex flex-col gap-6">
            
            <section>
              <h2 className="text-blue-700 font-black text-[10px] uppercase tracking-widest mb-4">Technical Specifications</h2>
              <div className="grid grid-cols-1 gap-1">
                <SpecRow label="Airflow Capacity" value="500 – 50,000 CFM" />
                <SpecRow label="Casing" value="Double Skin (30-50mm)" />
                <SpecRow label="Material" value="Thermal Break Aluminum" />
                <SpecRow label="Filtration" value="3-Stage HEPA Compatible" />
              </div>
            </section>

            <section className="flex-1">
              <h2 className="text-blue-700 font-black text-[10px] uppercase tracking-widest mb-4">Product Showcase</h2>
              <div className="grid grid-rows-2 gap-3 h-[420px]">
                <div className="grid grid-cols-2 gap-3">
                  <ShowcaseImage src="AHU-exterior.jpeg" label="EXTERIOR" />
                  <ShowcaseImage src="air2-Photoroom.png" label="INTERNAL" />
                </div>
                <ShowcaseImage src="AHU-Internal2.jpeg" label="TECHNICAL CONFIGURATION" />
              </div>
            </section>

            {/* Professional Footer Stats */}
            <div className="grid grid-cols-2 gap-3">
              <StatBox icon={<Layers size={18}/>} title="Modular" desc="Flexible Design" />
              <StatBox icon={<Zap size={18}/>} title="Efficient" desc="IE3/IE4 Motors" />
            </div>
          </div>
        </div>
      </div>    
      <button onClick={()=>window.print()}>Print mee....</button>
    </>
  );
};

/* --- Helper Components for Clean Code --- */

const ListSection = ({ title, items, icon }) => (
  <section>
    <h3 className="text-slate-900 font-bold text-xs border-b border-slate-200 pb-1 mb-2 uppercase tracking-wide">{title}</h3>
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-2 mb-1">
        {icon}
        <p className="text-slate-600 text-[11px] leading-tight">{item}</p>
      </div>
    ))}
  </section>
);

const SpecRow = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-slate-100 text-[11px]">
    <span className="text-slate-500 font-medium">{label}</span>
    <span className="text-slate-900 font-bold">{value}</span>
  </div>
);

const ShowcaseImage = ({ src, label }) => (
  <div className="relative rounded-lg  border border-slate-200 bg-slate-50 group">
    <img src={src} className="w-full h-full object-cover" alt={label} />
    <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-[8px] text-white px-2 py-0.5 rounded font-bold tracking-widest uppercase">
      {label}
    </div>
  </div>
);

const CompactService = ({ icon, title }) => (
  <div className="flex items-center gap-2 text-slate-600">
    <div className="p-1 bg-blue-50 rounded text-blue-600">{icon}</div>
    <span className="text-[10px] font-bold uppercase">{title}</span>
  </div>
);

const StatBox = ({ icon, title, desc }) => (
  <div className="p-3 rounded-lg border border-slate-100 bg-slate-50 flex items-center gap-3">
    <div className="text-blue-600">{icon}</div>
    <div>
      <p className="text-[10px] font-black text-slate-800 uppercase leading-none">{title}</p>
      <p className="text-[9px] text-slate-500">{desc}</p>
    </div>
  </div>
);

export default FiltotechTechnicalBanner;
