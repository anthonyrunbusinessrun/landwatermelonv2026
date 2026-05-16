import { Navbar }      from '@/components/layout/Navbar'
import { Footer }      from '@/components/layout/Footer'
import { Hero }        from '@/components/sections/Hero'
import { StatsBar, TrustBar } from '@/components/sections/StatsBar'
import { About }       from '@/components/sections/About'
import { Varieties }   from '@/components/sections/Varieties'
import { Regions }     from '@/components/sections/Regions'
import { BigNumber }   from '@/components/sections/BigNumber'
import { Testimonial } from '@/components/sections/Testimonial'
import { FAQ }         from '@/components/sections/FAQ'
import { CTA }         from '@/components/sections/CTA'

/*
  Page flow matches HTML reference:
  Dark → Stats → Trust → Cream → Dark → Cream → Red → Cream → Cream → Dark → Dark
*/
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
