import React from 'react'
import Image from 'next/image'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="relative isolate text-white bg-gradient-to-br from-[#002E74] via-[#00398F] to-[#0156D8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 py-12 md:py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + Description */}
          <div>
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
                
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 001.87-2.36 8.51 8.51 0 01-2.7 1.03 4.24 4.24 0 00-7.22 3.86A12.05 12.05 0 013 4.9a4.23 4.23 0 001.31 5.66 4.2 4.2 0 01-1.92-.53v.05a4.24 4.24 0 003.4 4.16c-.46.12-.94.18-1.43.07a4.24 4.24 0 003.96 2.94A8.51 8.51 0 012 19.54 12.01 12.01 0 008.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.36-.02-.54A8.33 8.33 0 0022.46 6z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm6.25-.75a1 1 0 110 2 1 1 0 010-2z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.5 6.2a3.01 3.01 0 00-2.12-2.13C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.57A3.01 3.01 0 000 6.2 31.77 31.77 0 000 12c0 1.92.1 3.84.5 5.8a3.01 3.01 0 002.12 2.13c.4-1.96.5-3.88.5-5.8s-.1-3.84-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
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