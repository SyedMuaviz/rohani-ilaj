"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Star } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed successfully! JazakAllah Khair for joining our newsletter.");
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-t from-[#032e22] to-[#064e3b] text-white overflow-hidden pt-20">
      {/* Decorative Top Arch Overlay */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#FAF9F6]/10 to-transparent pointer-events-none" />

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        {/* Info Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-600 to-primary-emerald flex items-center justify-center border border-gold-accent/40 shadow-inner">
              <Star className="w-4 h-4 text-gold-accent fill-gold-accent" />
            </div>
            <div>
              <span className="font-cinzel text-lg font-bold tracking-wider text-gold-accent block leading-none">
                ROHANI ILAJ
              </span>
              <span className="text-[9px] tracking-widest text-emerald-200 uppercase font-medium">
                Spiritual Healing & Guidance
              </span>
            </div>
          </div>
          <p className="text-sm text-emerald-100/80 leading-relaxed font-sans">
            A premium digital gateway providing authentic, non-political Islamic remedies, daily Wazaif, and verified Istikhara guidance to enrich your spiritual well-being.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-gold-accent/20 border border-white/10 flex items-center justify-center text-emerald-100 hover:text-gold-accent transition-all duration-200">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-gold-accent/20 border border-white/10 flex items-center justify-center text-emerald-100 hover:text-gold-accent transition-all duration-200">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-gold-accent/20 border border-white/10 flex items-center justify-center text-emerald-100 hover:text-gold-accent transition-all duration-200">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-gold-accent/20 border border-white/10 flex items-center justify-center text-emerald-100 hover:text-gold-accent transition-all duration-200">
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="font-cinzel text-md font-semibold tracking-wider text-gold-accent border-b border-white/10 pb-2">
            Quick Navigation
          </h3>
          <ul className="space-y-3 text-sm text-emerald-100/80">
            <li>
              <Link href="/" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Home Page
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> About Us
              </Link>
            </li>
            <li>
              <Link href="/prayer-times" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Prayer Timings
              </Link>
            </li>
            <li>
              <Link href="/become-mureed" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Become Mureed
              </Link>
            </li>
            <li>
              <Link href="/download-app" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Mobile App
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h3 className="font-cinzel text-md font-semibold tracking-wider text-gold-accent border-b border-white/10 pb-2">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm text-emerald-100/80">
            <li>
              <Link href="/rohani-ilaj" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Rohani Ilaj (Remedies)
              </Link>
            </li>
            <li>
              <Link href="/istikhara" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Online Istikhara Request
              </Link>
            </li>
            <li>
              <Link href="/wazaif" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Daily Wazaif Library
              </Link>
            </li>
            <li>
              <Link href="/#tasbeeh" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Interactive Tasbeeh
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-accent transition-colors flex items-center gap-1.5">
                <span>•</span> Ask a Spiritual Advisor
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h3 className="font-cinzel text-md font-semibold tracking-wider text-gold-accent border-b border-white/10 pb-2">
            Weekly Adhkar Email
          </h3>
          <p className="text-sm text-emerald-100/80 leading-relaxed font-sans">
            Subscribe to receive verified morning and evening prayers, spiritual healing reminders, and quotes.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="bg-white/5 border border-white/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-sm flex-1 placeholder:text-emerald-100/40 text-emerald-50 text-sans transition-all"
              required
            />
            <button
              type="submit"
              className="p-3 bg-gold-accent hover:bg-yellow-600 text-dark-emerald rounded-xl font-bold flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-gold-accent/20"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="space-y-2 text-xs text-emerald-200/60 pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span>Helpline: +1 (800) 555-ILAJ</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>support@rohani-ilaj.org</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mosque Silhouette SVG Vector Decoration */}
      <div className="w-full relative h-36 mt-8 overflow-hidden pointer-events-none opacity-40 select-none">
        <svg
          viewBox="0 0 1440 200"
          className="absolute bottom-0 left-0 w-full h-full text-emerald-950/70"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Mosque background layer */}
          <path d="M0,200 L0,150 L60,150 L70,130 L80,150 L120,150 L150,90 L180,150 L220,150 L230,110 L240,110 L250,90 L260,110 L270,110 L280,150 L340,150 L360,70 L380,150 L420,150 L430,130 L440,150 L520,150 L550,50 L580,150 L620,150 L640,90 L660,150 L710,150 L730,70 L750,150 L810,150 L840,40 L870,150 L910,150 L925,120 L940,150 L1020,150 L1050,60 L1080,150 L1120,150 L1130,110 L1140,110 L1150,90 L1160,110 L1170,110 L1180,150 L1240,150 L1260,80 L1280,150 L1320,150 L1335,130 L1350,150 L1440,150 L1440,200 Z" />
          
          {/* Foreground Minarets and Domes */}
          <path
            d="M0,200 L0,170 C50,170 80,165 90,140 C100,165 130,170 180,170 C200,170 210,160 215,140 C220,110 235,90 250,90 C265,90 280,110 285,140 C290,160 300,170 320,170 C360,170 380,160 390,130 L400,60 L410,130 C420,160 440,170 480,170 L530,170 L540,110 C545,80 560,60 580,60 C600,60 615,80 620,110 L630,170 L700,170 C720,170 730,160 735,140 C740,110 755,90 770,90 C785,90 800,110 805,140 C810,160 820,170 840,170 L900,170 L915,100 L930,170 C980,170 1000,160 1010,135 C1020,160 1040,170 1090,170 L1150,170 L1160,120 L1170,120 L1180,170 L1250,170 C1270,170 1280,160 1285,140 C1290,110 1305,90 1320,90 C1335,90 1350,110 1355,140 C1360,160 1370,170 1390,170 L1440,170 L1440,200 Z"
            fill="#021c15"
          />
        </svg>
      </div>

      {/* Footer Bottom Metadata */}
      <div className="bg-[#021c15] py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-100/60 font-sans gap-4">
          <p>© {new Date().getFullYear()} Rohani Ilaj. All rights reserved. Spiritual, Educational and Non-Political platform.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:underline hover:text-gold-accent">Privacy Policy</Link>
            <Link href="/contact" className="hover:underline hover:text-gold-accent">Terms of Service</Link>
            <Link href="/about" className="hover:underline hover:text-gold-accent">Methodology & Sources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
