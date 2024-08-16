import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { dna_marker_option } from '@prisma/client';
import { CreateDnaMarkerOptionDto } from './dto/create-dna-marker-option.dto';
import { UpdateDnaMarkerOptionDto } from './dto/update-dna-marker-option.dto';

@Injectable()
export class DnaMarkerOptionsManager {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: CreateDnaMarkerOptionDto): Promise<dna_marker_option> {
		const { markerId, ...createData } = data;
		return this.prisma.dna_marker_option.create({
			data: { markerId, ...createData },
		});
	}

	async update(data: UpdateDnaMarkerOptionDto): Promise<dna_marker_option> {
		const { id, ...updateData } = data;
		const option = await this.prisma.dna_marker_option.findUnique({ where: { id } });
		if (!option) {
			throw new NotFoundException(`DNA marker option with id ${id} not found`);
		}
		return this.prisma.dna_marker_option.update({
			where: { id },
			data: updateData,
		});
	}

	async delete(id: number): Promise<dna_marker_option> {
		const option = await this.prisma.dna_marker_option.findUnique({ where: { id } });
		if (!option) {
			throw new NotFoundException(`DNA marker option with id ${id} not found`);
		}
		return this.prisma.dna_marker_option.delete({ where: { id } });
	}
}
