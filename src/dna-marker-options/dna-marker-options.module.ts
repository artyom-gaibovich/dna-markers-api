import { Module } from '@nestjs/common';
import { DnaMarkerOptionsController } from './dna-marker-options.controller';
import { DnaMarkerOptionsService } from './service/dna-marker-options.service';

@Module({
  controllers: [DnaMarkerOptionsController],
  providers: [DnaMarkerOptionsService]
})
export class DnaMarkerOptionsModule {}
