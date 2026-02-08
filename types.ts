
export type EVType = 'Scooter' | 'Car' | 'Bike';

export interface EVVehicle {
  id: string;
  name: string;
  brand: string;
  brandLogo?: string;
  type: EVType;
  price: number;
  range: number; // in km
  topSpeed: number; // in km/h
  chargingTime: string;
  batteryCapacity: string;
  warranty: string;
  image: string;
  features: string[];
  emiStarting: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface Review {
  id: number;
  name: string;
  model: string;
  rating: number;
  comment: string;
  avatar?: string;
  mood: 'Comfortable' | 'Fast' | 'Value for Money' | 'Eco-friendly';
}

export interface BrandInfo {
  name: string;
  logo: string;
  story: string;
  trustScore: number; // 0-100
  warrantyInfo: string;
}

export interface MythBuster {
  myth: string;
  fact: string;
}
