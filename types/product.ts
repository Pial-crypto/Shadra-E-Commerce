export interface Product {
  title: string;
  images: string[];
  description: string;
  category: string;
  price: number;
  oldPrice: number;
  stock: number;
  warranty?: string;
  isTrending?: boolean;
}