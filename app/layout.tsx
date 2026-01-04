import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Import Widgetnya
import ChatWidget from "./components/ChatWidget"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Metadata (Pastikan CUMA SATU saja, pakai yang Arvistar)
export const metadata: Metadata = {
  title: "Arvistar Digitech - AI Automation Agency",
  description: "Web Development & AI Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Render Halaman Utama */}
        {children}
        
        {/* 3. PASANG WIDGET DISINI (Di bawah children, sebelum tutup body) */}
        <ChatWidget />
      </body>
    </html>
  );
}