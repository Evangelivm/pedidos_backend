import { z } from 'zod';

export const CreateProductoSchema = z.object({
  codigo: z.string().min(1).max(20),
  descripcion: z.string().min(1).max(255),
  categoria_id: z.coerce.number().int().positive(),
  presentacion_id: z.coerce.number().int().positive(),
  precio_sugerido: z.coerce.number().nonnegative().optional(),
  precio_minimo: z.coerce.number().nonnegative().optional(),
  stock: z.coerce.number().int().nonnegative().default(0),
  stock_minimo: z.coerce.number().int().nonnegative().default(5),
  imagen: z.string().max(255).optional(),
  activo: z.coerce.boolean().default(true),
});

export type CreateProductoDto = z.infer<typeof CreateProductoSchema>;

export const UpdateProductoSchema = CreateProductoSchema.partial();
export type UpdateProductoDto = z.infer<typeof UpdateProductoSchema>;
