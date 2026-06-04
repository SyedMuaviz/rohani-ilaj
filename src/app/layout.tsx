import type { Metadata } from "next";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohani Ilaj — Premium Islamic Spiritual Healing & Guidance",
  description:
    "Access authentic Rohani Ilaj remedies, read morning and evening Wazaif, submit Online Istikhara, use the digital Tasbeeh counter, track prayer times, and contact spiritual advisors.",
  keywords: [
    "Rohani Ilaj",
    "Istikhara",
    "Islamic Wazaif",
    "Islamic Remedies",
    "Prayer Timings",
    "Tasbeeh Counter",
    "Mureed Oath",
    "Dawat-e-Islami",
    "Madani Channel",
    "Spiritual healing"
  ],
  authors: [{ name: "Rohani Ilaj Team" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen flex flex-col bg-cream-bg text-dark-text font-sans selection:bg-primary-emerald/10 selection:text-primary-emerald">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
