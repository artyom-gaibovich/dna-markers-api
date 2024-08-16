import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class UpdateDnaMarkerDto {
	@IsOptional()
	@IsNumber()
	id?: number;

	@IsString()
	@Length(1, 50)
	name: string;
}
