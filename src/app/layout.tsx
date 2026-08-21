import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import FlickeringGridWrapper from "@/components/ui/flickering-grid";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
// @ts-ignore
import "./globals.css";

const geist = localFont({
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk-Medium.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-sans",
});

const geistMono = localFont({
  src: "../../public/fonts/CabinetGrotesk-Medium.ttf",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="relative z-10 max-w-3xl mx-auto px-3 md:px-8 border border-x overflow-hidden">
              <NoiseTexture />

              <div className="relative z-10 max-w-3xl mx-auto py-12 pb-24 sm:py-24 px-6 border border-x overflow-hidden bg-background">
                <FlickeringGridWrapper />

                {children}
              </div>
            </div>

            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
