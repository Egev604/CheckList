/*
  Warnings:

  - You are about to drop the column `stageId` on the `Passage` table. All the data in the column will be lost.
  - Added the required column `passageId` to the `Stage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Passage" DROP CONSTRAINT "Passage_stageId_fkey";

-- AlterTable
ALTER TABLE "Passage" DROP COLUMN "stageId";

-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "passageId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_passageId_fkey" FOREIGN KEY ("passageId") REFERENCES "Passage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
