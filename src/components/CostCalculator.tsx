import React, { useState, useMemo } from 'react';
import { STORE_INFO } from '../data/furnitureData';
import { 
  Calculator, 
  Send, 
  Check, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  Ruler, 
  CheckCircle,
  RotateCcw
} from 'lucide-react';

interface FurnitureOption {
  id: string;
  name: string;
  baseRatePerUnit: number;
  unit: 'meter lari' | 'meter persegi' | 'paket';
  defaultLength: number;
  defaultHeight?: number;
  description: string;
}

const FURNITURE_TYPES: FurnitureOption[] = [
  {
    id: 'kitchen-atas-bawah',
    name: 'Kitchen Set Lengkap (Kabinet Atas & Bawah)',
    baseRatePerUnit: 3500000, // 1.75m atas + 1.75m bawah = 3.5jt/meter lari
    unit: 'meter lari',
    defaultLength: 3,
    description: 'Kabinet atas + kabinet bawah dapur dengan rak piring & laci bumbu.',
  },
  {
    id: 'kitchen-bawah-saja',
    name: 'Kitchen Set Kabinet Bawah Saja',
    baseRatePerUnit: 1800000,
    unit: 'meter lari',
    defaultLength: 3,
    description: 'Bagian bawah dapur (tempat kompor & bak cuci piring/sink).',
  },
  {
    id: 'kitchen-atas-saja',
    name: 'Kitchen Set Kabinet Atas Saja',
    baseRatePerUnit: 1750000,
    unit: 'meter lari',
    defaultLength: 3,
    description: 'Kabinet gantung dinding atas dapur.',
  },
  {
    id: 'wardrobe-plafon',
    name: 'Wardrobe / Lemari Pakaian Full Plafon',
    baseRatePerUnit: 1800000, // per m2
    unit: 'meter persegi',
    defaultLength: 2,
    defaultHeight: 2.8,
    description: 'Lemari pakaian kustom menjulang tinggi sesuai plafon kamar.',
  },
  {
    id: 'backdrop-tv',
    name: 'Backdrop TV Minimalis Ruang Keluarga',
    baseRatePerUnit: 1650000, // per m2
    unit: 'meter persegi',
    defaultLength: 2.5,
    defaultHeight: 2.2,
    description: 'Panel dinding TV dengan kisi-kisi estetik dan rak gantung.',
  },
  {
    id: 'dipan-bed-set',
    name: 'Dipan Ranjang Minimalis + Headboard',
    baseRatePerUnit: 3600000, // paket ranjang uk 160x200 atau 180x200
    unit: 'paket',
    defaultLength: 1,
    description: 'Dipan kasur kokoh plywood 18mm dengan laci bawah kasur.',
  },
  {
    id: 'partisi-ruang',
    name: 'Partisi / Penyekat Ruangan 2 Muka',
    baseRatePerUnit: 1600000, // per m2
    unit: 'meter persegi',
    defaultLength: 2,
    defaultHeight: 2.4,
    description: 'Penyekat ruangan fungsional dengan rak pajangan hiasan.',
  },
];

const FINISH_OPTIONS = [
  { id: 'hpl-taco-matte', name: 'HPL Taco Standar (Matte / Solid / Doff)', priceModifier: 0 },
  { id: 'hpl-taco-wood', name: 'HPL Taco Carta (Serat Kayu Alami Warm Wood)', priceModifier: 150000 },
  { id: 'hpl-platinum-marble', name: 'HPL Platinum / Marmer Mewah & Glossy', priceModifier: 250000 },
  { id: 'natural-aike', name: 'Finishing Natural Aike Premium Series', priceModifier: 200000 },
];

