"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, HelpCircle, BookOpen, Clock, Users, ShieldAlert, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  ctaText: string;
  highlight?: boolean;
}

const services: ServiceItem[] = [
  {
    id: "s-1",
    title: "Rohani Ilaj",
    description: "Access a structured library of authentic spiritual remedies for mental peace, physical curing, evil-eye protection, and family harmony.",
    icon: Sparkles,
    href: "/rohani-ilaj",
    ctaText: "Explore Remedies",
    highlight: true,
  },
  {
    id: "s-2",
    title: "Online Istikhara",
    description: "Submit Istikhara requests for marriage, business, travel, or general life decisions. Our spiritual advisors will guide you with prayers.",
    icon: HelpCircle,
    href: "/istikhara",
    ctaText: "Request Istikhara",
  },
  {
    id: "s-3",
    title: "Daily Wazaif",
    description: "Browse authentic Quranic and Hadith prayers. View detailed benefits, proper recitation methods, and listen to correct Arabic pronunciation.",
    icon: BookOpen,
    href: "/wazaif",
    ctaText: "Open Wazaif Library",
  },
  {
    id: "s-4",
    title: "Prayer Times & Tracker",
    description: "Stay punctual with accurate local prayer timings, weekly charts, and a dynamic virtual Qibla compass simulator.",
    icon: Clock,
    href: "/prayer-times",
    ctaText: "View Prayer Panel",
  },
  {
    id: "s-5",
    title: "Become a Mureed",
    description: "Initiate your spiritual oath (Bay'ah) with our authorized spiritual lineage to seek divine connection and personal rectification.",
    icon: Users,
    href: "/become-mureed",
    ctaText: "Join Lineage",
  },
  {
    id: "s-6",
    title: "Islamic Guidance",
    description: "Connect with certified spiritual advisors to ask specific queries regarding daily life spiritual, physical, or moral issues.",
    icon: ShieldAlert,
    href: "/contact",
    ctaText: "Contact Advisors",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="section-padding bg-[#F8FAFC] relative">
      {/* Decorative Star pattern background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-emerald-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-gold-accent/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <span>Essential Features</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl font-extrabold text-dark-emerald tracking-wide">
            Spiritual Core Services
          </h2>
          <p className="text-sm text-muted-text leading-relaxed font-sans">
            Access clean, elegant, and modern digital utilities for daily spiritual maintenance, designed with simplicity and respect.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`relative group rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col justify-between ${
                  service.highlight
                    ? "bg-gradient-to-br from-[#064e3b] to-emerald-950 text-white shadow-lg border border-gold-accent/30 shadow-emerald-900/20"
                    : "bg-white border border-emerald-800/10 text-dark-text shadow-sm"
                }`}
              >
                {/* Glow Spot for standard cards */}
                {!service.highlight && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-gold-accent/10 transition-colors pointer-events-none" />
                )}

                {/* Card Icon & Header */}
                <div className="space-y-6 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      service.highlight
                        ? "bg-gold-accent text-dark-emerald"
                        : "bg-emerald-50 text-primary-emerald"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3
                      className={`font-cinzel text-lg font-bold tracking-wide ${
                        service.highlight ? "text-gold-accent" : "text-dark-emerald"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed font-sans ${
                        service.highlight ? "text-emerald-100/90" : "text-muted-text"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-8 relative z-10">
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider transition-colors ${
                      service.highlight
                        ? "text-gold-accent hover:text-white"
                        : "text-primary-emerald hover:text-dark-emerald"
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Decorative border gradient for hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent/20 rounded-3xl pointer-events-none transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
