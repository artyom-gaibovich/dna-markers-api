import { DIConstants } from '../DIConstants';
import { DnaMarkerRepository } from './repository/dna-markers.repository';
import { DnaMarkerManager } from './manager/dna-markers.manager';
import { Provider } from '@nestjs/common';
import { JwtStrategy } from '../dna-marker-options/auth/strategies/jwt.strategy';
import { DnaMarkersService } from './service/dna-markers.service';

export const DnaMarkerProviders: Provider[] = [
	{
		provide: DIConstants.DnaMarkerRepository,
		useClass: DnaMarkerRepository,
	},
	{
		provide: DIConstants.DnaMarkerManager,
		useClass: DnaMarkerManager,
	},
	{
		provide: DIConstants.DnaMarkersService,
		useClass: DnaMarkersService,
	},
	JwtStrategy,
];
