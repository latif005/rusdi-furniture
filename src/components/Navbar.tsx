import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/furnitureData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Sparkles,
  Calculator,
  Compass,
  MessageCircle,
  ChevronRight,
  Star,
  Layers,
  FolderOpen,
  Navigation
} from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open on small devices
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Beranda', href: '#hero', icon: Compass },
    { label: 'Katalog Produk', href: '#katalog', icon: FolderOpen },
    { label: 'Kalkulator Harga', href: '#kalkulator', onClick: onOpenCalculator, icon: Calculator, badge: 'Estimasi' },
    { label: 'Kualitas Bahan', href: '#material', icon: Layers },
    { label: 'Ulasan Google', href: '#ulasan', icon: Star, badge: '5.0 ⭐' },
    { label: 'Lokasi & Kontak', href: '#lokasi', icon: MapPin },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.onClick) {
      link.onClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 shadow-md">
      {/* Top micro bar for store details - Fully responsive on mobile, tablet & desktop */}
      <div className="bg-stone-950/90 border-b border-stone-800/80 py-1.5 px-3 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left: Store Status & Location info */}
          <div className="flex items-center gap-2 sm:gap-3 text-stone-300 min-w-0">
            <span className="inline-flex items-center gap-1.5 font-medium whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Buka</span>
              <span className="text-stone-400 text-[11px] sm:text-xs">· s/d 17.00</span>
            </span>

            <span className="hidden md:inline-block text-stone-600">|</span>

            {/* Address pill on md+ screens */}
            <a 
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-stone-400 hover:text-amber-400 transition-colors truncate text-[11px] sm:text-xs"
              title="Buka lokasi di Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">Kedungjaya, Babelan, Kab. Bekasi</span>
            </a>
          </div>

          {/* Right: Direct Phone & Google Reviews */}
          <div className="flex items-center gap-2 sm:gap-4 text-stone-300 shrink-0">
            <a 
              href={`tel:${STORE_INFO.phoneRaw}`} 
              className="flex items-center gap-1 text-stone-300 hover:text-amber-400 transition-colors text-[11px] sm:text-xs font-medium"
              title="Hubungi telepon workshop"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 shrink-0" />
              <span className="hidden xs:inline">{STORE_INFO.phone}</span>
              <span className="xs:hidden">Telepon</span>
            </a>

            <span className="text-stone-700">|</span>

            <a 
              href={STORE_INFO.googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium text-[11px] sm:text-xs"
              title="Lihat 10 Ulasan Bintang 5 di Google"
            >
              <span className="font-bold">⭐ 5.0</span>
              <span className="text-stone-400 hidden sm:inline">({STORE_INFO.reviewCount} ulasan Google)</span>
              <span className="text-stone-400 sm:hidden">({STORE_INFO.reviewCount})</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          
          {/* Brand Logo & Tagline - Guaranteed never to shrink or truncate */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden ring-2 ring-amber-500/50 shadow-md bg-stone-900 flex items-center justify-center p-0.5 shrink-0 group-hover:scale-105 group-hover:ring-amber-400 transition-all">
              <img 
                src="/src/assets/images/rusdi_logo_1790864697216.jpg" 
                alt="Logo Rusdi Furniture Custom" 
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">
                  Rusdi Furniture
                </span>
                <span className="text-[10px] sm:text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 sm:px-2 py-0.5 rounded font-semibold uppercase tracking-wider shrink-0 whitespace-nowrap">
                  Custom
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-400 font-medium whitespace-nowrap">
                Kitchen Set & Interior Babelan Bekasi
              </p>
            </div>
          </a>

          {/* Desktop Nav Links (Visible on Wide Desktop Screens >= 1280px) */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => link.onClick?.()}
                className="relative px-2.5 2xl:px-3 py-2 rounded-lg text-xs 2xl:text-sm font-medium text-stone-300 hover:text-white hover:bg-stone-800/80 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 hidden 2xl:inline-block">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs (Screens >= 1280px) */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 shrink-0">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 px-3 2xl:px-3.5 py-2 text-xs font-semibold rounded-lg bg-stone-800 text-stone-200 border border-stone-700 hover:bg-stone-700 hover:text-white transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Hitung Biaya</span>
            </button>
            <a
              href={`https://wa.me/${STORE_INFO.phoneRaw}?text=Halo%20Rusdi%20Furniture%20Custom,%20saya%20tertarik%20untuk%20konsultasi%20dan%20survei%20pembuatan%20furniture%20custom.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 2xl:px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-950/40 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile & Tablet Control Buttons (< 1280px: Tablet Rotated, iPad, Laptops) */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Quick Calculator Shortcut on Tablets / Phablets */}
            <button
              onClick={onOpenCalculator}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 text-stone-200 border border-stone-700 text-xs font-semibold hover:bg-stone-700 hover:text-white transition-colors cursor-pointer whitespace-nowrap shadow-sm"
              title="Buka Kalkulator Estimasi"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Hitung Biaya</span>
            </button>

            {/* Quick WhatsApp button for mobile & tablet */}
            <a
              href={`https://wa.me/${STORE_INFO.phoneRaw}?text=Halo%20Rusdi%20Furniture%20Custom,%20saya%20ingin%20konsultasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-sm hover:bg-emerald-500 transition-colors whitespace-nowrap"
              title="Chat WhatsApp"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label={mobileMenuOpen ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
              <span className="text-xs font-medium hidden md:inline text-stone-400">Menu</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[calc(4.5rem)] bottom-0 z-40 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-stone-900 border-b border-stone-800 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain shadow-2xl">
            
            {/* Quick Location & Direct Contact Card inside drawer */}
            <div className="p-4 bg-stone-950/70 border-b border-stone-800/80">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-amber-500/40 shadow-sm bg-stone-900 p-0.5 shrink-0">
                    <img 
                      src="/src/assets/images/rusdi_logo_1790864697216.jpg" 
                      alt="Logo Rusdi Furniture Custom" 
                      className="w-full h-full object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                      Workshop Babelan Bekasi
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5 line-clamp-1">
                      {STORE_INFO.address}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-medium shrink-0">
                  {STORE_INFO.estTravelTime.split(' ')[0]} {STORE_INFO.estTravelTime.split(' ')[1]}
                </span>
              </div>

              {/* Quick Call & Route buttons */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs font-medium border border-stone-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Telepon Toko</span>
                </a>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs font-medium border border-stone-700 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Petunjuk Rute</span>
                </a>
              </div>
            </div>

            {/* Menu Links List */}
            <div className="p-3 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-stone-200 hover:text-amber-400 hover:bg-stone-800/80 active:bg-stone-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-stone-800 border border-stone-700/60 flex items-center justify-center text-amber-400 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">{link.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {link.badge && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {link.badge}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-stone-500" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom Actions CTA */}
            <div className="p-4 border-t border-stone-800/90 space-y-2.5 bg-stone-950/40">
              <button
                onClick={() => {
                  onOpenCalculator();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-linear-to-r from-stone-800 to-stone-750 hover:from-stone-750 hover:to-stone-700 text-stone-100 border border-stone-700 font-bold text-sm shadow-sm active:scale-[0.99] transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Simulasi & Hitung Biaya Custom</span>
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.phoneRaw}?text=Halo%20Rusdi%20Furniture%20Custom,%20saya%20tertarik%20konsultasi%20pembuatan%20furniture.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/50 active:scale-[0.99] transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WhatsApp Langsung</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

