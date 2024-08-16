import { IsNumber, IsString, Length } from 'class-validator';

export class CreateDnaMarkerOptionDto {
	@IsNumber()
	markerId: number;

	@IsString()
	@Length(1, 50)
	title: string;
}
