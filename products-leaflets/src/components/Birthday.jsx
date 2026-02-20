import React from 'react';
// import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, PartyPopper } from 'lucide-react';

const BirthdayCard = () => {
  const details = {
    name: "Riddhit",
    date: "Wednesday, 5th March, 2025",
    time: "6:00 PM",
    venue: "SGIL Residenzza Complex",
    address: "3 no Airport (Opposite of Hazarduari Hotel), Kolkata, 700081",
    // Replace with the actual image of Riddhit
    image: "/path-to-your-image.jpg" 
  };

  const balloonBg = "—Pngtree—beautiful colorful birthday balloons_9005313.png";

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 font-sans bg-fixed bg-center bg-repeat bg-[url(—Pngtree—beautiful colorful birthday balloons_9005313.png)]"
    //   style={{ backgroundImage: `url(${BALLONS.webp})`, backgroundSize: '400px' }}
    >
      {/* Semi-transparent Overlay to make the card pop against the busy background */}
      <div className="absolute inset-0 bg-white/30 " />
<img src='BALLONS.webp' alt='Background' className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-md w-full bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden"
      >
        {/* Profile Image Section with Decorative Border */}
        <div className="relative h-80 p-4">
          <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-inner bg-gray-100">
             <img 
              src={details.image} 
              alt={details.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Badge */}
          <div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 font-black px-6 py-2 rounded-full shadow-lg border-2 border-white transform rotate-12"
          >
            YOU'RE INVITED!
          </div>
        </div>

        {/* Text Content */}
        <div className="px-8 pb-8 pt-2 text-center bg-[url(—Pngtree—beautiful colorful birthday balloons_9005313.png)]">
          <div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 mb-1">
              {details.name}
            </h1>
            <p className="text-gray-600 font-bold tracking-[0.2em] text-xs uppercase mb-6">
              Is turning <span className="text-red-500 text-lg">10</span>
            </p>
          </div>

          <div className="space-y-4 text-left bg-white/50 p-6 rounded-3xl border border-white/60">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-2.5 rounded-xl text-white">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase leading-none mb-1">Date</p>
                <p className="text-gray-800 font-bold text-sm">{details.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-2.5 rounded-xl text-white">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase leading-none mb-1">Time</p>
                <p className="text-gray-800 font-bold text-sm">{details.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 p-2.5 rounded-xl text-white">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase leading-none mb-1">Location</p>
                <p className="text-gray-800 font-bold text-sm leading-tight">{details.venue}</p>
                <p className="text-gray-500 text-[11px] mt-1 italic">{details.address}</p>
              </div>
            </div>
          </div>

          <button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-8 bg-black text-white font-extrabold py-4 rounded-2xl flex items-center justify-center gap-2 tracking-wide"
            onClick={() => window.open('https://maps.google.com', '_blank')}
          >
            <PartyPopper size={20} />
            SEE YOU THERE!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;