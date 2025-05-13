import { z } from 'zod';

export const DetalleEntradaMercaderiaSchema = z.object({
  producto_id: z.number().int().positive(),
  cantidad: z.number().int().positive(),
  precio_unitario: z.number().positive(),
  subtotal: z.number().positive(),
});

export type DetalleEntradaMercaderiaDto = z.infer<
  typeof DetalleEntradaMercaderiaSchema
>;

export const CreateEntradaMercaderiaSchema = z.object({
  fecha: z.string().or(z.date()),
  proveedor_id: z.number().int().positive(),
  numero_factura: z.string().max(50).optional(),
  total: z.number().nonnegative(),
  notas: z.string().optional(),
  detalle: z.array(DetalleEntradaMercaderiaSchema),
});

export type CreateEntradaMercaderiaDto = z.infer<
  typeof CreateEntradaMercaderiaSchema
>;

export const UpdateEntradaMercaderiaSchema = z.object({
  fecha: z.string().or(z.date()).optional(),
  proveedor_id: z.number().int().positive().optional(),
  numero_factura: z.string().max(50).optional(),
  total: z.number().nonnegative().optional(),
  notas: z.string().optional(),
});

export type UpdateEntradaMercaderiaDto = z.infer<
  typeof UpdateEntradaMercaderiaSchema
>;
