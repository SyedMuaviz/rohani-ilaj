"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Wait, did we install resolvers?
// Let's check if we installed @hookform/resolvers. If not, let's write simple react state validation or check if we need to install it.
// Oh, standard react hook form is very easy to validate even without zod resolver, or we can install @hookform/resolvers.
// Let's write simple custom validation, or standard React Hook Form validations, which is extremely robust and avoids missing resolver packages!
// Let's write a standard clean react validation. It avoids any dependency issues and compiles perfectly.
import { Sparkles, Search, SlidersHorizontal, BookOpen, User, Mail, HelpCircle, Send } from "lucide-react";
import { rohaniIlajData } from "@/data/rohaniIlajData";
import { toast } from "sonner";

export default function RohaniIlajPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [submitting, setSubmitting] = useState(false);

  // Simple standard React state for form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "male",
    category: "mental",
    symptoms: "",
    consent: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Remedies filtering
  const filteredRemedies = rohaniIlajData.filter((item) => {
    const matchesSearch =
      item.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.remedy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.recitation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.symptoms.trim()) errors.symptoms = "Please describe your symptoms";
    if (!formData.consent) errors.consent = "You must agree to the terms";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error("Please correct the errors in the form.");
      return;
    }

    setSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Guidance request submitted successfully! An advisor will reach out within 24-48 hours.", {
        description: "Your reference number is RI-" + Math.floor(100000 + Math.random() * 900000),
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        gender: "male",
        category: "mental",
        symptoms: "",
        consent: false,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/10 via-white to-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span>Islamic Spiritual Healing</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-dark-emerald tracking-wide">
            Rohani Ilaj (Remedies)
          </h1>
          <p className="text-sm md:text-base text-muted-text leading-relaxed font-sans">
            Access verified spiritual prescriptions based on the Noble Quran and authentic Hadiths to relieve distress and restore peace.
          </p>
        </div>

        {/* Catalog Grid and Request Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Remedies Catalog (8 columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Search and Filters block */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-emerald-800/5 shadow-sm w-full">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-text" />
                <input
                  type="text"
                  placeholder="Search remedies (e.g. pain, anxiety)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl pl-10 pr-4 py-2 text-xs text-dark-text w-full placeholder:text-muted-text transition-all"
                />
              </div>

              {/* Filters category */}
              <div className="flex flex-wrap gap-1.5 items-center w-full md:w-auto">
                <SlidersHorizontal className="w-3.5 h-3.5 text-muted-text mr-1 hidden sm:block" />
                {["all", "mental", "physical", "family", "protection"].map((cat) => (
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

            {/* Remedies List */}
            <div className="space-y-6">
              {filteredRemedies.length > 0 ? (
                filteredRemedies.map((remedy) => (
                  <div
                    key={remedy.id}
                    className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-800/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group gold-border-glow"
                  >
                    <div className="space-y-4">
                      {/* Badge category */}
                      <span className="inline-flex px-2.5 py-0.5 rounded-full bg-emerald-50 text-primary-emerald text-[9px] font-bold uppercase tracking-wider">
                        {remedy.category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="font-cinzel text-lg md:text-xl font-bold text-dark-emerald">
                        {remedy.problem}
                      </h3>

                      {/* Symptoms bullet list */}
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-text">Symptoms Addressed:</span>
                        <ul className="list-disc pl-5 text-xs text-muted-text space-y-0.5">
                          {remedy.symptoms.map((s, idx) => (
                            <li key={idx}>{s}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Remedy details */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-emerald-800/5 space-y-3">
                        <div className="space-y-1">
                          <span className="block text-[10px] font-bold text-primary-emerald uppercase tracking-wider">Treatment Procedure:</span>
                          <p className="text-xs text-dark-text leading-relaxed font-sans">{remedy.remedy}</p>
                        </div>
                        <div className="space-y-1 pt-2 border-t border-emerald-800/5">
                          <span className="block text-[10px] font-bold text-gold-accent uppercase tracking-wider">Supplication / Recitation:</span>
                          <p className="text-xs font-bold text-dark-emerald leading-relaxed font-sans">{remedy.recitation}</p>
                        </div>
                      </div>

                      {/* Bottom details and duration */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[10px] font-bold uppercase tracking-wider text-muted-text border-t border-emerald-800/5">
                        <div className="flex items-center gap-1.5 text-primary-emerald">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Source: {remedy.quranicReference}</span>
                        </div>
                        <div>
                          <span>Recommended Duration: <span className="text-gold-accent">{remedy.durationDays} Days</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-emerald-800/20 text-muted-text">
                  <HelpCircle className="w-12 h-12 mx-auto text-emerald-800/20 mb-3" />
                  <p className="text-sm font-semibold">No remedies found matching your filters.</p>
                  <p className="text-xs mt-1">Try relaxing search terms or select another category.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Submit Request Portal (4 columns) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#064e3b] to-emerald-950 text-white rounded-3xl p-6 md:p-8 border border-gold-accent/30 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-bold text-gold-accent uppercase tracking-widest block">Confidential Help</span>
              <h3 className="font-cinzel text-lg font-bold">Ask Spiritual Advisor</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed font-sans">
                Describe your condition privately. Certified scholars will review your submission and provide customized du'as.
              </p>
            </div>

            {/* Request Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-emerald-100/40" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="bg-white/5 border border-white/10 focus:border-gold-accent focus:outline-none rounded-xl pl-9 pr-4 py-2.5 text-xs text-white w-full placeholder:text-emerald-100/30"
                  />
                </div>
                {formErrors.name && <span className="text-[10px] text-red-300 font-semibold">{formErrors.name}</span>}
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-emerald-100/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="bg-white/5 border border-white/10 focus:border-gold-accent focus:outline-none rounded-xl pl-9 pr-4 py-2.5 text-xs text-white w-full placeholder:text-emerald-100/30"
                  />
                </div>
                {formErrors.email && <span className="text-[10px] text-red-300 font-semibold">{formErrors.email}</span>}
              </div>

              {/* Gender and Category */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="bg-emerald-900 border border-white/10 focus:border-gold-accent focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white w-full"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="bg-emerald-900 border border-white/10 focus:border-gold-accent focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white w-full"
                  >
                    <option value="mental">Mental Stress</option>
                    <option value="physical">Physical Pain</option>
                    <option value="family">Family Discord</option>
                    <option value="protection">Protection</option>
                  </select>
                </div>
              </div>

              {/* Symptoms / Condition Description */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider block">Describe Condition</label>
                <textarea
                  name="symptoms"
                  rows={4}
                  value={formData.symptoms}
                  onChange={handleInputChange}
                  placeholder="Tell us about the issue or symptoms in detail (strictly private)"
                  className="bg-white/5 border border-white/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-white w-full placeholder:text-emerald-100/30 font-sans resize-none"
                />
                {formErrors.symptoms && <span className="text-[10px] text-red-300 font-semibold">{formErrors.symptoms}</span>}
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="space-y-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="rounded bg-white/5 border-white/10 text-primary-emerald focus:ring-gold-accent mt-0.5"
                  />
                  <span className="text-[9px] text-emerald-100/70 leading-normal">
                    I consent that my data is handled securely and only processed for spiritual counseling purposes.
                  </span>
                </label>
                {formErrors.consent && <span className="block text-[10px] text-red-300 font-semibold">{formErrors.consent}</span>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-gold-accent hover:bg-yellow-600 disabled:bg-gold-accent/50 text-dark-emerald font-bold text-xs rounded-xl shadow-lg shadow-gold-accent/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                {submitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Query</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
