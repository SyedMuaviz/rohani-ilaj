"use client";

import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import PrayerTimesWidget from "@/components/PrayerTimesWidget";
import TasbeehCounter from "@/components/TasbeehCounter";
import IslamicQuotes from "@/components/IslamicQuotes";
import Testimonials from "@/components/Testimonials";
import DownloadAppPromo from "@/components/DownloadAppPromo";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* 1. Hero Landing Banner */}
      <Hero />

      {/* 2. Key Platform Characteristics */}
      <Features />

      {/* 3. Primary Core Services Grid */}
      <Services />

      {/* 4. Dual Section: Prayer schedule and Interactive Dhikr counter */}
      <section className="section-padding bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-900/5 px-3 py-1 rounded-full text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
              <span>Spiritual Dashboard</span>
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-extrabold text-dark-emerald tracking-wide">
              Prayer Schedule & Dhikr Counter
            </h2>
            <p className="text-sm text-muted-text leading-relaxed font-sans">
              Stay connected with your daily prayers using our countdown scheduling tools and keep track of your dhikr using the interactive digital Tasbeeh counter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left/Middle Column - Prayer Timings and Qibla Finder */}
            <div className="lg:col-span-8">
              <PrayerTimesWidget />
            </div>

            {/* Right Column - Circular Dhikr Counter */}
            <div className="lg:col-span-4" id="tasbeeh">
              <TasbeehCounter />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Islamic verses and Hadith Slider */}
      <IslamicQuotes />

      {/* 6. User Success Reviews */}
      <Testimonials />

      {/* 7. Companion Smartphone downloads promo */}
      <DownloadAppPromo />

      {/* 8. Bottom CTA Banner */}
      <CTA />
    </>
  );
}
