import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'


const Footer: React.FC = () => {
  return (
    <footer className="relative isolate text-white bg-gradient-to-r from-brand-green-900 via-brand-green-800 to-brand-green-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 py-8 md:py-5">
        <div className='flex flex-col md:flex-row lg:flex-row px-4'>
          {/* Brand + Description */}
          <div className="w-full lg:w-1/3 ">
            <Image
              src="/landing-page/home/ddot-logo-image.png"
              alt="Midas Gold Point"
              width={160}
              height={100}
              loading='lazy'
              className="h-30 w-auto mx-auto md:mx-0 md:-ml-3"
            />
            <p className="mt-6 text-lg leading-7 text-slate-100 font-montserrat max-w-lg">
              Where Beauty Meets Confidence -<br></br> Luxury grooming with 10+ years of<br></br> expert care
            </p>
            <div className="mt-6 flex items-center gap-4 text-white/90">
              {/* Social icons */}
              <a href="https://www.facebook.com/people/D-Dot-Makeover-Studio/61577050333171/" aria-label="Facebook" className="hover:opacity-80 transition">
                <Facebook width={22} height={22} fill='currentColor' />
              </a>
              <a href="https://www.instagram.com/d_dot_makeoverstudio/" aria-label="Instagram" className="hover:opacity-80 transition">
                <Instagram width={22} height={22} />
              </a>
            </div>
            {/* Horizontal line after social icons - mobile only */}
            <div className="mt-8 border-t border-white/20 md:hidden"></div>
          </div>

          <div className="md-full md:w-2/3 lg:w-2/3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-8 font-montserrat">
            {/* About Us */}
            <div className="mt-10 md:mt-14">
              <h3 className="font-medium text-xl tracking-wide mb-4">About Us</h3>
              <ul className="space-y-3 text-slate-200">
                <li><Link href="/#why-choose" prefetch className="hover:text-white transition">Why Choose Us</Link></li>
                <li><Link href="/#contact" prefetch className="hover:text-white transition">Contact Us</Link></li>
                <li><Link href="/#testimonials" prefetch className="hover:text-white transition">Customer Reviews</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="mt-10 md:mt-14">
              <h3 className="font-medium text-xl tracking-wide mb-4">Services</h3>
              <ul className="space-y-3 text-slate-200">
                <li><Link href="/#services" prefetch className="hover:text-white transition">Bridal Makeover</Link></li>
                <li><Link href="/#services" prefetch className="hover:text-white transition">Hair Stylist</Link></li>
                <li><Link href="/#services" prefetch className="hover:text-white transition">Makeup Artistry</Link></li>
                <li><Link href="/#services" prefetch className="hover:text-white transition">Nail Care</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="mt-10 md:mt-14">
              <h3 className="font-medium text-xl tracking-wide mb-4">Quick Links</h3>
              <ul className="space-y-3 text-slate-200">
                <li><Link href="/" prefetch className="hover:text-white transition">Home</Link></li>
                <li><Link href="/" prefetch className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/" prefetch className="hover:text-white transition">FAQs</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="mt-10 md:mt-14">
              <h3 className="font-medium text-xl tracking-wide mb-4">Legal</h3>
              <ul className="space-y-3 text-slate-200">
                <li><Link href="/" prefetch className="hover:text-white transition">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-white transition">Terms &amp; Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-center text-xs sm:text-sm text-slate-200">© 2025 Midas Gold Point. All rights reserved.</p>
        </div>
      </div>

      {/* Floating contact buttons moved to Contact-bottons.tsx */}
    </footer>
  )
}

export default Footer