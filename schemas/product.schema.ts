import { z } from "zod";

/* ==========================================================
                  FRONTEND PRODUCT FORM
========================================================== */

export const productSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Product title is required."),

  category: z
    .string()
    .min(1, "Please select a category."),

  price: z
    .string()
    .min(1, "Product price is required.")
    .refine(
      (value) => Number(value) > 0,
      "Price must be greater than 0."
    ),

  stock: z
    .string()
    .min(1, "Stock is required.")
    .refine(
      (value) => Number(value) >= 0,
      "Stock cannot be negative."
    ),

  oldPrice: z
    .string()
    .min(1, "Old price is required.")
    .refine(
      (value) => Number(value) > 0,
      "Old price must be greater than 0."
    ),

  warranty: z
    .string()
    .trim()
    .optional(),

  description: z
    .string()
    .trim()
    .min(1, "Product description is required."),

  imageFiles: z
    .array(z.instanceof(File))
    .min(1, "At least one product image is required."),

  isTrending: z.boolean(),
});

export type ProductFormData =
  z.infer<typeof productSchema>;


/* ==========================================================
                    BACKEND PRODUCT INPUT
========================================================== */

export const createProductSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Product title is required."),

  category: z
    .string()
    .trim()
    .min(1, "Category is required."),

  price: z
    .number()
    .positive("Price must be greater than 0."),

  stock: z
    .number()
    .int("Stock must be a whole number.")
    .nonnegative("Stock cannot be negative."),

  oldPrice: z
    .number()
    .positive("Old price must be greater than 0."),

  warranty: z
    .string()
    .trim()
    .optional(),

  description: z
    .string()
    .trim()
    .min(1, "Product description is required."),

  images: z
    .array(z.string())
    .min(1, "At least one product image is required."),

  isTrending: z.boolean(),
});

export type CreateProductData =
  z.infer<typeof createProductSchema>;