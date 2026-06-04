"use client";

import React, { useState, useEffect } from "react";
import { Clock, MapPin, Sparkles, Star, Compass, Award, CalendarDays } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import PrayerTimesWidget from "@/components/PrayerTimesWidget";

// Mock Weekly Prayer Punctuality Data (Punctual vs Late vs Missed)
const trackingData = [
  { day: "Mon", punctuality: 80, count: 4 },
  { day: "Tue", punctuality: 100, count: 5 },
  { day: "Wed", punctuality: 60, count: 3 },
  { day: "Thu", punctuality: 80, count: 4 },
  { day: "Fri", punctuality: 100, count: 5 },
  { day: "Sat", punctuality: 100, count: 5 },
  { day: "Sun", punctuality: 90, count: 4 },
];

export default function PrayerTimesPage() {
  const [activeTab, setActiveTab] = useState<"today" | "weekly">("today");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-white to-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span>Islamic Punctuality Panel</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-dark-emerald tracking-wide">
            Prayer Timings & Tracker
          </h1>
          <p className="text-sm md:text-base text-muted-text leading-relaxed font-sans">
            Keep track of your local prayer times, find Qibla direction, and monitor your weekly spiritual goals with our analytical tracker.
          </p>
        </div>

        {/* Dynamic widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Main schedule widget and tracker (8 columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* View Switcher tab */}
            <div className="flex gap-2 p-1 bg-slate-100 rounded-xl w-fit">
              <button
                onClick={() => setActiveTab("today")}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "today"
                    ? "bg-white text-dark-emerald shadow-sm"
                    : "text-muted-text hover:text-dark-emerald"
                }`}
              >
                Today's Times
              </button>
              <button
                onClick={() => setActiveTab("weekly")}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "weekly"
                    ? "bg-white text-dark-emerald shadow-sm"
                    : "text-muted-text hover:text-dark-emerald"
                }`}
              >
                Weekly Timetable
              </button>
            </div>

            {/* Render Tab Contents */}
            {activeTab === "today" ? (
              <div className="bg-white rounded-3xl p-6 border border-emerald-800/5 shadow-sm space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-cinzel text-md font-bold text-dark-emerald flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-gold-accent" />
                    Today's Prayer Dashboard
                  </h3>
                  <span className="text-[10px] bg-emerald-50 text-primary-emerald font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> New York, USA
                  </span>
                </div>
                <PrayerTimesWidget />
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 border border-emerald-800/5 shadow-sm space-y-6 overflow-x-auto">
                <h3 className="font-cinzel text-md font-bold text-dark-emerald flex items-center gap-2 mb-4">
                  <CalendarDays className="w-5 h-5 text-gold-accent" />
                  Weekly Prayer Timetable
                </h3>
                
                {/* Table schedule mock */}
                <table className="w-full text-left text-xs font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-emerald-800/10 text-muted-text uppercase font-bold text-[10px] tracking-wider">
                      <th className="py-3 px-4">Day</th>
                      <th className="py-3 px-4">Fajr</th>
                      <th className="py-3 px-4">Sunrise</th>
                      <th className="py-3 px-4">Dhuhr</th>
                      <th className="py-3 px-4">Asr</th>
                      <th className="py-3 px-4">Maghrib</th>
                      <th className="py-3 px-4">Isha</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-800/5 text-dark-text/90">
                    {[
                      { day: "Mon", f: "04:24 AM", sr: "05:42 AM", d: "12:32 PM", a: "04:53 PM", m: "07:16 PM", i: "08:42 PM" },
                      { day: "Tue", f: "04:23 AM", sr: "05:41 AM", d: "12:32 PM", a: "04:53 PM", m: "07:17 PM", i: "08:43 PM" },
                      { day: "Wed", f: "04:22 AM", sr: "05:40 AM", d: "12:32 PM", a: "04:54 PM", m: "07:18 PM", i: "08:44 PM", active: true },
                      { day: "Thu", f: "04:21 AM", sr: "05:39 AM", d: "12:32 PM", a: "04:54 PM", m: "07:19 PM", i: "08:45 PM" },
                      { day: "Fri", f: "04:20 AM", sr: "05:38 AM", d: "12:33 PM", a: "04:55 PM", m: "07:20 PM", i: "08:46 PM" },
                      { day: "Sat", f: "04:19 AM", sr: "05:37 AM", d: "12:33 PM", a: "04:55 PM", m: "07:21 PM", i: "08:47 PM" },
                      { day: "Sun", f: "04:18 AM", sr: "05:36 AM", d: "12:33 PM", a: "04:56 PM", m: "07:22 PM", i: "08:48 PM" },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          row.active ? "bg-emerald-800/5 font-bold border-l-4 border-gold-accent" : "hover:bg-slate-50"
                        }`}
                      >
                        <td className="py-3.5 px-4 font-cinzel text-dark-emerald font-semibold">{row.day}</td>
                        <td className="py-3.5 px-4">{row.f}</td>
                        <td className="py-3.5 px-4 text-muted-text">{row.sr}</td>
                        <td className="py-3.5 px-4">{row.d}</td>
                        <td className="py-3.5 px-4">{row.a}</td>
                        <td className="py-3.5 px-4">{row.m}</td>
                        <td className="py-3.5 px-4">{row.i}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Recharts Analytics Panel: Prayer Punctuality */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-800/5 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="inline-flex px-2.5 py-0.5 rounded-full bg-gold-accent/15 text-gold-accent text-[9px] font-bold uppercase tracking-wider">
                  Goal Analytics
                </span>
                <h3 className="font-cinzel text-lg font-bold text-dark-emerald">Spiritual Attendance Tracker</h3>
                <p className="text-xs text-muted-text leading-relaxed font-sans">
                  Visual statistics representing your prayer punctuality percentage (target vs actual offered in congregation) over the past week.
                </p>
              </div>

              {/* Area Chart Container */}
              <div className="h-64 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trackingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPunctuality" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0F766E" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#0F766E" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="day" tick={{ fontSize: 10, fontWeight: "bold", fill: "#64748B" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fontWeight: "bold", fill: "#64748B" }} axisLine={false} tickLine={false} unit="%" domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{ background: "#064e3b", border: "none", borderRadius: "12px", color: "#fff", fontSize: "11px" }}
                      labelStyle={{ fontWeight: "bold", color: "#D4AF37" }}
                    />
                    <Area type="monotone" dataKey="punctuality" stroke="#0F766E" strokeWidth={2.5} fillOpacity={1} fill="url(#colorPunctuality)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-emerald-800/5 text-[10px] font-bold uppercase tracking-wider text-muted-text">
                <div className="flex items-center gap-1 text-primary-emerald">
                  <Award className="w-4 h-4 text-gold-accent" />
                  <span>Weekly Average: 84% punctuality</span>
                </div>
                <span>Target goal: 5 prayers daily in congregation</span>
              </div>
            </div>

          </div>

          {/* Right Column: Qibla compass and Sunnah recommendations (4 columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Sunnah times and rules */}
            <div className="bg-[#064e3b] text-white rounded-3xl p-6 md:p-8 border border-gold-accent/30 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8 pointer-events-none" />
              <h3 className="font-cinzel text-md font-bold text-gold-accent border-b border-white/10 pb-2">
                Sunnah Prayer Etiquette
              </h3>
              
              <ul className="space-y-4 text-xs text-emerald-100/90 leading-relaxed font-sans">
                <li className="space-y-1">
                  <span className="block font-bold text-gold-accent">1. Perform Miswak</span>
                  <span className="block opacity-80">Using Miswak before performing ablution increases the spiritual reward of the prayer.</span>
                </li>
                <li className="space-y-1">
                  <span className="block font-bold text-gold-accent">2. Congregational Prayer (Jama'at)</span>
                  <span className="block opacity-80">Offering prayers in congregation is 27 times more rewarding than praying individually.</span>
                </li>
                <li className="space-y-1">
                  <span className="block font-bold text-gold-accent">3. Calm & Focus (Khushu)</span>
                  <span className="block opacity-80">Stand quietly with complete presence of mind, avoiding side glances.</span>
                </li>
              </ul>
            </div>

            {/* Qibla Direction quickcard */}
            <div className="bg-white rounded-3xl p-6 border border-emerald-800/5 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-primary-emerald">
                <Compass className="w-5 h-5 text-gold-accent" />
                <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider">Compass Parameters</h4>
              </div>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                Kaabah Qibla coordinates relative to New York region is **135.21° Southeast**.
              </p>
              <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-800/5 space-y-1.5 text-xs text-dark-emerald font-semibold">
                <div className="flex justify-between">
                  <span>Qibla Angle:</span>
                  <span>135° SE</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance:</span>
                  <span>10,230 km</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
