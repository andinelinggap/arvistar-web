"use client";

import React, { useState } from 'react';
import { 
  Menu, X, CheckCircle, ArrowRight, 
  Bot, Layout, Database, Workflow, Smartphone
} from 'lucide-react';
import Link from 'next/link';

// --- NAVBAR (NAVY THEME) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-1">
            {/* Logo Blue */}
            <span className="font-extrabold text-2xl tracking-tighter text-blue-800">ARVISTAR</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                // Hover Blue
                className="text-gray-500 hover:text-blue-700 font-bold transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
             {/* Button Hover Blue */}
             <Link href="/contact" className="bg-slate-900 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">
                Minta Penawaran
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
        </div>
      )}
    </nav>
  );
};

// --- CONTENT SERVICES (NAVY THEME & WATERMARK REMOVED) ---
const ServicesList = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbot Intelligence",
      subtitle: "CS Otomatis 24 Jam",
      desc: "Kami membangun 'otak' digital yang dilatih khusus dengan data produk Anda. Dia bisa menjawab pertanyaan, menangani komplain, hingga melakukan closing sales di WhatsApp dan Website tanpa campur tangan manusia.",
      points: ["Respon Instant (< 1 detik)", "Integrasi WhatsApp API", "Hafal ribuan SKU Produk", "Sentiment Analysis (Tahu customer marah/senang)"]
    },
    {
      icon: Layout,
      title: "High-Converting Website",
      subtitle: "Web Mesin Uang",
      desc: "Bukan sekadar web profil yang 'cantik'. Kami mendesain UI/UX dengan psikologi marketing. Posisi tombol, pemilihan warna, dan copywriting dirancang untuk memaksa pengunjung menekan tombol 'BELI'.",
      points: ["Next.js (Super Cepat)", "SEO Friendly Structure", "Mobile First Design", "Payment Gateway Integration"]
    },
    {
      icon: Workflow,
      title: "Business Automation",
      subtitle: "Operasional Auto-Pilot",
      desc: "Lelah rekap order manual dari WA ke Excel? Kami sambungkan semua aplikasi bisnis Anda (WA, Email, Google Sheets, CRM) agar data mengalir otomatis. Hemat waktu admin hingga 80%.",
      points: ["Auto-Input Data Order", "Notifikasi Tagihan Otomatis", "Email Marketing Automation", "Laporan Harian Otomatis"]
    },
    {
      icon: Database,
      title: "Data Analytics & Dashboard",
      subtitle: "Pantau Bisnis Real-Time",
      desc: "Jangan berbisnis pakai perasaan. Kami buatkan dashboard visual yang menampilkan profit, stok, dan performa sales secara real-time agar keputusan bisnis Anda akurat.",
      points: ["Visualisasi Data Interaktif", "Prediksi Tren Penjualan", "Analisa Stok Barang", "Performa Sales per Cabang"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Tag Blue */}
          <span className="text-blue-700 font-bold text-xs tracking-wider uppercase mb-2 block">Layanan Kami</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Senjata Digital untuk <br />
            {/* Gradient Blue */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500">Dominasi Pasar</span>
          </h1>
          <p className="text-lg text-gray-500">
            Pilih satu atau gabungkan semuanya untuk menciptakan ekosistem bisnis yang efisien, otomatis, dan profitable.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((srv, idx) => (
            // Hover Border Blue
            <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
               
               {/* 🔥 WATERMARK ANGKA SUDAH DIHAPUS DARI SINI 🔥 */}

               {/* Icon Bg Blue */}
               <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-700 relative z-10">
                  <srv.icon size={32} strokeWidth={1.5} />
               </div>
               <div className="flex-1 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                     <h3 className="text-2xl font-bold text-slate-900">{srv.title}</h3>
                     {/* Subtitle Tag Cyan */}
                     <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-bold rounded-full w-max">
                        {srv.subtitle}
                     </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                     {srv.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                     {srv.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2">
                           {/* Check Icon Blue */}
                           <CheckCircle size={16} className="text-blue-700" />
                           <span className="text-sm font-medium text-slate-700">{pt}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="md:self-center relative z-10">
                  {/* Link Text Blue */}
                  <Link href="/contact" className="flex items-center gap-2 text-blue-700 font-bold hover:gap-3 transition-all">
                     Konsultasi <ArrowRight size={18} />
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA SECTION (NAVY BG) ---
const CTASection = () => (
   // BG Changed to Navy
   <section className="py-20 bg-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
         <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Bingung Mulai dari Mana?</h2>
         <p className="text-blue-200 mb-8 text-lg">
            Jangan buang uang untuk fitur yang tidak Anda butuhkan. Konsultasikan masalah bisnis Anda, kami yang carikan solusinya.
         </p>
         {/* Button Changed to brighter blue contrast */}
         <Link href="/contact" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-colors shadow-lg shadow-blue-900/50">
            Jadwalkan Audit Bisnis Gratis
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
             <p className="text-gray-500 text-sm mb-8">© 2025 Arvistar Digitech. All rights reserved.</p>
        </div>
    </footer>
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <ServicesList />
      <CTASection />
      <Footer />
    </main>
  );
}