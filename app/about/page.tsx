"use client";

import React, { useState } from 'react';
import { 
  Target, Users, Zap, Award, ArrowRight, CheckCircle, 
  Menu, X 
} from 'lucide-react';

import Link from 'next/link';

// --- NAVBAR (NAVY THEME - SAME AS HOME) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="bg-blue-900 text-white text-[10px] md:text-xs py-2 text-center font-medium px-4">
        Bergabunglah dengan revolusi AI untuk Agency Anda! Konsultasi gratis sekarang.
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-1">
            <span className="font-extrabold text-3xl tracking-tighter text-blue-800">ARVISTAR</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-gray-500 hover:text-blue-700 font-medium transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-200 text-sm transform hover:-translate-y-0.5">
              Mulai AI Journey
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
                className="block text-gray-600 hover:text-blue-700 font-medium"
              >
                {item}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

// --- ABOUT HERO (NAVY THEME) ---
const AboutHero = () => (
  <section className="relative py-20 bg-slate-50 overflow-hidden">
    {/* Blurs changed to Blue/Cyan */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-3xl mx-auto">
        {/* Tag Blue */}
        <span className="text-blue-700 font-bold text-xs tracking-wider uppercase mb-2 block">Tentang Kami</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Membangun Masa Depan <br />
          {/* Gradient Blue */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500">Digital Indonesia</span>
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          Arvistar Digitech bukan sekadar agency web. Kami adalah mitra teknologi yang fokus mengintegrasikan kecerdasan buatan (AI) ke dalam operasional bisnis sehari-hari agar lebih efisien dan menguntungkan.
        </p>
      </div>
    </div>
  </section>
);

const StorySection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
           <div className="relative rounded-2xl bg-slate-900 p-2 transform -rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="bg-slate-800 rounded-xl aspect-video flex items-center justify-center border border-slate-700">
                 <Zap className="w-20 h-20 text-yellow-400 opacity-80" />
                 <span className="sr-only">Arvistar Innovation</span>
              </div>
           </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Misi Kami: Demokratisasi AI</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Kami percaya bahwa teknologi canggih seperti AI dan Machine Learning tidak boleh hanya dinikmati oleh perusahaan raksasa. UMKM dan bisnis berkembang di Indonesia punya hak yang sama untuk bertumbuh dengan teknologi.
            </p>
            <p>
              Didirikan di Surakarta, Arvistar menggabungkan keahlian teknis (Engineering), manajemen strategis (Management), dan inovasi digital untuk menciptakan solusi yang <strong>Realistis, Terjangkau, dan Berdampak.</strong>
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
             {['Inovasi Tanpa Henti', 'Fokus pada ROI Klien', 'Transparansi Total', 'Support Jangka Panjang'].map((val, i) => (
                <div key={i} className="flex items-center gap-2">
                   {/* Check Circle Blue */}
                   <CheckCircle className="w-5 h-5 text-blue-700" />
                   <span className="text-sm font-medium text-slate-700">{val}</span>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- TEAM SECTION (NAVY THEME) ---
const TeamSection = () => {
  const team = [
    {
      name: "Founder Name", 
      role: "CEO & AI Lead",
      // Background Blue
      bg: "bg-blue-100 text-blue-700",
      desc: "Latar belakang Teknik Industri dengan spesialisasi Machine Learning & Data Science. Visioner di balik teknologi Arvistar."
    },
    {
      name: "Co-Founder 1", 
      role: "COO & Strategy",
      // Background Cyan
      bg: "bg-cyan-100 text-cyan-700",
      desc: "Ahli dalam IT Management & Business Process. Memastikan setiap solusi teknologi selaras dengan tujuan bisnis klien."
    },
    {
      name: "Co-Founder 2",
      role: "CMO & Development",
      // Background Indigo
      bg: "bg-indigo-100 text-indigo-700",
      desc: "Fokus pada pengembangan bisnis dan relasi industri. Membawa perspektif engineering yang presisi ke dalam manajemen proyek."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Otak di Balik Layar</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">
             Kombinasi unik antara Technical Engineering, IT Management, dan Data Science yang membentuk fondasi Arvistar.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {team.map((member, idx) => (
             <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-20 h-20 rounded-full ${member.bg} mb-6 flex items-center justify-center mx-auto`}>
                   <Users className="w-8 h-8" />
                </div>
                <div className="text-center">
                   <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                   {/* Role Tag Blue */}
                   <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-blue-700 mt-2 mb-4">
                      {member.role}
                   </span>
                   <p className="text-gray-500 text-sm leading-relaxed">
                      {member.desc}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

// --- STATS SECTION (DEEP NAVY BG) ---
const StatsSection = () => (
   // Background changed to Blue-900 (Navy)
   <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
               { num: "3+", label: "Tahun Pengalaman Tech" },
               { num: "50+", label: "Proyek Selesai" },
               { num: "24/7", label: "Support AI System" },
               { num: "100%", label: "Kepuasan Klien" }
            ].map((stat, i) => (
               <div key={i}>
                  {/* Text color adjusted for Navy bg */}
                  <div className="text-4xl md:text-5xl font-extrabold text-blue-100 mb-2">{stat.num}</div>
                  <div className="text-sm font-medium text-blue-200 opacity-80">{stat.label}</div>
               </div>
            ))}
         </div>
      </div>
   </section>
);

const Footer = () => (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
             <div className="flex justify-center items-center gap-2 mb-6">
                <span className="font-extrabold text-2xl tracking-tighter text-white">ARVISTAR</span>
             </div>
             <p className="text-slate-400 text-sm mb-8">Menghadirkan masa depan AI untuk bisnis Anda hari ini.</p>
             <p className="text-slate-600 text-xs">© 2025 Arvistar Digitech. All rights reserved.</p>
        </div>
    </footer>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <AboutHero />
      <StatsSection />
      <StorySection />
      <TeamSection />
      <Footer />
    </main>
  );
}