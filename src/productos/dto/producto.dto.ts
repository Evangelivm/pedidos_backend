import { z } from 'zod';

export const CreateProductoSchema = z.object({
  codigo: z.string().min(1).max(20),
  descripcion: z.string().min(1).max(255),
  categoria_id: z.number().int().positive(),
  presentacion_id: z.number().int().positive(),
  precio_sugerido: z.number().nonnegative().optional(),
  precio_minimo: z.number().nonnegative().optional(),
  stock: z.number().int().nonnegative().default(0),
  stock_minimo: z.number().int().nonnegative().default(5),
  imagen: z.string().max(255).optional(),
  activo: z.boolean().default(true),
});

export type CreateProductoDto = z.infer<typeof CreateProductoSchema>;

export const UpdateProductoSchema = CreateProductoSchema.partial();

export type UpdateProductoDto = z.infer<typeof UpdateProductoSchema>;
