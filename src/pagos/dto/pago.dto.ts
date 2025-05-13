import { z } from 'zod';

export const CreatePagoSchema = z.object({
  pedido_id: z.number().int().positive(),
  fecha: z.string().or(z.date()),
  monto: z.number().positive(),
  metodo_pago: z
    .enum(['EFECTIVO', 'TRANSFERENCIA', 'TARJETA', 'YAPE', 'PLIN', 'OTRO'])
    .default('EFECTIVO'),
  referencia: z.string().max(100).optional(),
  notas: z.string().optional(),
});

export type CreatePagoDto = z.infer<typeof CreatePagoSchema>;

export const UpdatePagoSchema = z.object({
  fecha: z.string().or(z.date()).optional(),
  monto: z.number().positive().optional(),
  metodo_pago: z
    .enum(['EFECTIVO', 'TRANSFERENCIA', 'TARJETA', 'YAPE', 'PLIN', 'OTRO'])
    .optional(),
  referencia: z.string().max(100).optional(),
  notas: z.string().optional(),
});

export type UpdatePagoDto = z.infer<typeof UpdatePagoSchema>;
