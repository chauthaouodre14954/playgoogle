import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Chicken Road 2 x BIG Wins 2025 - Apps on Google Play",
  description:
    "🐔 💵 WIN BIG IN CHICKEN ROAD 2 - JOIN OVER 1 MILLION PLAYERS! Welcome to Chicken Road 2, the official Chicken Road 2 of 2025!",
  keywords: ["chicken game", "chicken road 2", "how to play chicken road 2", "play chicken road 2 2025", "chicken road 2 apk", "chicken road 2 download", "chicken road 2 game"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>

        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GTJEB8PSX7"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GTJEB8PSX7');
            `,
          }}
        />

        {/* GLOBAL JSON-LD SCHEMAS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Chicken Road 2",
              url: "http://play-google-chicken-road-apk.com.pk/",
              logo: "http://play-google-chicken-road-apk.com.pk/logo.png",
              sameAs: [
                "https://www.instagram.com/chickenroad2game",
                "https://www.facebook.com/chickenroad2game",
              ],
            }),
          }}
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Chicken Road 2",
              url: "http://play-google-chicken-road-apk.com.pk/",
              potentialAction: {
                "@type": "SearchAction",
                target: "http://play-google-chicken-road-apk.com.pk/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={roboto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
