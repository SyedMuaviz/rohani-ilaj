"use client";

import React from "react";
import { Sparkles, ShieldCheck, Heart, Award, Landmark, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/10 via-white to-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span>Our Foundation</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-dark-emerald tracking-wide">
            About Rohani Ilaj
          </h1>
          <p className="text-sm md:text-base text-muted-text leading-relaxed font-sans font-medium">
            Dedicated to providing authentic spiritual healing, daily Wazaif, and verified guidance for Muslims worldwide, inspired by peaceful religious education.
          </p>
        </div>

        {/* Narrative bio cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white rounded-3xl p-8 border border-emerald-800/5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-primary-emerald uppercase tracking-wider block">Our Vision</span>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-dark-emerald">Spiritual Uplifting of the Ummah</h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                In an era filled with stress, anxiety, and physical illnesses, the teachings of the Holy Quran and Prophet Muhammad (peace be upon him) serve as a profound source of healing. Our vision is to make authentic spiritual cures accessible to everyone through modern, clean digital mediums.
              </p>
            </div>
            <div className="border-t border-emerald-800/5 pt-4 mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-emerald">
              <Award className="w-4 h-4 text-gold-accent" />
              <span>Seeking divine pleasure only</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-emerald-800/5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-primary-emerald uppercase tracking-wider block">Peaceful Integrity</span>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-dark-emerald">Strictly Non-Political & Educational</h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                Inspired by the values of Dawat-e-Islami and Madani Channel, our platform is completely non-political and non-sectarian. We focus strictly on the spiritual, moral, and educational guidance of Muslims, helping them lead peaceful and righteous lives.
              </p>
            </div>
            <div className="border-t border-emerald-800/5 pt-4 mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-emerald">
              <ShieldCheck className="w-4 h-4 text-gold-accent" />
              <span>100% Scholarly Verified Sources</span>
            </div>
          </div>
        </div>

        {/* Details core values */}
        <div className="space-y-8">
          <h3 className="font-cinzel text-xl font-bold text-dark-emerald text-center tracking-wide">
            Our Core Methodology
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Quran & Sunnah First",
                text: "All remedies, supplications, and advice are derived exclusively from the Noble Quran and verified books of Hadith."
              },
              {
                icon: Landmark,
                title: "Scholarly Review Panel",
                text: "Every submission form is handled by experienced scholars, ensuring no incorrect practices or magic-related fallacies are included."
              },
              {
                icon: Heart,
                title: "Empathetic Counseling",
                text: "We deal with queries using absolute empathy and respect, maintaining absolute privacy for names and conditions."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-emerald-800/5 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-800/10 flex items-center justify-center text-primary-emerald">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-cinzel text-sm font-bold text-dark-emerald tracking-wide">{item.title}</h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
