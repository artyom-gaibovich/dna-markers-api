import { IsString, Length } from 'class-validator';

export class CreateDnaMarkerDto {
	@IsString()
	@Length(1, 50)
	name: string;
}
