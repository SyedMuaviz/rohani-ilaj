"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Book, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { quotesData } from "@/data/quotesData";

export default function IslamicQuotes() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % quotesData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + quotesData.length) % quotesData.length);
  };

  const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  }),
};

  const activeQuote = quotesData[index];

  return (
    <section className="section-padding bg-[#064e3b] text-white relative overflow-hidden py-24">
      {/* Decorative SVG Geometric Patterns on left and right */}
      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-emerald-900/40 rounded-full border border-gold-accent/10 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-64 h-64 bg-emerald-900/40 rounded-full border border-gold-accent/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Decorative Badge Icon */}
        <div className="w-12 h-12 rounded-full bg-gold-accent/25 border border-gold-accent/40 flex items-center justify-center text-gold-accent mb-8 shadow-inner animate-pulse-glow">
          <Book className="w-5 h-5 text-gold-accent fill-gold-accent" />
        </div>

        {/* Carousel Content */}
        <div className="w-full relative min-h-[300px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
             key={activeQuote.id}
             variants={slideVariants}
             initial="enter"
             animate="center"
             exit="exit"
              className="w-full text-center space-y-6 flex flex-col items-center justify-center px-4"
            >
              {/* Giant quote icon */}
              <Quote className="w-8 h-8 text-gold-accent/40 rotate-180" />

              {/* Arabic Script */}
              <p className="font-arabic text-2xl sm:text-3xl md:text-4xl leading-normal text-gold-accent text-center tracking-wide max-w-3xl py-2 drop-shadow">
                {activeQuote.arabicText}
              </p>

              {/* English Translation */}
              <p className="font-playfair text-lg sm:text-xl md:text-2xl italic leading-relaxed text-emerald-50 max-w-2xl font-medium">
                "{activeQuote.englishText}"
              </p>

              {/* Citation Source */}
              <div className="space-y-0.5">
                {activeQuote.narrator && (
                  <span className="block text-[11px] uppercase tracking-wider text-emerald-200/80 font-bold">
                    Narrated by: {activeQuote.narrator}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-accent font-cinzel">
                  {activeQuote.reference}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Indicators */}
        <div className="flex items-center gap-6 mt-12 w-full justify-between sm:justify-center">
          <button
            onClick={handlePrev}
            className="p-3.5 rounded-full bg-white/5 hover:bg-gold-accent/20 border border-white/10 hover:text-gold-accent text-white transition-all active:scale-90"
            aria-label="Previous quote"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {quotesData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === i ? "bg-gold-accent w-6" : "bg-white/20 w-2.5"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3.5 rounded-full bg-white/5 hover:bg-gold-accent/20 border border-white/10 hover:text-gold-accent text-white transition-all active:scale-90"
            aria-label="Next quote"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
