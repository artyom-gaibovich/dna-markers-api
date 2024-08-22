import { DnaMarkerOptionsRepository } from './repository/dna-marker-options.repository';
import { DnaMarkerOptionsManager } from './manager/dna-marker-options.manager';
import { DIConstants } from '../DIConstants';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { DnaMarkerOptionsService } from './service/dna-marker-options.service';

export const DnaMarkerOptionsProviders = [
	{
		provide: DIConstants.DnaMarkerOptionsRepository,
		useClass: DnaMarkerOptionsRepository,
	},
	{
		provide: DIConstants.DnaMarkerOptionsManager,
		useClass: DnaMarkerOptionsManager,
	},
	{
		provide: DIConstants.DnaMarkerOptionsService,
		useClass: DnaMarkerOptionsService,
	},
	JwtStrategy,
];
