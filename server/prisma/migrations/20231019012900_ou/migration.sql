/*
  Warnings:

  - You are about to drop the column `pass` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `pic` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the `search_history` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" DROP COLUMN "pass",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "pic",
ADD COLUMN     "img" TEXT[];

-- DropTable
DROP TABLE "search_history";

-- CreateTable
CREATE TABLE "search" (
    "id" SERIAL NOT NULL,
    "search_id" VARCHAR(255),
    "user_id" VARCHAR(255),

    CONSTRAINT "search_pkey" PRIMARY KEY ("id")
);
