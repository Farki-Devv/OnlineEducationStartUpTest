"use client"
 
import { z } from "zod"
 
export const contactSchema = z.object({
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  status: z.string(),
})
