"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Search, HelpCircle, Star, Play, Pause, RotateCcw, Volume2, X } from "lucide-react";
import { wazaifData, Wazeefa } from "@/data/wazaifData";
import { toast } from "sonner";

export default function WazaifPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Audio Player states
  const [activeAudioWazeefa, setActiveAudioWazeefa] = useState<Wazeefa | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Filter wazaif items
  const filteredWazaif = wazaifData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.benefits.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Simulate progress when playing audio
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && activeAudioWazeefa) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            toast.success(`Completed listening to the pronunciation of "${activeAudioWazeefa.title}".`);
            return 0;
          }
          return prev + 2; // Increments progress
        });
      }, 200);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeAudioWazeefa]);

  const handlePlayAudio = (wazeefa: Wazeefa) => {
    if (activeAudioWazeefa?.id === wazeefa.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveAudioWazeefa(wazeefa);
      setIsPlaying(true);
      setProgress(0);
      toast.info(`Now playing pronunciation guide for "${wazeefa.title}"`);
    }
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
    setActiveAudioWazeefa(null);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-white to-slate-50 py-12 pb-32">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span>Islamic Supplications Library</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-dark-emerald tracking-wide">
            Verified Wazaif Database
          </h1>
          <p className="text-sm md:text-base text-muted-text leading-relaxed font-sans">
            Explore authentic morning, evening, and daily prayers with comprehensive English translations, Arabic scripts, transliterations, and clear audio rules.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-emerald-800/5 shadow-sm max-w-4xl mx-auto w-full">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-text" />
            <input
              type="text"
              placeholder="Search by keywords, translation, or benefit"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 items-center w-full md:w-auto">
            {["all", "rizq", "protection", "health", "success", "general"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary-emerald text-white shadow-sm"
                    : "bg-slate-50 text-muted-text hover:text-dark-emerald hover:bg-emerald-50/50 border border-emerald-800/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Wazaif Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWazaif.length > 0 ? (
            filteredWazaif.map((wazeefa) => {
              const isCurrentPlaying = activeAudioWazeefa?.id === wazeefa.id && isPlaying;
              return (
                <div
                  key={wazeefa.id}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-800/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden relative group gold-border-glow"
                >
                  <div className="space-y-4">
                    {/* Header: title and audio trigger */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <span className="inline-flex px-2.5 py-0.5 rounded-full bg-emerald-50 text-primary-emerald text-[9px] font-bold uppercase tracking-wider">
                          {wazeefa.category}
                        </span>
                        <h3 className="font-cinzel text-base md:text-lg font-bold text-dark-emerald pt-1">
                          {wazeefa.title}
                        </h3>
                      </div>
                      
                      {/* Play Pronunciation guide */}
                      <button
                        onClick={() => handlePlayAudio(wazeefa)}
                        className={`p-3 rounded-2xl flex items-center justify-center transition-all shadow-inner shrink-0 ${
                          isCurrentPlaying
                            ? "bg-gold-accent text-dark-emerald"
                            : "bg-emerald-50 text-primary-emerald hover:bg-emerald-800 hover:text-white"
                        }`}
                        title="Listen to pronunciation"
                      >
                        {isCurrentPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>
                    </div>

                    {/* Arabic Text Calligraphy */}
                    <p className="font-arabic text-2xl md:text-3xl text-right text-emerald-800 font-bold leading-normal pt-2 select-all">
                      {wazeefa.arabicText}
                    </p>

                    {/* Transliteration */}
                    <div className="space-y-0.5">
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-muted-text">Transliteration:</span>
                      <p className="text-xs text-dark-text/80 font-medium font-sans italic leading-relaxed">
                        {wazeefa.transliteration}
                      </p>
                    </div>

                    {/* Translation */}
                    <div className="space-y-0.5">
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-muted-text">Translation:</span>
                      <p className="text-xs text-muted-text leading-relaxed font-sans">
                        "{wazeefa.translation}"
                      </p>
                    </div>

                    {/* Method & Recitations details */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-emerald-800/5 space-y-2">
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold text-primary-emerald uppercase tracking-wider">Benefits:</span>
                        <p className="text-xs text-dark-text/85 font-sans leading-relaxed">{wazeefa.benefits}</p>
                      </div>
                      <div className="space-y-1 pt-2 border-t border-emerald-800/5">
                        <span className="block text-[10px] font-bold text-gold-accent uppercase tracking-wider">How to recite:</span>
                        <p className="text-xs text-dark-text/80 font-sans leading-relaxed">{wazeefa.method}</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer details */}
                  <div className="flex items-center justify-between gap-4 pt-4 text-[10px] font-bold uppercase tracking-wider text-muted-text border-t border-emerald-800/5 mt-6">
                    <span>Recite: <span className="text-primary-emerald">{wazeefa.recommendedCount} Times</span></span>
                    <span>Recommended: <span className="text-gold-accent">{wazeefa.recommendedTime}</span></span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-16 bg-white rounded-3xl border border-dashed border-emerald-800/20 text-muted-text">
              <HelpCircle className="w-12 h-12 mx-auto text-emerald-800/20 mb-3" />
              <p className="text-sm font-semibold">No Wazaif found matching your search.</p>
              <p className="text-xs mt-1">Try other search keywords or clear filters.</p>
            </div>
          )}
        </div>

        {/* Bottom Docked Virtual Audio Player Mockup */}
        {activeAudioWazeefa && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#064e3b] text-white border-t border-gold-accent/30 shadow-2xl p-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md">
            {/* Audio Info */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="w-10 h-10 rounded-xl bg-gold-accent/20 flex items-center justify-center text-gold-accent shrink-0">
                <Volume2 className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-emerald-200 font-bold">Pronunciation Guide</span>
                <span className="block text-xs font-bold font-cinzel text-white truncate max-w-[200px] md:max-w-xs">{activeAudioWazeefa.title}</span>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center gap-4 w-full md:max-w-md flex-1">
              <button
                onClick={() => setProgress(0)}
                className="p-1 text-emerald-200 hover:text-white transition-colors"
                title="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-full bg-gold-accent text-dark-emerald shadow hover:bg-yellow-600 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              {/* Progress Slider Bar */}
              <div className="flex-1 flex items-center gap-2">
                <span className="text-[10px] font-mono opacity-80">0:00</span>
                <div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden relative cursor-pointer">
                  <div
                    className="h-full bg-gold-accent transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono opacity-80">{activeAudioWazeefa.duration}</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClosePlayer}
              className="p-1 bg-white/10 hover:bg-white/20 text-emerald-200 hover:text-white rounded-lg transition-colors ml-4 md:ml-0 shrink-0"
              title="Close Player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
