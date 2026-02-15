'use client'

import Image from "next/image"
import { Share, Bookmark } from "lucide-react"
import { useEffect, useState } from "react"

export function AppHero() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choiceResult = await deferredPrompt.userChoice
    console.log("User choice:", choiceResult.outcome)
    setDeferredPrompt(null)
  }

  return (
    <div className="mb-6">
      <div className="flex flex-row gap-4 sm:gap-6">
        {/* Left side - App icon */}
        <div className="flex-shrink-0 self-start">
          <div className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] lg:h-[280px] lg:w-[280px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
            <Image
              src="/images/logo1.webp"
              alt="Chicken Road 2"
              width={280}
              height={280}
              className="h-full w-full object-cover object-[right_10%_top_20%]"
            />
          </div>
        </div>

        {/* Right side - App info */}
        <div className="flex-1 min-w-0">
          <h1 className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-normal leading-tight text-[#202124]">
            Chicken Road 2 x بہترین گیم 2025
          </h1>

          <div className="mb-3 sm:mb-4">
            <a 
              href="#" 
              className="text-sm font-medium text-[#01875f] hover:text-[#017f56] hover:underline focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:ring-offset-2 rounded px-1"
            >
              ان آؤٹس گیمز
            </a>
          </div>

          <div className="mb-3 sm:mb-4 flex items-center gap-1 text-xs text-[#5f6368]">
            <span>مشتہرات پر مشتمل ہے</span>
            <span>·</span>
            <span>ایپ میں خریداریاں</span>
          </div>

          {/* Stats */}
          <div className="mb-4 flex flex-wrap items-center gap-x-3 md:gap-x-6 gap-y-2">
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-xl md:text-2xl font-normal text-[#202124]">4.7 ★</span>
              <div className="text-xs text-[#5f6368]">21.9K جائزے</div>
            </div>

            <div className="h-4 w-px bg-[#dadce0]" />

            <div className="flex flex-col items-center">
              <span className="text-base sm:text-xl md:text-2xl font-normal text-[#202124]">5M+</span>
              <div className="text-xs text-[#5f6368]">ڈاؤن لوڈز</div>
            </div>

            <div className="h-4 w-px bg-[#dadce0]" />

            <div className="flex flex-col items-center">
              <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center">
                <img 
                  src="https://play-lh.googleusercontent.com/QNpsl4k43vdbfwUAlVLZul2W5O5MUGOToystzghc97mljVHbUwtc639tahcuDsAVHdaGMyZA40AmMVcB_ws=w96-h32-rw" 
                  alt="عمر کی درجہ بندی 18+"
                  className="h-3 w-3 sm:h-4 sm:w-4 object-contain"
                />
              </div>
              <div className="text-xs text-[#5f6368]">18+ کے لیے موزوں</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {deferredPrompt ? (
              <button
                onClick={handleInstallClick}
                className="w-full sm:w-auto rounded bg-[#01875f] px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-[#017f56] text-center focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:ring-offset-2"
              >
                فون پر انسٹال کریں
              </button>
            ) : (
              <a 
                href="/play"
                className="w-full sm:w-auto rounded bg-[#01875f] px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-[#017f56] text-center no-underline focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:ring-offset-2"
              >
                ونڈوز پر انسٹال کریں
              </a>
            )}

            <a 
              href="/play" 
              className="w-full sm:w-auto rounded border border-[#dadce0] bg-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-[#01875f] hover:bg-[#f8f9fa] hover:border-[#01875f] text-center no-underline focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:ring-offset-2"
            >
              مزید ڈیوائسز پر انسٹال کریں
            </a>

            <a 
              href="/play" 
              className="flex items-center justify-center gap-2 rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] hover:text-[#202124] flex-1 sm:flex-none no-underline border border-transparent hover:border-[#dadce0] focus:outline-none focus:ring-2 focus:ring-[#dadce0] focus:ring-offset-2"
            >
              <Share className="h-4 w-4" />
              <span className="hidden sm:inline">شیئر کریں</span>
            </a>

            <a 
              href="/play" 
              className="flex items-center justify-center gap-2 rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] hover:text-[#202124] flex-1 sm:flex-none no-underline border border-transparent hover:border-[#dadce0] focus:outline-none focus:ring-2 focus:ring-[#dadce0] focus:ring-offset-2"
            >
              <Bookmark className="h-4 w-4" />
              <span className="hidden sm:inline">خواہش کی فہرست میں شامل کریں</span>
            </a>
          </div>

          {/* Legal text */}
          <div className="mt-3 sm:mt-4 text-xs leading-relaxed text-[#5f6368]">
            <p>
              ونڈوز پر یہ گیم انسٹال کرنے کے لیے پی سی پر گوگل پلے گیمز درکار ہے۔ ایپ اور گیم ڈاؤن لوڈ کرکے، آپ{" "}
              <a 
                href="#" 
                className="text-[#01875f] hover:text-[#017f56] hover:underline font-medium underline decoration-[#01875f] decoration-2 underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:ring-offset-2 rounded px-1"
              >
                گوگل کی سروس کی شرائط
              </a>{" "}
              اور{" "}
              <a 
                href="#" 
                className="text-[#01875f] hover:text-[#017f56] hover:underline font-medium underline decoration-[#01875f] decoration-2 underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:ring-offset-2 rounded px-1"
              >
                گوگل پلے کی سروس کی شرائط
              </a>
              {" "}سے اتفاق کرتے ہیں۔{" "}
              <a 
                href="#" 
                className="text-[#01875f] hover:text-[#017f56] hover:underline font-medium underline decoration-[#01875f] decoration-2 underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:ring-offset-2 rounded px-1"
              >
                مزید جانیں
              </a>
              .
            </p>
          </div>

          {/* Family library */}
          <div className="mt-2 sm:mt-3 flex items-start gap-2 text-xs text-[#5f6368]">
            <svg className="mt-0.5 h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </svg>
            <span>
              آپ یہ اپنے خاندان کے ساتھ شیئر کر سکتے ہیں۔{" "}
              <a 
                href="#" 
                className="text-[#01875f] hover:text-[#017f56] hover:underline font-medium underline decoration-[#01875f] decoration-2 underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:ring-offset-2 rounded px-1"
              >
                فیملی لائبریری کے بارے میں مزید جانیں
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}