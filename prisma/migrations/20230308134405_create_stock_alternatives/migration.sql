-- CreateEnum
CREATE TYPE "StockType" AS ENUM ('OFF', 'UNITY', 'CUSTOM');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "stock" INTEGER,
ADD COLUMN     "stock_type" "StockType";
