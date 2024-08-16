import { Injectable, Logger } from '@nestjs/common';
import { CreateDnaMarkerOptionDto } from './dto/create-dna-marker-option.dto';
import { UpdateDnaMarkerOptionDto } from './dto/update-dna-marker-option.dto';
import { DnaMarkerOptionsServiceInterface } from './dna-marker-options.service.interface';
import { DnaMarkerOption } from '../interfaces/dna-marker-options.interface';

@Injectable()
export class DnaMarkerOptionsService implements DnaMarkerOptionsServiceInterface {
	private readonly logger = new Logger(DnaMarkerOptionsService.name);
	private dnaMarkerOptions: DnaMarkerOption[] = [];

	findAll(markerId: number): DnaMarkerOption[] {
		this.logger.log(`Fetching all options for DNA marker with id: ${markerId}`);
		return this.dnaMarkerOptions.filter((option) => option.markerId === markerId);
	}

	create(markerId: number, createDnaMarkerOptionDto: CreateDnaMarkerOptionDto): DnaMarkerOption {
		const newOption: DnaMarkerOption = {
			id: Date.now(),
			markerId,
			...createDnaMarkerOptionDto,
		};
		this.dnaMarkerOptions.push(newOption);
		this.logger.log(`DNA marker option created: ${JSON.stringify(newOption)}`);
		return newOption;
	}

	update(
		markerId: number,
		optionId: number,
		updateDnaMarkerOptionDto: UpdateDnaMarkerOptionDto,
	): DnaMarkerOption {
		const index = this.dnaMarkerOptions.findIndex(
			(option) => option.markerId === markerId && option.id === optionId,
		);
		this.dnaMarkerOptions[index] = { ...this.dnaMarkerOptions[index], ...updateDnaMarkerOptionDto };
		this.logger.log(`DNA marker option updated: ${JSON.stringify(this.dnaMarkerOptions[index])}`);
		return this.dnaMarkerOptions[index];
	}

	remove(markerId: number, optionId: number): DnaMarkerOption[] {
		const index = this.dnaMarkerOptions.findIndex(
			(option) => option.markerId === markerId && option.id === optionId,
		);
		const removedOption = this.dnaMarkerOptions.splice(index, 1);
		this.logger.log(`DNA marker option removed: ${JSON.stringify(removedOption)}`);
		return removedOption;
	}
}
