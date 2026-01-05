"use client";

import React, { useState } from 'react';
import { 
  Menu, X, Mail, MapPin, Phone, Send, ArrowRight, 
  MessageSquare, Clock, CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; // Ganti No WA
const WA_LINK_CONSULT = `https://wa.me/${WA_NUMBER}?text=Halo%20Arvistar,%20saya%20ingin%20diskusi%20tentang%20proyek%20saya.`;

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
          📞 Contact Us for More Detail Information
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

// --- CONTACT HERO (CLEAN & PROFESSIONAL) ---
const ContactHero = () => (
  <section className="relative py-20 bg-white overflow-hidden">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] tracking-widest uppercase mb-6 border border-blue-100">
        Hubungi Kami
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Siap Scale-Up <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Bisnis Anda?</span>
      </h1>
      <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
        Jangan biarkan kompetitor menyalip Anda dengan teknologi. Diskusikan kebutuhan Anda hari ini, kami berikan solusinya besok.
      </p>
    </div>
  </section>
);

// --- CONTACT CONTENT (SPLIT LAYOUT) ---
const ContactContent = () => {
  return (
     <section className="pb-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row">
              
              {/* Kolom Kiri: Info Kontak (DARK NAVY GRADIENT) */}
              <div className="md:w-2/5 p-10 bg-gradient-to-br from-slate-900 to-blue-900 text-white flex flex-col justify-between relative overflow-hidden">
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

                 <div>
                    <h3 className="text-2xl font-bold mb-2">Informasi Kontak</h3>
                    <p className="text-slate-300 text-sm mb-10 leading-relaxed">
                       Tim Arvistar di Surakarta siap merespon pertanyaan Anda secepat kilat.
                    </p>
                    
                    <div className="space-y-8">
                       <div className="flex items-start gap-4 group">
                          <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                             <Phone className="w-5 h-5 text-blue-300" />
                          </div>
                          <div>
                             <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">WhatsApp (Fast Response)</p>
                             <p className="text-lg font-bold font-mono tracking-tight">+62 8XX-XXXX-XXXX</p>
                          </div>
                       </div>

                       <div className="flex items-start gap-4 group">
                          <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                             <Mail className="w-5 h-5 text-blue-300" />
                          </div>
                          <div>
                             <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Email Inquiry</p>
                             <p className="text-lg font-medium">hello@arvistar.com</p>
                          </div>
                       </div>

                       <div className="flex items-start gap-4 group">
                          <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                             <MapPin className="w-5 h-5 text-blue-300" />
                          </div>
                          <div>
                             <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Headquarters</p>
                             <p className="text-lg font-medium leading-snug">Surakarta (Solo),<br/>Jawa Tengah, Indonesia.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                       <Clock size={16} className="text-green-400" />
                       <span className="text-sm font-bold text-white">Respon &lt; 24 Jam</span>
                    </div>
                    <p className="text-xs text-slate-400">
                       *Kami juga melayani meeting online via Zoom/GMeet untuk klien luar kota.
                    </p>
                 </div>
              </div>

              {/* Kolom Kanan: Form (CLEAN UI) */}
              <div className="md:w-3/5 p-10 lg:p-16 bg-white">
                 <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Kirim Pesan</h3>
                    <p className="text-slate-500 text-sm">Silakan isi form di bawah ini. Konsultasi awal 100% Gratis.</p>
                 </div>

                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Nama Lengkap</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 placeholder:text-slate-400" placeholder="Nama Anda" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Perusahaan</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 placeholder:text-slate-400" placeholder="Nama Bisnis" />
                       </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email / WhatsApp</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 placeholder:text-slate-400" placeholder="Contoh: 0812..." />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Kebutuhan</label>
                          <div className="relative">
                             <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 appearance-none cursor-pointer">
                                <option>Saya butuh Website baru</option>
                                <option>Saya butuh AI Chatbot</option>
                                <option>Saya butuh Otomasi Bisnis</option>
                                <option>Saya butuh Analisa Data</option>
                                <option>Lainnya</option>
                             </select>
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Detail Pesan</label>
                       <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-800 placeholder:text-slate-400 h-32 resize-none" placeholder="Ceritakan sedikit tentang tantangan bisnis yang Anda hadapi..."></textarea>
                    </div>
                    
                    <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 transform active:scale-[0.98]">
                       Kirim Sekarang <Send size={18} />
                    </button>
                 </form>
              </div>
           </div>
        </div>
     </section>
  );
};

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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <ContactHero />
      <ContactContent />
      <Footer />
    </main>
  );
}