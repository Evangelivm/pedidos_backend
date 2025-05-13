import { z } from 'zod';

export const CreateClienteSchema = z.object({
  nombre: z.string().min(1).max(100),
  tipo_documento: z.enum(['DNI', 'RUC', 'CE', 'PASAPORTE']).default('DNI'),
  numero_documento: z.string().max(20).optional(),
  direccion: z.string().max(255).optional(),
  telefono: z.string().max(20).optional(),
  email: z.string().email().max(100).optional(),
  notas: z.string().optional(),
  activo: z.boolean().default(true),
});

export type CreateClienteDto = z.infer<typeof CreateClienteSchema>;

export const UpdateClienteSchema = CreateClienteSchema.partial();

export type UpdateClienteDto = z.infer<typeof UpdateClienteSchema>;
