/*
  Warnings:

  - The primary key for the `Documento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `visitanteId` on the `Documento` table. All the data in the column will be lost.
  - The `id` column on the `Documento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `caminho` to the `Documento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_visitanteId_fkey";

-- AlterTable
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_pkey",
DROP COLUMN "visitanteId",
ADD COLUMN     "caminho" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Documento_pkey" PRIMARY KEY ("id");
