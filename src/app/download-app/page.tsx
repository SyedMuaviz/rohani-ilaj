"use client";

import React from "react";
import { Sparkles, Download, ShieldCheck, Smartphone, Cpu, CloudLightning } from "lucide-react";
import DownloadAppPromo from "@/components/DownloadAppPromo";

export default function DownloadAppPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Main promotion block */}
      <DownloadAppPromo />

      {/* 2. Extra App specifications block */}
      <section className="pb-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-900/5 px-3 py-1 rounded-full text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
              <span>Technical Details</span>
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl font-extrabold text-dark-emerald tracking-wide">
              Application Specifications
            </h2>
            <p className="text-xs text-muted-text leading-relaxed font-sans">
              Learn about device compatibility, offline databases, and software release specs of the Rohani Ilaj mobile application.
            </p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-emerald-800/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-800/10 flex items-center justify-center text-primary-emerald">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-sm font-bold text-dark-emerald">System Requirements</h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                Supports **iOS 15.0+** and **Android 8.0+** (Oreo). Fully optimized for tablet screens and folding devices.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-emerald-800/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-800/10 flex items-center justify-center text-primary-emerald">
                <CloudLightning className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-sm font-bold text-dark-emerald">Offline Caching</h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                Supplications and remedy text require **zero active internet** once downloaded, cached safely on secure local storage.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-emerald-800/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-800/10 flex items-center justify-center text-primary-emerald">
                <Download className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-sm font-bold text-dark-emerald">Direct APK Download</h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                For Android users without Google Play Access, we offer verified direct APK downloads checked with SHA-256 signatures.
              </p>
            </div>
          </div>

          {/* Release history logs */}
          <div className="mt-16 bg-[#F8FAFC] rounded-3xl p-6 md:p-8 border border-emerald-800/5 space-y-6">
            <h3 className="font-cinzel text-base font-bold text-dark-emerald">App Release Notes — Version 2.1.0</h3>
            <div className="space-y-4 text-xs font-sans text-muted-text leading-relaxed">
              <div className="flex gap-2 items-start">
                <span className="font-bold text-primary-emerald">[New]</span>
                <span>Implemented full audio pronunciation guides for Arabic Wazaif with variable speed controls.</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="font-bold text-primary-emerald">[New]</span>
                <span>Dynamic Qibla Compass now supports GPS coordinate correction for accuracy.</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="font-bold text-gold-accent">[Update]</span>
                <span>Optimized local storage engine, reducing memory foot-print to under 35MB.</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="font-bold text-gold-accent">[Update]</span>
                <span>Improved UI styling with cream colors and HSL gold gradients.</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
