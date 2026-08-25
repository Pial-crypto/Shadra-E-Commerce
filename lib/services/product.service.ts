import { prisma } from "@/lib/prisma";
import { slugify } from "../slugify";
import { Product } from "@/types/product";
import { Category } from "../generated/prisma/enums";


export async function createProduct(data: Product) {
  const slug = slugify(data.title)


  // const existingProduct = await prisma.product.findUnique({
  //   where: {
  //     slug,
  //   },
  // });

  // if (existingProduct) {
  //   throw new Error("A product with this title already exists");
  // }
//console.log("This is the new product", data)
  const product = await prisma.product.create({
    data: {
      title: data.title,
      slug,
      images: data.images,
      description: data.description,
      category: data.category.trim().replace(/\s+/g, "_").toUpperCase() as Category,
      price: data.price,
      oldPrice: data.oldPrice ?? null,
      stock: data.stock ?? 0,
      warranty: data.warranty ?? null,
      isTrending: data.isTrending ?? false,
    },
  });

  return product;
}