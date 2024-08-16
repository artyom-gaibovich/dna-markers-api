import { dna_marker } from '@prisma/client';

export interface DnaMarkerRepositoryInterface {
	findById(id: number): Promise<dna_marker | null>;
	findAll(): Promise<dna_marker[]>;
}
