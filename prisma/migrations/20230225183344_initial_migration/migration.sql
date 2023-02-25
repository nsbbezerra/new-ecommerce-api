-- CreateEnum
CREATE TYPE "FreightPriority" AS ENUM ('FAST', 'NORMAL');

-- CreateEnum
CREATE TYPE "OptionsType" AS ENUM ('STOCK', 'WITHOUT');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PAYMENT', 'PROCCESSING', 'PRODUCTION', 'PACKING', 'SHIPPING', 'FINISH');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('WAITING', 'PAID_OUT', 'REFUSED');

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "comp" TEXT,
    "district" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "thumbnail" TEXT,
    "thumbnail_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collections" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "short_description" TEXT,
    "thumbnail" TEXT,
    "thumbnail_id" TEXT,
    "description" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "request" INTEGER NOT NULL DEFAULT 0,
    "promotional" BOOLEAN NOT NULL DEFAULT false,
    "promo_rate" INTEGER NOT NULL DEFAULT 0,
    "shipping_info" JSONB NOT NULL,
    "freight_priority" "FreightPriority" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category_id" TEXT NOT NULL,
    "collection_id" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_options" (
    "id" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" "OptionsType" NOT NULL,
    "stock" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "product_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "shipping_value" DECIMAL(10,2) NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "order_status" "OrderStatus" NOT NULL DEFAULT 'PAYMENT',
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'WAITING',
    "checkout_id" TEXT,
    "payment_id" TEXT,
    "shipping_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_document_key" ON "clients"("document");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "collections_name_key" ON "collections"("name");

-- CreateIndex
CREATE UNIQUE INDEX "collections_slug_key" ON "collections"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collections" ADD CONSTRAINT "collections_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "collections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_options" ADD CONSTRAINT "product_options_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
