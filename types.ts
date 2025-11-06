export type Page = 'home' | 'about' | 'shop';

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  videoUrl: string;
}