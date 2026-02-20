export const CatalogHeader = ({ category = "Industrial Solutions", modelCode = "FT-2026" }) => (
  <header className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
    <div className="flex flex-col">
      <img src="footer-logo.png" alt="Filtotech" className="h-8 w-auto mb-1 object-contain" />
      <span className="text-[10px] font-bold text-blue-600 tracking-[0.3em] uppercase">{category}</span>
    </div>
    <div className="text-right">
      <p className="text-[10px] font-black text-gray-300 uppercase leading-none mb-1">Authentic Engineering</p>
      <div className="bg-slate-900 text-white px-3 py-1 text-[11px] font-bold tracking-tighter rounded-sm">
        {modelCode}
      </div>
    </div>
  </header>
);