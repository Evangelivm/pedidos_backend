import { z } from 'zod';

export const CreateCategoriaSchema = z.object({
  nombre: z.string().min(1).max(100),
  descripcion: z.string().optional(),
});

export type CreateCategoriaDto = z.infer<typeof CreateCategoriaSchema>;

export const UpdateCategoriaSchema = CreateCategoriaSchema.partial();

export type UpdateCategoriaDto = z.infer<typeof UpdateCategoriaSchema>;
