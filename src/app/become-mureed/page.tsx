"use client";

import React, { useState } from "react";
import { Users, Star, ShieldCheck, Heart, Landmark, Send, Calendar, Award, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function BecomeMureedPage() {
  const [step, setStep] = useState(1); // 1 = Info/Form, 2 = Certificate Card
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    dob: "",
    pledgeChecked: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mureedId, setMureedId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: Record<string, string> = {};

    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.country.trim()) tempErrors.country = "Country of residence is required";
    if (!formData.phone.trim()) tempErrors.phone = "Contact number is required";
    if (!formData.dob.trim()) tempErrors.dob = "Date of birth is required";
    if (!formData.pledgeChecked) tempErrors.pledgeChecked = "You must accept the spiritual pledge";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      toast.error("Please fill all mandatory fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMureedId("MRD-" + Math.floor(100000 + Math.random() * 900000));
      setStep(2);
      toast.success("Welcome! You have been digitally initiated in our spiritual lineage.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span>Spiritual Affiliation</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-dark-emerald tracking-wide">
            Become a Mureed (Disciple)
          </h1>
          <p className="text-sm md:text-base text-muted-text leading-relaxed font-sans font-medium">
            Take a step towards spiritual self-rectification. Associate yourself with our peaceful lineage to seek purification of the heart.
          </p>
        </div>

        {step === 1 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Info details (7 columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-emerald-800/5 shadow-sm space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-primary-emerald uppercase tracking-wider block">Oath of Allegiance</span>
                <h2 className="font-cinzel text-xl md:text-2xl font-bold text-dark-emerald">Spiritual Significance of Bay'ah</h2>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                  The tradition of Bay'ah (pledge) traces back to the companions of the Holy Prophet Muhammad (peace be upon him). It represents a binding commitment to perform obligatory prayers, abstain from sins, act with kindness towards creation, and strive daily for moral improvement.
                </p>
              </div>

              {/* Shajara rules grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-emerald-800/5">
                {[
                  {
                    icon: Landmark,
                    title: "Spiritual Tree (Shajara)",
                    text: "Mureeds receive a list of the spiritual chain (lineage of saintly guides) to read once daily, connecting their prayers."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Self-Rectification",
                    text: "Follow the guidelines of the Madani Inamaat (moral checklist) to track daily prayers, truthfulness, and character growth."
                  },
                  {
                    icon: Heart,
                    title: "Scholarly Guidance",
                    text: "Gain access to exclusive spiritual circles, question-answer seminars, and direct counseling with advisors."
                  },
                  {
                    icon: Award,
                    title: "100% Sincere & Free",
                    text: "Initiation in our spiritual path is entirely free and done solely for religious education and divine pleasure."
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center gap-2 text-primary-emerald">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-primary-emerald border border-emerald-800/10">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <h4 className="font-cinzel text-xs font-bold">{item.title}</h4>
                      </div>
                      <p className="text-xs text-muted-text leading-relaxed font-sans">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Registration Form (5 columns) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-emerald-800/5 shadow-md space-y-6">
              <h3 className="font-cinzel text-base font-bold text-dark-emerald border-b border-emerald-800/5 pb-2 text-center">
                Initiation Registration
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text"
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text"
                  />
                  {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
                </div>

                {/* Date of birth */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute right-3.5 top-3 w-4 h-4 text-muted-text pointer-events-none" />
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full"
                    />
                  </div>
                  {errors.dob && <span className="text-[10px] text-red-500 font-semibold">{errors.dob}</span>}
                </div>

                {/* Country */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Country of Residence</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="e.g. United Kingdom"
                    className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text"
                  />
                  {errors.country && <span className="text-[10px] text-red-500 font-semibold">{errors.country}</span>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Contact Number (with Country Code)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +44 7911 123456"
                    className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text"
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 font-semibold">{errors.phone}</span>}
                </div>

                {/* Pledge checkbox */}
                <div className="space-y-1 pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="pledgeChecked"
                      checked={formData.pledgeChecked}
                      onChange={handleInputChange}
                      className="rounded border-emerald-800/20 text-primary-emerald focus:ring-gold-accent mt-0.5"
                    />
                    <span className="text-[9px] text-muted-text leading-normal">
                      I solemnly pledge that I will offer five daily prayers, refrain from sins (lying, backbiting, anger), respect parents and elders, and strive to implement Sunnah in my life.
                    </span>
                  </label>
                  {errors.pledgeChecked && <span className="block text-[10px] text-red-500 font-semibold">{errors.pledgeChecked}</span>}
                </div>

                {/* Submit trigger */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-emerald-800 via-primary-emerald to-emerald-800 hover:from-primary-emerald hover:to-emerald-800 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-800/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:bg-emerald-800/50 flex items-center justify-center gap-1.5 uppercase"
                >
                  {loading ? <span>Initiating...</span> : (
                    <>
                      <span>Initiate Oath</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Step 2: Digital Initiation Certificate Mockup */
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-8">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-primary-emerald/20 flex items-center justify-center text-primary-emerald animate-pulse-glow">
              <CheckCircle className="w-6 h-6" strokeWidth={3} />
            </div>

            {/* Certificate Card container */}
            <div className="w-full max-w-lg bg-gradient-to-b from-[#064e3b] to-emerald-950 text-white rounded-[40px] p-8 md:p-12 border-2 border-gold-accent/40 shadow-2xl relative overflow-hidden text-center gold-border-glow">
              {/* Decorative geometry background */}
              <div className="absolute top-[-50px] left-[-50px] w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
              <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 rounded-full bg-gold-accent/10 blur-3xl pointer-events-none" />

              {/* Islamic Pattern Header */}
              <div className="flex flex-col items-center gap-2 mb-8 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gold-accent text-dark-emerald flex items-center justify-center font-bold shadow-md border border-white/20">★</div>
                <span className="font-cinzel text-xs tracking-widest text-gold-accent font-bold uppercase">Shajara Qadriyya Razawiyya</span>
                <h4 className="font-cinzel text-lg font-bold">Initiation Certificate</h4>
              </div>

              {/* Certificate content text */}
              <div className="space-y-6 my-8 relative z-10 font-sans">
                <p className="text-xs text-emerald-200 uppercase tracking-widest leading-none font-bold">This is to certify that</p>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">{formData.name}</h2>
                <p className="text-xs text-emerald-100/80 leading-relaxed max-w-xs mx-auto">
                  Has been formally initiated as a **Mureed** (Spiritual Disciple) in our lineage, pledging adherence to prayers, Sunnah lifestyle, and regular Shajara litany recitations.
                </p>
              </div>

              {/* Verification indicators */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8 relative z-10 text-xs font-sans text-left">
                <div>
                  <span className="block text-[9px] text-emerald-300 font-bold uppercase tracking-wider">Mureed ID:</span>
                  <span className="block font-mono font-bold text-gold-accent mt-0.5">{mureedId}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] text-emerald-300 font-bold uppercase tracking-wider">Date of Initiation:</span>
                  <span className="block font-bold mt-0.5">{new Date().toLocaleDateString([], { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>

              {/* Seal details */}
              <div className="mt-8 text-[9px] text-emerald-200/50 uppercase tracking-widest font-bold font-sans">
                ★ Approved by Spiritual Advisory Panel ★
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 bg-white border border-emerald-800/10 text-dark-emerald rounded-xl font-bold text-xs hover:bg-slate-50 transition-all shadow-sm"
              >
                Print Certificate
              </button>
              <button
                onClick={() => {
                  setStep(1);
                  setFormData({
                    name: "",
                    email: "",
                    country: "",
                    phone: "",
                    dob: "",
                    pledgeChecked: false,
                  });
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-800 to-primary-emerald text-white rounded-xl font-bold text-xs hover:scale-102 active:scale-98 transition-all shadow-md uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
