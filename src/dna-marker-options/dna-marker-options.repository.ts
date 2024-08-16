import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { dna_marker_option } from '@prisma/client';

@Injectable()
export class DnaMarkerOptionsRepository {
	constructor(private readonly prisma: PrismaService) {}

	async findById(id: number): Promise<dna_marker_option | null> {
		return this.prisma.dna_marker_option.findUnique({ where: { id } });
	}

	async findAll(markerId: number): Promise<dna_marker_option[]> {
		return this.prisma.dna_marker_option.findMany({ where: { markerId } });
	}
}
