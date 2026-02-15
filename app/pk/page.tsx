import type { Metadata } from "next"
import { Noto_Nastaliq_Urdu } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import RegisterSW from "@/components/register-sw"
import OneSignal from "@/components/OneSignal"
import { PlayStoreNav } from "@/components/pk/play-store-navPK"
import { AppHero } from "@/components/pk/app-heroPK"
import { AppScreenshots } from "@/components/app-screenshots"
import { AppDescription } from "@/components/pk/app-descriptionPK"
import { RatingsAndReviews } from "@/components/pk/ratings-and-reviewsPK"
import { AppInfo } from "@/components/pk/app-infoPK"
import { PlayOnPC } from "@/components/pk/play-on-pcPK"
import { DeveloperInfo } from "@/components/pk/developer-infoPK"
import { SimilarApps } from "@/components/pk/similar-appsPK"
import PwaRedirect from "@/components/PwaRedirect"

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-noto-nastaliq-urdu",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chicken Road 2 x بڑی جیتیں 2025 - گوگل پلے ایپ",
  description:
    "🐔 💵 چکن روڈ 2 میں بڑی جیتیں حاصل کریں - 10 لاکھ سے زیادہ کھلاڑیوں کے ساتھ شامل ہوں! چکن روڈ 2 کا سرکاری 2025 ایڈیشن اب دستیاب ہے۔",
  keywords: ["chicken road game", "chicken road 2", "چکن روڈ 2", "چکن روڈ گیم", "chicken road 2 کھیلنے کا طریقہ", "chicken road 2 2025", "chicken road 2 ڈاؤن لوڈ", "chicken road 2 اے پی کے", "chicken road 2 اینڈرائیڈ کے لیے", "chicken road 2 پی سی کے لیے", "چکن گیم 2 ایکس 2025"],
  alternates: {
    canonical: "https://play-google-chicken-road-apk.com.pk/pk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Pakistan geotargeting
  other: {
    'geo.position': '30.3753;69.3451',
    'geo.placename': 'Pakistan',
    'geo.region': 'PK',
    'ICBM': '30.3753, 69.3451',
  }
}

