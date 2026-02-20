

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const FiltotechBanner = () => {
  return (
    <div className="relative w-full h-auto max-w-6xl mx-auto aspect-[1.5/1.10] bg-white overflow-hidden font-sans border border-gray-200 shadow-2xl text-[#1e3a8a]">
      {/* Background Overlay / Watermark Effect */}
      <div className="absolute top-[0%] inset-0 opacity-20 pointer-events-none w-full h-full">
        <img src="FB-COVER.png" alt="background gear" className="object-cover w-full h-full" />
      </div>

      {/* Header Section */}
      <div className="flex items-center justify-between shadow-sm shadow-black relative z-10 p-6 flex justify-between items-start">
        <div className="flex gap-12">
          <img src="ipa-logo.png" alt="IPA Logo" className="h-50 w-50" />
          <img src="ipa-kol.png" alt="IPA Convention Logo" className="h-50 w-50 rounded-full scale-120" />
          <img src='FiltotechNewLogo.png' alt="filtotech new logo" className='h-35 relative top-5 w-85' />
        </div>
        {/* <hr /> */}
        {/* <br /> */}


        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
             {/* <img src="footer-logo.png" alt="Filtotech Logo" className="h-10" />
             <div className="text-xs font-bold leading-tight">
               Filtotech Air Control<br/>System Pvt. Ltd.
             </div> */}
          </div>
          {/* <p className="text-[10px] italic mt-1">whenever you think environmenat terrol think of us</p> */}
        </div>
      </div>

      {/* Ribbon Tag (Top Right) */}
      <div className="absolute top-30 right-0 -translate-x-10 bg-[#1e40af] text-white py-8 px-12 rotate-45 translate-x-12 -translate-y-8 shadow-lg">
        <span className="font-bold text-sm tracking-widest">IPA ANNUAL CONVENTION EXPO</span>
      </div>

      {/* Slogan Bar */}
      <div className="relative flex flex:auto z-10 px-8">
                <div className="">
          <h1 className="border-r-1 p-2 text-4xl font-extrabold tracking-tight flex flex-col leading-none">
            <span className="text-gray-600 text-3xl font-bold">FILTOTECH <span className="text-[#1d4ed8]"> WELCOMES</span></span>
            
            <span className="text-[#1d4ed8] text-5xl mt-1">IPA ANNUAL</span>
            <span className="text-[#1d4ed8] text-5xl">CONVENTION EXPO-2026</span>
          </h1>
        </div>
        <div>
        <p className="italic font-black text-2xl text-[#ef4444] uppercase">
          Optimizing Air, Energy & Process <span className="text-[#1e3a8a] not-italic">For Pharma.</span>
        </p>
        <div className="inline-block bg-[#4f46e5] text-white px- py-1 text-lg font-bold mt-2 rounded-r-lg p-2 tracking-wide">
          TRANSFORMING PHARMACEUTICALS INDUSTRIES WITH <span className='text-2xl text-neutral-400 pl-10 rounded-l-lg'>NextGen</span>Technology
        </div>
         <ul className="mt-2 space-y-1 text-sm font-semibold">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            Engineering <span className="text-blue-700">GMP-Compliant Environments</span> for Pharma Excellence
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            Next-Generation Controlled Environments for <span className="text-blue-700">Modern Pharma Manufacturing</span>
          </li>
        </ul>
        </div>
               
      </div>

      {/* Date and Highlights */}
      <div className="relative z-10 flex justify-between items-center px-8 mt-4">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#f97316] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">01</div>
            <div className="leading-tight font-bold text-s`m">PRECISION<br/>DESIGN</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#2563eb] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">02</div>
            <div className="leading-tight font-bold text-sm">SMART<br/>FILTRATION</div>
          </div>
        </div>
        <div className="text-3xl font-black text-black">
          14 & 15 MARCH 2026
        </div>
      </div>
<h1 className='text-lg font-semibold mt-2 pl-4'>Leader in Our Product Ranges</h1>
      {/* Product Images Grid (Center) */}
      <div className="relative  grid grid-cols-4 gap-4 px-8 mt-6">
         <img src="air2-Photoroom.png" alt="Product 1" className="w-40 h-40 rounded shadow-sm border border-gray-100" />
         <img src="Laminar-Flow1.jpeg" alt="Product 2" className="w-40 h-40 rounded shadow-sm border border-gray-100" />
         <img src="passbox2.jpeg" alt="Product 3" className="rounded w-40 h-40 shadow-sm border border-gray-100" />
         <img src="Centrifugal Blower 1.webp" alt="Product 4" className="rounded w-40 h-40 shadow-sm border border-gray-100" />
      </div>

      {/* Credentials Section */}
      

      {/* Footer Info & Stats */}
      <div className="absolute bottom-0 w-full bg-[#f8fafc] border-t border-gray-200 p-4 flex justify-between items-end">
        <div className="bg-[#1e3a8a] text-white p-4 rounded-tr-3xl -ml-4 -mb-4 pr-12">
          <h4 className="font-bold text-lg mb-2">Get in Touch</h4>
          <div className="text-xs space-y-1">
            <p className="flex items-center gap-2"><Phone size={12}/> +91 9830029642</p>
            <p className="flex items-center gap-2"><Mail size={12}/> sales@filtotech.co.in</p>
            <p className="flex items-center gap-2 max-w-[250px]"><MapPin size={12}/> ASO-111, Astra Towers, Rajarhat, Kolkata - 700161</p>
          </div>
        </div>
        <div className="relative z-10 px-8 mt-6">
        <div className="flex items-start gap-2">
          <MapPin className="text-red-500 w-5 h-5 mt-1" />
          <div>
            <h3 className="text-xl font-bold">Leader in Air Control Systems</h3>
            <p className="font-bold text-blue-800">Whole of Eastern India</p>
          </div>
        </div>
 
      </div>

        <div className="flex gap-8 mb-2">
          <div className="text-center border-l-2 border-gray-300 pl-4">
            <p className="text-[10px] font-bold uppercase">Industry Experience</p>
            <p className="text-3xl font-black">20+</p>
            <p className="text-[10px] font-bold">YEARS</p>
          </div>
          <div className="text-center border-l-2 border-gray-300 pl-4">
            <p className="text-[10px] font-bold uppercase">Projects Delivered</p>
            <p className="text-3xl font-black">500+</p>
          </div>
          <div className="text-center border-l-2 border-gray-300 pl-4 pr-4">
             <div className="w-16 h-16 rounded-full border-2 border-blue-800 flex items-center justify-center text-[10px] font-bold leading-tight text-center p-1 uppercase">
               Regional Leadership
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltotechBanner;








