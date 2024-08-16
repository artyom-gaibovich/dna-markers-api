import { dna_marker_option } from '@prisma/client';
import { CreateDnaMarkerOptionDto } from './dto/create-dna-marker-option.dto';
import { UpdateDnaMarkerOptionDto } from './dto/update-dna-marker-option.dto';

export interface DnaMarkerOptionsManagerInterface {
	create(data: CreateDnaMarkerOptionDto): Promise<dna_marker_option>;
	update(data: UpdateDnaMarkerOptionDto): Promise<dna_marker_option>;
	delete(id: number): Promise<dna_marker_option>;
}
