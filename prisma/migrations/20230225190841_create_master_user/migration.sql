-- CreateTable
CREATE TABLE "master_user" (
    "id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "master_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "master_user_user_key" ON "master_user"("user");
