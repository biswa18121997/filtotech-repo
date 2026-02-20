export const CatalogFooter = ({ pageNumber = "01" }) => (
  <footer className="mt-auto pt-6 border-t-2 border-slate-900">
    <div className="flex justify-between items-end">
      <div className="grid grid-cols-3 gap-8 flex-grow">
        <div>
          <p className="text-[8px] font-black text-gray-400 uppercase">Headquarters</p>
          <p className="text-[10px] text-gray-700 font-medium">Astra Tower, Action Area 2C, Kolkata</p>
        </div>
        <div>
          <p className="text-[8px] font-black text-gray-400 uppercase">Contact</p>
          <p className="text-[10px] text-gray-700 font-medium">sales@filtotech.com | www.filtotech.com</p>
        </div>
        <div>
          <p className="text-[8px] font-black text-gray-400 uppercase">Compliance</p>
          <p className="text-[10px] text-gray-700 font-medium font-bold">ISO 9001:2015 | CE Certified</p>
        </div>
      </div>
      <div className="flex items-baseline gap-1 pl-10 border-l border-gray-100">
        <span className="text-[10px] text-gray-400 uppercase font-bold">Page</span>
        <span className="text-3xl font-black text-slate-800 leading-none">{pageNumber}</span>
      </div>
    </div>
  </footer>
);