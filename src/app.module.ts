import { Module } from '@nestjs/common';
import { DnaMarkersService } from './dna-markers/service/dna-markers.service';
import { DnaMarkerOptionsService } from './dna-marker-options/service/dna-marker-options.service';
import { DnaMarkerOptionsProviders } from './dna-marker-options/dna-marker-options.providers';
import { DnaMarkersController } from './dna-markers/dna-markers.controller';
import { DnaMarkerOptionsController } from './dna-marker-options/dna-marker-options.controller';
import { DnaMarkerProviders } from './dna-markers/dna-markers.providers';
import { PrismaService } from './prisma/prisma.service';

@Module({
	imports: [],
	controllers: [DnaMarkersController, DnaMarkerOptionsController],
	providers: [
		PrismaService,
		...DnaMarkerProviders,
		...DnaMarkerOptionsProviders,
		DnaMarkersService,
		DnaMarkerOptionsService,
	],
})
export class AppModule {}
