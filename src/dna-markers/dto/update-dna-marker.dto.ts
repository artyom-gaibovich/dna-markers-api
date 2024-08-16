import { IsNumber, IsString, Length } from 'class-validator';

export class UpdateDnaMarkerDto {
	@IsNumber()
	id: number;

	@IsString()
	@Length(1, 50)
	name: string;
}
