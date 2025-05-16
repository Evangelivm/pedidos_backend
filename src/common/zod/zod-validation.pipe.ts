import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    // Añadir logs para depuración
    console.log('ZodValidationPipe - Input value type:', typeof value);
    console.log(
      'ZodValidationPipe - Input value:',
      JSON.stringify(value, null, 2),
    );
    console.log('ZodValidationPipe - Metadata:', metadata);

    try {
      // Asegurarse de que el valor es un objeto si viene como string
      if (typeof value === 'string') {
        try {
          value = JSON.parse(value);
        } catch (e) {
          throw new BadRequestException('Invalid JSON string provided');
        }
      }

      const result = this.schema.parse(value);
      return result;
    } catch (error) {
      console.error('ZodValidationPipe - Validation error:', error);
      throw new BadRequestException({
        message: 'Validation failed',
        error: error.errors || error.message,
        receivedValue: value,
        expectedSchema: this.schema.description,
      });
    }
  }
}
