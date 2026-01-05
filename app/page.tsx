"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, MessageSquare, Clock, Award, FileText, Menu, X, 
  CheckCircle, Zap, Star, ChevronRight, TrendingUp, ShieldCheck,
  Database, Bot, LineChart
} from 'lucide-react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- CONFIG ---
// Ganti nomor ini dengan nomor WhatsApp-mu (format: 628...)
const WA_NUMBER = "6281234567890"; 
const WA_LINK_CONSULT = `https://wa.me/${WA_NUMBER}?text=Halo%20Arvistar,%20saya%20mau%20konsultasi%20gratis%20dong.`;

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
        🚀 Promo Launching: Diskon 50% Setup AI Chatbot untuk 10 Klien Pertama!
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

// --- HERO SECTION ---
const HeroSection = () => {
  const triggerChatWidget = () => {
    const chatButton = document.querySelector('.fixed.bottom-6.right-6 button') as HTMLButtonElement;
    if (chatButton) chatButton.click();
    else alert("Silakan klik ikon pesan di pojok kanan bawah layar untuk mencoba AI!");
  };

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-24 lg:pb-32">
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 text-blue-800 font-bold text-[10px] sm:text-xs tracking-widest uppercase border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              The Future of Business Automation
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Website Canggih + <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500">AI Karyawan</span> yang <br/>
              Gak Pernah Tidur.
            </h1>


            <p className="text-base md:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Tinggalkan cara lama. Arvistar menghadirkan perpaduan <strong>Website High-Performance</strong>, <strong>AI Sales Agent</strong>, dan <strong>Otomasi Data</strong> untuk menciptakan mesin bisnis yang bekerja mandiri 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button 
                onClick={triggerChatWidget}
                className="px-8 py-4 rounded-full bg-blue-700 text-white font-bold shadow-xl shadow-blue-200 hover:bg-blue-800 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Coba Demo AI Sekarang
                <MessageSquare size={18} className="animate-pulse"/>
              </button>
            </div>
            
            <p className="text-xs text-gray-400 font-medium pt-2">
              *Klik tombol di atas untuk chat langsung dengan AI Arvistar.
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
                         <div className="w-8 h-8 rounded-lg bg-blue-700 shadow-lg shadow-blue-200 flex items-center justify-center text-white font-bold">A</div>
                      </div>
                      <div className="flex-1 p-6 bg-slate-50 relative overflow-hidden flex flex-col justify-center">
                         <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-sm mx-auto z-10 relative">
                             <div className="flex items-center gap-3 mb-4">
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
                                <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-xs w-3/4 ml-auto shadow-md font-medium">
                                   Wah boleh, tolong kirim link pembayarannya ya.
                                </div>
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


// --- FEATURES SECTION ---
const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Web High Performance",
      description: "Website Next.js yang didesain untuk kecepatan. SEO Friendly agar mudah ditemukan Google, dan tampilan premium untuk meningkatkan trust."
    },
    {
      icon: Bot,
      title: "AI Business Assistant",
      description: "Chatbot cerdas (Llama 3) yang dilatih khusus dengan data produk Anda. Melayani pelanggan 24/7, menjawab pertanyaan, dan mengarahkan ke WhatsApp."
    },
    {
      icon: Database,
      title: "Otomasi & Data",
      description: "Order masuk di web -> Otomatis tercatat di Excel/Google Sheets. Tidak ada lagi copy-paste manual. Data rapi, admin senang."
    },
    {
      icon: LineChart,
      title: "Analytics Prediction",
      description: "Gunakan data penjualan masa lalu untuk memprediksi tren masa depan. Kami bantu olah data mentah Anda menjadi strategi bisnis jitu."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] tracking-wider mb-4 border border-blue-100">
            SOLUSI END-TO-END
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Upgrade Bisnis Anda dari <br/>
            <span className="text-blue-600">Manual</span> ke <span className="text-cyan-600">Auto-Pilot</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10">
                <div className="w-12 h-12 mb-6 text-slate-800 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-full h-full stroke-[1.5]" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {feature.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {feature.description}
                </p>

                <Link href={WA_LINK_CONSULT} target="_blank" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-700 gap-1 transition-all">
                    Konsultasi Fitur <ChevronRight size={16} />
                </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PRICING SECTION (EMOTIONAL & CENTERED) ---
const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'data' | 'maintenance'>('web');

  const pricingData = {
    web: [
      {
        name: "Starter Web",
        price: "Rp 1.5Jt",
        desc: "Wajah Digital Profesional",
        subDesc: "Ciptakan kesan pertama yang memukau. Ubah pengunjung menjadi pembeli dengan desain premium.",
        features: ["Desain Premium (Next.js)", "SEO Basic (Mudah Ditemukan)", "Domain .com Gratis 1 Thn", "Tombol WA Sticky", "Revisi Desain 2x"],
        isBestSeller: false,
        cta: "Ambil Paket Ini"
      },
      {
        name: "Smart AI Business",
        price: "Rp 3.5Jt",
        oldPrice: "Rp 5.5Jt",
        desc: "Mesin Penjualan Otomatis",
        subDesc: "Bayangkan punya CS cerdas yang bekerja 24 jam nonstop tanpa gaji bulanan. Menjawab chat & closing otomatis.",
        features: ["Semua Fitur Starter", "Integrasi Otak AI (Groq)", "Training Data Produk Anda", "Smart Link ke WhatsApp", "Dashboard Chat"],
        isBestSeller: true,
        cta: "Pesan Sekarang"
      },
      {
        name: "Custom Enterprise",
        price: "Hubungi Kami",
        desc: "Ekosistem Digital Raksasa",
        subDesc: "Solusi tanpa batas untuk perusahaan yang ingin mendominasi pasar. Keamanan & skalabilitas prioritas utama.",
        features: ["Full Custom UI/UX", "Sistem Login & Member", "Payment Gateway", "Keamanan Tingkat Tinggi", "Perjanjian NDA Legal"],
        isBestSeller: false,
        cta: "Kontak Sales"
      }
    ],
    data: [
      {
        name: "Data Cleaning & Viz",
        price: "Rp 2.5Jt",
        oldPrice: "Rp 4Jt",
        desc: "Ubah Data Mentah Jadi Emas",
        subDesc: "Punya tumpukan Excel berantakan? Kami rapikan dan ubah menjadi Dashboard Grafik yang mudah dibaca.",
        features: ["Pembersihan Data Excel", "Dashboard Interaktif", "Grafik Tren Penjualan", "Analisa Performa", "Export Laporan PDF"],
        isBestSeller: false,
        cta: "Konsultasi Data"
      },
      {
        name: "Business Automation",
        price: "Mulai Rp 750Rb",
        desc: "Admin Otomatis Anti-Lupa",
        subDesc: "Hilangkan pekerjaan manual yang membosankan. Biarkan robot yang mencatat order & kirim notifikasi.",
        features: ["Rekap Chat ke Excel (Basic)", "Notifikasi WA Real-time", "Integrasi n8n (Self-Hosted)", "Auto-Invoice Email", "Hemat Gaji Admin"],
        isBestSeller: true,
        cta: "Konsultasi Otomasi"
      },
      {
        name: "AI Prediction Model",
        price: "Rp 5.5Jt",
        desc: "Intip Masa Depan Bisnis",
        subDesc: "Jangan tebak-tebakan. Gunakan AI untuk memprediksi stok barang & omzet bulan depan dengan akurat.",
        features: ["Prediksi Stok Barang", "Analisa Perilaku Konsumen", "Forecasting Omzet", "Rekomendasi Strategi", "Report Bulanan"],
        isBestSeller: false,
        cta: "Mulai Prediksi"
      }
    ],
    maintenance: [
      {
        name: "Basic Care",
        price: "Rp 150rb/bln",
        desc: "Jaga Rumah Digital",
        subDesc: "Pastikan website Anda selalu online dan cepat. Kami yang urus teknisnya, Anda fokus jualan.",
        features: ["Perpanjangan Domain & Hosting", "Monitoring Server 24/7", "Backup Mingguan", "Minor Update (Teks/Foto)"],
        isBestSeller: false,
        cta: "Langganan"
      },
      {
        name: "AI Guard",
        price: "Rp 350rb/bln",
        oldPrice: "Rp 500rb",
        desc: "Otak AI Tetap Cerdas",
        subDesc: "AI butuh update informasi produk baru agar tidak salah jawab. Kami pastikan CS AI Anda selalu pintar.",
        features: ["Update Pengetahuan AI", "Monitoring API Key", "Laporan Chat Bulanan", "Perbaikan Bug Cepat", "Prioritas Support"],
        isBestSeller: true,
        cta: "Langganan"
      },
      {
        name: "System Priority",
        price: "Rp 750rb/bln",
        desc: "Jaminan Bisnis Jalan Terus",
        subDesc: "Perlindungan maksimal untuk sistem otomasi & data krusial Anda. Support VIP jalur cepat.",
        features: ["Maintenance Server VPS", "Update Alur n8n", "Backup Database Harian", "Analisa Performa", "VIP Support Lane"],
        isBestSeller: false,
        cta: "Langganan"
      }
    ]
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] tracking-wider mb-6 border border-blue-100 uppercase">
            Investasi Cerdas
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Pilih Solusi Terbaik untuk <br/> 
            <span className="text-blue-700">Pertumbuhan Bisnis Anda</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami transparan soal harga. Tidak ada biaya tersembunyi. <br/>
            Pilih paket yang sesuai dengan fase bisnis Anda saat ini.
          </p>

          {/* --- TAB NAVIGATION CENTERED --- */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              { id: 'web', label: '🌐 Web Development' },
              { id: 'data', label: '📊 Data & Automation' },
              { id: 'maintenance', label: '🛠️ Maintenance Rutin' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border shadow-sm",
                  activeTab === tab.id 
                    ? "bg-blue-800 text-white border-blue-800 shadow-lg shadow-blue-900/30 scale-105" 
                    : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- PRICING CARDS --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData[activeTab].map((plan, idx) => (
            <div key={idx} className={cn(
              "relative p-8 rounded-3xl bg-white border flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
              plan.isBestSeller 
                ? "border-blue-500 shadow-2xl shadow-blue-200/50 z-10 ring-4 ring-blue-50" 
                : "border-gray-100 hover:border-blue-300"
            )}>
              {plan.isBestSeller && (
                 <div className="absolute -top-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] font-extrabold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-lg transform hover:scale-105 transition-transform">
                    PALING LARIS 🔥
                 </div>
              )}

              <div className="mb-6 w-full">
                 <h3 className="font-extrabold text-slate-900 text-2xl mb-3">{plan.name}</h3>
                 <p className="text-blue-600 font-bold text-sm mb-3">{plan.desc}</p>
                 <p className="text-gray-500 text-xs leading-relaxed h-12 flex items-center justify-center px-4">
                    {plan.subDesc}
                 </p>
              </div>
                 
              <div className="mb-8 relative">
                 {plan.oldPrice && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-100 text-red-600 px-2 rounded text-[10px] font-bold line-through">
                      {plan.oldPrice}
                    </div>
                 )}
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
              </div>

              <Link 
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20Arvistar,%20saya%20tertarik%20dengan%20paket%20${plan.name}%20(${activeTab.toUpperCase()})`}
                target="_blank"
                className={cn(
                    "w-full py-4 rounded-xl text-sm font-bold transition-all transform active:scale-95 flex items-center justify-center gap-2 mb-8 shadow-lg",
                    plan.isBestSeller 
                      ? "bg-blue-700 text-white hover:bg-blue-800 shadow-blue-300" 
                      : "bg-white border-2 border-slate-100 text-slate-700 hover:border-blue-600 hover:text-blue-700"
                )}
              >
                {plan.cta} <ArrowRight size={16}/>
              </Link>

              <div className="space-y-4 mt-auto border-t border-gray-50 pt-8 w-full text-left">
                 {plan.features.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                       <div className={cn(
                         "p-0.5 rounded-full mt-0.5 flex-shrink-0", 
                         plan.isBestSeller ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                       )}>
                           <CheckCircle className="w-4 h-4" />
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
        
        {/* Footer Note */}
        {activeTab === 'maintenance' && (
          <div className="mt-12 text-center bg-blue-50 p-6 rounded-2xl border border-blue-100 max-w-3xl mx-auto">
            <p className="text-sm text-blue-900 font-medium leading-relaxed">
              💡 <strong>Mengapa Maintenance itu Penting?</strong> <br/>
              Bayangkan website sebagai aset properti digital. Tanpa perawatan, 'bangunan' bisa rusak, keamanan jebol, dan nilai aset turun. <br/>
              Biaya maintenance kami adalah asuransi termurah untuk keberlangsungan bisnis Anda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// --- TESTIMONIALS & FOOTER ---
const TestimonialsSection = () => (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full"></div>
       
       <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-3xl font-extrabold mb-16 tracking-tight">Dipercaya oleh Bisnis yang <span className="text-blue-400">Berorientasi Growth</span></h2>
           <div className="grid md:grid-cols-3 gap-8">
               {[
                   {text: "Dulu admin saya sering resign karena capek bales chat. Sejak pakai AI dari Arvistar, operasional lancar, omzet malah naik karena AI-nya gercep banget!", name: "Pak Hendra", role: "Owner Batik Solo"},
                   {text: "Saya kira bikin web AI itu mahal ratusan juta. Ternyata di Arvistar harganya masuk akal banget buat UMKM kayak saya. Setupnya juga cepet.", name: "Bu Siska", role: "Klinik Kecantikan"},
                   {text: "Analisa datanya ngeri sih. Arvistar bisa prediksi stok barang bulan depan. Jadi saya belanja lebih efisien, nggak ada barang numpuk di gudang.", name: "Mas Dimas", role: "Distributor Gadget"}
               ].map((testi, i) => (
                   <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 text-left hover:bg-white/10 transition-colors backdrop-blur-sm">
                       <div className="flex text-yellow-500 mb-4 gap-1">
                           {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill="currentColor"/>)}
                       </div>
                       <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{testi.text}"</p>
                       <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-xs shadow-lg">
                               {testi.name.charAt(0)}
                           </div>
                           <div>
                               <p className="font-bold text-sm text-white">{testi.name}</p>
                               <p className="text-xs text-slate-500 uppercase tracking-wider">{testi.role}</p>
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

export default function Home() {
  return (
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