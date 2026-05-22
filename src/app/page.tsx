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
      <SegmentSelector />
      <CapabilitiesGrid />
      <SolutionsSection />
      <GlassOrderProSection />
      <ModularProductsSection />
      <ProjectsSection />
      <ProcessTimeline />
      <DifferentialsSection />
      <ContactCTA />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