export default function Home() {
  return (
    <html lang="ur-PK" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />

        {/* Geotargeting meta tags */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="30.3753;69.3451" />
        <meta name="ICBM" content="30.3753, 69.3451" />
        
        {/* Canonical link for Urdu page */}
        <link rel="canonical" href="https://play-google-chicken-road-apk.com.pk/pk" />
        
        {/* Preconnect for important domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics 4 - same tracking ID */}
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
              gtag('config', 'G-GTJEB8PSX7', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* JSON-LD SCHEMAS - Urdu version with Pakistan focus */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Chicken Road 2 - اردو",
              url: "https://play-google-chicken-road-apk.com.pk/pk",
              logo: "https://play-google-chicken-road-apk.com.pk/playlogo.webp",
              sameAs: [
                "https://www.instagram.com/chickenroad2game",
                "https://www.facebook.com/chickenroad2game",
              ],
              areaServed: "PK",
              knowsLanguage: "ur",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Chicken Road 2 - اردو",
              url: "https://play-google-chicken-road-apk.com.pk/pk",
              inLanguage: "ur-PK",
              contentLocation: {
                "@type": "Country",
                "name": "Pakistan"
              },
            }),
          }}
        />

        {/* Authors Schema - with Urdu context */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://play-google-chicken-road-apk.com.pk/pk/#authors",
                  "name": "عرفان احمد",
                  "jobTitle": "موبائل گیمنگ ماہر",
                  "image": "https://play-google-chicken-road-apk.com.pk/authors/Idris.webp",
                  "description": "پاکستان کے معروف موبائل گیمنگ ماہر، 5 سال سے زیادہ کا تجربہ",
                  "knowsAbout": ["Mobile Gaming", "Game Mechanics", "اردو گیمنگ", "پاکستان گیمنگ"],
                  "homeLocation": {
                    "@type": "Country",
                    "name": "Pakistan"
                  },
                  "url": "https://play-google-chicken-road-apk.com.pk/pk",
                },
                {
                  "@type": "Person",
                  "@id": "https://play-google-chicken-road-apk.com.pk/pk/#authors", 
                  "name": "حمزہ علی",
                  "jobTitle": "گیم سٹریٹیجی تجزیہ کار",
                  "image": "https://play-google-chicken-road-apk.com.pk/authors/Olwethu.webp",
                  "description": "گیم سٹریٹیجیز اور پلیئر پروگریشن کے ماہر",
                  "knowsAbout": ["Game Strategy", "Progression Systems", "اردو مواد"],
                  "homeLocation": {
                    "@type": "Country",
                    "name": "Pakistan"
                  },
                  "url": "https://play-google-chicken-road-apk.com.pk/pk",
                },
                {
                  "@type": "Person",
                  "@id": "https://play-google-chicken-road-apk.com.pk/pk/#authors",
                  "name": "بابر خان",
                  "jobTitle": "گیم ریویو ایکسپرٹ",
                  "image": "https://play-google-chicken-road-apk.com.pk/authors/Alex.webp",
                  "description": "پاکستانی گیمنگ کمیونٹی کے لیے معیاری مواد تخلیق کار",
                  "knowsAbout": ["Game Reviews", "Mobile Gaming Trends", "اردو کانٹینٹ"],
                  "homeLocation": {
                    "@type": "Country",
                    "name": "Pakistan"
                  },
                  "url": "https://play-google-chicken-road-apk.com.pk/pk",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://play-google-chicken-road-apk.com.pk/pk",
                  "url": "https://play-google-chicken-road-apk.com.pk/pk",
                  "name": "Chicken Road 2 x بڑی جیتیں 2025 - گوگل پلے ایپ",
                  "description": "چکن روڈ 2 میں 10 لاکھ سے زیادہ کھلاڑیوں کے ساتھ شامل ہوں! 2025 ایڈیشن میں بڑی جیتیں اور دلچسپ فیچرز",
                  "lastReviewed": "2025-01-15",
                  "inLanguage": "ur-PK",
                  "contentLocation": {
                    "@type": "Country",
                    "name": "Pakistan"
                  },
                  "reviewedBy": [
                    { "@id": "https://play-google-chicken-road-apk.com.pk/pk/#authors" },
                    { "@id": "https://play-google-chicken-road-apk.com.pk/pk/#authors" },
                    { "@id": "https://play-google-chicken-road-apk.com.pk/pk/#authors" }
                  ],
                  "publisher": {
                    "@type": "Organization",
                    "name": "Chicken Road 2 - اردو",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://play-google-chicken-road-apk.com.pk/playlogo.webp"
                    }
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Chicken Road 2",
                    "applicationCategory": "GameApplication",
                    "operatingSystem": "ANDROID",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.5",
                      "ratingCount": "17700"
                    }
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://play-google-chicken-road-apk.com.pk/pk",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "کیا Chicken Road 2 پاکستان میں مفت ہے؟",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "جی ہاں، Chicken Road 2 پاکستان میں مکمل طور پر مفت ہے۔ گیم میں آپشنل ان-App خریداریاں ہیں۔"
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "کیا Chicken Road 2 پاکستانی انٹرنیٹ سپیڈ پر کام کرتا ہے؟",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "جی ہاں، Chicken Road 2 پاکستان میں دستیاب تمام انٹرنیٹ کنیکشنز پر بہترین کام کرتا ہے۔"
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "کیا میں Chicken Road 2 ایک سے زیادہ ڈیوائسز پر کھیل سکتا ہوں؟",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "جی ہاں، آپ اپنے گوگل پلے اکاؤنٹ سے تمام اینڈرائیڈ ڈیوائسز پر اپنی پروگریس سنک کر سکتے ہیں۔"
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />

        {/* Product Schema for the page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Chicken Road 2",
              description: "Win big in Chicken Road 2 – 2025 edition. اردو ورژن پاکستانی کھلاڑیوں کے لیے",
              image: "https://play-google-chicken-road-apk.com.pk/cover.png",
              brand: {
                "@type": "Brand",
                name: "Chicken Road",
              },
              applicationCategory: "Game",
              operatingSystem: "Android, iOS",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                url: "https://play-google-chicken-road-apk.com.pk/pk",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "Chicken Road 2 Team"
                }
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                ratingCount: "17700",
                bestRating: "5",
                worstRating: "1"
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "عرفان احمد"
                  },
                  datePublished: "2025-01-15",
                  reviewBody: "پاکستان میں بہترین گیمنگ تجربہ۔ بہت مزیدار اور دلچسپ۔",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5"
                  }
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person", 
                    name: "حمزہ علی"
                  },
                  datePublished: "2025-01-14",
                  reviewBody: "بہت اچھی گیم ہے، خاص طور پر x1000 فیچر بہت دلچسپ ہے۔",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "4.5",
                    bestRating: "5"
                  }
                }
              ]
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "ہوم",
                  "item": "https://play-google-chicken-road-apk.com.pk/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "اردو",
                  "item": "https://play-google-chicken-road-apk.com.pk/pk"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${notoNastaliqUrdu.variable} font-urdu bg-white`} dir="rtl">
        <OneSignal />
        <PwaRedirect />
        <div className="min-h-screen bg-white">
          <PlayStoreNav />
          <div className="mx-auto max-w-[1280px] px-4 md:px-6 py-6 md:py-8">
            <AppHero />
            <AppScreenshots />
            <AppDescription />
            <AppInfo />
            <PlayOnPC />
            <DeveloperInfo />
            <RatingsAndReviews />
            <SimilarApps />
          </div>
        </div>
        <Analytics />
        <RegisterSW />
      </body>
    </html>
  )
}