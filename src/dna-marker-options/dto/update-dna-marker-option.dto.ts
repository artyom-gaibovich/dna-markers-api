import { IsString, Length } from 'class-validator';

export class UpdateDnaMarkerOptionDto {
	@IsString()
	@Length(1, 50)
	title: string;
}
