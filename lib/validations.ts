// lib/validations.ts
import { z } from 'zod'

export const ContactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().max(120).optional(),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().max(30).optional(),
  message: z.string().min(10, 'Please provide more detail (10+ characters)').max(3000),
  type:    z.enum(['GENERAL', 'WHOLESALE', 'LOGISTICS', 'MEDIA']).default('GENERAL'),
  // Honeypot — must be empty
  _trap:   z.literal('').optional(),
})

export const NewsletterSchema = z.object({
  email:  z.string().email('Please enter a valid email address'),
  source: z.string().max(60).optional(),
})

export type ContactInput     = z.infer<typeof ContactSchema>
export type NewsletterInput  = z.infer<typeof NewsletterSchema>
