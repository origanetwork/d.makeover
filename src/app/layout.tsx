import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import 'swiper/css';

const felixTitling = localFont({
  src: [
    {
      path: '../../public/fonts/FelixTitling.ttf',
      weight: '400',
    },
  ],
  variable: "--font-felix-titling",
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "D dot makeover",
  description: "d dot makeover",
  icons: {
    icon: [
      { url: "/favicon_ddot/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_ddot/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: [
      "favicon.ico",
    ],
    apple: [
      { url: "/favicon_ddot/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon_ddot/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${felixTitling.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
