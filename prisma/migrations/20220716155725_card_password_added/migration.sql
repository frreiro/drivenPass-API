/*
  Warnings:

  - You are about to drop the column `cardHolderNumber` on the `cards` table. All the data in the column will be lost.
  - Added the required column `cardHolderName` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "cardHolderNumber",
ADD COLUMN     "cardHolderName" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
