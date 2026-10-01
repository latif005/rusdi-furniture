import React from 'react';
import { GOOGLE_REVIEWS, STORE_INFO } from '../data/furnitureData';
import { 
  Star, 
  CheckCircle, 
  ExternalLink, 
  MessageSquareHeart, 
  MapPin, 
  PenTool,
  ThumbsUp
} from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="ulasan" className="py-16 sm:py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
              Reputasi Terpercaya Google Maps
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Testimoni Pelanggan Rusdi Furniture
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
              Kepuasan pelanggan di Kabupaten Bekasi dan sekitarnya adalah bukti komitmen kami terhadap kerapian dan kualitas material kayu 18mm.
            </p>
          </div>

          {/* Rating Summary Badge */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-5 shrink-0">
            <div className="text-center border-r border-stone-200 pr-5">
              <div className="text-3xl sm:text-4xl font-black text-stone-900">5.0</div>
              <div className="flex items-center gap-0.5 text-amber-500 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-stone-500 mt-1 block font-medium">
                {STORE_INFO.reviewCount} Ulasan Google
              </span>
            </div>

            <div className="space-y-2">
              <a
                href={STORE_INFO.googleMapsReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Tulis Ulasan</span>
              </a>
              <a
                href={STORE_INFO.googleMapsReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] text-stone-600 hover:text-stone-900 font-medium"
              >
                <span>Lihat profil Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-800 text-amber-100 flex items-center justify-center font-bold text-sm shadow-inner">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-stone-900 leading-snug">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-stone-500">
                        <MapPin className="w-3 h-3 text-amber-600" />
                        <span>{rev.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] text-stone-400">
                    {rev.relativeTime}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-stone-700 ml-1">5.0</span>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{rev.reviewText}&rdquo;
                </p>
              </div>

              {/* Project Badge */}
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                  {rev.projectType}
                </span>
                <span className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Terverifikasi
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Callout Quote Banner */}
        <div className="mt-12 bg-stone-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Siap Mewujudkan Hunian Idaman Anda?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Diskusikan kebutuhan ukuran dan anggaran Anda dengan Pak Rusdi langsung. Survei & estimasi gratis.
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.phoneRaw}?text=Halo%20Pak%20Rusdi,%20saya%20baca%20ulasan%20bintang%205%20di%20Google,%20saya%20tertarik%20survei%20ke%20rumah.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Chat WhatsApp Pak Rusdi</span>
          </a>
        </div>

      </div>
    </section>
  );
};
