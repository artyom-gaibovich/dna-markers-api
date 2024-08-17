import { CreateDnaMarkerOptionDto } from '../dto/create-dna-marker-option.dto';
import { DnaMarkerOption } from '../../interfaces/dna-marker-options.interface';
import { UpdateDnaMarkerOptionDto } from '../dto/update-dna-marker-option.dto';

export interface DnaMarkerOptionsServiceInterface {
	findAll(markerId: number): DnaMarkerOption[];

	create(markerId: number, createDnaMarkerOptionDto: CreateDnaMarkerOptionDto): DnaMarkerOption;

	update(
		markerId: number,
		optionId: number,
		updateDnaMarkerOptionDto: UpdateDnaMarkerOptionDto,
	): DnaMarkerOption;

	remove(markerId: number, optionId: number): DnaMarkerOption[];
}
