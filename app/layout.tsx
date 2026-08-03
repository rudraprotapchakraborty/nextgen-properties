import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "NextGen Property Limited — Modern Spaces & Apartments",
  description:
    "NextGen Property Limited crafts modern spaces and apartments in Dhaka. Our success is determined not only by the results we acquire, but also by the manner in which we achieve them.",
  keywords: [
    "NextGen Property Limited",
    "real estate Bangladesh",
    "Dhaka apartments",
    "Mohakhali DOHS",
    "Bashundhara housing",
  ],
};

import Header from "./components/Header";
import PageLoader from "./components/PageLoader";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import FloatingActions from "./components/FloatingActions";
import BackgroundFx from "./components/BackgroundFx";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} bg-[#f8fbf4] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen flex flex-col transition-colors duration-300 relative`}
      >
        <Providers attribute="data-theme" defaultTheme="system" enableSystem>
          <BackgroundFx />
          <CustomCursor />
          <Suspense fallback={null}>
            <PageLoader />
          </Suspense>
          <Header />
          <main className="flex-grow w-full relative z-10">{children}</main>
          <FloatingActions />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
