import { Inject, Injectable } from '@nestjs/common';
import { DIConstants } from '../../DIConstants';
import { dna_marker } from '@prisma/client';
import { CreateDnaMarkerDto } from '../dto/create-dna-marker.dto';
import { UpdateDnaMarkerDto } from '../dto/update-dna-marker.dto';
import { DnaMarkerManagerInterface } from '../manager/dna-markers.manager.interface';
import { DnaMarkerRepositoryInterface } from '../repository/dna-markers.repository.interface';

@Injectable()
export class DnaMarkersService {
	constructor(
		@Inject(DIConstants.DnaMarkerRepository)
		private readonly dnaMarkerRepository: DnaMarkerRepositoryInterface,
		@Inject(DIConstants.DnaMarkerManager)
		private readonly dnaMarkerManager: DnaMarkerManagerInterface,
	) {}

	async findAll(): Promise<dna_marker[]> {
		//TODO нужно крч здесь написать LEFT JOIN который вытащит все данные с наименованиями.
		return this.dnaMarkerRepository.findAll();
	}

	async findById(id: number): Promise<dna_marker | null> {
		return this.dnaMarkerRepository.findById(id);
	}

	async create(data: CreateDnaMarkerDto): Promise<dna_marker> {
		return this.dnaMarkerManager.create(data);
	}

	async update(data: UpdateDnaMarkerDto): Promise<dna_marker> {
		return this.dnaMarkerManager.update(data);
	}

	async delete(id: number): Promise<dna_marker> {
		return this.dnaMarkerManager.delete(id);
	}

	async findAllFull(): Promise<{
		marker_id: number;
		marker_name: string;
		marker_title: string;
	}> {
		return await this.dnaMarkerRepository.findAllFull();
	}
}
