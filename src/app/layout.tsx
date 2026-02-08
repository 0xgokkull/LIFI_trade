import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { RootLayoutClient } from "./layout-client"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "LIFI_Trade | AI-Powered Cross-Chain Trading",
  description: "Autonomous AI agent for optimizing cross-chain capital efficiency using LI.FI.",
  keywords: ["crypto trading", "AI trading", "cross-chain", "LI.FI", "automated trading"],
  authors: [{ name: "LIFI_Trade" }],
  openGraph: {
    title: "LIFI_Trade",
    description: "AI-Powered Cross-Chain Trading Assistance",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  )
}
