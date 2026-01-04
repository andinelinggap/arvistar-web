import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "API Key Groq belum dipasang" }, { status: 500 });
    }

    // --- SETUP LINK WA ---
    // Ganti nomor ini dengan nomormu (Format: 628...)
    // %20 itu kode spasi untuk link
    const waLink = "https://wa.me/6281234567890?text=Halo%20Arvi,%20saya%20tertarik%20dengan%20jasa%20Arvistar";

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          // --- INSTRUKSI OTAK AI ---
          content: `Kamu adalah 'Arvi', asisten AI senior dari Arvistar Digitech.
          
          TUGAS UTAMA:
          1. Jawab pertanyaan seputar Web Dev & AI Automation dengan singkat, padat, profesional.
          2. GOAL KAMU ADALAH CLOSING. Jika user bertanya soal:
             - Harga / Biaya
             - Cara pesan
             - Konsultasi detail
             - "Bisa buatkan ini?"
             
             MAKA JANGAN JAWAB PANJANG LEBAR. Langsung arahkan mereka dengan format link ini:
             
             "Silakan konsultasi via WhatsApp: [KLIK DISINI UNTUK CHAT](${waLink})"
             
             (PENTING: Gunakan format kurung siku [...] dan kurung biasa (...) agar menjadi link yang bisa diklik).
          
          3. Jangan menjelekkan kompetitor.
          4. Gunakan bahasa Indonesia yang santai tapi sopan.`
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = chatCompletion.choices[0]?.message?.content || "Maaf, ada gangguan.";

    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error("❌ ERROR GROQ:", error);
    return NextResponse.json({ error: "Gagal memproses AI" }, { status: 500 });
  }
}