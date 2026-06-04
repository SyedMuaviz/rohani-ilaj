"use client";

import React, { useState, useEffect } from "react";
import { Clock, Compass, ShieldCheck, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Prayer {
  name: string;
  time: string;
  hour: number;  // 24h format representation
  minute: number;
}

const prayers: Prayer[] = [
  { name: "Fajr", time: "04:22 AM", hour: 4, minute: 22 },
  { name: "Dhuhr", time: "12:32 PM", hour: 12, minute: 32 },
  { name: "Asr", time: "04:54 PM", hour: 16, minute: 54 },
  { name: "Maghrib", time: "07:18 PM", hour: 19, minute: 18 },
  { name: "Isha", time: "08:44 PM", hour: 20, minute: 44 },
];

export default function PrayerTimesWidget() {
  const [currentPrayerIndex, setCurrentPrayerIndex] = useState(2); // Default to Asr
  const [rotation, setRotation] = useState(0); // Qibla Compass angle rotation
  const [isJummah, setIsJummah] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState("");

  // Determine current active prayer based on client time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      // Formatting time string
      setCurrentTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

      // Check for Friday
      setIsJummah(now.getDay() === 5);

      // Find active prayer
      let activeIndex = prayers.length - 1; // Default to Isha if before Fajr or after Isha
      for (let i = 0; i < prayers.length; i++) {
        const p = prayers[i];
        if (currentHour > p.hour || (currentHour === p.hour && currentMinute >= p.minute)) {
          activeIndex = i;
        }
      }
      setCurrentPrayerIndex(activeIndex);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulating dragging or rotating the Qibla compass dial
  const handleCompassMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const px = e.clientX;
    const py = e.clientY;
    
    // Calculate angle in degrees
    const rad = Math.atan2(py - cy, px - cx);
    let deg = rad * (180 / Math.PI) + 90; // offset so top is 0
    if (deg < 0) deg += 360;
    setRotation(Math.floor(deg));
  };

  const isQiblaAligned = Math.abs(rotation - 135) < 8 || Math.abs(rotation - 135) > 352; // Qibla at 135 deg SE

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto w-full">
      {/* Prayers list panel */}
      <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-emerald-800/10 shadow-xl flex flex-col justify-between relative overflow-hidden gold-border-glow">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-6">
          {/* Section Header */}
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 bg-emerald-800/5 px-2.5 py-1 rounded-full text-emerald-800 text-[10px] font-bold uppercase tracking-wider w-fit">
                <Clock className="w-3.5 h-3.5" />
                <span>Today's Prayers</span>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-dark-emerald pt-1">New York, USA</h3>
            </div>
            <div className="text-right">
              <span className="block text-[10px] text-muted-text font-bold uppercase tracking-wider">Local Time</span>
              <span className="block font-mono text-sm font-bold text-dark-emerald">{currentTimeStr || "00:00:00"}</span>
            </div>
          </div>

          {/* Prayers List */}
          <div className="space-y-3">
            {prayers.map((prayer, index) => {
              const isActive = index === currentPrayerIndex;
              return (
                <div
                  key={prayer.name}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-2xl border transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-emerald-800 to-primary-emerald text-white border-gold-accent/40 shadow-md shadow-emerald-800/10 scale-[1.01]"
                      : "bg-emerald-50/20 hover:bg-emerald-50/50 border-emerald-800/5 text-dark-text"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn("w-2 h-2 rounded-full", isActive ? "bg-gold-accent animate-ping" : "bg-emerald-800/30")} />
                    <span className="font-cinzel font-bold text-sm tracking-wider">{prayer.name}</span>
                    {isActive && (
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-gold-accent text-dark-emerald font-bold uppercase tracking-widest">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={cn("font-mono text-sm font-bold", isActive ? "text-gold-accent" : "text-dark-text")}>
                      {prayer.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Jummah Special Alert */}
          {isJummah && (
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gold-accent/10 border border-gold-accent/30 text-dark-emerald">
              <Sparkles className="w-5 h-5 text-gold-accent fill-gold-accent shrink-0 animate-pulse-glow" />
              <div>
                <span className="block text-xs font-bold font-cinzel">Jummah Mubarak Highlight</span>
                <span className="block text-[10px] opacity-80">Jummah Khutbah starts at 12:45 PM. Read Surah Al-Kahf.</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center text-[10px] text-muted-text border-t border-emerald-800/5 pt-4 mt-6">
          <span>* Calculations based on ISNA conventions</span>
          <span>Hanafi Juristic Method</span>
        </div>
      </div>

      {/* Interactive Qibla Compass Panel */}
      <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#064e3b] to-emerald-950 text-white shadow-xl flex flex-col justify-between relative overflow-hidden border border-gold-accent/30">
        {/* Islamic star pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

        <div className="space-y-4 text-center z-10">
          <div className="mx-auto flex items-center justify-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full text-emerald-200 text-[10px] font-bold uppercase tracking-wider w-fit">
            <Compass className="w-3.5 h-3.5 text-gold-accent" />
            <span>Qibla Compass</span>
          </div>
          <h3 className="font-cinzel text-lg font-bold text-gold-accent">Interactive Qibla Finder</h3>
          <p className="text-xs text-emerald-100/70 max-w-xs mx-auto font-sans leading-relaxed">
            Hover and move your cursor over the dial to align the compass needle towards the Kaabah (Qibla).
          </p>
        </div>

        {/* Compass Graphic */}
        <div className="my-8 flex justify-center items-center z-10">
          <div
            onMouseMove={handleCompassMouseMove}
            className="w-44 h-44 rounded-full border-2 border-gold-accent/30 flex items-center justify-center relative cursor-crosshair bg-emerald-900/40 backdrop-blur shadow-inner transition-transform"
            title="Move mouse here to find direction"
          >
            {/* Compass Dial Tick marks */}
            <div className="absolute inset-2 rounded-full border border-dashed border-emerald-100/20" />
            
            {/* Static Direction indicators */}
            <span className="absolute top-2 text-[9px] font-bold text-emerald-300">N</span>
            <span className="absolute bottom-2 text-[9px] font-bold text-emerald-300">S</span>
            <span className="absolute right-2 text-[9px] font-bold text-emerald-300">E</span>
            <span className="absolute left-2 text-[9px] font-bold text-emerald-300">W</span>

            {/* Qibla Direction Marker (Kaabah Symbol fixed at 135 deg SE) */}
            <div
              className="absolute w-6 h-6 rounded-full bg-gold-accent text-dark-emerald flex items-center justify-center text-[10px] font-extrabold shadow-md border border-white/20"
              style={{
                transform: "translate(50px, 50px)", // Position at SE (45 degrees down/right)
              }}
              title="Kaabah Qibla Direction"
            >
              🕋
            </div>

            {/* Compass Needle rotating based on mouse position */}
            <div
              className="w-2.5 h-32 relative flex items-center justify-center transition-transform duration-100"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* North Pointer (Gold) */}
              <div className="absolute top-0 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[64px] border-b-gold-accent filter drop-shadow-md" />
              {/* Center Pin */}
              <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-dark-emerald z-20 shadow-md" />
              {/* South Pointer (Silver) */}
              <div className="absolute bottom-0 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[64px] border-t-emerald-100/50" />
            </div>
          </div>
        </div>

        {/* Alignment Status Info */}
        <div className="text-center z-10">
          <div
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300",
              isQiblaAligned
                ? "bg-gold-accent text-dark-emerald shadow-lg shadow-gold-accent/20 scale-105"
                : "bg-white/10 text-emerald-200"
            )}
          >
            <ShieldCheck className={cn("w-4 h-4", isQiblaAligned ? "animate-pulse" : "")} />
            <span>
              {isQiblaAligned ? "Aligned! Qibla Direction: 135° SE" : `Compass: Rotate to align (Current: ${rotation}°)`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
