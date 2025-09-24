import HeroSection from './_components/home/hero-section'
import WhyMidas from './_components/home/why-midas'
import WhoWeare from './_components/home/who-weare'
import WhatWeDo from './_components/home/what-wedo'
import SellOptions from './_components/home/sell-options'
import ReleaseSection from './_components/home/release-section'
import TodaySection from './_components/home/today-section'
import Testimonials from './_components/home/testimonials'
import ContactSection from './_components/home/contact-section'
import SecondaryBottomNavbarController from './_components/home/secondary-bottom-navbar-controller'


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <WhyMidas />
        <WhoWeare />
        <WhatWeDo />
        <SellOptions />
        <TodaySection />
        <ReleaseSection />
        <Testimonials />
        <ContactSection mapQuery="Angamaly South,Angamaly, Kerala" />
      </main>
      {/* Sticky secondary navbar controller (renders portal to body) */}
      <SecondaryBottomNavbarController />
    </>
  )
}