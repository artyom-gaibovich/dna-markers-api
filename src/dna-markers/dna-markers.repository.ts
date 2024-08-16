import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { dna_marker } from '@prisma/client';

@Injectable()
export class DnaMarkerRepository {
	constructor(private readonly prisma: PrismaService) {}

	async findById(id: number): Promise<dna_marker | null> {
		return this.prisma.dna_marker.findUnique({ where: { id } });
	}

	async findAll(): Promise<dna_marker[]> {
		return this.prisma.dna_marker.findMany();
	}
}
