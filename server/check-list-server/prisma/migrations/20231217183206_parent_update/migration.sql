/*
  Warnings:

  - You are about to drop the column `child` on the `Stage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stage" DROP CONSTRAINT "Stage_child_fkey";

-- AlterTable
ALTER TABLE "Stage" DROP COLUMN "child",
ADD COLUMN     "parentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Stage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
