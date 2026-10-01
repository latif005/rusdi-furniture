import React, { useState } from 'react';
import { STORE_INFO } from '../data/furnitureData';
import { MessageCircle, Phone, X, Calculator, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenCalculator: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenCalculator }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-3 bg-stone-900 text-white border border-stone-700 shadow-xl px-4 py-2.5 rounded-2xl text-xs max-w-xs animate-bounce">
            <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-amber-500/50 shadow-sm bg-stone-950 p-0.5 shrink-0">
              <img
                src="/src/assets/images/rusdi_logo_1790864697216.jpg"
                alt="Rusdi Furniture Custom"
                className="w-full h-full object-cover rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-bold text-stone-100 flex items-center gap-1.5">
                <span>Rusdi Furniture Custom</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              </p>
              <p className="text-stone-300 text-[11px]">Chat via WA untuk survei lokasi gratis</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-stone-400 hover:text-white ml-1 p-0.5"
              aria-label="Tutup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={`https://wa.me/${STORE_INFO.phoneRaw}?text=Halo%20Rusdi%20Furniture%20Custom,%20saya%20ingin%20konsultasi%20pembuatan%20furniture%20custom.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Chat WhatsApp Rusdi Furniture"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="font-bold text-sm hidden sm:inline-block">
            Chat WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 p-2.5 px-4 flex items-center gap-2">
        <button
          onClick={onOpenCalculator}
          className="flex-1 py-2.5 px-3 rounded-xl bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>Hitung Biaya</span>
        </button>

        <a
          href={`https://wa.me/${STORE_INFO.phoneRaw}?text=Halo%20Rusdi%20Furniture%20Custom,%20saya%20tertarik%20konsultasi.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Kami</span>
        </a>
      </div>
    </>
  );
};
