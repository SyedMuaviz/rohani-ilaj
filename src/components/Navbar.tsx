"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Smartphone, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rohani-ilaj", label: "Rohani Ilaj" },
  { href: "/istikhara", label: "Istikhara" },
  { href: "/wazaif", label: "Wazaif" },
  { href: "/prayer-times", label: "Prayer Times" },
  { href: "/become-mureed", label: "Become Mureed" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-md border-b border-emerald-800/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-primary-emerald flex items-center justify-center shadow-md shadow-emerald-800/20 border border-gold-accent/30 overflow-hidden">
            <Star className="w-5 h-5 text-gold-accent fill-gold-accent animate-pulse-glow" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
          <div>
            <span className="font-cinzel text-xl font-bold tracking-wide text-dark-emerald group-hover:text-primary-emerald transition-colors block leading-tight">
              ROHANI ILAJ
            </span>
            <span className="text-[10px] tracking-widest text-gold-accent font-semibold block uppercase leading-none">
              Spiritual Healing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 relative",
                  isActive
                    ? "text-primary-emerald"
                    : "text-dark-text/80 hover:text-primary-emerald hover:bg-emerald-50/50"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-emerald to-gold-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/download-app"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-800 to-primary-emerald hover:from-primary-emerald hover:to-emerald-800 text-white font-medium text-sm py-2.5 px-5 rounded-xl shadow-md shadow-emerald-800/10 border border-gold-accent/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Smartphone className="w-4 h-4" />
            Download App
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-dark-emerald hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-800/20"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-all duration-300">
          {/* Drawer Menu */}
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream-white shadow-2xl p-6 flex flex-col justify-between border-l border-emerald-800/10">
            <div className="space-y-6">
              <span className="text-xs font-bold text-muted-text uppercase tracking-widest block border-b border-emerald-800/10 pb-2">
                Navigation
              </span>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-xl font-semibold text-base transition-all",
                        isActive
                          ? "bg-emerald-800/10 text-emerald-800 border-l-4 border-gold-accent"
                          : "text-dark-text/80 hover:bg-emerald-50/50 hover:text-primary-emerald"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-4">
              <Link
                href="/download-app"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-800 to-primary-emerald text-white py-3 rounded-xl font-bold shadow-md shadow-emerald-800/20 border border-gold-accent/20 text-center transition-all duration-200"
              >
                <Smartphone className="w-5 h-5" />
                Download App
              </Link>
              <div className="text-center">
                <span className="text-xs text-muted-text flex items-center justify-center gap-1">
                  Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for the Ummah
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
