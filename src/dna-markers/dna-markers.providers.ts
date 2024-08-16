import { DIConstants } from '../DIConstants';
import { DnaMarkerRepository } from './dna-markers.repository';
import { DnaMarkerManager } from './dna-markers.manager';

export const DnaMarkerProviders = [
	{
		provide: DIConstants.DnaMarkerRepository,
		useClass: DnaMarkerRepository,
	},
	{
		provide: DIConstants.DnaMarkerManager,
		useClass: DnaMarkerManager,
	},
];
