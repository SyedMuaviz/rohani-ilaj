"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Star, MessageCircle, MapPin, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  review: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Dr. Muhammad Salman",
    location: "London, UK",
    service: "Rohani Ilaj (Stress Remedy)",
    rating: 5,
    review: "I was suffering from severe burnout and anxiety due to hospital schedules. Following the Ya Qawiyyu remedy and daily Surah Ar-Rahman recitation brought instant calming effects. Truly a blessing.",
    avatar: "MS"
  },
  {
    id: "t-2",
    name: "Ayesha Fatima",
    location: "Karachi, Pakistan",
    service: "Online Istikhara",
    rating: 5,
    review: "We requested an Online Istikhara for my brother's business venture. The advisors gave us a detailed report within 24 hours. The guidance was incredibly comforting and clear.",
    avatar: "AF"
  },
  {
    id: "t-3",
    name: "Tariq Mahmood",
    location: "Toronto, Canada",
    service: "Daily Wazaif & Tasbeeh",
    rating: 5,
    review: "The digital Tasbeeh counter and morning Wazaif are a regular part of my day now. The interface is clean, beautiful, and ads-free. It feels like a high-end application made with sincere intent.",
    avatar: "TM"
  }
];

export default function Testimonials() {
 const containerVariants: Variants = {
     hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

  const itemVariants: Variants = {
    hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  return (
    <section className="section-padding bg-emerald-50/10 relative">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#F8FAFC]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 text-gold-accent" />
            <span>Success Stories</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl font-extrabold text-dark-emerald tracking-wide">
            Spiritual Peace Restored
          </h2>
          <p className="text-sm text-muted-text leading-relaxed font-sans">
            Hear from brothers and sisters who have found comfort and guidance through the authentic remedies of Rohani Ilaj.
          </p>
        </div>

        {/* Grid List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 border border-emerald-800/10 shadow-sm relative group flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative Quote Mark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-800/5 pointer-events-none" />
              
              <div className="space-y-6">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-accent fill-gold-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed text-muted-text font-sans">
                  "{t.review}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 pt-6 border-t border-emerald-800/5 mt-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-primary-emerald text-white font-cinzel font-bold text-xs flex items-center justify-center shadow-md border border-gold-accent/20">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-dark-emerald">{t.name}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-muted-text">
                    <MapPin className="w-3 h-3 text-gold-accent" />
                    <span>{t.location}</span>
                    <span className="mx-1">•</span>
                    <span className="text-primary-emerald font-semibold">{t.service}</span>
                  </div>
                </div>
              </div>

              {/* Hover highlight border line */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold-accent/20 rounded-3xl pointer-events-none transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
