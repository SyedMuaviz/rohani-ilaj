"use client";

import React, { useState } from "react";
import { HelpCircle, Star, ShieldCheck, ArrowRight, UserCheck, BookOpen, Send, Check } from "lucide-react";
import { toast } from "sonner";

export default function IstikharaPage() {
  const [step, setStep] = useState(1); // 1 = Guide, 2 = Form, 3 = Completed
  
  const [formData, setFormData] = useState({
    fullName: "",
    motherName: "",
    email: "",
    purpose: "marriage",
    optionA: "",
    optionB: "",
    details: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleNextStep = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackStep = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!formData.motherName.trim()) tempErrors.motherName = "Mother's name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.optionA.trim()) tempErrors.optionA = "Please define the primary decision option";
    if (!formData.agree) tempErrors.agree = "You must agree to the terms";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      toast.error("Please fill in all mandatory fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      toast.success("Online Istikhara request registered successfully!");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        
        {/* Page title header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span>Spiritual Decision Guidance</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-dark-emerald tracking-wide">
            Online Istikhara Services
          </h1>
          <p className="text-sm md:text-base text-muted-text leading-relaxed font-sans">
            Make important life choices with clarity. Learn the Sunnah method of Istikhara or request our scholars to make du'as on your behalf.
          </p>
        </div>

        {/* Progress Timeline Header */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center relative">
            {/* Horizontal Line background */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-900/10 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-primary-emerald -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: step === 1 ? "0%" : step === 2 ? "50%" : "100%" }}
            />

            {/* Step 1 Circle */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs z-10 border transition-all duration-300 ${
                step >= 1
                  ? "bg-gradient-to-r from-emerald-800 to-primary-emerald text-white border-gold-accent/30 shadow-md"
                  : "bg-white text-muted-text border-emerald-800/10"
              }`}
            >
              1
            </div>

            {/* Step 2 Circle */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs z-10 border transition-all duration-300 ${
                step >= 2
                  ? "bg-gradient-to-r from-emerald-800 to-primary-emerald text-white border-gold-accent/30 shadow-md"
                  : "bg-white text-muted-text border-emerald-800/10"
              }`}
            >
              2
            </div>

            {/* Step 3 Circle */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs z-10 border transition-all duration-300 ${
                step >= 3
                  ? "bg-gradient-to-r from-emerald-800 to-primary-emerald text-white border-gold-accent/30 shadow-md"
                  : "bg-white text-muted-text border-emerald-800/10"
              }`}
            >
              3
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-muted-text uppercase mt-2">
            <span>Learn Istikhara</span>
            <span>Submit Query</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Dynamic Steps rendering */}
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Guide section */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-emerald-800/5 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-primary-emerald uppercase tracking-wider block">Prophetic Sunnah</span>
                <h2 className="font-cinzel text-xl md:text-2xl font-bold text-dark-emerald">What is Istikhara?</h2>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans">
                  The word 'Istikhara' literally means to seek goodness and guidance from Allah. When a Muslim is faced with an important decision (e.g. marriage, business, job, travel) and is unsure, it is a highly recommended Sunnah to perform two units of voluntary prayer followed by the specific Istikhara Supplication.
                </p>
              </div>

              {/* Hadith Citation */}
              <div className="p-4 rounded-2xl bg-emerald-50/30 border border-emerald-800/5 italic text-xs leading-relaxed text-dark-emerald font-serif relative">
                "The Messenger of Allah (peace be upon him) used to teach us to make Istikhara in all matters, just as he used to teach us a Surah from the Quran."
                <span className="block font-sans font-bold text-[10px] text-right uppercase tracking-wider text-gold-accent mt-1.5">— Sahih al-Bukhari 1162</span>
              </div>

              {/* Step instructions */}
              <div className="space-y-4">
                <h3 className="font-cinzel text-sm font-bold text-dark-emerald tracking-wide">Method of Performing Istikhara:</h3>
                <div className="space-y-3">
                  {[
                    { num: "01", text: "Perform fresh ablution (Wudu) and sit facing the Qiblah." },
                    { num: "02", text: "Offer 2 Rak'ats of Nafl (voluntary) prayer. It is recommended to recite Surah Al-Kafirun in the first Rak'at and Surah Al-Ikhlas in the second." },
                    { num: "03", text: "Immediately after completing the prayer, recite the specific Istikhara Supplication with absolute sincerity and confidence in Allah's wisdom." },
                    { num: "04", text: "While reciting the prayer, mention your specific choice when you reach the words: '...if You know that this matter (mention decision here)...'" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="font-cinzel text-xs font-bold text-gold-accent py-0.5">{item.num}</span>
                      <p className="text-xs text-muted-text leading-relaxed font-sans">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-800/5 flex justify-end">
                <button
                  onClick={handleNextStep}
                  className="group flex items-center gap-1.5 bg-gradient-to-r from-emerald-800 to-primary-emerald text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-all hover:scale-102"
                >
                  <span>Request Online Istikhara</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Sidebar information */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#064e3b] to-emerald-950 text-white rounded-3xl p-8 border border-gold-accent/30 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-cinzel text-md font-bold text-gold-accent">Need Help Deciding?</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed font-sans">
                If you are unable to perform Istikhara yourself due to sickness, lack of knowledge, or specific conditions, you can submit a query.
              </p>
              <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-emerald-200">
                <div className="flex gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-gold-accent shrink-0" />
                  <span>Scholars perform the prayers with proper adherence to Sunnah.</span>
                </div>
                <div className="flex gap-2">
                  <UserCheck className="w-4.5 h-4.5 text-gold-accent shrink-0" />
                  <span>Get response within 24 hours directly on your email address.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Form */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 border border-emerald-800/5 shadow-md space-y-6">
            <h2 className="font-cinzel text-xl font-bold text-dark-emerald text-center">Istikhara Query Registration</h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              {/* Full Name & Mother's name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text"
                  />
                  {errors.fullName && <span className="text-[10px] text-red-500 font-semibold">{errors.fullName}</span>}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Mother's Name</label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    placeholder="Enter mother's name"
                    className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text"
                  />
                  {errors.motherName && <span className="text-[10px] text-red-500 font-semibold">{errors.motherName}</span>}
                </div>
              </div>

              {/* Email & Purpose selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Query Purpose</label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full"
                  >
                    <option value="marriage">Marriage (Shadi)</option>
                    <option value="business">Business / Financial Investment</option>
                    <option value="travel">Travel or Relocation</option>
                    <option value="career">Career / Employment Choice</option>
                    <option value="general">Other General Life Decision</option>
                  </select>
                </div>
              </div>

              {/* Primary Choices inputs */}
              <div className="space-y-3 p-4 rounded-2xl bg-emerald-50/20 border border-emerald-800/5">
                <span className="block text-[10px] font-bold text-primary-emerald uppercase tracking-wider">Define Decision Choices:</span>
                
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-muted-text uppercase block">Option A (e.g. Taking the job offer, marriage proposal 'X')</label>
                  <input
                    type="text"
                    name="optionA"
                    value={formData.optionA}
                    onChange={handleInputChange}
                    placeholder="Describe Option A"
                    className="bg-white border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-3 py-2 text-xs text-dark-text w-full placeholder:text-muted-text"
                  />
                  {errors.optionA && <span className="text-[10px] text-red-500 font-semibold">{errors.optionA}</span>}
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-[9px] font-bold text-muted-text uppercase block">Option B (e.g. Declining proposal, staying at current job) [Optional]</label>
                  <input
                    type="text"
                    name="optionB"
                    value={formData.optionB}
                    onChange={handleInputChange}
                    placeholder="Describe Option B"
                    className="bg-white border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-3 py-2 text-xs text-dark-text w-full placeholder:text-muted-text"
                  />
                </div>
              </div>

              {/* Description of dilemma */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Additional Details</label>
                <textarea
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Provide context or specific details about the choice to help the scholars make focused prayers."
                  className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text font-sans resize-none"
                />
              </div>

              {/* Policy Consent checkbox */}
              <div className="space-y-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                    className="rounded border-emerald-800/20 text-primary-emerald focus:ring-gold-accent mt-0.5"
                  />
                  <span className="text-[10px] text-muted-text leading-normal">
                    I verify that all information provided above is correct, and I consent that it will be securely forwarded to the spiritual advisors.
                  </span>
                </label>
                {errors.agree && <span className="block text-[10px] text-red-500 font-semibold">{errors.agree}</span>}
              </div>

              {/* Action triggers */}
              <div className="flex gap-4 justify-between items-center border-t border-emerald-800/5 pt-4">
                <button
                  type="button"
                  onClick={handleBackStep}
                  className="px-6 py-2.5 border border-emerald-800/10 text-muted-text rounded-xl font-bold text-xs hover:bg-slate-50 transition-all"
                >
                  Back to Guide
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-800 to-primary-emerald text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-800/10 hover:scale-102 active:scale-98 disabled:bg-emerald-800/50 flex items-center gap-1.5 uppercase"
                >
                  {loading ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (
          <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-emerald-800/5 shadow-md flex flex-col items-center text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-primary-emerald/20 flex items-center justify-center text-primary-emerald animate-pulse-glow">
              <Check className="w-6 h-6" strokeWidth={3} />
            </div>
            
            <div className="space-y-2">
              <h2 className="font-cinzel text-xl font-bold text-dark-emerald">Request Submitted!</h2>
              <p className="text-xs text-muted-text leading-relaxed font-sans px-4">
                JazakAllah Khair. Your Online Istikhara request has been registered in our portal. Sincere scholars will perform the Sunnah prayers on your behalf.
              </p>
            </div>

            {/* Query ID and timeline info */}
            <div className="p-4 rounded-2xl bg-emerald-50/20 border border-emerald-800/5 w-full text-xs text-left space-y-2 font-sans">
              <div className="flex justify-between font-semibold">
                <span className="text-muted-text">Reference Number:</span>
                <span className="text-dark-emerald font-mono">IST-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-muted-text">Estimated Response:</span>
                <span className="text-gold-accent">Within 24 Hours</span>
              </div>
              <p className="text-[10px] text-muted-text border-t border-emerald-800/5 pt-2 mt-2 leading-snug">
                You will receive a detailed email report containing the spiritual outcome, prayers, and recommended steps to follow.
              </p>
            </div>

            <button
              onClick={handleBackStep}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-800 to-primary-emerald text-white rounded-xl font-bold text-xs shadow-md transition-all uppercase tracking-wider"
            >
              Return to Guide
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
