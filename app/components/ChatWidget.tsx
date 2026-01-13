"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Kita standarkan tipe datanya agar cocok dengan API Memory
type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // LOGIC BARU: Pakai format 'assistant' & 'content' (Standar AI)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Halo! 👋 Saya Arvi, AI Assistant Arvistar. Ada yang bisa saya bantu jelaskan soal layanan kami?' }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. SIAPKAN DATA: Gabungkan chat lama + chat baru (Logic Memory)
    const newMessage: Message = { role: 'user', content: input };
    const newHistory = [...messages, newMessage]; 

    // Update UI langsung
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    try {
      // 2. KIRIM ARRAY HISTORY KE BACKEND
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory }), 
      });

      const data = await res.json();

      // 3. TERIMA BALASAN
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Maaf, server sedang sibuk. Silakan hubungi via WhatsApp ya." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header (WARNA TETAP BLUE-900 SESUAI AWAL) */}
          <div className="bg-blue-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Arvistar AI</h3>
                <p className="text-[10px] text-blue-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 text-sm rounded-2xl shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  <ReactMarkdown 
                    components={{
                      a: ({node, ...props}) => (
                        <a 
                          {...props} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`font-bold underline hover:opacity-80 ${
                            msg.role === 'user' ? 'text-white' : 'text-blue-600'
                          }`}
                        />
                      ),
                      ul: ({node, ...props}) => <ul {...props} className="list-disc ml-4 space-y-1" />,
                      ol: ({node, ...props}) => <ol {...props} className="list-decimal ml-4 space-y-1" />,
                      p: ({node, ...props}) => <p {...props} className="mb-1 last:mb-0" />
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl border border-gray-100 rounded-bl-none flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya sesuatu..."
                className="flex-1 bg-gray-100 border-none rounded-full px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-700 hover:bg-blue-800 text-white p-2.5 rounded-full transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-2">Powered by Arvistar Intelligence</p>
          </div>
        </div>
      )}

      {/* Floating Button (ANIMASI BOUNCE & WARNA TETAP SAMA) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg shadow-blue-900/30 transition-all hover:scale-110 animate-bounce duration-[2000ms] flex items-center justify-center"
        >
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
}