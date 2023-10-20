/*
  Warnings:

  - You are about to drop the column `profilepic` on the `users` table. All the data in the column will be lost.
  - Added the required column `heigh` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileimg` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weigh` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "profilepic",
ADD COLUMN     "experience" TEXT,
ADD COLUMN     "heigh" INTEGER NOT NULL,
ADD COLUMN     "profileimg" TEXT NOT NULL,
ADD COLUMN     "weigh" INTEGER NOT NULL;
