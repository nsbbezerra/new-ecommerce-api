-- DropForeignKey
ALTER TABLE "product_options" DROP CONSTRAINT "product_options_product_id_fkey";

-- AlterTable
ALTER TABLE "product_options" ALTER COLUMN "product_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "product_options" ADD CONSTRAINT "product_options_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
