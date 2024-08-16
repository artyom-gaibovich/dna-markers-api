import { IsString, Length } from 'class-validator';

export class CreateDnaMarkerOptionDto {
	@IsString()
	@Length(1, 50)
	title: string;
}
