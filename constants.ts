
import { EVVehicle, Review, BrandInfo, MythBuster } from './types';

export const VEHICLES: EVVehicle[] = [
  {
    id: 'nij-accelero',
    name: 'Accelero R1',
    brand: 'NIJ',
    type: 'Scooter',
    price: 85000,
    range: 120,
    topSpeed: 65,
    chargingTime: '4-5 Hours',
    batteryCapacity: '2.4 kWh',
    warranty: '3 Years',
    image: 'https://nijev.in/wp-content/uploads/2023/02/web-white-xpro-min-e1675596953371.png',
    features: ['Lightweight', 'Anti-theft', 'Digital Cluster'],
    emiStarting: 2200
  },
  {
    id: 'revamp-rm-25',
    name: 'RM 25',
    brand: 'Revo',
    type: 'Scooter',
    price: 75000,
    range: 70,
    topSpeed: 25,
    chargingTime: '3.5 Hours',
    batteryCapacity: '1.8 kWh',
    warranty: '2 Years',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/470240202/QM/YB/HU/77407889/whatsapp-image-2024-12-03-at-5-19-33-pm-500x500.jpeg',
    features: ['No License Req.', 'Portable Battery', 'Smart Connectivity'],
    emiStarting: 1800
  },
  {
    id: 'astar-leo',
    name: 'Leo Performance',
    brand: 'A-star',
    type: 'Scooter',
    price: 110000,
    range: 150,
    topSpeed: 80,
    chargingTime: '5 Hours',
    batteryCapacity: '3.2 kWh',
    warranty: '5 Years',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/12/571360589/VH/BB/OH/13568849/whatsapp-image-2025-12-27-at-4-44-03-pm-1-1000x1000.jpeg',
    features: ['High Torque', 'Premium Finish', 'CBS Braking'],
    emiStarting: 2800
  },
  {
    id: 'eashwa-standard',
    name: 'E-Ashwa Standard',
    brand: 'E-ashwa',
    type: 'Scooter',
    price: 95000,
    range: 100,
    topSpeed: 70,
    chargingTime: '4 Hours',
    batteryCapacity: '2.8 kWh',
    warranty: '3 Years',
    image: 'https://eashwa.com/wp-content/uploads/2025/05/DSC_1431edit-1024x681.jpg',
    features: ['Rugged Build', 'Large Storage', 'Reverse Mode'],
    emiStarting: 2100
  }
];

export const BRANDS: BrandInfo[] = [
  {
    name: 'NIJ',
    logo: '',
    story: 'Pioneering high-quality electric two-wheelers with a focus on durability and Indian road conditions.',
    trustScore: 96,
    warrantyInfo: 'Proprietary i-Drive motor tech for superior urban hill climbing.'
  },
  {
    name: 'Revo',
    logo: '',
    story: 'Innovative modular utility platforms designed to empower micro-entrepreneurs and commuters alike.',
    trustScore: 94,
    warrantyInfo: 'Modular frame design allowing 50+ accessory combinations for business.'
  },
  {
    name: 'A-star',
    logo: '',
    story: 'Specializing in premium aesthetics and high-performance scooters for the modern urban rider.',
    trustScore: 92,
    warrantyInfo: 'Aerodynamic carbon-inspired casing for maximum energy efficiency.'
  },
  {
    name: 'E-ashwa',
    logo: '',
    story: 'One of India\'s leading manufacturers of a wide range of battery-operated vehicles with a massive service network.',
    trustScore: 98,
    warrantyInfo: 'Smart-BMS 3.0 with real-time health monitoring and heat dissipation.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Vinay Kumar",
    model: "NIJ Accelero",
    rating: 5,
    comment: "The performance is top-notch. I easily get 100km+ on a full charge in Jabalpur city traffic. Great buying experience with Vikas ji.",
    avatar: "https://i.pravatar.cc/150?u=vinay",
    mood: 'Fast'
  },
  {
    id: 2,
    name: "Anjali Singh",
    model: "Revo RM 25",
    rating: 5,
    comment: "Best investment! No more petrol queues. It's so light and easy to ride to work every day.",
    avatar: "https://i.pravatar.cc/150?u=anjali",
    mood: 'Comfortable'
  },
  {
    id: 3,
    name: "Deepak Patel",
    model: "A-star Leo",
    rating: 4,
    comment: "Build quality is amazing. Angel Marketing handled the registration perfectly and the showroom staff is very helpful.",
    avatar: "https://i.pravatar.cc/150?u=deepak",
    mood: 'Value for Money'
  }
];

export const MYTH_BUSTERS: MythBuster[] = [
  {
    myth: "EVs are slow and lack power.",
    fact: "Electric motors provide instant torque, making them faster in short bursts than most petrol scooters."
  },
  {
    myth: "EV batteries die in 2 years.",
    fact: "Modern Li-ion batteries are designed to last 7-10 years with over 80% health if maintained correctly."
  },
  {
    myth: "It takes all day to charge an EV.",
    fact: "Fast chargers can give you 50-80 km of range in just 15-30 minutes."
  }
];
