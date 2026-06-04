"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Check, Play, AppWindow, Star, QrCode } from "lucide-react";

const features = [
  "Offline access to all Wazaif and remedies",
  "Daily personalized morning/evening reminders",
  "Ad-free spiritual experience for clean dhikr",
  "Integrated interactive Tasbeeh & Qibla finder",
];

export default function DownloadAppPromo() {
  return (
    <section className="section-padding bg-white relative overflow-hidden py-24">
      {/* Light design filters */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Mockups */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Circular backdrop halo */}
          <div className="absolute w-72 h-72 rounded-full bg-emerald-800/10 blur-2xl pointer-events-none animate-pulse-glow" />

          {/* iPhone Mockup Frame */}
          <motion.div
            className="w-[280px] h-[560px] rounded-[50px] bg-emerald-950 p-3.5 shadow-2xl relative border-4 border-emerald-900 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {/* Dynamic Island Capsule */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30" />

            {/* Inner Phone Screen Content */}
            <div className="w-full h-full rounded-[38px] bg-cream-bg p-4 flex flex-col justify-between overflow-hidden relative">
              {/* Soft lighting */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Phone Header */}
              <div className="flex justify-between items-center pt-6 border-b border-emerald-800/5 pb-2">
                <span className="text-[10px] font-bold text-dark-emerald font-cinzel">ROHANI ILAJ</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[8px] text-muted-text uppercase font-bold">Safe Connection</span>
                </div>
              </div>

              {/* Phone Body items */}
              <div className="flex-1 flex flex-col justify-center gap-3 py-4">
                {/* Promo Card: Daily Hadith */}
                <div className="p-3 bg-white rounded-xl border border-emerald-800/5 shadow-sm space-y-1.5">
                  <span className="text-[8px] text-gold-accent font-bold uppercase tracking-wider block">Hadith of the Day</span>
                  <p className="text-[9px] leading-relaxed text-muted-text italic">"Dua is a shield for the believer, a pillar of religion, and a light of the heavens."</p>
                  <span className="text-[7px] text-emerald-800 font-bold block text-right">— Jami Al-Sagir</span>
                </div>

                {/* Promo Card: Active tasbeeh stats */}
                <div className="p-3 bg-[#064e3b] text-white rounded-xl shadow-md flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[8px] text-emerald-300 font-bold uppercase block">Alhamdulillah Recitations</span>
                    <span className="text-xs font-bold font-cinzel text-gold-accent">Session Complete</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-cinzel font-bold text-[10px] text-gold-accent border border-gold-accent/20">33</div>
                </div>

                {/* Promo Card: Request status */}
                <div className="p-2.5 bg-white rounded-xl border border-emerald-800/5 shadow-sm flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg bg-emerald-50 flex items-center justify-center text-primary-emerald text-[9px]">✓</div>
                  <div>
                    <span className="text-[9px] font-bold text-dark-emerald block">Oath Accepted</span>
                    <span className="text-[7px] text-muted-text block">You are now spiritually connected.</span>
                  </div>
                </div>
              </div>

              {/* Phone Navigation Bar */}
              <div className="flex justify-around items-center border-t border-emerald-800/5 pt-2">
                <span className="text-[10px] text-primary-emerald font-bold">🕌 Home</span>
                <span className="text-[10px] text-muted-text hover:text-primary-emerald">📿 Dhikr</span>
                <span className="text-[10px] text-muted-text hover:text-primary-emerald">📖 Wazaif</span>
              </div>
            </div>
          </motion.div>

          {/* Floating badge */}
          <div className="absolute bottom-12 -right-6 bg-white p-3 rounded-2xl shadow-2xl border border-emerald-800/10 flex items-center gap-2 animate-float">
            <div className="w-8 h-8 rounded-xl bg-gold-accent/15 flex items-center justify-center text-gold-accent">
              <Star className="w-4.5 h-4.5 fill-gold-accent" />
            </div>
            <div>
              <span className="block text-xs font-bold text-dark-emerald">User Rating</span>
              <span className="block text-[10px] text-muted-text font-bold">4.9/5 (10k+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Buttons */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5 text-gold-accent" />
            <span>Mobile Companion App</span>
          </div>

          <h2 className="font-cinzel text-3xl md:text-4xl font-extrabold text-dark-emerald tracking-wide">
            Your Spiritual Companion, <br />
            <span className="text-primary-emerald">Anytime, Anywhere</span>
          </h2>

          <p className="text-sm text-muted-text leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
            Download the official **Rohani Ilaj App** to carry authentic remedies, daily prayers, and digital tools in your pocket. Sync targets and keep track of your spiritual tasks.
          </p>

          {/* Features checkmark list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-50 border border-primary-emerald/20 flex items-center justify-center shrink-0 text-primary-emerald mt-0.5">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </div>
                <span className="text-xs font-medium text-dark-text/80 leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action buttons & QR */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4">
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 bg-[#0a0a0a] text-white hover:bg-black py-2.5 px-6 rounded-xl shadow-md border border-white/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-5 h-5 fill-white text-white shrink-0" />
                <div className="text-left leading-tight">
                  <span className="block text-[8px] uppercase tracking-wider opacity-60">Get it on</span>
                  <span className="block text-xs font-bold">Google Play Store</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 bg-[#0a0a0a] text-white hover:bg-black py-2.5 px-6 rounded-xl shadow-md border border-white/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <AppWindow className="w-5 h-5 text-white shrink-0" />
                <div className="text-left leading-tight">
                  <span className="block text-[8px] uppercase tracking-wider opacity-60">Download on the</span>
                  <span className="block text-xs font-bold">Apple App Store</span>
                </div>
              </a>
            </div>

            {/* QR Code Graphic */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-800/10">
              <div className="w-16 h-16 rounded-xl bg-white border border-emerald-800/10 flex items-center justify-center shadow-inner text-emerald-800">
                <QrCode className="w-10 h-10 text-emerald-800" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-dark-emerald">Scan QR Code</span>
                <span className="block text-[10px] text-muted-text max-w-[120px] leading-tight mt-0.5">
                  Point camera to download directly on iOS & Android devices.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
