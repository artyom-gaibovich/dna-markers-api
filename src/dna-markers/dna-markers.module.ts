import { Module } from '@nestjs/common';
import { DnaMarkersController } from './dna-markers.controller';
import { DnaMarkersService } from './dna-markers.service';

@Module({
	controllers: [DnaMarkersController],
	providers: [DnaMarkersService],
})
export class DnaMarkersModule {}
