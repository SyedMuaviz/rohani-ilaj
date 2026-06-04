"use client";

import React from "react";
import Link from "next/link"; // Wait, in Next.js, Link is imported from "next/link", let me use "next/link".
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Smartphone, Star, CheckCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

 

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-24 bg-gradient-to-br from-[#f5f8f7] via-emerald-50/20 to-[#FAF9F6]">
      {/* Background Star Geometry Patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none select-none flex items-center justify-center">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-emerald-950 animate-spin-slow">
          <polygon points="50,5 90,30 90,75 50,95 10,75 10,30" strokeWidth="0.5" />
          <polygon points="50,95 90,70 90,25 50,5 10,25 10,70" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Radiant Glow Spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-700/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-accent/5 blur-[100px] pointer-events-none" />

      {/* Floating Lanterns (SVG vectors) */}
      <div className="absolute top-12 left-10 md:left-24 z-10 animate-float pointer-events-none select-none hidden sm:block">
        <svg width="45" height="90" viewBox="0 0 45 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          {/* Lantern Top cap */}
          <path d="M22.5 5V18M12.5 18C12.5 12 22.5 8 22.5 8C22.5 8 32.5 12 32.5 18H12.5Z" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
          {/* Glass body */}
          <path d="M10 18L13 46H32L35 18H10Z" fill="rgba(250, 249, 246, 0.4)" stroke="#0F766E" strokeWidth="1.5" />
          {/* Inner Light Glow */}
          <circle cx="22.5" cy="30" r="10" fill="#D4AF37" className="animate-pulse-glow" opacity="0.8" />
          {/* Bottom cap */}
          <path d="M13 46C13 52 22.5 56 22.5 56C22.5 56 32 52 32 46H13Z" fill="#D4AF37" />
          {/* Bottom tassel */}
          <path d="M22.5 56V72M22.5 72L18.5 82M22.5 72L26.5 82" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute top-24 right-10 md:right-32 z-10 animate-float-delayed pointer-events-none select-none hidden sm:block">
        <svg width="35" height="70" viewBox="0 0 45 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <path d="M22.5 5V18M12.5 18C12.5 12 22.5 8 22.5 8C22.5 8 32.5 12 32.5 18H12.5Z" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 18L13 46H32L35 18H10Z" fill="rgba(250, 249, 246, 0.4)" stroke="#0F766E" strokeWidth="1.5" />
          <circle cx="22.5" cy="30" r="8" fill="#D4AF37" className="animate-pulse-glow" opacity="0.9" />
          <path d="M13 46C13 52 22.5 56 22.5 56C22.5 56 32 52 32 46H13Z" fill="#D4AF37" />
          <path d="M22.5 56V72" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Content */}
        <motion.div
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-900/5 border border-emerald-800/10 text-emerald-800 font-semibold text-xs tracking-wider uppercase mx-auto lg:mx-0 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-accent" />
            <span>Trusted Spiritual Guidance Portal</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-dark-emerald tracking-wide leading-tight"
          >
            Spiritual Guidance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-primary-emerald to-gold-accent relative">
              For Everyday Life
              <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-gold-accent/25 rounded-full" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-muted-text text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            Discover verified Rohani Ilaj remedies, explore daily Wazaif, submit Online Istikhara requests, and learn authentic Islamic guidance, inspired by peaceful spiritual values.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="/rohani-ilaj"
              className="group flex items-center gap-2 bg-gradient-to-r from-emerald-800 to-primary-emerald hover:from-primary-emerald hover:to-emerald-800 text-white font-bold py-3.5 px-8 rounded-2xl shadow-xl shadow-emerald-800/20 border border-gold-accent/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto text-center justify-center"
            >
              Get Spiritual Cures
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/download-app"
              className="flex items-center justify-center gap-2 bg-white hover:bg-emerald-50/50 text-dark-emerald font-bold py-3.5 px-8 rounded-2xl shadow-lg border border-emerald-800/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
            >
              <Smartphone className="w-4.5 h-4.5 text-primary-emerald" />
              Download App
            </a>
          </motion.div>

          {/* Key Quick Bullet Points */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-emerald-800/10 max-w-lg mx-auto lg:mx-0"
          >
            <div className="space-y-1">
              <span className="block font-cinzel text-xl sm:text-2xl font-bold text-dark-emerald">50k+</span>
              <span className="block text-[11px] text-muted-text uppercase font-bold tracking-wider">Mureeds Joined</span>
            </div>
            <div className="space-y-1">
              <span className="block font-cinzel text-xl sm:text-2xl font-bold text-dark-emerald">99%</span>
              <span className="block text-[11px] text-muted-text uppercase font-bold tracking-wider">Spiritual Rest</span>
            </div>
            <div className="space-y-1">
              <span className="block font-cinzel text-xl sm:text-2xl font-bold text-dark-emerald">100%</span>
              <span className="block text-[11px] text-muted-text uppercase font-bold tracking-wider">Free Services</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Visual Graphic */}
        <motion.div
          className="lg:col-span-5 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
        >
          {/* Rotating Geometric Aura behind */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-spin-slow opacity-15">
            <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#064E3B" strokeWidth="0.8">
              <rect x="15" y="15" width="70" height="70" transform="rotate(45 50 50)" />
              <rect x="15" y="15" width="70" height="70" transform="rotate(22.5 50 50)" />
              <rect x="15" y="15" width="70" height="70" transform="rotate(67.5 50 50)" />
            </svg>
          </div>

          {/* Central Glassmorphic Portal Mockup */}
          <div className="relative z-10 w-[290px] sm:w-[320px] h-[450px] sm:h-[500px] rounded-[40px] bg-gradient-to-b from-white/80 to-white/40 border border-white/60 shadow-2xl p-6 flex flex-col justify-between overflow-hidden gold-border-glow">
            {/* Soft inner lighting */}
            <div className="absolute top-[-50px] left-[-50px] w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 rounded-full bg-gold-accent/15 blur-3xl pointer-events-none" />

            {/* Simulated App Header */}
            <div className="flex items-center justify-between border-b border-emerald-800/5 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-gold-accent text-xs font-bold">RI</div>
                <div>
                  <span className="font-cinzel text-xs font-bold text-dark-emerald block">ROHANI ILAJ</span>
                  <span className="text-[8px] text-muted-text block leading-none">Spiritual App</span>
                </div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-800/10 text-emerald-800 font-bold tracking-wider">LIVE</span>
            </div>

            {/* Main Mockup Screen Element */}
            <div className="flex-1 py-4 flex flex-col justify-center gap-4">
              {/* Daily Wazeefa card */}
              <div className="p-3.5 rounded-2xl bg-white/60 border border-white/80 shadow-md space-y-1">
                <span className="text-[9px] text-gold-accent font-bold tracking-widest uppercase">Morning Adhkar</span>
                <h4 className="text-xs font-bold text-dark-emerald">Ya Salamu Ya Shafiyyu</h4>
                <p className="text-[10px] text-arabic text-right text-emerald-800 font-bold leading-normal">يَا سَلَامُ يَا شَافِيُّ</p>
                <div className="h-1 w-full bg-emerald-100 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-gradient-to-r from-emerald-800 to-gold-accent w-2/3" />
                </div>
              </div>

              {/* Dynamic Tracker */}
              <div className="p-3.5 rounded-2xl bg-[#064e3b] text-white shadow-md space-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8 pointer-events-none" />
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-emerald-300 font-bold uppercase">Next Prayer</span>
                  <span className="text-[8px] text-gold-accent font-bold">12 mins remaining</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-cinzel font-bold text-gold-accent">Asr Prayer</h4>
                  <span className="text-xs font-bold text-emerald-100">04:45 PM</span>
                </div>
              </div>

              {/* Success Badge */}
              <div className="flex items-center gap-2 bg-white/60 p-2.5 rounded-xl border border-white/80 shadow-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="block text-[9px] font-bold text-dark-emerald">Istikhara Submitted</span>
                  <span className="block text-[8px] text-muted-text">Assigned to Spiritual Advisor</span>
                </div>
              </div>
            </div>

            {/* Mockup Action Button */}
            <a
              href="/rohani-ilaj"
              className="w-full py-2.5 bg-gradient-to-r from-emerald-800 to-primary-emerald hover:from-primary-emerald hover:to-emerald-800 text-white font-bold text-xs rounded-xl shadow-md text-center transition-all duration-200"
            >
              Explore Digital Counter
            </a>
          </div>

          {/* Side Floating Accents (Islamic stars) */}
          <div className="absolute top-1/4 -right-4 bg-white p-2.5 rounded-2xl shadow-xl border border-emerald-500/10 flex items-center gap-1.5 animate-float hidden md:flex">
            <div className="w-6 h-6 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent">★</div>
            <span className="text-[10px] font-bold text-dark-emerald">Tib-e-Nabwi Approved</span>
          </div>

          <div className="absolute bottom-1/4 -left-6 bg-white p-2.5 rounded-2xl shadow-xl border border-emerald-500/10 flex items-center gap-1.5 animate-float-delayed hidden md:flex">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-primary-emerald">✔</div>
            <span className="text-[10px] font-bold text-dark-emerald">100% Free of Cost</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
