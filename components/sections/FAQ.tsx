'use client'

import { useState }      from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs }          from '@/content/faq'
import { SectionTag }    from '@/components/ui/SectionHeader'
import { MotionWrapper, StaggerContainer, StaggerChild } from '@/components/ui/MotionWrapper'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id)

  return (
    <section
      id="faq"
      className="section-pad"
      style={{ background: 'linear-gradient(160deg, var(--nude) 0%, var(--warm) 50%, var(--cream) 100%)', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="faq-heading"
    >
      {/* Seeds texture */}
      <div className="absolute inset-0 texture-seeds pointer-events-none" aria-hidden />

      <div className="container-wide relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <MotionWrapper>
            <SectionTag label="FAQ" dotColor="red" center />
          </MotionWrapper>
          <MotionWrapper delay={0.05}>
            <h2
              id="faq-heading"
              className="font-display font-light leading-[1.1] text-center"
              style={{ fontSize: 'clamp(36px,4vw,56px)', color: 'var(--dark)' }}
            >
              Common questions.
            </h2>
          </MotionWrapper>
        </div>

        {/* FAQ grid */}
        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-2 gap-0.5"
          delay={0.1}
          stagger={0.06}
        >
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <StaggerChild key={faq.id}>
                <div
                  className="transition-all duration-200 cursor-pointer"
                  style={{
                    background:  isOpen ? 'var(--nude)' : 'rgba(237,231,213,0.5)',
                    borderLeft:  isOpen ? '3px solid var(--red)' : '3px solid transparent',
                    padding:     '26px 28px',
                  }}
                  onClick={() => toggle(faq.id)}
                >
                  {/* Question */}
                  <button
                    className="w-full text-left flex justify-between items-start gap-2.5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span
                      className="font-display font-light text-[18px]"
                      style={{ color: 'var(--dark)', lineHeight: 1.35 }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm transition-transform duration-200"
                      style={{
                        background: 'rgba(45,74,34,0.1)',
                        color:      'var(--green)',
                        transform:  isOpen ? 'rotate(45deg)' : 'none',
                      }}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          className="text-[13px] leading-[1.65] mt-3"
                          style={{ color: '#5A6B4A' }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerChild>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
