-- DropForeignKey
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_userId_fkey";

-- DropForeignKey
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_visitanteId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "documentos" TEXT[];
