"use client";

import React, { useState } from 'react';
import { 
  Menu, X, Mail, MapPin, Phone, Send, ArrowRight
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
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-500 hover:text-blue-700 font-bold transition-colors text-sm">
                {item}
              </Link>
            ))}
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
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="block text-gray-600 hover:text-blue-700 font-bold">
                {item}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

// --- CONTACT HERO (NAVY BG) ---
const ContactHero = () => (
   // BG Navy
   <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
         <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Siap Scale-Up Bisnis Anda?</h1>
         <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Jangan biarkan kompetitor menyalip Anda dengan teknologi. Diskusikan kebutuhan Anda hari ini, kami berikan solusinya besok.
         </p>
      </div>
   </section>
);

const ContactContent = () => {
   return (
      <section className="py-20 bg-white -mt-10">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
               
               {/* Kolom Kiri: Info Kontak (NAVY BG) */}
               <div className="p-10 bg-blue-800 text-white flex flex-col justify-between">
                  <div>
                     <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                     <p className="text-blue-100 mb-8">
                        Tim kami di Surakarta siap merespon pertanyaan Anda secepat kilat.
                     </p>
                     
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <Phone className="w-6 h-6 mt-1 text-blue-300" />
                           <div>
                              <p className="text-xs text-blue-300 font-bold uppercase">WhatsApp (Fast Response)</p>
                              <p className="text-lg font-bold">+62 8XX-XXXX-XXXX</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <Mail className="w-6 h-6 mt-1 text-blue-300" />
                           <div>
                              <p className="text-xs text-blue-300 font-bold uppercase">Email</p>
                              <p className="text-lg">hello@arvistar.com</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <MapPin className="w-6 h-6 mt-1 text-blue-300" />
                           <div>
                              <p className="text-xs text-blue-300 font-bold uppercase">Basecamp</p>
                              <p className="text-lg">Surakarta (Solo),<br/>Jawa Tengah, Indonesia.</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="mt-12">
                     <p className="text-sm text-blue-200 opacity-80">
                        *Kami juga melayani meeting online via Zoom/GMeet untuk klien luar kota.
                     </p>
                  </div>
               </div>

               {/* Kolom Kanan: Form (Visual Only) */}
               <div className="p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Nama</label>
                           {/* Focus Ring Blue */}
                           <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Nama Anda" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Perusahaan</label>
                           <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none transition-all" placeholder="Nama Bisnis" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email / WA</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none transition-all" placeholder="Contoh: 0812..." />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Kebutuhan</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none transition-all bg-white text-gray-600">
                           <option>Saya butuh Website baru</option>
                           <option>Saya butuh AI Chatbot</option>
                           <option>Saya butuh Otomasi Bisnis</option>
                           <option>Lainnya</option>
                        </select>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Pesan Tambahan</label>
                        <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none transition-all h-32" placeholder="Ceritakan sedikit tentang masalah bisnis Anda..."></textarea>
                     </div>
                     
                     {/* Button Hover Blue */}
                     <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
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
             <p className="text-gray-500 text-sm mb-8">© 2025 Arvistar Digitech. All rights reserved.</p>
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