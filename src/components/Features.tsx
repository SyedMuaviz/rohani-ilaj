"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ShieldCheck, Heart, Zap } from "lucide-react";

const featureList = [
  {
    icon: ShieldCheck,
    title: "Scholarly Verified",
    description: "Every wazeefa and remedy on this site is checked and approved by certified, authentic Islamic scholars, following strictly Quran & Sunnah.",
  },
  {
    icon: CheckCircle2,
    title: "100% Free of Cost",
    description: "All services, including Online Istikhara, Rohani Ilaj consultancy, and mobile apps are provided free of charge, seeking only the pleasure of Allah.",
  },
  {
    icon: Heart,
    title: "Complete Privacy Shield",
    description: "Your submission forms, names, and queries are treated with high levels of discretion. Only dedicated advisors can view your entries.",
  },
  {
    icon: Zap,
    title: "Ad-Free Focus",
    description: "We host zero advertisements to ensure your dhikr, meditation, and reading sessions are distraction-free, quiet, and spiritually sound.",
  },
];

export default function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
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
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-emerald-900/5 px-3 py-1 rounded-full text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
              <span>Why Choose Rohani Ilaj</span>
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-dark-emerald tracking-wide leading-tight">
              A Trusted Digital Gateway for Spiritual Health
            </h2>
            <p className="text-sm text-muted-text leading-relaxed font-sans">
              We design digital solutions that match the highest technology standards of modern SaaS applications while strictly adhering to Islamic values of respect, truth, and dedication to humanity.
            </p>
          </div>

          {/* Right Features Grid */}
          <motion.div 
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featureList.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="space-y-3.5 p-6 rounded-2xl border border-emerald-800/5 bg-emerald-50/10 hover:bg-emerald-50/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-primary-emerald flex items-center justify-center text-gold-accent border border-gold-accent/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-cinzel text-sm font-bold text-dark-emerald tracking-wide">
                    {f.title}
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
