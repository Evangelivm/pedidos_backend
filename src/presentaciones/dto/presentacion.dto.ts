import { z } from 'zod';

export const CreatePresentacionSchema = z.object({
  nombre: z.string().min(1).max(50),
  descripcion: z.string().optional(),
});

export type CreatePresentacionDto = z.infer<typeof CreatePresentacionSchema>;

export const UpdatePresentacionSchema = CreatePresentacionSchema.partial();

export type UpdatePresentacionDto = z.infer<typeof UpdatePresentacionSchema>;
