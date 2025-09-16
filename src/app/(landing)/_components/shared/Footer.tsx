import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Youtube } from 'lucide-react'


const Footer: React.FC = () => {
  return (
    <footer className="relative isolate text-white bg-gradient-to-br from-[#002E74] via-[#00398F] to-[#0156D8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 py-12 md:py-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand + Description */}
          <div className="col-span-2 sm:col-span-1">
            <Image
              src="/landing-page/home/midas-logo.png"
              alt="Midas Gold Point"
              width={160}
              height={100}
              loading='lazy'
              className="h-30 w-auto"
            />
            <p className="mt-0 text-sm leading-6 text-slate-200 max-w-xs">
              Midas Gold Point offers trusted gold buying, selling, and releasing services with transparent pricing, instant valuation, and assured purity checks.
            </p>
            <div className="mt-6 flex items-center gap-4 text-white/90">
              {/* Social icons */}
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
                <Facebook width={22} height={22} fill='currentColor'/>
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 001.87-2.36 8.51 8.51 0 01-2.7 1.03 4.24 4.24 0 00-7.22 3.86A12.05 12.05 0 013 4.9a4.23 4.23 0 001.31 5.66 4.2 4.2 0 01-1.92-.53v.05a4.24 4.24 0 003.4 4.16c-.46.12-.94.18-1.43.07a4.24 4.24 0 003.96 2.94A8.51 8.51 0 012 19.54 12.01 12.01 0 008.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.36-.02-.54A8.33 8.33 0 0022.46 6z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
               <Instagram width={22} height={22}/>
              </a>
              <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">
               <Youtube width={25} height={25}/>
              </a>
            </div>
          </div>

          {/* About Us */}
          <div className="mt-10 md:mt-14">
            <h3 className="font-semibold tracking-wide mb-4">About Us</h3>
            <ul className="space-y-3 text-slate-200">
              <li><a href="#" className="hover:text-white transition">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-white transition">Purity &amp; Valuation Process</a></li>
              <li><a href="#" className="hover:text-white transition">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mt-10 md:mt-14">
            <h3 className="font-semibold tracking-wide mb-4">Services</h3>
            <ul className="space-y-3 text-slate-200">
              <li><a href="#" className="hover:text-white transition">Sell Gold</a></li>
              <li><a href="#" className="hover:text-white transition">Buy Gold Bars &amp; Coins</a></li>
              <li><a href="#" className="hover:text-white transition">Release Pledged Gold</a></li>
              <li><a href="#" className="hover:text-white transition">Gold Valuation</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mt-10 md:mt-14">
            <h3 className="font-semibold tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-200">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mt-10 md:mt-14">
            <h3 className="font-semibold tracking-wide mb-4">Legal</h3>
            <ul className="space-y-3 text-slate-200">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
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