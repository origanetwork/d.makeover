"use client"
import React, { FormEvent, useMemo } from "react"
import ClientOnly from "../shared/ClientOnly"
import Image from "next/image"

type Props = {
  headline?: string
  subheadline?: string
  mapQuery?: string // e.g. "Kacheripady Junction, Kochi"
}

const ContactSection: React.FC<Props> = ({
  headline = "GET IN TOUCH",
  subheadline = "Your trusted gold partner is just a message away.",
  mapQuery = "Kacheripady Junction, Kochi",
}: Props) => {
  const mapSrc = useMemo(() => {
    const q = encodeURIComponent(mapQuery)
    // Uses the public Google Maps embed with a search query (no API key required for basic embedding)
    // Docs: https://developers.google.com/maps/documentation/embed/embedding-map
    return `https://www.google.com/maps?q=${q}&output=embed`
  }, [mapQuery])

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: Wire up to your backend or service (e.g., API route, Formspree, etc.)
    alert("Thanks! We'll get back to you shortly.")
  }

  return (
    <section className="relative overflow-hidden bg-[#F7F1DC]/80 py-16 sm:py-20" id="contact">
      {/* Background image via next/image */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/landing-page/home/backround-contact.png"
          alt="contsact section background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Subtle top/bottom gold sheens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 opacity-70 z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,214,94,0.35) 0%, rgba(255,214,94,0.0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-40 h-80 opacity-80 z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 100%, rgba(255,214,94,0.35) 0%, rgba(255,214,94,0.0) 60%)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-montserrat text-brand-blue-700 text-2xl sm:text-3xl md:text-4xl tracking-[0.22em] font-semibold">
            {headline}
          </h2>
          <p className="mt-3 text-slate-700 font-montserrat text-base sm:text-xl">
            {subheadline}
          </p>
        </div>

        {/* Card */}
        <div className="mt-10 rounded-3xl p-4 sm:p-5 shadow-[0_18px_40px_rgba(1,33,105,0.26)]" 
        style={{
          backgroundImage:
          'linear-gradient(80deg, var(--color-navy-900) 70%, var(--color-primary-bright-blue) 100%)',
      }}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
            {/* Left: Form */}
            <div className="rounded-2xl font-montserrat p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl font-semibold">We’re Just a Call Away</h3>
              <p className="mt-2 text-white/80 text-sm sm:text-base">
                Contact us for transparent pricing, seamless service, and instant support.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full rounded-lg bg-white/10 placeholder-white/70 text-white outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40 px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full rounded-lg bg-white/10 placeholder-white/70 text-white outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40 px-4 py-3"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-lg bg-white/10 placeholder-white/70 text-white outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40 px-4 py-3"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full rounded-lg bg-white/10 placeholder-white/70 text-white outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40 px-4 py-3"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full rounded-lg bg-white/10 placeholder-white/70 text-white outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-white/40 px-4 py-3"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-brand-blue-700 shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)]"
                    style={{
                      background:
                        "linear-gradient(100deg, var(--color-secondary-light-gold) 10%, var(--color-accent-golden) 60%, var(--color-accent-dark-golden) 100%)",
                    }}
                  >
                    <span>Send</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 pb-1"
                      fill="currentColor"
                      aria-hidden
                      style={{ transform: "rotate(-25deg)" }}
                    >
                      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Map */}
            <div className="rounded-2xl bg-white/5 p-2 sm:p-3 h-full flex min-h-[360px] sm:min-h-[400px] md:min-h-[480px]">
              {/* Full-height wrapper so the iframe fills the entire grid cell height */}
              <div className="relative flex-1 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 shadow-[0_10px_25px_rgba(1,33,105,0.25)]">
                <ClientOnly
                  fallback={
                    <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-white/10">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-white bg-brand-blue-700/80 hover:bg-brand-blue-700 transition shadow"
                        aria-label={`Open ${mapQuery} on Google Maps`}
                      >
                        View {mapQuery} on Google Maps
                      </a>
                    </div>
                  }
                >
                  <iframe
                    title="Our location"
                    src={mapSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
