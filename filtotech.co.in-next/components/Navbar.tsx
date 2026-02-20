"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Facebook, Linkedin, Twitter, 
  ChevronDown, Menu, X, Wind, ShieldCheck, Settings 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// Using standard Shadcn-like utility classes
const Navbar = () => {
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { 
      title: "Services & Solutions", 
      submenu: ["HVAC Systems", "BMS & EMS", "Electrical", "Clean Rooms", "Process Piping"] 
    },
    { 
      title: "Products", 
      submenu: ["Air Handling Units", "Centrifugal Fan", "Axial Flow Fan", "Wet Scrubber", "Passbox"] 
    },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 shadow-sm">
      {/* PART 1: TOP BAR (Certifications & Contact) */}
      <section className="relative overflow-hidden bg-zinc-950 text-zinc-400 border-b border-white/5">
  {/* Sublte mesh gradient background for texture */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,#3b82f6,transparent_50%)]" />

  <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
    
    {/* LEFT SIDE: The "Cutout" ISO Badge */}
    <div className="relative">
      {/* This creates the slanted background effect */}
      <div 
        className="absolute inset-y-0 -left-10 right-[-20px] bg-blue-600/10 border-r border-blue-500/30 transform skew-x-[-20deg]" 
      />
      
      <div className="relative py-2.5 flex items-center gap-2">
        <div className="bg-blue-950 p-1 rounded shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          <ShieldCheck className="text-white w-3.5 h-3.5 md:w-4 md:h-4" />
        </div>
        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
          <span className="text-blue-400">ISO 9001 : 2015</span> 
          <span className="hidden sm:inline text-zinc-300"> & CE Certified</span>
        </span>
      </div>
    </div>

    {/* RIGHT SIDE: Interactive Contact Info */}
    <div className="flex items-center gap-4 lg:gap-8 py-2">
      <address className="not-italic hidden sm:flex items-center gap-4 md:gap-6 text-[11px] md:text-xs font-medium">
        <a 
          href="tel:+917003259863" 
          className="group flex items-center gap-2 hover:text-white transition-all"
        >
          <span className="bg-zinc-800 p-1.5 rounded-full group-hover:bg-blue-600 transition-colors">
            <Phone size={12} className="text-blue-400 group-hover:text-white" />
          </span>
          <span className="hidden lg:inline">+91-7003259863</span>
        </a>
        
        <a 
          href="mailto:sales@filtotech.co.in" 
          className="group flex items-center gap-2 hover:text-white transition-all border-l border-zinc-800 pl-4 md:pl-6"
        >
          <span className="bg-zinc-800 p-1.5 rounded-full group-hover:bg-blue-600 transition-colors">
            <Mail size={12} className="text-blue-400 group-hover:text-white" />
          </span>
          <span className="hidden lg:inline">sales@filtotech.co.in</span>
        </a>
      </address>

      {/* Social Links with Hover Glow */}
      <div className="flex gap-4 border-l border-zinc-800 pl-4 md:pl-6 bg-white/10 h-full w-full">
        <Link href={'https://www.facebook.com/profile.php?id=61587887188009'}>
            <Facebook size={14} className="hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] cursor-pointer transition-all" />
        </Link>
        <Link href={'https://www.facebook.com/profile.php?id=61587887188009'}>

            <Linkedin size={14} className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] cursor-pointer transition-all" />
        </Link>
        <Link href={'https://x.com/filtotech'} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#faf9f9" className="bi bi-twitter-x text-white" viewBox="0 0 16 16" id="Twitter-X--Streamline-Bootstrap" ><desc>{"\n    Twitter X Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" strokeWidth={1} /></svg>
                    {/* <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-18jsvk2 r-16y2uox r-8kz0gk"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg> */}
            {/* // <Image alt='twitter-logo' src={'/XLogo.png'} height={14} width={14} className="text-white" /> */}
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* PART 2: MAIN NAVIGATION */}
      <nav className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo with Engineering Detail */}
          <div className="flex items-center gap-3">
            <Image src="/FiltotechNewLogo.png" alt="Filtotech Logo" width={250} height={70} className=" p-2 object-contain" />
            {/* <div className="relative">
              <Wind className="w-8 h-8 text-blue-600 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tighter text-zinc-900 leading-none uppercase">
                Filtotech
              </h1>
              <span className="text-[10px] font-bold text-blue-600 tracking-[0.25em] uppercase">
                Air Control Systems
              </span>
            </div> */}
          </div>

          {/* Desktop Menu Items */}
          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.title} className="relative group py-2">
                <a href={item.href || "#"} className="flex items-center gap-1 text-sm font-semibold text-zinc-700 hover:text-blue-600 transition-colors">
                  {item.title}
                  {item.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </a>
                
                {/* Shadcn-style Dropdown Animation */}
                {item.submenu && (
                  <ul className="absolute top-full left-0 w-64 bg-white border border-zinc-200 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 rounded-lg p-2">
                    {item.submenu.map((sub) => (
                      <li key={sub}>
                        <a href="#" className="block px-4 py-2.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-md transition-all">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <button className="hidden lg:block bg-blue-600 text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
            GET A QUOTE
          </button>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl uppercase">Filtotech</span>
              <X onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.title} className="border-b border-zinc-100 pb-2">
                  <div className="flex justify-between font-bold text-zinc-800">
                    {item.title}
                    {item.submenu && <ChevronDown size={18} />}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;