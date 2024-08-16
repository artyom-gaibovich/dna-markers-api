import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { dna_marker } from '@prisma/client';
import { CreateDnaMarkerDto } from './dto/create-dna-marker.dto';
import { UpdateDnaMarkerDto } from './dto/update-dna-marker.dto';

@Injectable()
export class DnaMarkerManager {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: CreateDnaMarkerDto): Promise<dna_marker> {
		return this.prisma.dna_marker.create({ data });
	}

	async update(data: UpdateDnaMarkerDto): Promise<dna_marker> {
		const { id, ...updateData } = data;
		const marker = await this.prisma.dna_marker.findUnique({ where: { id } });
		if (!marker) {
			throw new NotFoundException(`DNA marker with id ${id} not found`);
		}
		return this.prisma.dna_marker.update({
			where: { id },
			data: updateData,
		});
	}

	async delete(id: number): Promise<dna_marker> {
		const marker = await this.prisma.dna_marker.findUnique({ where: { id } });
		if (!marker) {
			throw new NotFoundException(`DNA marker with id ${id} not found`);
		}
		return this.prisma.dna_marker.delete({ where: { id } });
	}
}
