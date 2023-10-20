/*
  Warnings:

  - You are about to drop the column `profileimg` on the `users` table. All the data in the column will be lost.
  - Added the required column `profilepic` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "profileimg",
ADD COLUMN     "profilepic" TEXT NOT NULL;
