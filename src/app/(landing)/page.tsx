import HeroSection from './_components/home/hero-section'
import Testimonials from './_components/home/testimonials'
import ContactSection from './_components/home/contact-section'
import About from './_components/home/about-section'
import Gallery from './_components/home/gallery'
import WhyChooseUs from './_components/home/why-choose'
import FromTheHouse from './_components/home/from-the-house'
import Services from './_components/home/services'
import BlogsSection from './_components/home/blogs-section'
import ReelsSection from './_components/home/reels-section'


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ReelsSection />
        <About />
        <Services/>
        <FromTheHouse/>
        <WhyChooseUs/>
        <Gallery/>
        <BlogsSection />
        <Testimonials />
        <ContactSection
        mapQuery="D. Makeover Studio, opposite ladies planet, near Nesto Hypermarket, Perinthalmanna, Kerala 679322"
        />
      </main>
    </>
  )
}