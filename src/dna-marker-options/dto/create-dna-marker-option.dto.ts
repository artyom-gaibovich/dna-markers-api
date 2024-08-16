import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class CreateDnaMarkerOptionDto {
	@IsOptional()
	@IsNumber()
	markerId: number;

	@IsString()
	@Length(1, 50)
	title: string;
}
