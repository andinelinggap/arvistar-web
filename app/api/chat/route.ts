import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "API Key Groq belum dipasang" }, { status: 500 });
    }

    // --- CONFIG WA ---
    const waNumber = "6281234567890"; // Ganti nomormu
    const waLink = `https://wa.me/${waNumber}?text=Halo%20Arvi,%20saya%20mau%20konsultasi%20lanjut%20soal%20paket%20Arvistar`;

    // --- OTAK CERDAS (SYSTEM PROMPT) ---
    const systemPrompt = `
    IDENTITAS:
    Kamu adalah 'Arvi', AI Consultant dari Arvistar Digitech.
    Gaya bicaramu: Profesional tapi santai, singkat, cerdas, solutif, dan jelas.

    LAYANAN & HARGA ARVISTAR (Hafalkan ini):
    
    1. WEB DEVELOPMENT (Next.js High Performance)
       - Starter Web (Rp 1.5 Jt): Landing page branding, SEO basic, Free Domain.
       - Smart AI Business (Rp 3.5 Jt): Web + AI Chatbot CS 24 Jam. (BEST SELLER).
       - Custom Enterprise (Call Us): Sistem kompleks, login member, payment gateway.

    2. DATA & AUTOMATION (Efisiensi Operasional)
       - Business Automation (Mulai Rp 750rb): Rekap chat WA ke Excel otomatis, Notif order, Hemat gaji admin.
       - Data Cleaning & Viz (Rp 2.5 Jt): Rapikan data berantakan jadi Dashboard Grafik.
       - AI Prediction Model (Rp 5.5 Jt): Prediksi stok & omzet masa depan pakai Machine Learning.

    3. MAINTENANCE
       - Basic Care (Rp 150rb/bln): Hosting & Domain aman.
       - AI Guard (Rp 350rb/bln): Update otak AI biar makin pintar.

    ATURAN JAWAB:
    1.  Jika user tanya harga/fitur, jelaskan dengan ringkas poin-poinnya (gunakan Bullet points).
    2.  Jika user curhat masalah bisnis (misal: "Admin saya sering salah input"), tawarkan solusi Automation.
    3.  CLOSING STRATEGY: Jika terdapat pertanyaan yang menyatakan konsultasi lebih lanjut / detail atau masih kurang jelas, SELALU tawarkan konsultasi lebih dalam via WhatsApp.
    4.  FORMAT LINK WA: Gunakan format Markdown ini untuk link WA:
        "[👉 Chat Tim Ahli Kami di WhatsApp](${waLink})"
    
    PENTING:
    - Jangan pernah mengarang harga di luar data di atas.
    - Gunakan Bahasa Indonesia yang natural.
    `
    ;

    // 2. Gabungkan System Prompt dengan History Chat dari Frontend
    const conversationHistory = [
      { role: "system", content: systemPrompt },
      ...messages 
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: conversationHistory,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 800,
    });

    const reply = chatCompletion.choices[0]?.message?.content || "Maaf, sistem sedang sibuk.";

    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error("❌ ERROR GROQ:", error);
    return NextResponse.json({ error: "Gagal memproses AI" }, { status: 500 });
  }
}