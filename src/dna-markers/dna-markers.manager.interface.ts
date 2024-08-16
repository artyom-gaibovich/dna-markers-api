import { dna_marker } from '@prisma/client';
import { CreateDnaMarkerDto } from './dto/create-dna-marker.dto';
import { UpdateDnaMarkerDto } from './dto/update-dna-marker.dto';

export interface DnaMarkerManagerInterface {
	create(data: CreateDnaMarkerDto): Promise<dna_marker>;
	update(data: UpdateDnaMarkerDto): Promise<dna_marker>;
	delete(id: number): Promise<dna_marker>;
}
