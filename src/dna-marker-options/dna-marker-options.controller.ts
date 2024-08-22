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
import { DnaMarkerOptionsService } from './service/dna-marker-options.service';
import { CreateDnaMarkerOptionDto } from './dto/create-dna-marker-option.dto';
import { UpdateDnaMarkerOptionDto } from './dto/update-dna-marker-option.dto';
import { dna_marker_option } from '@prisma/client';
import { JwtAuthGuard } from './auth/guards/jwt-guard';
import { DIConstants } from '../DIConstants';

@Controller('dna-markers/:markerId/options')
export class DnaMarkerOptionsController {
	constructor(
		@Inject(DIConstants.DnaMarkerOptionsService)
		private readonly dnaMarkerOptionsService: DnaMarkerOptionsService,
	) {}

	@UseGuards(JwtAuthGuard)
	@Get()
	async findAll(@Param('markerId', ParseIntPipe) markerId: number): Promise<dna_marker_option[]> {
		return this.dnaMarkerOptionsService.findAll(markerId);
	}

	@UseGuards(JwtAuthGuard)
	@Get(':optionId')
	async findById(@Param('optionId', ParseIntPipe) optionId: number): Promise<dna_marker_option> {
		const option = await this.dnaMarkerOptionsService.findById(optionId);
		if (!option) {
			throw new NotFoundException(`DNA marker option with id ${optionId} not found`);
		}
		return option;
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(
		@Param('markerId', ParseIntPipe) markerId: number,
		@Body() createDnaMarkerOptionDto: CreateDnaMarkerOptionDto,
	): Promise<dna_marker_option> {
		return this.dnaMarkerOptionsService.create({ markerId, ...createDnaMarkerOptionDto });
	}

	@UseGuards(JwtAuthGuard)
	@Put(':optionId')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('markerId', ParseIntPipe) markerId: number,
		@Param('optionId', ParseIntPipe) optionId: number,
		@Body() updateDnaMarkerOptionDto: UpdateDnaMarkerOptionDto,
	): Promise<dna_marker_option> {
		return this.dnaMarkerOptionsService.update({
			id: optionId,
			markerId,
			...updateDnaMarkerOptionDto,
		});
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':optionId')
	async remove(
		@Param('markerId', ParseIntPipe) markerId: number,
		@Param('optionId', ParseIntPipe) optionId: number,
	): Promise<dna_marker_option> {
		return this.dnaMarkerOptionsService.delete(optionId);
	}
}
