import { Module } from '@nestjs/common';
import { DnaMarkersController } from './dna-markers.controller';
import { DnaMarkersService } from './service/dna-markers.service';
import { JwtStrategy } from '../dna-marker-options/auth/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getJWTConfig } from '../config/jwt-config';
import { DnaMarkerProviders } from './dna-markers.providers';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
	controllers: [DnaMarkersController],
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
	providers: DnaMarkerProviders,
	exports: DnaMarkerProviders,
})
export class DnaMarkersModule {}
