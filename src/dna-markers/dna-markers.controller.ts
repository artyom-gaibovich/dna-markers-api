import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Param,
	Body,
	UsePipes,
	ValidationPipe,
	ParseIntPipe,
	NotFoundException,
} from '@nestjs/common';
import { DnaMarkersService } from './service/dna-markers.service';
import { CreateDnaMarkerDto } from './dto/create-dna-marker.dto';
import { UpdateDnaMarkerDto } from './dto/update-dna-marker.dto';
import { dna_marker } from '@prisma/client';

@Controller('dna-markers')
export class DnaMarkersController {
	constructor(private readonly dnaMarkersService: DnaMarkersService) {}

	@Get()
	async findAll(): Promise<dna_marker[]> {
		return this.dnaMarkersService.findAll();
	}

	@Get(':id')
	async findById(@Param('id', ParseIntPipe) id: number): Promise<dna_marker> {
		const marker = await this.dnaMarkersService.findById(id);
		if (!marker) {
			throw new NotFoundException(`DNA marker with id ${id} not found`);
		}
		return marker;
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createDnaMarkerDto: CreateDnaMarkerDto): Promise<dna_marker> {
		return this.dnaMarkersService.create(createDnaMarkerDto);
	}

	@Put(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateDnaMarkerDto: UpdateDnaMarkerDto,
	): Promise<dna_marker> {
		return this.dnaMarkersService.update({ id, ...updateDnaMarkerDto });
	}

	@Delete(':id')
	async remove(@Param('id', ParseIntPipe) id: number): Promise<dna_marker> {
		return this.dnaMarkersService.delete(id);
	}
}
