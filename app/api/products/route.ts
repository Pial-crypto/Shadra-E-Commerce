import { NextRequest, NextResponse } from "next/server";
import {prisma} from "../../../lib/prisma"
import {slugify} from "../../../lib/slugify"

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Returns all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Successfully fetched products
 *       500:
 *         description: Server error
 */

export async function GET() {
  try {
  const [products, categoryCount] = await Promise.all([
  prisma.product.findMany({
    // take: 20,
    // skip: 0,
  }),

  prisma.product.groupBy({
    by: ["category"],
    _count: {
      _all: true,
    },
  }),
]);


    return NextResponse.json({products,categoryCount});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     description: Creates a new product in the database.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Invalid product data
 *       409:
 *         description: Product with the same slug already exists
 *       500:
 *         description: Server error
 */

import { createProduct } from "@/lib/services/product.service";
import { createProductSchema, productSchema } from "@/schemas/product.schema";
import { Prisma } from "@/lib/generated/prisma/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = createProductSchema.safeParse(body);
    console.log(validatedData,"All the validated data")

    if (!validatedData.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const product = await createProduct(
      body
    );

    return NextResponse.json(product, {
      status: 201,
    });

  } catch (error) {
  console.error("Here is the error", error);

  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    return NextResponse.json(
      {
        error: "A product with this title already exists.",
      },
      { status: 409 }
    );
  }

  return NextResponse.json(
    {
      error: "Failed to create product",
    },
    { status: 500 }
  );
}
}

// export async function GET(_request: Request) {
//   // Do whatever you want
//   return new Response('Hello World!', {
//     status: 200,
//   });
// }