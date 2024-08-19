import { DIConstants } from '../DIConstants';
import { DnaMarkerRepository } from './repository/dna-markers.repository';
import { DnaMarkerManager } from './manager/dna-markers.manager';

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
