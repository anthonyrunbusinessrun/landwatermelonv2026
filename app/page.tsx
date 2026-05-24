import { Navbar }      from '@/components/layout/Navbar'
import { Footer }      from '@/components/layout/Footer'
import { SkipLink }    from '@/components/layout/SkipLink'
import { Hero }        from '@/components/sections/Hero'
import { Gallery }     from '@/components/sections/Gallery'
import { StatsBar, TrustBar } from '@/components/sections/StatsBar'
import { About }       from '@/components/sections/About'
import { Varieties }   from '@/components/sections/Varieties'
import { Regions }     from '@/components/sections/Regions'
import { BigNumber }   from '@/components/sections/BigNumber'
import { Testimonial } from '@/components/sections/Testimonial'
import { FAQ }         from '@/components/sections/FAQ'
import { CTA }         from '@/components/sections/CTA'

/*
  Section flow matches reference HTML:
  Dark(hero) → Dark(stats/trust) → Cream(about) → Dark(varieties)
  → Cream(regions) → Red(stat) → Cream(testimonial)
  → Cream(faq) → Dark(cta)
*/
export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Gallery />
        <StatsBar />
        <TrustBar />
        <About />
        <Varieties />
        <Regions />
        <BigNumber />
        <Testimonial />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
