import React, { useState } from 'react';
import { PRODUCTS, STORE_INFO } from '../data/furnitureData';
import { ProductItem } from '../types';
import { 
  Sparkles, 
  Ruler, 
  Check, 
  ArrowRight, 
  X, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Layers,
  ChevronRight
} from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'kitchen-set', label: 'Kitchen Set' },
    { id: 'wardrobe', label: 'Lemari & Wardrobe' },
    { id: 'backdrop-tv', label: 'Backdrop TV' },
    { id: 'apartemen', label: 'Apartemen Set' },
    { id: 'bed-set', label: 'Bed Set / Dipan' },
    { id: 'meja-partisi', label: 'Partisi & Meja' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === activeCategory);

  const openWhatsAppProduct = (item: ProductItem) => {
    const text = encodeURIComponent(
      `Halo Rusdi Furniture Custom, saya tertarik dengan model furniture "${item.title}" (${item.startingPrice} / ${item.priceUnit}). Bolehkah saya konsultasi lebih lanjut dan tanya ketersediaan jadwal survei lokasi?`
    );
    window.open(`https://wa.me/${STORE_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="katalog" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              Koleksi & Portofolio Rusdi Furniture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Pilihan Desain Furniture Custom
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
              Setiap unit dirancang khusus mengikuti ukuran ruangan Anda. Menggunakan bahan <strong>Multiplek Plywood 18mm</strong> awet puluhan tahun dan finishing rapi.
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.phoneRaw}?text=Halo%20Rusdi%20Furniture%20Custom,%20saya%20punya%20desain%20sendiri%20dari%20Pinterest/Instagram,%20apakah%20bisa%20dibuatkan?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <span>Punya Desain Sendiri? Chat Kami</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-800 text-white shadow-md shadow-amber-900/20'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="bg-stone-900/85 backdrop-blur-md text-stone-200 text-xs font-semibold px-2.5 py-1 rounded-md shadow">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Material Pill */}
                <div className="absolute top-3 right-3">
                  <span className="bg-amber-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2 py-1 rounded-md shadow">
                    Plywood 18mm
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-stone-950/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg">
                  <span className="text-stone-300">Estimasi Mulai</span>
                  <span className="font-extrabold text-amber-300">
                    {product.startingPrice} <span className="font-normal text-[10px] text-stone-300">/ {product.priceUnit}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specs quick bullets */}
                <div className="space-y-1.5 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium text-stone-800 truncate">HPL Taco, Carta, Platinum</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium text-stone-800">Engsel Slow Motion Soft-Close</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Waktu Pengerjaan: {product.specs.waktuPengerjaan}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold text-center transition-colors cursor-pointer"
                  >
                    Rincian Spesifikasi
                  </button>
                  <button
                    onClick={() => openWhatsAppProduct(product)}
                    className="py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    title="Konsultasi Produk Ini via WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Pesan Model</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-72 bg-stone-900">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 transition-colors"
                aria-label="Tutup Detail"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md p-3 rounded-xl text-white flex justify-between items-center">
                <div>
                  <span className="text-[11px] text-amber-400 font-semibold">{selectedProduct.categoryLabel}</span>
                  <h4 className="font-bold text-base sm:text-lg">{selectedProduct.title}</h4>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 block">Mulai Dari</span>
                  <span className="text-amber-300 font-extrabold text-sm sm:text-base">
                    {selectedProduct.startingPrice} <span className="text-[10px] text-stone-300">/{selectedProduct.priceUnit}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div>
                <h5 className="font-bold text-stone-900 text-sm mb-1.5">Deskripsi Desain</h5>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-2.5 text-xs sm:text-sm">
                <h5 className="font-bold text-stone-900 border-b border-stone-200 pb-2">
                  Spesifikasi Teknis & Mutu Produksi
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700 pt-1">
                  <div>
                    <span className="text-stone-500 text-xs block">Material Dasar:</span>
                    <span className="font-semibold text-stone-900">{selectedProduct.specs.material}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Finishing Permukaan:</span>
                    <span className="font-semibold text-stone-900">{selectedProduct.specs.finishing}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Hardware & Aksesoris:</span>
                    <span className="font-semibold text-stone-900">{selectedProduct.specs.hardware}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 text-xs block">Estimasi Pengerjaan:</span>
                    <span className="font-semibold text-stone-900">{selectedProduct.specs.waktuPengerjaan}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200">
                  <span className="text-stone-500 text-xs block mb-1">Bonus / Aksesoris Termasuk:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.specs.accessories.map((acc, i) => (
                      <span
                        key={i}
                        className="bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-2 py-0.5 rounded-md"
                      >
                        ✓ {acc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA in modal */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => openWhatsAppProduct(selectedProduct)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Konsultasi Model Ini ke WhatsApp Pak Rusdi
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl border border-stone-300 text-stone-700 text-sm font-semibold hover:bg-stone-100 cursor-pointer"
                >
                  Tutup
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
