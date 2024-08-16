import { Injectable, Logger } from '@nestjs/common';
import { CreateDnaMarkerDto } from './dto/create-dna-marker.dto';
import { UpdateDnaMarkerDto } from './dto/update-dna-marker.dto';
import { DnaMarkersServiceInterface } from './dna-markers.service.interface';
import { DnaMarker } from '../interfaces/dna-marker.interface';

@Injectable()
export class DnaMarkersService implements DnaMarkersServiceInterface {
	private readonly logger = new Logger(DnaMarkersService.name);
	private dnaMarkers: DnaMarker[] = [];

	findAll(): DnaMarker[] {
		this.logger.log('Fetching all DNA markers from service');
		return this.dnaMarkers;
	}

	create(createDnaMarkerDto: CreateDnaMarkerDto): DnaMarker {
		const newMarker: DnaMarker = {
			id: Date.now(),
			...createDnaMarkerDto,
		};
		this.dnaMarkers.push(newMarker);
		this.logger.log(`DNA marker created: ${JSON.stringify(newMarker)}`);
		return newMarker;
	}

	update(id: number, updateDnaMarkerDto: UpdateDnaMarkerDto): DnaMarker {
		const index = this.dnaMarkers.findIndex((marker) => marker.id === id);
		this.dnaMarkers[index] = { ...this.dnaMarkers[index], ...updateDnaMarkerDto };
		this.logger.log(`DNA marker updated: ${JSON.stringify(this.dnaMarkers[index])}`);
		return this.dnaMarkers[index];
	}

	remove(id: number): DnaMarker[] {
		const index = this.dnaMarkers.findIndex((marker) => marker.id === id);
		const removedMarker = this.dnaMarkers.splice(index, 1);
		this.logger.log(`DNA marker removed: ${JSON.stringify(removedMarker)}`);
		return removedMarker;
	}
}
