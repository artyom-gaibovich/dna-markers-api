import { Module } from '@nestjs/common';
import { DnaMarkerOptionsController } from './dna-marker-options.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getJWTConfig } from '../config/jwt-config';
import { PassportModule } from '@nestjs/passport';
import { DnaMarkerOptionsProviders } from './dna-marker-options.providers';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
	controllers: [DnaMarkerOptionsController],
	imports: [
		PrismaModule,
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig,
		}),
		PassportModule,
	],
	providers: DnaMarkerOptionsProviders,
	exports: DnaMarkerOptionsProviders,
})
export class DnaMarkerOptionsModule {}
