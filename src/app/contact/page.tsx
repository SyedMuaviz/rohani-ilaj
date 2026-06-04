"use client";

import React, { useState } from "react";
import { Mail, Phone, Clock, MapPin, Send, HelpCircle, Star } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message text is required";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("JazakAllah Khair. Your message has been sent. Our advisors will reply shortly.");
      setFormData({
        name: "",
        email: "",
        subject: "general",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1 bg-emerald-900/5 px-3.5 py-1.5 rounded-full border border-emerald-800/10 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span>Connect With Us</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-dark-emerald tracking-wide">
            Contact Spiritual Advisors
          </h1>
          <p className="text-sm md:text-base text-muted-text leading-relaxed font-sans font-medium">
            Have questions regarding spiritual ailments, daily Wazaif, or prayers? Send us a message and receive verified guidance.
          </p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Contact Info (5 columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#064e3b] to-emerald-950 text-white rounded-3xl p-8 border border-gold-accent/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-8 z-10">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-gold-accent uppercase tracking-widest block">Helpline Channels</span>
                <h3 className="font-cinzel text-lg font-bold">Contact Channels</h3>
                <p className="text-xs text-emerald-100/70 leading-relaxed font-sans">
                  We are available for spiritual consultation via multiple portals. Our average email response time is under 24 hours.
                </p>
              </div>

              {/* Channels list */}
              <div className="space-y-6 text-xs text-emerald-200">
                <div className="flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-gold-accent shrink-0" />
                  <div>
                    <span className="block font-bold text-white uppercase tracking-wider text-[10px]">Toll-Free Helpline</span>
                    <span className="block text-sm font-semibold mt-0.5">+1 (800) 555-ILAJ</span>
                    <span className="block opacity-60 text-[10px] mt-0.5">Available: Mon-Fri, 9:00 AM - 5:00 PM EST</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="w-5 h-5 text-gold-accent shrink-0" />
                  <div>
                    <span className="block font-bold text-white uppercase tracking-wider text-[10px]">Support Email</span>
                    <span className="block text-sm font-semibold mt-0.5">support@rohani-ilaj.org</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="w-5 h-5 text-gold-accent shrink-0" />
                  <div>
                    <span className="block font-bold text-white uppercase tracking-wider text-[10px]">Consultation Timings</span>
                    <span className="block text-sm font-semibold mt-0.5">Daily: 10:00 AM - 08:00 PM EST</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-gold-accent shrink-0" />
                  <div>
                    <span className="block font-bold text-white uppercase tracking-wider text-[10px]">Main Center Office</span>
                    <span className="block text-sm font-semibold mt-0.5">123 Islamic Center Plaza, New York, NY 10001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seal details */}
            <div className="mt-8 text-[9px] text-emerald-200/50 uppercase tracking-widest font-bold font-sans border-t border-white/10 pt-4 z-10">
              ★ Non-Political, Educational affiliation only ★
            </div>
          </div>

          {/* Right: Contact Form (7 columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-emerald-800/5 shadow-md">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
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

              {/* Subject Selection */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Query Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full"
                >
                  <option value="general">General Inquiry</option>
                  <option value="wazaif">Questions about Wazaif</option>
                  <option value="remedies">Rohani Ilaj Consultation</option>
                  <option value="mureed">Becoming a Mureed affiliation</option>
                  <option value="app">Mobile Application Support</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block">Message / Query Body</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter details of your question here"
                  className="bg-slate-50 border border-emerald-800/10 focus:border-gold-accent focus:outline-none rounded-xl px-4 py-2.5 text-xs text-dark-text w-full placeholder:text-muted-text font-sans resize-none"
                />
                {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>}
              </div>

              {/* Submit triggers */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-800 to-primary-emerald text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-800/10 hover:scale-102 active:scale-98 disabled:bg-emerald-800/50 flex items-center justify-center gap-1.5 uppercase tracking-wider"
              >
                {loading ? <span>Sending...</span> : (
                  <>
                    <span>Send Message</span>
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
