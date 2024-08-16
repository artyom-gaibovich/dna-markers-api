import { DnaMarkerOptionsRepository } from './dna-marker-options.repository';
import { DnaMarkerOptionsManager } from './dna-marker-options.manager';
import { DIConstants } from '../DIConstants';

export const DnaMarkerOptionsProviders = [
	{
		provide: DIConstants.DnaMarkerOptionsRepository,
		useClass: DnaMarkerOptionsRepository,
	},
	{
		provide: DIConstants.DnaMarkerOptionsManager,
		useClass: DnaMarkerOptionsManager,
	},
];
