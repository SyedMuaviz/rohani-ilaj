"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding bg-white py-16 relative overflow-hidden">
      {/* Curved background panel container */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative rounded-[40px] bg-gradient-to-br from-dark-emerald to-emerald-950 text-white p-12 md:p-20 overflow-hidden shadow-2xl border border-gold-accent/30 flex flex-col items-center text-center space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 , ease: "easeOut" }}
        >
          {/* Decorative geometric patterns */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-11 h-11 rounded-full bg-gold-accent/20 border border-gold-accent/40 flex items-center justify-center text-gold-accent animate-pulse-glow">
            <Sparkles className="w-5 h-5 text-gold-accent fill-gold-accent" />
          </div>

          <div className="space-y-4 max-w-2xl">
            <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold tracking-wide leading-tight text-white">
              Begin Your Spiritual <br />
              <span className="text-gold-accent">Journey Today</span>
            </h2>
            <p className="text-sm md:text-base text-emerald-100/80 leading-relaxed font-sans max-w-xl mx-auto">
              Seek divine blessings, get rid of mental distress, submit verified Istikhara queries, or join our peaceful spiritual lineage without cost.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md pt-4">
            <Link
              href="/become-mureed"
              className="w-full sm:w-auto px-8 py-3.5 bg-gold-accent hover:bg-yellow-600 text-dark-emerald font-bold rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-gold-accent/10 text-center"
            >
              Become a Mureed
            </Link>
            <Link
              href="/rohani-ilaj"
              className="group w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-center flex items-center justify-center gap-1.5"
            >
              Get Guidance
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
