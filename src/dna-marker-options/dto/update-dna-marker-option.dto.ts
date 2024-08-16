import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class UpdateDnaMarkerOptionDto {
	@IsOptional()
	@IsNumber()
	@IsNumber()
	id: number;

	@IsOptional()
	@IsNumber()
	@IsNumber()
	markerId: number;

	@IsString()
	@Length(1, 50)
	title: string;
}
