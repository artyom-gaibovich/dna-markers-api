import { Module } from '@nestjs/common';
import { DnaMarkersModule } from './dna-markers/dna-markers.module';
import { DnaMarkerOptionsModule } from './dna-marker-options/dna-marker-options.module';

@Module({
	imports: [DnaMarkersModule, DnaMarkerOptionsModule],
	controllers: [],
})
export class AppModule {}
