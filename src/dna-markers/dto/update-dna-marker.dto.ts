import { IsString, Length } from 'class-validator';

export class UpdateDnaMarkerDto {
	@IsString()
	@Length(1, 50)
	name: string;
}
