import { z } from 'zod';

export const DetallePedidoSchema = z.object({
  producto_id: z.number().int().positive(),
  cantidad: z.number().int().positive(),
  precio_unitario: z.number().positive(),
  subtotal: z.number().positive(),
});

export type DetallePedidoDto = z.infer<typeof DetallePedidoSchema>;

export const CreatePedidoSchema = z.object({
  numero: z.string().min(1).max(20),
  fecha: z.string().or(z.date()),
  cliente_id: z.number().int().positive(),
  subtotal: z.number().nonnegative(),
  igv: z.number().nonnegative(),
  total: z.number().nonnegative(),
  estado: z
    .enum(['PENDIENTE', 'PAGADO', 'DESPACHADO', 'ANULADO'])
    .default('PENDIENTE'),
  notas: z.string().optional(),
  detalle: z.array(DetallePedidoSchema),
});

export type CreatePedidoDto = z.infer<typeof CreatePedidoSchema>;

export const UpdatePedidoSchema = z.object({
  fecha: z.string().or(z.date()).optional(),
  cliente_id: z.number().int().positive().optional(),
  subtotal: z.number().nonnegative().optional(),
  igv: z.number().nonnegative().optional(),
  total: z.number().nonnegative().optional(),
  estado: z.enum(['PENDIENTE', 'PAGADO', 'DESPACHADO', 'ANULADO']).optional(),
  notas: z.string().optional(),
});

export type UpdatePedidoDto = z.infer<typeof UpdatePedidoSchema>;
