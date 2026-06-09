import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luis Martínez | Desarrollador Full Stack",
    template: "%s | Luis Martínez",
  },
  description:
    "Ingeniero de Sistemas con experiencia en desarrollo Full Stack, integración de APIs, automatización de procesos y aseguramiento de calidad. Especializado en React, Node.js y PostgreSQL.",
  keywords: [
    "Luis Martínez",
    "desarrollador full stack",
    "ingeniero de sistemas",
    "react",
    "node.js",
    "postgresql",
    "colombia",
    "portfolio",
    "desarrollo web",
  ],
  authors: [{ name: "Luis Martínez" }],
  creator: "Luis Martínez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Luis Martínez | Full Stack Developer",
    title: "Luis Martínez | Desarrollador Full Stack",
    description:
      "Ingeniero de Sistemas con experiencia en desarrollo Full Stack, integración de APIs, automatización de procesos y aseguramiento de calidad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Martínez | Desarrollador Full Stack",
    description:
      "Ingeniero de Sistemas con experiencia en desarrollo Full Stack, integración de APIs, automatización de procesos y aseguramiento de calidad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface font-sans text-on-surface selection:bg-secondary/30">
        {children}
      </body>
    </html>
  );
}
