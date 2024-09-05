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
	UseGuards,
	Inject,
} from '@nestjs/common';
import { DnaMarkersService } from './service/dna-markers.service';
import { CreateDnaMarkerDto } from './dto/create-dna-marker.dto';
import { UpdateDnaMarkerDto } from './dto/update-dna-marker.dto';
import { dna_marker } from '@prisma/client';
import { JwtAuthGuard } from '../dna-marker-options/auth/guards/jwt-guard';
import { DIConstants } from '../DIConstants';
import { DnaMarkersServiceInterface } from './service/dna-markers.service.interface';

@Controller('dna-markers')
export class DnaMarkersController {
	constructor(
		@Inject(DIConstants.DnaMarkersService) private readonly dnaMarkersService: DnaMarkersServiceInterface,
	) {}

	@UseGuards(JwtAuthGuard)
	@Get()
	async findAll(): Promise<dna_marker[]> {
		return this.dnaMarkersService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get('full')
	async findAllFull(): Promise<{
		marker_id: number;
		marker_name: string;
		marker_title: string;
	}> {
		return await this.dnaMarkersService.findAllFull();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async findById(@Param('id', ParseIntPipe) id: number): Promise<dna_marker> {
		const marker = await this.dnaMarkersService.findById(id);
		if (!marker) {
			throw new NotFoundException(`DNA marker with id ${id} not found`);
		}
		return marker;
	}

	@UseGuards(JwtAuthGuard)
	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createDnaMarkerDto: CreateDnaMarkerDto): Promise<dna_marker> {
		return this.dnaMarkersService.create(createDnaMarkerDto);
	}

	@UseGuards(JwtAuthGuard)
	@Put(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateDnaMarkerDto: UpdateDnaMarkerDto,
	): Promise<dna_marker> {
		return this.dnaMarkersService.update({ id, ...updateDnaMarkerDto });
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async remove(@Param('id', ParseIntPipe) id: number): Promise<dna_marker> {
		return this.dnaMarkersService.delete(id);
	}
}
