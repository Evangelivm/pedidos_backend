import { z } from 'zod';

export const CreateDespachoSchema = z.object({
  pedido_id: z.number().int().positive(),
  fecha: z.string().or(z.date()),
  direccion_entrega: z.string().min(1).max(255),
  contacto_entrega: z.string().max(100).optional(),
  telefono_entrega: z.string().max(20).optional(),
  estado: z
    .enum(['PENDIENTE', 'EN_RUTA', 'ENTREGADO', 'CANCELADO'])
    .default('PENDIENTE'),
  notas: z.string().optional(),
});

export type CreateDespachoDto = z.infer<typeof CreateDespachoSchema>;

export const UpdateDespachoSchema = z.object({
  fecha: z.string().or(z.date()).optional(),
  direccion_entrega: z.string().min(1).max(255).optional(),
  contacto_entrega: z.string().max(100).optional(),
  telefono_entrega: z.string().max(20).optional(),
  estado: z.enum(['PENDIENTE', 'EN_RUTA', 'ENTREGADO', 'CANCELADO']).optional(),
  notas: z.string().optional(),
});

export type UpdateDespachoDto = z.infer<typeof UpdateDespachoSchema>;
