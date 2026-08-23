import { prisma } from "@/lib/prisma";
import { slugify } from "../slugify";
import { Product } from "@/types/product";


export async function createProduct(data: Product) {
  const slug = slugify(data.title)


  const existingProduct = await prisma.product.findUnique({
    where: {
      slug,
    },
  });

  if (existingProduct) {
    throw new Error("A product with this title already exists");
  }

  const product = await prisma.product.create({
    data: {
      title: data.title,
      slug,
      images: data.images,
      description: data.description,
      category: data.category as any,
      price: data.price,
      oldPrice: data.oldPrice ?? null,
      stock: data.stock ?? 0,
      warranty: data.warranty ?? null,
      isTrending: data.isTrending ?? false,
    },
  });

  return product;
}