/*
  Warnings:

  - You are about to drop the column `badge` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isFeatured` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `specifications` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "badge",
DROP COLUMN "discount",
DROP COLUMN "isFeatured",
DROP COLUMN "shortDescription",
DROP COLUMN "specifications",
ADD COLUMN     "isTrending" BOOLEAN NOT NULL DEFAULT false;
