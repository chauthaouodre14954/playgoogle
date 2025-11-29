import { PlayStoreNav } from "@/components/play-store-nav"
import { AppHero } from "@/components/app-hero"
import { AppScreenshots } from "@/components/app-screenshots"
import { AppDescription } from "@/components/app-description"
import { RatingsAndReviews } from "@/components/ratings-and-reviews"
import { AppInfo } from "@/components/app-info"
import { PlayOnPC } from "@/components/play-on-pc"
import { DeveloperInfo } from "@/components/developer-info"
import { SimilarApps } from "@/components/similar-apps"

export default function Home() {
  return (
    <>
      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Chicken Road 2",
            description: "Win big in Chicken Road 2 – 2025 edition.",
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
              url: "https://play-google-chicken-road-apk.com.pk/store/apps/details?id=chickenroad2",
            },
          }),
        }}
      />

      {/* Основной контент страницы */}
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
    </>
  )
}
