-- CreateTable
CREATE TABLE "DnaMarker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DnaMarker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DnaMarkerOption" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "markerId" INTEGER NOT NULL,

    CONSTRAINT "DnaMarkerOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DnaMarker_name_key" ON "DnaMarker"("name");

-- AddForeignKey
ALTER TABLE "DnaMarkerOption" ADD CONSTRAINT "DnaMarkerOption_markerId_fkey" FOREIGN KEY ("markerId") REFERENCES "DnaMarker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
