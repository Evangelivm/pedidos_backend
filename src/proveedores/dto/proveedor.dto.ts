import { z } from 'zod';

export const CreateProveedorSchema = z.object({
  nombre: z.string().min(1).max(100),
  ruc: z.string().max(20).optional(),
  direccion: z.string().max(255).optional(),
  telefono: z.string().max(20).optional(),
  email: z.string().email().max(100).optional(),
  contacto: z.string().max(100).optional(),
  notas: z.string().optional(),
  activo: z.boolean().default(true),
});

export type CreateProveedorDto = z.infer<typeof CreateProveedorSchema>;

export const UpdateProveedorSchema = CreateProveedorSchema.partial();

export type UpdateProveedorDto = z.infer<typeof UpdateProveedorSchema>;
