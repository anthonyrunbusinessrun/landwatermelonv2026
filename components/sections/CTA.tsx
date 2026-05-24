'use client'

import { useRef } from 'react'
import { useActionState } from 'react'
import { submitContact }           from '@/actions/contact'
import { SectionTag }              from '@/components/ui/SectionHeader'
import { MotionWrapper }           from '@/components/ui/MotionWrapper'
import { siteConfig }              from '@/config/site'
import type { ActionResult }       from '@/types'

const INITIAL: ActionResult = { success: false }

export function CTA() {
  const [state, action, pending] = useActionState(submitContact, INITIAL)
  const formRef = useRef<HTMLFormElement>(null)

  if (state.success && formRef.current) {
    formRef.current.reset()
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden section-pad"
      style={{ background: 'linear-gradient(145deg, #0D1A0A 0%, #1A2216 50%, #2D4A22 100%)' }}
      aria-labelledby="cta-heading"
    >
      {/* Shell texture */}
      <div className="absolute inset-0 texture-shell pointer-events-none" aria-hidden />
      {/* Gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(232,197,71,0.1) 0%, transparent 55%)' }}
        aria-hidden
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: COPY ── */}
          <div>
            <MotionWrapper>
              <SectionTag label="Get In Touch" dotColor="sage" theme="dark" />
            </MotionWrapper>

            <MotionWrapper delay={0.05}>
              <h2
                id="cta-heading"
                className="font-display font-light leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(36px,4vw,56px)', color: 'var(--cream)' }}
              >
                Fresh from our fields.<br />
                <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Direct to your dock.</em>
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <p className="text-base leading-[1.75] mb-10" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Let&apos;s talk watermelons. Call us or send a message and we&apos;ll
                get back to you same day.
              </p>
            </MotionWrapper>

            {/* Direct contact buttons */}
            <MotionWrapper delay={0.13} className="flex flex-wrap gap-3 mb-6">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                className="inline-block text-[11px] tracking-[2px] uppercase px-7 py-3.5 font-body transition-colors duration-200"
                style={{ background: 'var(--gold)', color: 'var(--dark)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold3)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
              >
                📞 {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-block text-[11px] tracking-[2px] uppercase px-7 py-3.5 font-body transition-colors duration-200"
                style={{ background: 'var(--red)', color: 'var(--cream)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--red2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
              >
                Email Us →
              </a>
            </MotionWrapper>

            <MotionWrapper delay={0.16}>
              <p className="text-[13px]" style={{ color: 'rgba(245,240,232,0.35)' }}>
                Or email{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{ color: 'var(--gold)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold3)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </MotionWrapper>
          </div>

          {/* ── RIGHT: FORM ── */}
          <MotionWrapper delay={0.1}>
            <div
              className="p-8"
              style={{
                background: 'rgba(237,231,213,0.06)',
                border:     '1px solid rgba(245,240,232,0.1)',
              }}
            >
              {state.success ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🍉</div>
                  <p
                    className="font-display font-light text-[22px] mb-2"
                    style={{ color: 'var(--cream)' }}
                  >
                    Message received.
                  </p>
                  <p className="text-[13px]" style={{ color: 'rgba(245,240,232,0.55)' }}>
                    We&apos;ll be in touch same day.
                  </p>
                </div>
              ) : (
                <form ref={formRef} action={action} noValidate>
                  {/* Honeypot — hidden from real users */}
                  <input name="_trap" type="text" className="sr-only" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <FormField name="name"    label="Full Name"   required />
                    <FormField name="company" label="Company"              />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <FormField name="email" label="Email Address" type="email" required />
                    <FormField name="phone" label="Phone"         type="tel"            />
                  </div>

                  {/* Type selector */}
                  <div className="mb-4">
                    <label className="block text-[9px] tracking-[2px] uppercase mb-2" style={{ color: 'rgba(245,240,232,0.45)' }}>
                      Inquiry Type
                    </label>
                    <select
                      name="type"
                      className="w-full text-[13px] px-4 py-3 font-body appearance-none"
                      style={{
                        background: 'rgba(245,240,232,0.07)',
                        border:     '1px solid rgba(245,240,232,0.12)',
                        color:      'var(--cream)',
                      }}
                      defaultValue="WHOLESALE"
                    >
                      <option value="WHOLESALE">Wholesale / Buying</option>
                      <option value="LOGISTICS">Logistics / Transport</option>
                      <option value="GENERAL">General Inquiry</option>
                      <option value="MEDIA">Media / Press</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[9px] tracking-[2px] uppercase mb-2" style={{ color: 'rgba(245,240,232,0.45)' }}>
                      Message <span aria-label="required">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your needs — varieties, volume, delivery region..."
                      className="w-full text-[13px] px-4 py-3 font-body resize-none"
                      style={{
                        background:  'rgba(245,240,232,0.07)',
                        border:      '1px solid rgba(245,240,232,0.12)',
                        color:       'var(--cream)',
                        '::placeholder': { color: 'rgba(245,240,232,0.3)' },
                      } as React.CSSProperties}
                    />
                  </div>

                  {state.error && (
                    <p className="text-[12px] mb-4" style={{ color: 'var(--red2)' }} role="alert">
                      {state.error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="w-full text-[11px] tracking-[2px] uppercase py-3.5 font-body transition-all duration-200 disabled:opacity-60"
                    style={{ background: 'var(--red)', color: 'var(--cream)' }}
                    onMouseEnter={e => { if (!pending) e.currentTarget.style.background = 'var(--red2)' }}
                    onMouseLeave={e => { if (!pending) e.currentTarget.style.background = 'var(--red)' }}
                  >
                    {pending ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

/* ── FORM FIELD ── */
function FormField({
  name,
  label,
  type    = 'text',
  required,
}: {
  name:      string
  label:     string
  type?:     string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[9px] tracking-[2px] uppercase mb-2"
        style={{ color: 'rgba(245,240,232,0.45)' }}
      >
        {label} {required && <span aria-label="required">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full text-[13px] px-4 py-3 font-body"
        style={{
          background: 'rgba(245,240,232,0.07)',
          border:     '1px solid rgba(245,240,232,0.12)',
          color:      'var(--cream)',
        }}
        placeholder={required ? '' : 'Optional'}
      />
    </div>
  )
}
