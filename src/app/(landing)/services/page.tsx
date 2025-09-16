import React from 'react'
import Navbar from '../_components/shared/navbar'
import Herosectiom from '../_components/Services/hero-service'
import Coreservice from '../_components/Services/core-service'
import DetailsSection from '../_components/Services/details-section'

// Services page rendering the hero section
export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Herosectiom />
      {/* Spacer to show the floating card shadow below the hero */}
      <div className="h-[110px]" />
      {/* Core services section directly under hero */}
      <Coreservice />
      {/* Details section under the core services section */}
      <DetailsSection />
    </main>
  )
}