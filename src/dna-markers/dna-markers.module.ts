import { Module } from '@nestjs/common';
import { DnaMarkersController } from './dna-markers.controller';
import { DnaMarkersService } from './service/dna-markers.service';

@Module({
	controllers: [DnaMarkersController],
	providers: [DnaMarkersService],
})
export class DnaMarkersModule {}
