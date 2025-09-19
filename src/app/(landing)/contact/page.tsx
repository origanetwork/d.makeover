import React from 'react'
import HeroContact from '../_components/contact/hero-contact'
import ContactMethods from '../_components/contact/contact-methods'
import ContactSection from '../_components/home/contact-section'

// Contact page rendering the hero section using the shared layout pattern
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">

      <HeroContact />
      <ContactMethods />
      {/* Reuse the existing ContactSection (form + map) for consistency */}
      <ContactSection mapQuery="Angamaly South,Angamaly, Kerala" />
    </main>
  )
}
