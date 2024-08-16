import { IsNumber, IsString, Length } from 'class-validator';

export class UpdateDnaMarkerOptionDto {
	@IsNumber()
	id: number;

	@IsNumber()
	markerId: number;

	@IsString()
	@Length(1, 50)
	title: string;
}
