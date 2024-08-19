import { Injectable, Inject } from '@nestjs/common';
import { DIConstants } from '../../DIConstants';
import { dna_marker_option } from '@prisma/client';
import { CreateDnaMarkerOptionDto } from '../dto/create-dna-marker-option.dto';
import { UpdateDnaMarkerOptionDto } from '../dto/update-dna-marker-option.dto';
import { DnaMarkerOptionsManagerInterface } from '../manager/dna-marker-options.manager.interface';
import { DnaMarkerOptionsRepositoryInterface } from '../repository/dna-marker-options.repository.interface';

@Injectable()
export class DnaMarkerOptionsService {
	constructor(
		@Inject(DIConstants.DnaMarkerOptionsRepository) private readonly dnaMarkerOptionsRepository: DnaMarkerOptionsRepositoryInterface,
		@Inject(DIConstants.DnaMarkerOptionsManager) private readonly dnaMarkerOptionsManager: DnaMarkerOptionsManagerInterface,
	) {}

	async findAll(markerId: number): Promise<dna_marker_option[]> {
		return this.dnaMarkerOptionsRepository.findAll(markerId);
	}

	async findById(id: number): Promise<dna_marker_option | null> {
		return this.dnaMarkerOptionsRepository.findById(id);
	}

	async create(data: CreateDnaMarkerOptionDto): Promise<dna_marker_option> {
		return this.dnaMarkerOptionsManager.create(data);
	}

	async update(data: UpdateDnaMarkerOptionDto): Promise<dna_marker_option> {
		return this.dnaMarkerOptionsManager.update(data);
	}

	async delete(id: number): Promise<dna_marker_option> {
		return this.dnaMarkerOptionsManager.delete(id);
	}
}
