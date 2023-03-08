/*
  Warnings:

  - You are about to drop the column `type` on the `product_options` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_options" DROP COLUMN "type";

-- DropEnum
DROP TYPE "OptionsType";