export const CostCalculator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>(FURNITURE_TYPES[0].id);
  const [lengthMeters, setLengthMeters] = useState<number>(3);
  const [heightMeters, setHeightMeters] = useState<number>(2.5);
  const [selectedFinish, setSelectedFinish] = useState<string>(FINISH_OPTIONS[0].id);
  const [addTopTableGranit, setAddTopTableGranit] = useState<boolean>(false);
  const [addLedStrip, setAddLedStrip] = useState<boolean>(true);
  const [addMirrorAccent, setAddMirrorAccent] = useState<boolean>(false);

  const activeItem = useMemo(() => {
    return FURNITURE_TYPES.find(item => item.id === selectedType) || FURNITURE_TYPES[0];
  }, [selectedType]);

  const activeFinish = useMemo(() => {
    return FINISH_OPTIONS.find(f => f.id === selectedFinish) || FINISH_OPTIONS[0];
  }, [selectedFinish]);

  // Handle calculation
  const calculation = useMemo(() => {
    let unitsCalculated = lengthMeters;
    let unitLabel = 'meter lari';

    if (activeItem.unit === 'meter persegi') {
      unitsCalculated = lengthMeters * heightMeters;
      unitLabel = 'meter persegi (m²)';
    } else if (activeItem.unit === 'paket') {
      unitsCalculated = 1;
      unitLabel = 'unit paket';
    }

    const baseCost = unitsCalculated * (activeItem.baseRatePerUnit + activeFinish.priceModifier);
    
    // Top table granit (approx 1.200.000 / m lari for kitchen sets)
    let topTableCost = 0;
    if (addTopTableGranit && (selectedType.includes('kitchen'))) {
      topTableCost = lengthMeters * 1200000;
    }

    // LED Strip warm white installation
    let ledCost = 0;
    if (addLedStrip) {
      ledCost = lengthMeters * 120000;
    }

    // Mirror accent for wardrobe
    let mirrorCost = 0;
    if (addMirrorAccent && selectedType === 'wardrobe-plafon') {
      mirrorCost = 650000;
    }

    const totalEstimated = Math.round(baseCost + topTableCost + ledCost + mirrorCost);

    return {
      unitsCalculated: parseFloat(unitsCalculated.toFixed(2)),
      unitLabel,
      baseCost,
      topTableCost,
      ledCost,
      mirrorCost,
      totalEstimated,
    };
  }, [
    activeItem, 
    activeFinish, 
    lengthMeters, 
    heightMeters, 
    selectedType, 
    addTopTableGranit, 
    addLedStrip, 
    addMirrorAccent
  ]);

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // WhatsApp generator with pre-filled message
  const generateWhatsAppLink = () => {
    const lines = [
      `Halo Pak Rusdi (Rusdi Furniture Custom), saya baru saja mencoba Kalkulator Estimasi Biaya di website:`,
      ``,
      `*Pilihan Furniture:* ${activeItem.name}`,
      activeItem.unit === 'meter persegi' 
        ? `*Dimensi:* Panjang ${lengthMeters}m x Tinggi ${heightMeters}m (${calculation.unitsCalculated} m²)` 
        : `*Panjang:* ${lengthMeters} meter lari`,
      `*Finishing HPL:* ${activeFinish.name}`,
      addTopTableGranit ? `*Top Table:* Tambahan Granit / Marmer (+${formatIDR(calculation.topTableCost)})` : '',
      addLedStrip ? `*Lampu:* Termasuk LED Strip Warm White (+${formatIDR(calculation.ledCost)})` : '',
      addMirrorAccent ? `*Aksen:* Tambahan Cermin Bevel` : '',
      `*Estimasi Biaya:* ${formatIDR(calculation.totalEstimated)}`,
      ``,
      `Mohon info ketersediaan jadwal untuk *Survei Lokasi & Pengukuran Gratis* ke rumah saya di area Bekasi / sekitarnya. Terima kasih!`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${STORE_INFO.phoneRaw}?text=${text}`;
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-amber-700" />
            Transparansi Harga Rusdi Furniture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Kalkulator Estimasi Biaya Custom
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Hitung perkiraan biaya pembuatan furniture custom Anda secara transparan. Semua rancangan dibuat menggunakan <strong>Multiplek Plywood 18mm</strong> dan <strong>Free Engsel Slow Motion</strong>.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Col 7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200 space-y-6">
            
            {/* Step 1: Select Type */}
            <div>
              <label className="block text-sm font-bold text-stone-900 mb-2">
                1. Pilih Jenis Furniture:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FURNITURE_TYPES.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedType(type.id);
                        setLengthMeters(type.defaultLength);
                        if (type.defaultHeight) setHeightMeters(type.defaultHeight);
                      }}
                      className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/70 text-amber-950 ring-1 ring-amber-600'
                          : 'border-stone-200 hover:border-stone-300 bg-stone-50/50 text-stone-700'
                      }`}
                    >
                      <div className="font-bold">{type.name}</div>
                      <div className="text-[11px] text-stone-500 mt-1">
                        Mulai {formatIDR(type.baseRatePerUnit)} / {type.unit}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dimensions */}
            <div className="pt-2 border-t border-stone-100">
              <label className="block text-sm font-bold text-stone-900 mb-2">
                2. Tentukan Ukuran Ruangan:
              </label>

              {activeItem.unit === 'paket' ? (
                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-xl text-xs text-amber-900">
                  Paket dipan sudah mencakup standar kasur 160x200 / 180x200 cm dengan headboard dan laci penyimpanan bawah kasur.
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Length Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-semibold text-stone-700 mb-1.5">
                      <span>Panjang Furniture:</span>
                      <span className="text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded">
                        {lengthMeters} Meter
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="0.5"
                      value={lengthMeters}
                      onChange={(e) => setLengthMeters(parseFloat(e.target.value))}
                      className="w-full accent-amber-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-600 mt-1">
                      <span>1 m</span>
                      <span>3 m (Standar Rumah)</span>
                      <span>5 m</span>
                      <span>10 m</span>
                    </div>
                  </div>

                  {/* Height Slider (if m2) */}
                  {activeItem.unit === 'meter persegi' && (
                    <div>
                      <div className="flex justify-between items-center text-xs font-semibold text-stone-700 mb-1.5">
                        <span>Tinggi (dari Lantai / Plafon):</span>
                        <span className="text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded">
                          {heightMeters} Meter
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1.5"
                        max="4"
                        step="0.1"
                        value={heightMeters}
                        onChange={(e) => setHeightMeters(parseFloat(e.target.value))}
                        className="w-full accent-amber-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-stone-600 mt-1">
                        <span>1.5 m</span>
                        <span>2.5 m (Standar Kamar)</span>
                        <span>4.0 m (High Plafon)</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Step 3: Finish selection */}
            <div className="pt-2 border-t border-stone-100">
              <label className="block text-sm font-bold text-stone-900 mb-2">
                3. Pilihan Finishing HPL:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FINISH_OPTIONS.map((f) => {
                  const isSelected = selectedFinish === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSelectedFinish(f.id)}
                      className={`p-2.5 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <div>{f.name}</div>
                      {f.priceModifier > 0 && (
                        <div className="text-[10px] text-stone-500 mt-0.5">
                          +{formatIDR(f.priceModifier)} / m
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Addons */}
            <div className="pt-2 border-t border-stone-100">
              <label className="block text-sm font-bold text-stone-900 mb-2">
                4. Tambahan Fitur & Aksesoris:
              </label>
              
              <div className="space-y-2">
                {selectedType.includes('kitchen') && (
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addTopTableGranit}
                      onChange={(e) => setAddTopTableGranit(e.target.checked)}
                      className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-stone-800">Top Table Granit Alam / Solid Surface</span>
                      <p className="text-stone-500">Meja dapur tahan gores pisau dan tahan air panas (+Rp 1.200.000 / meter lari)</p>
                    </div>
                  </label>
                )}

                <label className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addLedStrip}
                    onChange={(e) => setAddLedStrip(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-800">Instalasi Lampu LED Strip Warm White 3000K</span>
                    <p className="text-stone-500">Pencahayaan tersembunyi (hidden LED) estetik di balik kabinet/panel (+Rp 120.000 / meter)</p>
                  </div>
                </label>

                {selectedType === 'wardrobe-plafon' && (
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addMirrorAccent}
                      onChange={(e) => setAddMirrorAccent(e.target.checked)}
                      className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-stone-800">Cermin Bevel Full Body pada Pintu</span>
                      <p className="text-stone-500">Cermin kaca estetik untuk rias dan memberi efek kamar lebih luas (+Rp 650.000)</p>
                    </div>
                  </label>
                )}
              </div>
            </div>

          </div>

          {/* Results Card (Col 5) */}
          <div className="lg:col-span-5 space-y-4 sticky top-24">
            <div className="bg-stone-900 text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-stone-800">
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Hasil Simulasi Biaya
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {activeItem.name}
                  </h3>
                </div>
                <div className="p-2 bg-stone-800 rounded-lg text-amber-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Breakdown List */}
              <div className="py-4 space-y-2.5 text-xs border-b border-stone-800">
                <div className="flex justify-between text-stone-300">
                  <span>Ukuran Total:</span>
                  <span className="font-semibold text-white">
                    {calculation.unitsCalculated} {calculation.unitLabel}
                  </span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Bahan Utama:</span>
                  <span className="font-semibold text-white">Multiplek 18mm Full</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Finishing:</span>
                  <span className="font-semibold text-amber-300">{activeFinish.name}</span>
                </div>

                {calculation.topTableCost > 0 && (
                  <div className="flex justify-between text-stone-300">
                    <span>Top Table Granit:</span>
                    <span className="font-semibold text-white">{formatIDR(calculation.topTableCost)}</span>
                  </div>
                )}

                {calculation.ledCost > 0 && (
                  <div className="flex justify-between text-stone-300">
                    <span>Lampu LED Strip Warm White:</span>
                    <span className="font-semibold text-white">{formatIDR(calculation.ledCost)}</span>
                  </div>
                )}

                {calculation.mirrorCost > 0 && (
                  <div className="flex justify-between text-stone-300">
                    <span>Aksen Cermin Bevel:</span>
                    <span className="font-semibold text-white">{formatIDR(calculation.mirrorCost)}</span>
                  </div>
                )}

                {/* Free Included Hardware */}
                <div className="pt-2 border-t border-stone-800/80 space-y-1">
                  <div className="flex items-center justify-between text-emerald-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Engsel Slow Motion Soft-Close:
                    </span>
                    <span className="font-bold">GRATIS</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Survei & Desain Awal:
                    </span>
                    <span className="font-bold">GRATIS</span>
                  </div>
                </div>
              </div>

              {/* Total Price Section */}
              <div className="pt-4 pb-2">
                <p className="text-xs text-stone-400">Perkiraan Biaya:</p>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight mt-1">
                  {formatIDR(calculation.totalEstimated)}
                </div>
                <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                  *Harga estimasi awal. Biaya riil dihitung akurat saat survei fisik lokasi dan pemilihan kode katalog HPL.
                </p>
              </div>

              {/* WhatsApp Lead Button */}
              <div className="mt-5 space-y-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Kirim Rincian Ini ke WhatsApp
                </a>
                
                <p className="text-center text-[11px] text-stone-400">
                  Respon cepat via WA Pak Rusdi: <strong>{STORE_INFO.phone}</strong>
                </p>
              </div>

            </div>

            {/* Quick Guarantees Box */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 text-xs text-stone-700 space-y-2">
              <div className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Standar Mutu Rusdi Furniture:
              </div>
              <ul className="space-y-1.5 text-stone-600 pl-1">
                <li>• Menggunakan multiplek 18mm asli bukan campur MDF</li>
                <li>• Lem HPL kuat dengan teknik pres workshop yang rata</li>
                <li>• Rel laci ganda tebal, awet ditarik ratusan kali tiap hari</li>
                <li>• Garansi pemasangan dan pengerjaan rapi</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
