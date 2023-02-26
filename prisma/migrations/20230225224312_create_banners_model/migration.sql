/*
  Warnings:

  - You are about to drop the column `thumbnail_id` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail_id` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "thumbnail_id";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "thumbnail_id";

-- CreateTable
CREATE TABLE "banners" (
    "id" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);
