"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-slate-50 md:mt-15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                Get in Touch with <br />
                <span className="text-blue-600">Our Experts</span>
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Have a technical inquiry or need a quote for a product and/or solution or service and/or project? 
                Our engineering team is ready to assist you.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Phone className="text-blue-600" />, title: "Call Us", detail: "+91 (800) 123-4567" },
                { icon: <Mail className="text-blue-600" />, title: "Email Us", detail: "info@filtotech.co.in" },
                { icon: <MapPin className="text-blue-600" />, title: "Visit Us", detail: "Maharashtra, India" },
                { icon: <Clock className="text-blue-600" />, title: "Work Hours", detail: "Mon - Sat: 9AM - 6PM" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Global Presence indicator */}
            <div className="p-6 bg-slate-900 rounded-2xl text-white flex items-center gap-6">
              <div className="p-3 bg-blue-600 rounded-full">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Serving Clients</p>
                <p className="font-semibold text-lg">Worldwide Export Available</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Company</label>
                  <input 
                    type="text" 
                    placeholder="Pharma Solutions Ltd"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                  <option>HVAC Systems</option>
                  <option>Clean Room Design</option>
                  <option>Air Handling Units</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}