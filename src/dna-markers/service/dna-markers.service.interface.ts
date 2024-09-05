import { DnaMarker } from '../../interfaces/dna-marker.interface';
import { CreateDnaMarkerDto } from '../dto/create-dna-marker.dto';
import { UpdateDnaMarkerDto } from '../dto/update-dna-marker.dto';

export interface DnaMarkersServiceInterface {
	findAll(): DnaMarker[];
	create(createDnaMarkerDto: CreateDnaMarkerDto): DnaMarker;
	update(id: number, updateDnaMarkerDto: UpdateDnaMarkerDto): DnaMarker;
	remove(id: number): DnaMarker[];
}
