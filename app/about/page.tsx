  "use client";

  import React, { useState } from 'react';
  import { 
    Target, Users, Zap, Award, ArrowRight, CheckCircle, 
    Menu, X, TrendingUp, Brain, Briefcase, ChevronRight, Globe, ShieldCheck
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
          ✨ Your Trusted Partner in Digital Transformation
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

  // --- ABOUT HERO (GENERAL & PROFESSIONAL) ---
  const AboutHero = () => (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] tracking-widest uppercase mb-6 border border-blue-100">
            Siapa Kami
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
            Lebih Dari Sekadar Agency. <br />
            Kami Adalah <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Mitra Pertumbuhan Strategis</span> Anda.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Arvistar hadir untuk menjembatani kesenjangan antara bisnis konvensional dan teknologi masa depan. Kami menggabungkan inovasi digital, strategi data, dan otomatisasi cerdas untuk menciptakan solusi yang nyata dan berdampak bagi bisnis Anda.
          </p>
        </div>
      </div>
    </section>
  );

  // --- STATS SECTION (GENERAL METRICS) ---
  const StatsSection = () => (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divider-x divider-slate-800">
              {[
                { num: "Inovasi", label: "Pendekatan Digital" },
                { num: "50+", label: "Proyek Sukses" },
                { num: "24/7", label: "Sistem Support" },
                { num: "Fokus ROI", label: "Orientasi Hasil" }
              ].map((stat, i) => (
                <div key={i} className="group">
                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.num}</div>
                    <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
          </div>
        </div>
    </section>
  );

  // --- STORY SECTION (GENERAL VISION) ---
  const StorySection = () => (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3 opacity-50"></div>
              <div className="relative rounded-2xl bg-white p-8 border border-slate-100 shadow-2xl">
                <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg text-blue-700">
                          <Globe size={24} />
                      </div>
                      <div>
                          <h4 className="font-bold text-slate-900">Akses Teknologi Global</h4>
                          <p className="text-sm text-slate-500 mt-1">Membawa standar teknologi kelas dunia ke pasar lokal Indonesia.</p>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-slate-100"></div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-50 rounded-lg text-indigo-700">
                          <ShieldCheck size={24} />
                      </div>
                      <div>
                          <h4 className="font-bold text-slate-900">Komitmen Kualitas</h4>
                          <p className="text-sm text-slate-500 mt-1">Fokus pada solusi yang stabil, aman, dan memberikan hasil jangka panjang.</p>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          
          <div>
            <span className="text-blue-700 font-bold text-xs tracking-widest uppercase mb-4 block">Visi Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Mendemokratisasi <span className="text-blue-700">Teknologi Canggih</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Kami percaya bahwa teknologi canggih seperti Artificial Intelligence (AI) dan otomatisasi seharusnya tidak hanya dinikmati oleh perusahaan raksasa.
              </p>
              <p>
                Misi Arvistar adalah membuka akses teknologi tersebut agar bisnis dari berbagai skala dapat bersaing di era digital. Kami menyederhanakan kerumitan teknis menjadi solusi bisnis yang praktis, terjangkau, dan mudah digunakan.
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/services" className="inline-flex items-center text-sm font-bold text-blue-700 hover:text-blue-800 gap-2 border-b-2 border-blue-700/20 hover:border-blue-700 pb-1 transition-all">
                  Lihat Layanan Kami <ChevronRight size={16}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // --- TEAM SECTION (GENERAL ROLES) ---
  const TeamSection = () => {
    const team = [
      {
        name: "Your Name", // Ganti dengan Namamu
        role: "CEO & Founder",
        bg: "bg-blue-50 text-blue-700",
        icon: Brain,
        desc: "Visioner di balik Arvistar. Memiliki pengalaman mendalam dalam strategi teknologi dan pemanfaatan data untuk pertumbuhan bisnis."
      },
      {
        name: "Partner Name 1", // Co-Founder
        role: "COO & Strategy Lead",
        bg: "bg-indigo-50 text-indigo-700",
        icon: Zap,
        desc: "Ahli dalam operasional dan strategi digital. Memastikan setiap solusi teknologi selaras dengan tujuan bisnis klien."
      },
      {
        name: "Partner Name 2", // Project Lead
        role: "Head of Projects",
        bg: "bg-slate-50 text-slate-700",
        icon: Briefcase,
        desc: "Profesional dalam manajemen proyek dengan fokus pada eksekusi yang presisi, tepat waktu, dan standar kualitas tinggi."
      }
    ];

    return (
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-bold text-xs tracking-widest uppercase mb-4 block">Tim Kami</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Para Inovator di Balik Layar</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Kombinasi keahlian dalam strategi bisnis, inovasi teknologi, dan manajemen eksekusi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-2xl ${member.bg} mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <member.icon className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <span className="inline-block px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-2 mb-4 border border-slate-100">
                        {member.role}
                    </span>
                    <p className="text-slate-500 text-sm leading-relaxed">
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