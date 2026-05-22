'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SegmentSelector from '@/components/SegmentSelector'
import CapabilitiesGrid from '@/components/CapabilitiesGrid'
import SolutionsSection from '@/components/SolutionsSection'
import GlassOrderProSection from '@/components/GlassOrderProSection'
import ModularProductsSection from '@/components/ModularProductsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ProcessTimeline from '@/components/ProcessTimeline'
import DifferentialsSection from '@/components/DifferentialsSection'
import ContactCTA from '@/components/ContactCTA'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  // Scroll reveal effect
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* light bg → light divider */}
      <SectionDivider variant="light" />
      <SegmentSelector />

      <SectionDivider variant="light" />
      <CapabilitiesGrid />

      <SectionDivider variant="light" />
      <SolutionsSection />

      {/* dark section — divider oscuro antes y después */}
      <SectionDivider variant="light" />
      <GlassOrderProSection />
      <SectionDivider variant="dark" />

      <ModularProductsSection />

      <SectionDivider variant="light" />
      <ProjectsSection />

      <SectionDivider variant="light" />
      <ProcessTimeline />

      <SectionDivider variant="light" />
      <DifferentialsSection />

      {/* dark section */}
      <SectionDivider variant="light" />
      <ContactCTA />
      <SectionDivider variant="dark" />

      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
