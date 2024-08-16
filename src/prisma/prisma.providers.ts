import { Provider } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DIConstants } from '../DIConstants';

export const prismaProviders: Provider[] = [
	{
		provide: DIConstants.PrismaService,
		useClass: PrismaService,
	},
];
