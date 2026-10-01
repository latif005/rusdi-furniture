import React from 'react';
import { STORE_INFO } from '../data/furnitureData';
import { 
  Star, 
  ShieldCheck, 
  Ruler, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  MapPin, 
  Hammer,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onExploreCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenCalculator,
  onExploreCatalog 
}) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-white overflow-hidden pt-5 sm:pt-8 pb-12 sm:pb-16 lg:py-20 border-b border-stone-800">
      {/* Subtle warm background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Trust Pill with Google Review and Location */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 pr-3 sm:pr-4 rounded-full bg-stone-800/90 border border-stone-700/80 shadow-sm text-[11px] sm:text-xs max-w-full">
              <span className="flex items-center gap-1 bg-amber-500 text-stone-950 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-bold shrink-0">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                5.0 / 5.0
              </span>
              <span className="text-stone-300 font-medium truncate">
                10 Ulasan Google Maps
              </span>
              <span className="hidden sm:inline text-stone-500">•</span>
              <span className="hidden sm:inline text-amber-400 font-semibold shrink-0">
                Babelan, Bekasi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight sm:leading-[1.15] text-white">
              Wujudkan Kitchen Set & Furniture Custom Impian di{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Rusdi Furniture
              </span>
            </h1>

            {/* Subtitle with materials from business description */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Spesialis pembuatan <strong>Kitchen Set Minimalis</strong>, <strong>Apartemen Set</strong>, <strong>Wardrobe</strong>, & <strong>Bed Set</strong> di Kabupaten Bekasi. Menggunakan bahan kokoh <strong>Multiplek Plywood 18mm</strong>, <strong>Engsel Slow Motion</strong>, dan finishing premium <strong>HPL Taco, Carta, Platinum, & Natural Aike</strong>.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bukan Serbuk Kayu / MDF (100% Plywood 18mm)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Engsel Slow Motion (Tutup Halus Tanpa Banting)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gratis Survei & Pengukuran Wilayah Bekasi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Harga Langsung Pengrajin (Workshop Sendiri)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2 sm:pt-4">
              <a
                href={`https://wa.me/${STORE_INFO.phoneRaw}?text=Halo%20Rusdi%20Furniture%20Custom,%20saya%20ingin%20konsultasi%20dan%20survei%20pembuatan%20furniture.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/40 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Konsultasi & Survei Gratis</span>
              </a>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-600 font-semibold text-sm sm:text-base transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <Ruler className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Kalkulator Estimasi Biaya</span>
              </button>
            </div>

            {/* Customer Quote Snippet from Google */}
            <div className="pt-2 border-t border-stone-800/80 flex items-center gap-2.5 sm:gap-3 text-xs text-stone-400">
              <div className="p-1 rounded-full bg-amber-500/20 text-amber-400 shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="italic line-clamp-1 sm:line-clamp-none">
                &ldquo;Harga murah, kualitas bagus mantaplah pokoknya, rekomended banget👍&rdquo;
              </span>
              <span className="text-stone-500 font-medium shrink-0 hidden xs:inline">— Ulasan Google</span>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-700 bg-stone-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Kitchen Set Minimalis Rusdi Furniture Custom"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent pointer-events-none"></div>

              {/* Floating Badges on Image */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-amber-500/60 shadow-lg bg-stone-950 p-0.5 shrink-0">
                  <img
                    src="/logo.jpg"
                    alt="Logo Rusdi Furniture Custom"
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="bg-stone-900/90 backdrop-blur-md text-amber-300 border border-amber-500/40 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-semibold shadow-md flex items-center gap-1.5">
                  <Hammer className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Workshop Resmi Babelan</span>
                </span>
              </div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-xl bg-stone-900/85 backdrop-blur-md border border-stone-700/80">
                <div className="flex items-center justify-between gap-2 text-xs text-stone-300 pb-1.5 sm:pb-2 border-b border-stone-700/50">
                  <span className="font-semibold text-white truncate">Kitchen Set Minimalis HPL Taco</span>
                  <span className="text-amber-400 font-bold shrink-0">Mulai Rp 1,75jt/m</span>
                </div>
                <div className="flex items-center justify-between pt-1.5 sm:pt-2 text-[10px] sm:text-[11px] text-stone-400">
                  <span className="truncate">Multiplek 18mm • Soft Close • Bebas Desain</span>
                  <button 
                    onClick={onExploreCatalog}
                    className="text-amber-300 hover:text-amber-200 font-medium flex items-center gap-1 shrink-0 ml-2 cursor-pointer"
                  >
                    Lihat Galeri <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Metrics under image */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4 text-center">
              <div className="bg-stone-800/80 border border-stone-700/60 p-2 sm:p-3 rounded-xl">
                <p className="text-base sm:text-xl font-bold text-amber-400">18 mm</p>
                <p className="text-[10px] sm:text-[11px] text-stone-400 mt-0.5 leading-tight">Multiplek Meranti</p>
              </div>
              <div className="bg-stone-800/80 border border-stone-700/60 p-2 sm:p-3 rounded-xl">
                <p className="text-base sm:text-xl font-bold text-amber-400">100%</p>
                <p className="text-[10px] sm:text-[11px] text-stone-400 mt-0.5 leading-tight">Slow Motion Free</p>
              </div>
              <div className="bg-stone-800/80 border border-stone-700/60 p-2 sm:p-3 rounded-xl">
                <p className="text-base sm:text-xl font-bold text-amber-400">5.0 ⭐</p>
                <p className="text-[10px] sm:text-[11px] text-stone-400 mt-0.5 leading-tight">Kepuasan Pelanggan</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
