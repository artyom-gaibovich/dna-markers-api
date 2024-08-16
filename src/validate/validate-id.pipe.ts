import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateIdPipe implements PipeTransform<string, number> {
	transform(value: string, { type }: ArgumentMetadata): number {
		const val = parseInt(value, 10);

		if (isNaN(val) || val <= 0) {
			throw new BadRequestException(`Validation failed. "${value}" is not a valid ID.`);
		}

		return val;
	}
}
