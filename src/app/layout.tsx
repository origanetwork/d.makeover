import type { Metadata, Viewport } from "next";
import { Poppins , Montserrat } from "next/font/google";
import "./globals.css";
import 'swiper/css';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Midas Gold Point | Buy Gold, Sell Gold, Release Gold",
  description: "Buy Gold, Sell Gold, Release Gold",
  icons: {
    icon: [
      { url: "/favicon_midas/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_midas/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_midas/favicon.ico" },
    ],
    shortcut: [
      "/favicon_midas/favicon.ico",
    ],
    apple: [
      { url: "/favicon_midas/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon_midas/site.webmanifest",
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
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
