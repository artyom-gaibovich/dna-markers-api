/*
  Warnings:

  - You are about to drop the `DnaMarker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DnaMarkerOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DnaMarkerOption" DROP CONSTRAINT "DnaMarkerOption_markerId_fkey";

-- DropTable
DROP TABLE "DnaMarker";

-- DropTable
DROP TABLE "DnaMarkerOption";

-- CreateTable
CREATE TABLE "dna_marker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "dna_marker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dna_marker_option" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "markerId" INTEGER NOT NULL,

    CONSTRAINT "dna_marker_option_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dna_marker_name_key" ON "dna_marker"("name");

-- AddForeignKey
ALTER TABLE "dna_marker_option" ADD CONSTRAINT "dna_marker_option_markerId_fkey" FOREIGN KEY ("markerId") REFERENCES "dna_marker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
