import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(10),
  orderBy: z.string().optional(),
  orderDirection: z.enum(['asc', 'desc']).default('asc'),
});

export type PaginationDto = z.infer<typeof PaginationSchema>;
