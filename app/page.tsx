"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, MessageSquare, Clock, Award, FileText, Menu, X, 
  CheckCircle, Zap, Star, ChevronRight, TrendingUp, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- UTILITIES ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- NAVBAR (NAVY THEME) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
      {/* Top Banner - Deep Navy */}
      <div className="bg-blue-900 text-white text-[10px] md:text-xs py-2 text-center font-bold px-4 tracking-wide">
        🚀 Promo Launching: Diskon 50% Setup AI Chatbot untuk 10 Klien Pertama!
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-1">
            {/* Logo Color Changed */}
            <span className="font-extrabold text-3xl tracking-tighter text-blue-800">ARVISTAR</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                // Hover Color Changed
                className="text-gray-500 hover:text-blue-700 font-bold transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            {/* Button Hover Changed */}
            <button className="bg-slate-900 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20 text-sm transform hover:-translate-y-0.5 border border-transparent hover:border-blue-400">
              Konsultasi Gratis
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 shadow-lg absolute w-full">
           {menuItems.map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="block text-gray-600 hover:text-blue-700 font-bold"
              >
                {item}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

// --- HERO SECTION (NAVY THEME) ---
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Blurs - Changed to Blue/Cyan */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-8 text-center lg:text-left">
            {/* Tag - Blue Theme */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 font-extrabold text-[10px] sm:text-xs tracking-wide uppercase border border-blue-100">
              <Zap size={12} className="mr-2 fill-blue-700 text-blue-700"/> JANGAN BIARKAN PELANGGAN KABUR
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Website Canggih + <br className="hidden lg:block"/>
              {/* Gradient Changed to Deep Blue */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500">AI Karyawan</span> yang <br/>
              Gak Pernah Tidur.
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Arvistar membangun website profesional yang dilengkapi <strong>Otak AI Pintar</strong>. Bisa jawab chat pelanggan, jelaskan produk, dan closing penjualan otomatis 24/7 di WhatsApp & Web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              {/* Primary Button - Navy Blue */}
              <button className="px-8 py-4 rounded-full bg-blue-700 text-white font-bold shadow-xl shadow-blue-200 hover:bg-blue-800 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Coba Demo AI Sekarang
                <ArrowRight size={18} />
              </button>
              {/* Secondary Button - Blue Border */}
              <button className="px-8 py-4 rounded-full bg-white text-slate-700 border-2 border-slate-100 font-bold hover:border-blue-600 hover:text-blue-700 transition-all">
                Lihat Portfolio
              </button>
            </div>
            
            <p className="text-xs text-gray-400 font-medium pt-2">
              *Garansi uang kembali jika AI tidak bekerja.
            </p>
          </div>

          {/* Right Content (Dashboard Mockup) */}
          <div className="relative mt-8 lg:mt-0 perspective-1000">
             <div className="relative rounded-2xl bg-slate-900 p-2 md:p-4 shadow-2xl transform rotate-y-6 hover:rotate-0 transition-all duration-700 ease-out border border-slate-800">
                <div className="rounded-xl bg-white overflow-hidden border border-gray-800 aspect-[16/10] flex flex-col relative">
                   <div className="h-8 bg-slate-100 border-b border-gray-200 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                   </div>
                   <div className="flex-1 flex">
                      <div className="w-16 border-r border-gray-100 bg-gray-50 flex flex-col items-center py-4 gap-4">
                         {/* Sidebar Logo - Blue */}
                         <div className="w-8 h-8 rounded-lg bg-blue-700 shadow-lg shadow-blue-200 flex items-center justify-center text-white font-bold">A</div>
                      </div>
                      <div className="flex-1 p-6 bg-slate-50 relative overflow-hidden flex flex-col justify-center">
                         <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-sm mx-auto z-10 relative">
                             <div className="flex items-center gap-3 mb-4">
                                {/* Chat Icon Gradient - Blue */}
                                <div className="bg-gradient-to-br from-blue-700 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                                   <MessageSquare className="text-white w-5 h-5" />
                                </div>
                                <div>
                                   <h3 className="font-bold text-slate-800 text-sm">Arvistar Sales AI</h3>
                                   <p className="text-[10px] text-green-600 flex items-center gap-1 font-bold">
                                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online 24 Jam
                                   </p>
                                </div>
                             </div>
                             <div className="space-y-3">
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-xs text-gray-700 font-medium w-full">
                                   "Halo Kak! Stok sepatu model A masih ada promo 30%. Mau saya bantu checkout sekarang?"
                                </div>
                                {/* User Chat Bubble - Blue */}
                                <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-xs w-3/4 ml-auto shadow-md font-medium">
                                   Wah boleh, tolong kirim link pembayarannya ya.
                                </div>
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-xs text-gray-700 font-medium w-full">
                                   "Siap! Ini link-nya ya Kak..."
                                </div>
                             </div>
                             <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                                <span className="text-[10px] text-gray-400 font-bold">AUTO-REPLY ACTIVE</span>
                                {/* Status Text - Blue */}
                                <span className="text-[10px] text-blue-600 font-bold">CLOSING SUCCESS ✅</span>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
                <div className="bg-green-100 p-2 rounded-full">
                   <TrendingUp className="text-green-600 w-6 h-6" />
                </div>
                <div>
                   <p className="text-[10px] text-gray-500 font-bold uppercase">Omzet Bisnis</p>
                   <p className="font-bold text-slate-800 text-sm">Meningkat +40%</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FEATURES SECTION (NAVY THEME & WATERMARK REMOVED) ---
const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Web Konversi Tinggi",
      description: "Bukan sekadar web profile biasa. Kami desain website yang memaksa pengunjung untuk menekan tombol 'Beli' atau 'Hubungi Kami'."
    },
    {
      icon: Zap,
      title: "AI Chatbot 'Sales'",
      description: "Punya admin yang sering slow respon? Ganti dengan AI kami. Balas chat 0.1 detik, hafal semua produk, sopan, dan jago jualan."
    },
    {
      icon: TrendingUp,
      title: "Otomasi Anti-Ribet",
      description: "Pesanan masuk di Web -> Notif ke WA -> Data masuk Excel. Semua serba otomatis. Anda tinggal duduk manis pantau profit."
    },
    {
      icon: ShieldCheck,
      title: "Terima Beres",
      description: "Gaptek? Tenang. Mulai dari domain, server, desain, sampai training AI-nya, tim Arvistar yang kerjakan semuanya."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Tag - Blue Theme */}
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] tracking-wider mb-4 border border-blue-100">
            KENAPA HARUS ARVISTAR?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Upgrade Bisnis Anda dari <br/>
            {/* Accent Colors Changed */}
            <span className="text-blue-600">Manual</span> ke <span className="text-cyan-600">Auto-Pilot</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            // Hover Border Changed to Blue
            <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden">
                
                {/* 🔥 WATERMARK ANGKA (Yang "N") SUDAH DIHAPUS DARI SINI 🔥
                */}

                <div className="relative z-10">
                {/* Icon Hover Changed to Blue */}
                <div className="w-12 h-12 mb-6 text-slate-800 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-full h-full stroke-[1.5]" />
                </div>
                
                {/* Title Hover Changed to Blue */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {feature.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {feature.description}
                </p>

                {/* Link Hover Changed to Blue */}
                <Link href="/services" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-700 gap-1 transition-all">
                    Detail Fitur <ChevronRight size={16} />
                </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PRICING SECTION (NAVY THEME) ---
const PricingSection = () => {
  const [isMaintenance, setIsMaintenance] = useState(false);

  const plans = [
    {
      name: "Starter Web",
      price: "Rp 1.5Jt",
      desc: "Cocok untuk Branding Awal",
      btnText: "Ambil Paket Ini",
      isPrimary: false,
      features: ["Professional Landing Page", "Desain Premium Responsive", "SEO Basic Setup", "Domain .com Gratis 1 Thn", "Tidak Termasuk AI Chatbot"]
    },
    {
      name: "Business Growth",
      price: "Rp 3.5Jt",
      oldPrice: "Rp 5Jt",
      desc: "Web + AI Karyawan (Best Seller)",
      discount: "HEMAT 30%",
      tag: "PALING LAKU 🔥",
      btnText: "Pesan Sekarang",
      isPrimary: true,
      features: ["Semua Fitur Starter", "Integrasi AI Chatbot (Web)", "Training Data Produk Anda", "Dashboard Analitik Pintar", "Support Prioritas"]
    },
    {
      name: "Automation Pro",
      price: "Rp 7Jt",
      oldPrice: "Rp 10Jt",
      desc: "Full System + WhatsApp AI",
      discount: "HEMAT 30%",
      btnText: "Konsultasi Dulu",
      isPrimary: false,
      features: ["Semua Fitur Business", "Integrasi AI ke WhatsApp", "Otomasi Input Data Order", "Custom AI Logic", "Maintenance 3 Bulan Gratis"]
    },
    {
      name: "Custom Enterprise",
      price: "Hubungi Kami",
      desc: "Untuk Skala Perusahaan",
      btnText: "Kontak Sales",
      isPrimary: false,
      features: ["Dedicated AI Server", "Full Custom Development", "On-Premise Deployment", "Unlimited AI Training", "NDA Contract"]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Tag - Blue Theme */}
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] tracking-wider mb-4 border border-blue-100">
            INVESTASI CERDAS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
            Harga Terjangkau, <br/> ROI Berkali-kali Lipat
          </h2>

          <div className="flex items-center justify-center gap-4 bg-slate-50 inline-flex p-1.5 rounded-full border border-gray-200">
             <button 
                onClick={() => setIsMaintenance(false)}
                // Toggle Active State Changed to Blue
                className={cn("px-6 py-2 rounded-full text-sm font-bold transition-all", !isMaintenance ? "bg-blue-700 text-white shadow-md" : "text-gray-500 hover:text-gray-900")}
             >
                Sekali Bayar (Jual Putus)
             </button>
             <button 
                onClick={() => setIsMaintenance(true)}
                // Toggle Active State Changed to Blue
                className={cn("px-6 py-2 rounded-full text-sm font-bold transition-all", isMaintenance ? "bg-blue-700 text-white shadow-md" : "text-gray-500 hover:text-gray-900")}
             >
                Langganan Bulanan
             </button>
          </div>
          <p className="text-xs text-gray-400 mt-3 font-medium">*Geser tombol untuk lihat opsi langganan maintenance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div key={idx} className={cn(
              "relative p-6 rounded-3xl bg-white border transition-all duration-300 flex flex-col",
              // Primary Card Border/Shadow Changed to Blue
              plan.isPrimary ? "border-blue-600 shadow-2xl shadow-blue-200 scale-105 z-10 ring-4 ring-blue-50" : "border-gray-100 hover:border-blue-300 hover:shadow-lg"
            )}>
              {plan.tag && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md w-max">
                    {plan.tag}
                 </div>
              )}

              <div className="text-center mb-6 pt-2">
                 <h3 className="font-bold text-slate-800 mb-1 text-lg">{plan.name}</h3>
                 <p className="text-gray-500 text-xs mb-4 font-medium">{plan.desc}</p>
                 
                 <div className="flex flex-col items-center justify-center mb-4">
                    {plan.oldPrice && (
                       <span className="text-gray-400 line-through text-xs font-semibold mb-1">{plan.oldPrice}</span>
                    )}
                    <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                 </div>

                 <button className={cn(
                    "w-full py-3 rounded-xl text-sm font-bold transition-all transform active:scale-95 flex items-center justify-center gap-2",
                    // Primary Button Changed to Blue
                    plan.isPrimary ? "bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-200" : "bg-white border-2 border-slate-100 text-slate-700 hover:border-blue-600 hover:text-blue-700"
                 )}>
                    {plan.btnText}
                    {plan.isPrimary && <ArrowRight size={14}/>}
                 </button>
              </div>

              <div className="space-y-4 mt-auto border-t border-gray-50 pt-6">
                 {plan.features.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                       <div className={cn("p-0.5 rounded-full mt-0.5 flex-shrink-0", plan.isPrimary ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500")}>
                           <CheckCircle className="w-3 h-3" />
                       </div>
                       <span className="text-xs text-gray-600 font-semibold leading-relaxed">
                          {item}
                       </span>
                    </div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- TESTIMONIALS & FOOTER (NAVY THEME) ---
const TestimonialsSection = () => (
    // Background changed to darker Slate/Navy feel
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-extrabold mb-16">Kata Mereka yang Sudah <span className="text-blue-400">Auto-Pilot</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {text: "Dulu admin saya sering resign karena capek bales chat. Sejak pakai AI dari Arvistar, operasional lancar, omzet malah naik karena AI-nya gercep banget!", name: "Pak Hendra", role: "Owner Batik Solo"},
                    {text: "Saya kira bikin web AI itu mahal ratusan juta. Ternyata di Arvistar harganya masuk akal banget buat UMKM kayak saya. Setupnya juga cepet.", name: "Bu Siska", role: "Klinik Kecantikan"},
                    {text: "Gila sih, fitur AI-nya bisa rekomen produk sesuai budget customer. Ini kayak punya sales berpengalaman tapi gak perlu digaji bulanan.", name: "Mas Dimas", role: "Distributor Gadget"}
                ].map((testi, i) => (
                    <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 text-left hover:bg-slate-800 transition-colors backdrop-blur-sm">
                        <div className="flex text-yellow-400 mb-4 gap-1">
                            {[1,2,3,4,5].map((s) => <Star key={s} size={16} fill="currentColor"/>)}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{testi.text}"</p>
                        <div className="flex items-center gap-3">
                            {/* Avatar Gradient Changed to Blue */}
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-xs">
                                {testi.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-sm text-white">{testi.name}</p>
                                <p className="text-xs text-gray-400">{testi.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-white text-slate-900 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
             <div className="flex justify-center items-center gap-2 mb-6">
                {/* Logo Color Changed */}
                <span className="font-extrabold text-2xl tracking-tighter text-blue-800">ARVISTAR</span>
             </div>
             <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">Kami membantu pebisnis Indonesia tidur nyenyak sementara sistem kami bekerja keras mencetak profit.</p>
             
             <div className="flex justify-center gap-6 mb-8 text-sm font-bold text-gray-600">
                {/* Social Links Hover Changed */}
                <Link href="#" className="hover:text-blue-700">Instagram</Link>
                <Link href="#" className="hover:text-blue-700">LinkedIn</Link>
                <Link href="#" className="hover:text-blue-700">WhatsApp</Link>
             </div>

             <p className="text-gray-400 text-xs">© 2025 Arvistar Digitech. Surakarta, Indonesia.</p>
        </div>
    </footer>
);

export default function Home() {
  return (
    // Selection Color Changed to Light Blue
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}