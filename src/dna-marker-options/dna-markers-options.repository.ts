import { dna_marker_option } from '@prisma/client';

export interface DnaMarkerOptionsRepositoryInterface {
	findById(id: number): Promise<dna_marker_option | null>;

	findAll(markerId: number): Promise<dna_marker_option[]>;
}
