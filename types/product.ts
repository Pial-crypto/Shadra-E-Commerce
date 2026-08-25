import { Category } from "@/lib/generated/prisma/enums";


export interface Product {
  id?:string
  title: string;
  images?: string[];
  description: string;
  category: Category;
  price: number;
  oldPrice: number;
  stock: number;
  warranty?: string;
  isTrending?: boolean;
}