'use server'

import { prisma }         from '@/lib/prisma'
import { ContactSchema }  from '@/lib/validations'
import { ActionResult }   from '@/types'
import { headers }        from 'next/headers'
import crypto             from 'crypto'

export async function submitContact(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  // Honeypot check
  if (formData.get('_trap')) {
    return { success: true } // silently reject bots
  }

  const raw = {
    name:    formData.get('name'),
    company: formData.get('company') || undefined,
    email:   formData.get('email'),
    phone:   formData.get('phone')   || undefined,
    message: formData.get('message'),
    type:    formData.get('type')    || 'GENERAL',
  }

  const parsed = ContactSchema.safeParse(raw)

  if (!parsed.success) {
    const first = parsed.error.errors[0]
    return { success: false, error: first?.message ?? 'Please check your submission.' }
  }

  // Hash IP for rate-limiting reference (never store raw)
  const headerList = await headers()
  const ip  = headerList.get('x-forwarded-for') ?? 'unknown'
  const ipHash = crypto.createHash('sha256').update(ip).digest('hex').slice(0, 16)

  try {
    await prisma.contactInquiry.create({
      data: { ...parsed.data, ipHash },
    })
    return { success: true }
  } catch (err) {
    console.error('[contact]', err)
    return { success: false, error: 'Submission failed. Please call (386) 935-1865 directly.' }
  }
}

export async function subscribeNewsletter(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const email  = String(formData.get('email') ?? '')
  const source = String(formData.get('source') ?? 'footer')

  if (!email.includes('@')) return { success: false, error: 'Invalid email.' }

  try {
    await prisma.newsletterSubscriber.upsert({
      where:  { email },
      update: { active: true },
      create: { email, source, active: true },
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Could not subscribe. Please try again.' }
  }
}
