import React from 'react';
import { STORE_INFO } from '../data/furnitureData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Star, 
  ShieldCheck, 
  ArrowUp, 
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800/80 pt-10 sm:pt-12 pb-24 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Store Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-amber-500/40 shadow-md bg-stone-900 p-0.5 shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="Logo Rusdi Furniture Custom" 
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-base tracking-tight">
                  {STORE_INFO.name}
                </h4>
                <p className="text-[11px] text-amber-400 font-medium">
                  Spesialis Kitchen Set & Interior Bekasi
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              Solusi pembuatan furniture custom hunian, apartemen, dan kantor di Kabupaten Bekasi. Mengutamakan bahan Multiplek 18mm kokoh, engsel slow motion, dan finishing HPL rapi bergaransi.
            </p>

            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-xs">
              <Star className="w-4 h-4 fill-current" />
              <span>Google Maps 5.0 (10 Ulasan Positif)</span>
            </div>
          </div>

          {/* Col 2: Layanan Unggulan */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wide uppercase">
              Layanan Utama
            </h5>
            <ul className="space-y-2 text-stone-300">
              <li>• Kitchen Set Minimalis Dapur Modern</li>
              <li>• Kitchen Island & Meja Bar</li>
              <li>• Lemari Pakaian & Wardrobe Full Plafon</li>
              <li>• Backdrop TV Minimalis dengan Hidden LED</li>
              <li>• Paket Interior Apartemen Studio & 2BR</li>
              <li>• Dipan Kasur, Nakas & Headboard</li>
              <li>• Partisi Penyekat Ruangan Dua Muka</li>
            </ul>
          </div>

          {/* Col 3: Workshop Babelan */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wide uppercase">
              Workshop Babelan
            </h5>
            <div className="space-y-2 text-stone-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Setiap Hari 08.00 - 17.00 WIB</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${STORE_INFO.phoneRaw}`} className="hover:text-white font-medium">
                  {STORE_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300"
                >
                  {STORE_INFO.instagram}
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Keunggulan */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wide uppercase">
              Komitmen Kualitas
            </h5>
            <p className="text-stone-400 leading-relaxed">
              Setiap pesanan dikerjakan langsung oleh pengrajin di workshop kami tanpa pihak ketiga, sehingga harga lebih kompetitif dan pengerjaan terpantau presisi.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 hover:text-white text-xs font-semibold transition-colors cursor-pointer border border-stone-700"
              >
                <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>
            © {new Date().getFullYear()} {STORE_INFO.name}. Hak Cipta Dilindungi. Toko mebel & interior di Kabupaten Bekasi, Jawa Barat.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Google Maps
            </a>
            <span>•</span>
            <a 
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a 
              href={`https://wa.me/${STORE_INFO.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
