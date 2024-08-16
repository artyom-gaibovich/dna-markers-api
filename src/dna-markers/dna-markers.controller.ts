import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { DnaMarkersService } from './dna-markers.service';
import { CreateDnaMarkerDto } from './dto/create-dna-marker.dto';
import { UpdateDnaMarkerDto } from './dto/update-dna-marker.dto';
import { DnaMarker } from '../interfaces/dna-marker.interface';

@Controller('dna-markers')
export class DnaMarkersController {
	private readonly logger = new Logger(DnaMarkersController.name);

	constructor(private readonly dnaMarkersService: DnaMarkersService) {}

	@Get()
	findAll(): DnaMarker[] {
		this.logger.log('Fetching all DNA markers');
		return this.dnaMarkersService.findAll();
	}

	@Post()
	create(@Body() createDnaMarkerDto: CreateDnaMarkerDto): DnaMarker {
		this.logger.log(`Creating new DNA marker with name: ${createDnaMarkerDto.name}`);
		return this.dnaMarkersService.create(createDnaMarkerDto);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() updateDnaMarkerDto: UpdateDnaMarkerDto): DnaMarker {
		this.logger.log(`Updating DNA marker with id: ${id}`);
		return this.dnaMarkersService.update(+id, updateDnaMarkerDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string): DnaMarker[] {
		this.logger.log(`Deleting DNA marker with id: ${id}`);
		return this.dnaMarkersService.remove(+id);
	}
}
