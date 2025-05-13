import { z } from 'zod';

export const AbrirCajaSchema = z.object({
  fecha: z.string().or(z.date()),
  apertura: z.number().nonnegative(),
  notas: z.string().optional(),
});

export type AbrirCajaDto = z.infer<typeof AbrirCajaSchema>;

export const CerrarCajaSchema = z.object({
  cierre: z.number().nonnegative(),
  notas: z.string().optional(),
});

export type CerrarCajaDto = z.infer<typeof CerrarCajaSchema>;

export const MovimientoCajaSchema = z.object({
  tipo: z.enum(['INGRESO', 'EGRESO']),
  concepto: z.string().min(1).max(255),
  monto: z.number().positive(),
  referencia_tipo: z.enum(['VENTA', 'GASTO', 'OTRO']).optional(),
});

export type MovimientoCajaDto = z.infer<typeof MovimientoCajaSchema>;
