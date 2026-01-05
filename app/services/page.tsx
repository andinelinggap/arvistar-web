"use client";

import React, { useState } from 'react';
import { 
  Bot, Layout, Database, Workflow, ArrowRight, CheckCircle, 
  Menu, X, BarChart3, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- CONFIG ---
  const WA_NUMBER = "6281234567890"; // Ganti No WA
  const WA_LINK_CONSULT = `https://wa.me/${WA_NUMBER}?text=Halo%20Arvistar,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20tim%20Anda.`;

// --- UTILITIES ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- NAVBAR ---
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ['Home', 'About', 'Services', 'Contact'];

    return (
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
        <div className="bg-blue-900 text-white text-[10px] md:text-xs py-2 text-center font-bold px-4 tracking-wide">
          ⚡ Our Products & Services (AI Solution)
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
                  className="text-gray-500 hover:text-blue-700 font-bold transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex">
              <Link 
                href={WA_LINK_CONSULT}
                target="_blank"
                className="bg-slate-900 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20 text-sm transform hover:-translate-y-0.5 border border-transparent hover:border-blue-400 flex items-center gap-2"
              >
                Konsultasi Gratis <ArrowRight size={16} />
              </Link>
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
              <Link 
                href={WA_LINK_CONSULT}
                target="_blank"
                className="block w-full text-center bg-blue-700 text-white py-3 rounded-xl font-bold"
              >
                Konsultasi Gratis
              </Link>
          </div>
        )}
      </nav>
    );
  };
// --- SERVICES HERO (FIXED SCROLL BUTTON) ---
const ServicesHero = () => {
  // Fungsi Scroll Manual - Dijamin jalan berkali-kali
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('services-list');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text */}
            <div className="text-center lg:text-left">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] tracking-widest uppercase mb-6 border border-blue-100">
                Kapabilitas & Teknologi
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Bangun Ekosistem <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Bisnis Otonom</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                Tinggalkan cara manual. Kami mengintegrasikan <strong>AI Cerdas</strong>, <strong>Web Modern</strong>, dan <strong>Otomasi Data</strong> untuk menciptakan sistem bisnis yang bekerja mandiri, efisien, dan siap scale-up.
              </p>
              <div className="flex justify-center lg:justify-start">
                  {/* Tombol diganti menjadi <button> dengan onClick */}
                  <button 
                    onClick={scrollToServices}
                    className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all text-sm flex items-center gap-2 group cursor-pointer"
                  >
                    Eksplorasi Solusi <ArrowRight size={18} className="group-hover:rotate-90 transition-transform duration-300"/>
                  </button>
              </div>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="relative lg:ml-auto">
               <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-200 rounded-[3rem] transform rotate-6 opacity-60 blur-2xl"></div>
               
               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100/50 bg-white/50 backdrop-blur-sm p-2">
                  <img 
                      src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Digital Ecosystem Illustration" 
                      className="w-full h-auto rounded-[1.5rem] object-cover hover:scale-105 transition-transform duration-700"
                  />
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- SERVICES LIST ---
const ServicesList = () => {
  const services = [
    {
      icon: Bot,
      color: "text-blue-600 bg-blue-50",
      title: "AI Chatbot Intelligence",
      subtitle: "CS Otomatis 24 Jam",
      desc: "Kami membangun 'otak' digital yang dilatih khusus dengan data produk Anda. Menjawab pertanyaan, menangani komplain, hingga closing sales tanpa campur tangan manusia.",
      points: ["Respon Instant (< 1 detik)", "Integrasi WhatsApp API", "Hafal ribuan SKU Produk", "Sentiment Analysis"]
    },
    {
      icon: Layout,
      color: "text-indigo-600 bg-indigo-50",
      title: "High-Converting Website",
      subtitle: "Web Performa Tinggi",
      desc: "Bukan sekadar web profil. Kami mendesain UI/UX dengan psikologi marketing dan struktur SEO yang kuat. Posisi tombol dan copywriting dirancang untuk konversi.",
      points: ["Next.js Architecture", "SEO Friendly Structure", "Mobile First Design", "Payment Integration"]
    },
    {
      icon: Workflow,
      color: "text-slate-700 bg-slate-100",
      title: "Business Automation",
      subtitle: "Operasional Auto-Pilot",
      desc: "Lelah rekap order manual? Kami sambungkan aplikasi bisnis Anda (WA, Email, Sheets, CRM) agar data mengalir otomatis. Hemat waktu admin hingga 80%.",
      points: ["Auto-Input Data Order", "Notifikasi Tagihan Otomatis", "Email Automation", "Laporan Harian"]
    },
    {
      icon: BarChart3,
      color: "text-teal-600 bg-teal-50",
      title: "Data Analytics & Dashboard",
      subtitle: "Keputusan Berbasis Data",
      desc: "Jangan berbisnis pakai perasaan. Kami buatkan dashboard visual yang menampilkan profit, stok, dan performa sales real-time agar keputusan Anda akurat.",
      points: ["Visualisasi Interaktif", "Prediksi Tren Penjualan", "Analisa Stok Barang", "Performa Cabang"]
    }
  ];

  return (
    // ID ditambahkan di sini untuk target scroll
    <section id="services-list" className="py-20 bg-slate-50 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="group bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl ${srv.color} flex items-center justify-center flex-shrink-0`}>
                            <srv.icon size={28} strokeWidth={1.5} />
                        </div>
                        <span className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-200">
                            {srv.subtitle}
                        </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                        {srv.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                        {srv.desc}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto mb-8">
                        {srv.points.map((pt, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-slate-700">{pt}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Link - KE WEB CONTACT */}
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 border-b-2 border-blue-100 hover:border-blue-700 pb-1 transition-all w-max"
                    >
                        Konsultasi Layanan Ini <ChevronRight size={16} />
                    </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA SECTION ---
const CTASection = () => (
   <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
         <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Bingung Mulai dari Mana?</h2>
         <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
            Jangan buang uang untuk fitur yang tidak Anda butuhkan. Konsultasikan masalah bisnis Anda, kami yang akan merancang strategi teknologinya.
         </p>
         <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/50 hover:scale-105"
         >
            Jadwalkan Audit Bisnis Gratis <ArrowRight size={20} />
         </Link>
      </div>
   </section>
);

const Footer = () => (
      <footer className="bg-white text-slate-900 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="flex justify-center items-center gap-2 mb-6">
                  <span className="font-extrabold text-2xl tracking-tighter text-blue-800">ARVISTAR</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">Kami membantu pebisnis Indonesia tidur nyenyak sementara sistem kami bekerja keras mencetak profit.</p>
              
              <div className="flex justify-center gap-6 mb-8 text-sm font-bold text-gray-600">
                  <Link href="#" className="hover:text-blue-700">Instagram</Link>
                  <Link href="#" className="hover:text-blue-700">LinkedIn</Link>
                  <Link href={WA_LINK_CONSULT} target="_blank" className="hover:text-blue-700">WhatsApp</Link>
              </div>

              <p className="text-gray-400 text-xs">© 2025 Arvistar Digitech. Surakarta, Indonesia.</p>
        </div>
      </footer>
  );

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <CTASection />
      <Footer />
    </main>
  );
}