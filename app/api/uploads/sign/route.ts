import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { randomUUID } from "crypto";

const BUCKET = "Products";

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];




const MAX_FILE_SIZE = 5 * 1024 * 1024;
/**
 * @swagger
 * /api/uploads/sign:
 *   post:
 *     summary: Generate signed upload URLs for product images
 *     description: |
 *       Validates product image metadata and generates Supabase signed upload
 *       URLs/tokens for client-side uploads. This endpoint does not upload the
 *       image files itself.
 *
 *       The endpoint accepts up to 10 images. Each image must be JPEG, PNG,
 *       or WebP and must not exceed 5MB.
 *     tags:
 *       - Product Images
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - files
 *             properties:
 *               files:
 *                 type: array
 *                 minItems: 1
 *                 maxItems: 10
 *                 description: Metadata of the images that will be uploaded.
 *                 items:
 *                   type: object
 *                   required:
 *                     - name
 *                     - type
 *                     - size
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: sony-headphone.webp
 *                     type:
 *                       type: string
 *                       enum:
 *                         - image/jpeg
 *                         - image/png
 *                         - image/webp
 *                       example: image/webp
 *                     size:
 *                       type: integer
 *                       format: int64
 *                       description: File size in bytes. Maximum 5242880 bytes (5MB).
 *                       example: 245760
 *
 *     responses:
 *       200:
 *         description: Signed upload URLs generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - uploads
 *               properties:
 *                 uploads:
 *                   type: array
 *                   description: Signed upload information for each image.
 *                   items:
 *                     type: object
 *                     required:
 *                       - path
 *                       - token
 *                     properties:
 *                       path:
 *                         type: string
 *                         description: Storage path where the image will be uploaded.
 *                         example: products/550e8400-e29b-41d4-a716-446655440000.webp
 *                       token:
 *                         type: string
 *                         description: Supabase signed upload token.
 *                         example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *
 *       400:
 *         description: Invalid request or unsupported image
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               noFiles:
 *                 summary: No files provided
 *                 value:
 *                   error: No files provided
 *               tooManyFiles:
 *                 summary: Too many images
 *                 value:
 *                   error: Maximum 10 images allowed
 *               invalidType:
 *                 summary: Unsupported image type
 *                 value:
 *                   error: "Unsupported file type: application/gif"
 *               fileTooLarge:
 *                 summary: File exceeds size limit
 *                 value:
 *                   error: "sony-headphone.webp exceeds the 5MB limit"
 *
 *       500:
 *         description: Failed to generate signed upload URLs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Failed to prepare image uploads
 */

export async function POST(request: NextRequest) {
  console.log( process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY)
  try {
    const body = await request.json();

    const files = body.files;
    console.log("*****************************************")
    console.log("files",files)

    console.log( process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.SUPABASE_SERVICE_ROLE_KEY)

    if (!Array.isArray(files) || files.length === 0) {
      return NextResponse.json(
        { error: "No files provided" },
        { status: 400 }
      );
    }

    if (files.length > 10) {
      return NextResponse.json(
        { error: "Maximum 10 images allowed" },
        { status: 400 }
      );
    }

   const uploads = [];

    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          {
            error: `Unsupported file type: ${file.type}`,
          },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            error: `${file.name} exceeds the 5MB limit`,
          },
          { status: 400 }
        );
      }

      const extension = file.name
        .split(".")
        .pop()
        ?.toLowerCase();

      const path = `products/${randomUUID()}.${extension}`;

      const { data, error } =
        await supabaseAdmin.storage
          .from(BUCKET)
          .createSignedUploadUrl(path);

      if (error) {
        console.log("Shauar vanga error",error)
        throw new Error(error.message);
      }

      uploads.push({
        path,
        token: data.token,
      });
    }

    return NextResponse.json({
     uploads,
    });
  } catch (error) {
    console.error("SIGN UPLOAD ERROR:", error);

    return NextResponse.json(
      { error: "Failed to prepare image uploads" },
      { status: 500 }
    );
  }

}