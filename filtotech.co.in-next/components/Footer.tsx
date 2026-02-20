"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
const footerData = {
  solutions: [
    { name: "HVAC Systems", href: "/hvac-systems.php" },
    { name: "Clean Rooms", href: "/clean-rooms.php" },
    { name: "Process Piping", href: "/piping.php" },
    { name: "Electrical Solutions", href: "/electrical.php" },
    { name: "BMS & EMS", href: "/building-management-system-hvac.php" },
  ],
  products: [
    { name: "Air Handling Units", href: "/air-handling-units.php" },
    { name: "Laminar Air Flow", href: "/laminar-flow.php" },
    { name: "Pass Boxes", href: "/passbox.php" },
    { name: "Centrifugal Fans", href: "/centrifugal-fan.php" },
    { name: "Dust Collectors", href: "/dust-collector.php" },
  ],
  company: [
    { name: "About Us", href: "/about-us.php" },
    { name: "Validation", href: "/validation.php" },
    { name: "Knowledge Sharing", href: "/knowledge-sharing.php" },
    { name: "Technical Specs", href: "/technical-specifications.php" },
    { name: "Contact Us", href: "/contact-us.php" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tighter">
            <Image src={'/notextlogo.png'} height={20} width={20} alt="filtotech logo" className="fixed"/>
            FILTOTECH Air Control System<span className="text-blue-500">.</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Leading manufacturers of high-performance HVAC systems, clean room solutions, 
            and industrial ventilation equipment for pharmaceutical and sterile environments.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3 group cursor-pointer">
              <Phone size={16} className="text-blue-500" />
              <span className="group-hover:text-white transition-colors">Contact Support</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-blue-500" />
              <span>info@filtotech.co.in</span>
            </div>
          </div>
        </div>

        {/* Dynamic Link Columns */}
        {[
          { title: "Core Solutions", links: footerData.solutions },
          { title: "Key Products", links: footerData.products },
          { title: "Quick Links", links: footerData.company }
        ].map((column, idx) => (
          <div key={idx}>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">
              {column.title}
            </h3>
            <ul className="space-y-4">
              {column.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 hover:text-white transition-all duration-300">
                    <motion.span 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
        <p>© 2026 Filtotech Air Control System Pvt Ltd. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact-us.php" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;