import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { DnaMarkerOptionsService } from './dna-marker-options.service';
import { CreateDnaMarkerOptionDto } from './dto/create-dna-marker-option.dto';
import { UpdateDnaMarkerOptionDto } from './dto/update-dna-marker-option.dto';
import { DnaMarkerOption } from '../interfaces/dna-marker-options.interface';

@Controller('dna-markers/:markerId/options')
export class DnaMarkerOptionsController {
	private readonly logger = new Logger(DnaMarkerOptionsController.name);

	constructor(private readonly dnaMarkerOptionsService: DnaMarkerOptionsService) {}

	@Get()
	findAll(@Param('markerId') markerId: string): DnaMarkerOption[] {
		this.logger.log(`Fetching all options for DNA marker with id: ${markerId}`);
		return this.dnaMarkerOptionsService.findAll(+markerId);
	}

	@Post()
	create(
		@Param('markerId') markerId: string,
		@Body() createDnaMarkerOptionDto: CreateDnaMarkerOptionDto,
	): DnaMarkerOption {
		this.logger.log(`Creating new option for DNA marker with id: ${markerId}`);
		return this.dnaMarkerOptionsService.create(+markerId, createDnaMarkerOptionDto);
	}

	@Put(':optionId')
	update(
		@Param('markerId') markerId: string,
		@Param('optionId') optionId: string,
		@Body() updateDnaMarkerOptionDto: UpdateDnaMarkerOptionDto,
	): DnaMarkerOption {
		this.logger.log(`Updating option with id: ${optionId} for DNA marker with id: ${markerId}`);
		return this.dnaMarkerOptionsService.update(+markerId, +optionId, updateDnaMarkerOptionDto);
	}

	@Delete(':optionId')
	remove(@Param('markerId') markerId: string, @Param('optionId') optionId: string): DnaMarkerOption[] {
		this.logger.log(`Deleting option with id: ${optionId} for DNA marker with id: ${markerId}`);
		return this.dnaMarkerOptionsService.remove(+markerId, +optionId);
	}
}
