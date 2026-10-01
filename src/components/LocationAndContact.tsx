import React, { useState } from 'react';
import { STORE_INFO, FAQS } from '../data/furnitureData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Instagram, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  ChevronDown,
  Building2
} from 'lucide-react';

export const LocationAndContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    furnitureType: 'Kitchen Set Minimalis',
    estimatedSize: '',
    notes: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*PERMINTAAN SURVEI & KONSULTASI FURNITURE CUSTOM*`,
      ``,
      `*Nama:* ${formData.name || '-'}`,
      `*No. Telepon / WA:* ${formData.phone || '-'}`,
      `*Lokasi / Alamat Proyek:* ${formData.location || '-'}`,
      `*Rencana Furniture:* ${formData.furnitureType}`,
      formData.estimatedSize ? `*Perkiraan Ukuran:* ${formData.estimatedSize}` : '',
      formData.notes ? `*Catatan Khusus:* ${formData.notes}` : '',
      ``,
      `Mohon konfirmasi jadwal survei lokasi dan ketersediaan waktu untuk pengukuran langsung. Terima kasih!`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${STORE_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            Kunjungi Workshop & Hubungi Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lokasi Workshop & Booking Survei
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Workshop kami berlokasi di Babelan, Kabupaten Bekasi. Anda dapat berkunjung langsung untuk melihat sampel bahan, ataupun mengundang kami survei ke hunian Anda.
          </p>
        </div>

        {/* 2 Column Layout: Location Info (Left) + Booking Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Workshop Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-800/90 border border-stone-700/90 rounded-2xl p-6 sm:p-7 shadow-xl space-y-5">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-amber-500/50 shadow-md bg-stone-950 p-1 shrink-0">
                  <img
                    src="/logo.jpg"
                    alt="Logo Rusdi Furniture Custom"
                    className="w-full h-full object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {STORE_INFO.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium mt-0.5">
                    {STORE_INFO.category}
                  </p>
                </div>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-xs sm:text-sm text-stone-300 border-t border-stone-700/70 pt-4">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 text-xs block font-medium">Alamat Workshop:</span>
                    <p className="font-semibold text-white leading-snug mt-0.5">
                      {STORE_INFO.address}
                    </p>
                    <span className="inline-block mt-1 bg-stone-700/80 px-2 py-0.5 rounded text-[11px] font-mono text-stone-300">
                      Plus Code: {STORE_INFO.plusCode}
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 text-xs block font-medium">Jam Operasional:</span>
                    <p className="font-semibold text-emerald-400 mt-0.5">
                      Buka Setiap Hari · {STORE_INFO.closingTimeStr}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      Lama perjalanan sekitar {STORE_INFO.estTravelTime}
                    </p>
                  </div>
                </div>

                {/* Phone & WA */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 text-xs block font-medium">Telepon / WhatsApp:</span>
                    <a
                      href={`tel:${STORE_INFO.phoneRaw}`}
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors block mt-0.5"
                    >
                      {STORE_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 text-xs block font-medium">Instagram Resmi:</span>
                    <a
                      href={STORE_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-pink-300 hover:text-pink-200 transition-colors flex items-center gap-1 mt-0.5"
                    >
                      <span>{STORE_INFO.instagram}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Rute Map Action */}
              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STORE_INFO.name + ' ' + STORE_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-stone-700 hover:bg-stone-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer border border-stone-600 shadow"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Petunjuk Arah Rute Google Maps</span>
                </a>
              </div>

            </div>

            {/* Coverage Area Card */}
            <div className="bg-stone-800/50 border border-stone-700/60 rounded-2xl p-5 text-xs text-stone-300 space-y-2">
              <span className="text-amber-400 font-bold uppercase tracking-wider block">
                Wilayah Jangkauan Layanan & Survei:
              </span>
              <p className="leading-relaxed">
                Kami melayani survei, pengantaran, dan instalasi rapi untuk seluruh wilayah <strong>Kabupaten Bekasi</strong> (Babelan, Tarumajaya, Tambun, Cibitung, Cikarang), <strong>Kota Bekasi</strong> (Summarecon, Harapan Indah, Rawalumbu, Galaxy), serta kawasan <strong>DKI Jakarta Timur & Utara</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Fast Booking Form */}
          <div className="lg:col-span-7 bg-stone-800/90 border border-stone-700/90 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                Layanan Cepat
              </span>
              <h3 className="text-xl font-extrabold text-white mt-0.5">
                Jadwalkan Survei & Konsultasi Gratis
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Isi formulir di bawah ini, tim kami akan langsung merespons via WhatsApp untuk konfirmasi waktu kedatangan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-medium mb-1.5">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pak Wahyu / Bu Rina"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1.5">
                    Nomor WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 0812-xxxx-xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1.5">
                  Lokasi / Alamat Rumah / Perumahan di Bekasi *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Babelan Mas Permai / Harapan Indah / Summarecon"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-medium mb-1.5">
                    Jenis Furniture Custom
                  </label>
                  <select
                    value={formData.furnitureType}
                    onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  >
                    <option value="Kitchen Set Minimalis">Kitchen Set Minimalis</option>
                    <option value="Wardrobe / Lemari Pakaian Full Plafon">Wardrobe / Lemari Pakaian</option>
                    <option value="Backdrop TV Modern LED">Backdrop TV Modern LED</option>
                    <option value="Bed Set & Kamar Utama">Bed Set & Kamar Utama</option>
                    <option value="Paket Apartemen Set Lengkap">Paket Apartemen Set Lengkap</option>
                    <option value="Partisi Penyekat Ruangan">Partisi Penyekat Ruangan</option>
                    <option value="Meja Kerja / Meja Kasir Custom">Meja Kerja / Meja Kasir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1.5">
                    Perkiraan Ukuran (Bila Tahu)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Dapur 3 meter lari L-shape"
                    value={formData.estimatedSize}
                    onChange={(e) => setFormData({ ...formData, estimatedSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1.5">
                  Catatan Tambahan atau Pertanyaan (Opsional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan preferensi warna HPL, konsep minimalis, atau tanggal survei yang diinginkan..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Permintaan Survei ke WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-stone-400 mt-2">
                  *Gratis survei & konsultasi desain tanpa ikatan kontrak di awal.
                </p>
              </div>
            </form>

          </div>

        </div>

        {/* Frequently Asked Questions (FAQ) Accordion */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-stone-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Jawaban seputar pemesanan di Rusdi Furniture Custom Babelan
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-stone-800/80 border border-stone-700/80 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-700/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
