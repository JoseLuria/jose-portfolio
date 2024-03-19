import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede estar vacío' }),
  email: z.string().email({ message: 'El email no es válido' }),
  message: z.string().min(1, { message: 'El mensaje no puede estar vacío' })
})

export type ContactForm = z.infer<typeof contactFormSchema>