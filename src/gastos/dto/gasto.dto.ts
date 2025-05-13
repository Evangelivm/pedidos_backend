import { z } from 'zod';

export const CreateGastoSchema = z.object({
  fecha: z.string().or(z.date()),
  concepto: z.string().min(1).max(255),
  monto: z.number().positive(),
  tipo: z.enum(['FIJO', 'VARIABLE']).default('VARIABLE'),
  categoria: z.string().max(100).optional(),
  comprobante: z.string().max(100).optional(),
  notas: z.string().optional(),
});

export type CreateGastoDto = z.infer<typeof CreateGastoSchema>;

export const UpdateGastoSchema = CreateGastoSchema.partial();

export type UpdateGastoDto = z.infer<typeof UpdateGastoSchema>;
