import React from 'react';
import { MATERIAL_SPECS, WORK_STEPS } from '../data/furnitureData';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Hammer, 
  Ruler, 
  MessageSquareText, 
  LayoutTemplate 
} from 'lucide-react';

export const MaterialShowcase: React.FC = () => {
  return (
    <section id="material" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Standar Kualitas Rusdi Furniture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparansi Material & Standar Produksi
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Kami menjamin tidak ada pengurangan spek tersembunyi. Setiap furniture yang keluar dari workshop kami di Babelan Bekasi menggunakan bahan padat pilihan.
          </p>
        </div>

        {/* 3 Core Material Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {MATERIAL_SPECS.map((mat, idx) => (
            <div
              key={idx}
              className="bg-stone-800/80 border border-stone-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-full font-bold">
                    {mat.badge}
                  </span>
                  <span className="text-stone-500 font-mono text-xs">#0{idx + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {mat.title}
                </h3>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {mat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-700/60 space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                  Keunggulan Nyata:
                </span>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {mat.advantages.map((adv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table: Rusdi Furniture vs Mebel Pabrikan Murah */}
        <div className="bg-stone-800/50 rounded-2xl border border-stone-700 p-6 sm:p-8 mb-16">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-xl font-bold text-white">
              Perbandingan: Rusdi Furniture Custom vs Mebel Murahan
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Pahami perbedaan sebelum Anda menyesal membeli furniture yang hancur dalam 1-2 tahun.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-700 text-stone-400">
                  <th className="py-3 px-4">Komponen</th>
                  <th className="py-3 px-4 text-emerald-400 font-bold bg-emerald-950/30 rounded-t-lg">
                    ✓ Standar Rusdi Furniture Custom
                  </th>
                  <th className="py-3 px-4 text-rose-400 font-medium">
                    ✕ Toko Lain / Mebel Serbuk Curah
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-700/60 text-stone-300">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Bahan Dasar Kayu</td>
                  <td className="py-3.5 px-4 bg-emerald-950/20 text-emerald-300 font-medium">
                    Multiplek / Plywood Meranti 18mm tebal & padat
                  </td>
                  <td className="py-3.5 px-4 text-stone-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    Partikel Board / Serbuk kayu pres (MDF rapuh)
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Ketahanan Terhadap Air</td>
                  <td className="py-3.5 px-4 bg-emerald-950/20 text-emerald-300 font-medium">
                    Tahan cipratan air & kelembapan dapur tanpa mekar
                  </td>
                  <td className="py-3.5 px-4 text-stone-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    Mudah mengembang & hancur jika kena air
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Engsel Pintu</td>
                  <td className="py-3.5 px-4 bg-emerald-950/20 text-emerald-300 font-medium">
                    Slow Motion (Soft-Close) hidrolik anti banting
                  </td>
                  <td className="py-3.5 px-4 text-stone-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    Engsel biasa yang berisik dan mudah copot bautnya
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Finishing Luar</td>
                  <td className="py-3.5 px-4 bg-emerald-950/20 text-emerald-300 font-medium">
                    HPL Taco, Carta, Platinum tebal dengan edging presisi
                  </td>
                  <td className="py-3.5 px-4 text-stone-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    Kertas PVC tipis atau stiker yang mudah mengelupas
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Penyesuaian Ukuran</td>
                  <td className="py-3.5 px-4 bg-emerald-950/20 text-emerald-300 font-medium">
                    100% Custom presisi sesuai sudut & tinggi ruangan Anda
                  </td>
                  <td className="py-3.5 px-4 text-stone-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    Ukuran paten pabrik, sering meninggalkan celah kotor
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Steps to Order Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Cara Pemesanan Mudah 4 Langkah
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Dari ide kasar hingga terpasang rapi di rumah Anda, kami dampingi setiap tahapannya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_STEPS.map((step, idx) => {
              const renderIcon = () => {
                switch (step.icon) {
                  case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-amber-400" />;
                  case 'Ruler': return <Ruler className="w-6 h-6 text-amber-400" />;
                  case 'LayoutTemplate': return <LayoutTemplate className="w-6 h-6 text-amber-400" />;
                  default: return <Hammer className="w-6 h-6 text-amber-400" />;
                }
              };

              return (
                <div
                  key={idx}
                  className="bg-stone-800/90 border border-stone-700/80 rounded-2xl p-6 relative group hover:bg-stone-800 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      {renderIcon()}
                    </div>
                    <span className="text-2xl font-black text-stone-600 group-hover:text-amber-500 transition-colors font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
