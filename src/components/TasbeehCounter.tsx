"use client";

import React, { useState, useEffect } from "react";
import { Plus, RotateCcw, Volume2, VolumeX, Sparkles, Award } from "lucide-react";
import { toast } from "sonner";

type TasbeehMode = "subhanallah" | "alhamdulillah" | "allahuakbar" | "custom";

const presetInfo = {
  subhanallah: { phrase: "سُبْحَانَ اللَّهِ", translation: "Glory be to Allah", target: 33 },
  alhamdulillah: { phrase: "الْحَمْدُ لِلَّهِ", translation: "Praise be to Allah", target: 33 },
  allahuakbar: { phrase: "اللَّهُ أَكْبَرُ", translation: "Allah is the Greatest", target: 34 },
  custom: { phrase: "ذِكْرٌ مُخَصَّصٌ", translation: "Custom Dhikr Meditation", target: 99 },
};

export default function TasbeehCounter() {
  const [mode, setMode] = useState<TasbeehMode>("subhanallah");
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [totalCount, setTotalCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Load stats from LocalStorage on mount
  useEffect(() => {
    const savedTotal = localStorage.getItem("tasbeeh_total_count");
    if (savedTotal) {
      setTotalCount(parseInt(savedTotal, 10));
    }
  }, []);

  // Update target when mode changes
  useEffect(() => {
    setCount(0);
    setTarget(presetInfo[mode].target);
  }, [mode]);

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = "sine";
      // Higher tone when completing target
      const isTargetComplete = count + 1 === target;
      oscillator.frequency.setValueAtTime(isTargetComplete ? 880 : 440, audioCtx.currentTime); 
      
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.1);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.warn("AudioContext failed or blocked by browser policies.", e);
    }
  };

  const handleIncrement = () => {
    const nextCount = count + 1;
    playClickSound();

    if (nextCount === target) {
      toast.success(`Completed! Recited ${presetInfo[mode].translation} ${target} times.`, {
        icon: <Award className="w-5 h-5 text-gold-accent fill-gold-accent" />,
      });
      // Vibrate if mobile supports it
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
    }

    setCount(nextCount);
    const newTotal = totalCount + 1;
    setTotalCount(newTotal);
    localStorage.setItem("tasbeeh_total_count", newTotal.toString());
  };

  const handleReset = () => {
    setCount(0);
    toast.info("Counter reset successfully.");
  };

  const handleCustomTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const customVal = parseInt(e.target.value, 10);
    if (!isNaN(customVal) && customVal > 0) {
      setTarget(customVal);
      setCount(0);
    }
  };

  // Circular calculations
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progressPercent = Math.min((count / target) * 100, 100);
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="p-8 rounded-3xl bg-white border border-emerald-800/10 shadow-xl flex flex-col justify-between max-w-md mx-auto w-full relative overflow-hidden gold-border-glow">
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-accent/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header Panel */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5 bg-emerald-800/5 px-2.5 py-1 rounded-full text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span>Digital Tasbeeh</span>
          </div>

          <div className="flex gap-2">
            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1.5 rounded-lg text-muted-text hover:bg-emerald-50 hover:text-primary-emerald transition-colors"
              title={soundEnabled ? "Mute audio feed" : "Unmute audio feed"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            {/* Counter Reset */}
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg text-muted-text hover:bg-emerald-50 hover:text-red-600 transition-colors"
              title="Reset current session"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mode Toggles */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-emerald-50/50 rounded-xl border border-emerald-800/5">
          {(["subhanallah", "alhamdulillah", "allahuakbar", "custom"] as TasbeehMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                mode === m
                  ? "bg-gradient-to-r from-emerald-800 to-primary-emerald text-white shadow-sm"
                  : "text-muted-text hover:text-dark-emerald"
              }`}
            >
              {m === "allahuakbar" ? "Akbar" : m}
            </button>
          ))}
        </div>
      </div>

      {/* Main Counter Graphic */}
      <div className="my-8 flex flex-col items-center justify-center relative">
        <svg width="220" height="220" className="transform -rotate-90">
          {/* Inner backing circle */}
          <circle
            cx="110"
            cy="110"
            r={radius}
            className="stroke-emerald-800/5 fill-transparent"
            strokeWidth="8"
          />
          {/* Circular progress */}
          <circle
            cx="110"
            cy="110"
            r={radius}
            className="stroke-primary-emerald fill-transparent transition-all duration-300"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Inside circle information */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1">
          <span className="font-arabic text-2xl font-black text-dark-emerald block leading-none">
            {presetInfo[mode].phrase}
          </span>
          <span className="text-[10px] text-muted-text tracking-wide block">
            {presetInfo[mode].translation}
          </span>
          <span className="font-cinzel text-4xl font-extrabold text-dark-emerald block leading-none py-1">
            {count}
          </span>
          <span className="text-[10px] font-semibold text-gold-accent uppercase tracking-widest block">
            Target: {target}
          </span>
        </div>
      </div>

      {/* Active click trigger and target setter */}
      <div className="space-y-4">
        {mode === "custom" && (
          <div className="flex items-center justify-between gap-4 p-2 bg-emerald-50/30 rounded-xl border border-emerald-800/5">
            <span className="text-[11px] font-bold text-dark-emerald">Target Limit:</span>
            <input
              type="number"
              min="1"
              value={target}
              onChange={handleCustomTargetChange}
              className="bg-white border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-lg px-2 py-1 text-xs font-bold text-center w-20 text-dark-emerald shadow-inner"
            />
          </div>
        )}

        <button
          onClick={handleIncrement}
          className="w-full py-4 bg-gradient-to-r from-emerald-800 via-primary-emerald to-emerald-800 hover:from-primary-emerald hover:to-emerald-800 text-white rounded-2xl font-bold shadow-lg shadow-emerald-800/20 border border-gold-accent/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group focus:ring-2 focus:ring-primary-emerald/30 focus:outline-none"
        >
          <Plus className="w-5 h-5 group-hover:scale-125 transition-transform" />
          <span className="uppercase tracking-widest text-sm">Tap Tasbeeh</span>
        </button>

        {/* Global Lifetime Counter stats */}
        <div className="flex justify-between items-center text-[10px] font-semibold text-muted-text border-t border-emerald-800/5 pt-3">
          <span>Total Lifetime Dhikr:</span>
          <span className="font-bold text-dark-emerald">{totalCount.toLocaleString()} recitations</span>
        </div>
      </div>
    </div>
  );
}
