import { dna_marker } from '@prisma/client';

export interface DnaMarkerRepositoryInterface {
	findById(id: number): Promise<dna_marker | null>;

	findAll(): Promise<dna_marker[]>;

	findAllFull(): Promise<{
		marker_id: number;
		marker_name: string;
		marker_title: string;
	}>;
}
