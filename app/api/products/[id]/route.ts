import { NextRequest, NextResponse } from "next/server";

import { createProductSchema } from "@/schemas/product.schema";
import { Prisma } from "@/lib/generated/prisma/client";
import { deleteProduct, updateProduct } from "@/lib/services/product.service";


/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Update a product
 *     description: Updates an existing product by ID
 *     tags:
 *       - Products
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Sony WH-1000XM5
 *
 *               category:
 *                 type: string
 *                 example: Audio
 *
 *               price:
 *                 type: number
 *                 example: 29990
 *
 *               stock:
 *                 type: integer
 *                 example: 25
 *
 *               oldPrice:
 *                 type: number
 *                 example: 34990
 *
 *               warranty:
 *                 type: string
 *                 example: 12 Months
 *
 *               description:
 *                 type: string
 *                 example: Premium wireless noise-cancelling headphones.
 *
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - products/image1.png
 *                   - products/image2.png
 *
 *               isTrending:
 *                 type: boolean
 *                 example: true
 *
 *     responses:
 *       200:
 *         description: Product updated successfully
 *
 *       400:
 *         description: Invalid product data
 *
 *       404:
 *         description: Product not found
 *
 *       409:
 *         description: Product with the same title already exists
 *
 *       500:
 *         description: Server error
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await params;

    const body = await request.json();
         const result = createProductSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    const product=await updateProduct(id,body)
  
    console.log("This is the updated prodcut", product)


   

    return NextResponse.json(product, {
      status: 200,
    });

  } catch (error) {

    console.error("Failed to update product:", error);


    // ==========================================================
    //                 PRODUCT NOT FOUND
    // ==========================================================

    if (
      error instanceof Prisma.PrismaClientKnownRequestError
      && error.code === "P2025"
    ) {
      return NextResponse.json(
        {
          error: "Product not found",
        },
        { status: 404 }
      );
    }


    // ==========================================================
    //                 UNIQUE CONSTRAINT
    // ==========================================================

    if (
      error instanceof Prisma.PrismaClientKnownRequestError
      && error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          error: "A product with this title already exists",
        },
        { status: 409 }
      );
    }


    // ==========================================================
    //                     SERVER ERROR
    // ==========================================================

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to update product",
      },
      { status: 500 }
    );
  }
}



/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Deletes an existing product by ID
 *     tags:
 *       - Products
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *
 *       404:
 *         description: Product not found
 *
 *       500:
 *         description: Server error
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const product = await deleteProduct(id);

    return NextResponse.json(
      {
        message: "Product deleted successfully",
        product,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete product:", error);

    // ==========================================================
    //                 PRODUCT NOT FOUND
    // ==========================================================

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        {
          error: "Product not found",
        },
        { status: 404 }
      );
    }

    // ==========================================================
    //                     SERVER ERROR
    // ==========================================================

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to delete product",
      },
      { status: 500 }
    );
  }
}

