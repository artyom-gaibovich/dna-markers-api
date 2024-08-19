import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { dna_marker, Prisma } from '@prisma/client';
import { DnaMarkerRepositoryInterface } from './dna-markers.repository.interface';

@Injectable()
export class DnaMarkerRepository implements DnaMarkerRepositoryInterface {
	constructor(private readonly prisma: PrismaService) {}

	async findById(id: number): Promise<dna_marker | null> {
		return this.prisma.dna_marker.findUnique({ where: { id } });
	}

	async findAll(): Promise<dna_marker[]> {
		return this.prisma.dna_marker.findMany();
	}

	async findAllFull(): Promise<{
		marker_id: number;
		marker_name: string;
		marker_title: string;
	}> {
		return this.prisma.$queryRaw(
			Prisma.sql`SELECT 
    dm.id AS marker_id,
    dm.name AS marker_name,
    dmo.title AS marker_title
FROM 
    dna_marker dm
JOIN 
    dna_marker_option dmo 
ON 
    dm.id = dmo."markerId" 
`,
		);
	}
}
