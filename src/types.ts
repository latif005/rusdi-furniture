export interface ProductItem {
  id: string;
  title: string;
  category: 'kitchen-set' | 'wardrobe' | 'backdrop-tv' | 'bed-set' | 'apartemen' | 'meja-partisi';
  categoryLabel: string;
  image: string;
  gallery: string[];
  startingPrice: string;
  pricePerMeter: number;
  priceUnit: 'meter lari' | 'meter persegi' | 'paket';
  description: string;
  specs: {
    material: string;
    finishing: string;
    hardware: string;
    accessories: string[];
    waktuPengerjaan: string;
  };
  featured?: boolean;
}

export interface MaterialFeature {
  title: string;
  subtitle: string;
  description: string;
  advantages: string[];
  badge: string;
  image: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  avatarText: string;
  rating: number;
  relativeTime: string;
  reviewText: string;
  projectType: string;
  location: string;
  verified: boolean;
}

export interface CalculatorState {
  itemType: string;
  length: number; // in meters
  height?: number; // in meters for wardrobe / backdrop
  finishType: string;
  includeLed: boolean;
  includeTopTable: boolean; // for kitchen set
  includeDishRack: boolean;
}
