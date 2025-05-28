import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class CoerciveUpdateProductoPipe implements PipeTransform {
  constructor(private schema: z.Schema) {}

  transform(value: any) {
    console.log('Datos recibidos en el Pipe de Update:', value); // Agrega este log

    if (!value || typeof value !== 'object') {
      throw new BadRequestException('Datos inválidos o faltantes');
    }

    const parseNumber = (val: any): number | undefined => {
      if (val === undefined || val === null || val === '') return undefined;
      const numberValue = parseFloat(val);
      return isNaN(numberValue) ? undefined : numberValue;
    };

    const parseBoolean = (val: any): boolean | undefined => {
      if (val === undefined || val === null || val === '') return undefined;
      if (typeof val === 'boolean') return val;
      if (val === 'true') return true;
      if (val === 'false') return false;
      return undefined;
    };

    const coercedValue = {
      ...value,
      categoria_id: parseNumber(value.categoria_id),
      presentacion_id: parseNumber(value.presentacion_id),
      precio_sugerido: parseNumber(value.precio_sugerido),
      precio_minimo: parseNumber(value.precio_minimo),
      stock: parseNumber(value.stock),
      stock_minimo: parseNumber(value.stock_minimo),
      activo: parseBoolean(value.activo),
    };

    try {
      return this.schema.parse(coercedValue);
    } catch (error) {
      throw new BadRequestException({
        message: 'Error de validación',
        errors: error.errors,
      });
    }
  }
}
