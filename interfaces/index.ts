// interfaces/index.ts
export interface PropertyProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  type: string; // e.g., 'Villa', 'Room', etc.
  amenities?: string[];
}
