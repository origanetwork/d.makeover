import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue-900 to-brand-blue-500 text-white">
      {/* Soft background image overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-25">
        <Image src="/landing-page/home/background.png" alt="" fill priority sizes="(min-width: 1024px) 520px, 60vw" className="object-cover" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* Logo */}
        <div className="relative mx-auto h-24 w-24 sm:h-40 sm:w-40">
          <Image
            src="/landing-page/home/midas-logo.png"
            alt="Midas"
            fill
            priority
            sizes="(min-width: 1024px) 520px, 60vw"
            className="object-contain object-bottom drop-shadow-xl"
          />
        </div>

        {/* Title */}
        <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Page Not Found !!
        </h1>

        {/* Message */}
        <p className="mt-4 text-white/90 text-base sm:text-lg">
          The page you’re looking for doesn’t exist or may have moved. But there’s a lot of gold to discover with
          Midas. Let’s get you back on the right track.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-lg bg-white px-5 text-brand-blue-700 font-semibold shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            Go to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex h-11 items-center rounded-lg border border-white/70 px-5 text-white font-semibold hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}