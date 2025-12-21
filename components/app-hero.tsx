// import Image from "next/image"
// import { Share, Bookmark } from "lucide-react"

// export function AppHero() {
//   return (
//     <div className="mb-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Left side - App info */}
//         <div className="flex-1">
//           <h1 className="mb-2 text-2xl md:text-[32px] font-normal leading-tight text-[#202124]">
//             Chicken Road 2 x Best Game 2025
//           </h1>

//           <div className="mb-4">
//             <a href="#" className="text-sm font-medium text-[#01875f] hover:underline">
//               InOutsGames
//             </a>
//           </div>

//           <div className="mb-4 flex items-center gap-1 text-xs text-[#5f6368]">
//             <span>Contains ads</span>
//             <span>·</span>
//             <span>In-app purchases</span>
//           </div>

//           {/* Stats */}
//           <div className="mb-4 flex flex-wrap items-center gap-x-3 md:gap-x-6 gap-y-2">
//   <div className="flex flex-col items-center">
//     <span className="text-xl md:text-2xl font-normal text-[#202124]">4.5 ★</span>
//     <div className="text-xs text-[#5f6368]">17.7K reviews</div>
//   </div>

//   <div className="hidden sm:block h-4 w-px bg-[#dadce0]" />

//   <div className="flex flex-col items-center">
//     <span className="text-xl md:text-2xl font-normal text-[#202124]">5M+</span>
//     <div className="text-xs text-[#5f6368]">Downloads</div>
//   </div>

//   <div className="hidden sm:block h-4 w-px bg-[#dadce0]" />

//   <div className="flex flex-col items-center">
//   <div className="flex h-8 w-8 items-center justify-center">
//     <img 
//       src="https://play-lh.googleusercontent.com/EbEX3AN4FC4pu3lsElAHCiksluOVU8OgkgtWC43-wmm_aHVq2D65FmEM97bPexilUAvlAY5_4ARH8Tb3RxQ=w48-h16-rw" 
//       alt="Age rating 3+"
//       className="h-4 w-4 object-contain"
//     />
//   </div>
//   <div className="text-xs text-[#5f6368]">Rated for 3+</div>
// </div>
// </div>

//           {/* Action buttons */}
//           <div className="flex flex-wrap items-center gap-2 md:gap-3">
//             <button className="w-full sm:w-auto rounded bg-[#01875f] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#017f56]">
//               Install on Windows
//             </button>
//             <button className="w-full sm:w-auto rounded border border-[#dadce0] bg-white px-6 py-2.5 text-sm font-medium text-[#01875f] hover:bg-[#f8f9fa]">
//               Install on more devices
//             </button>
//             <button className="flex items-center justify-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] flex-1 sm:flex-none">
//               <Share className="h-4 w-4" />
//               <span className="hidden sm:inline">Share</span>
//             </button>
//             <button className="flex items-center justify-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] flex-1 sm:flex-none">
//               <Bookmark className="h-4 w-4" />
//               <span className="hidden sm:inline">Add to wishlist</span>
//             </button>
//           </div>

//           {/* Legal text */}
//           <div className="mt-4 text-xs leading-relaxed text-[#5f6368]">
//             <p>
//               Google Play Games on PC is required to install this game on Windows. By downloading the app and the game,
//               you agree to the{" "}
//               <a href="#" className="text-[#01875f] hover:underline">
//                 Google Terms of Service
//               </a>{" "}
//               and{" "}
//               <a href="#" className="text-[#01875f] hover:underline">
//                 Google Play Terms of Service
//               </a>
//               .{" "}
//               <a href="#" className="text-[#01875f] hover:underline">
//                 Learn more
//               </a>
//               .
//             </p>
//           </div>

//           {/* Family library */}
//           <div className="mt-3 flex items-start gap-2 text-xs text-[#5f6368]">
//             <svg className="mt-0.5 h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
//             </svg>
//             <span>
//               You can share this with your family.{" "}
//               <a href="#" className="text-[#01875f] hover:underline">
//                 Learn more about Family Library
//               </a>
//             </span>
//           </div>
//         </div>

//         {/* Right side - App icon */}
//         <div className="flex-shrink-0 self-center md:self-start">
//   <div className="h-[150px] w-[150px] md:h-[280px] md:w-[280px] overflow-hidden rounded-2xl md:rounded-3xl">
//     <Image
//       src="/images/logo1.png"
//       alt="Chicken Game 2"
//       width={280}
//       height={280}
//       className="h-full w-full object-cover object-[right_10%_top_20%]"
//     />
//   </div>
// </div>
//       </div>
//     </div>
//   )
// }



// import Image from "next/image"
// import { Share, Bookmark } from "lucide-react"

// export function AppHero() {
//   return (
//     <div className="mb-6">
//       <div className="flex flex-row gap-4 sm:gap-6">
//         {/* Left side - App icon */}
//         <div className="flex-shrink-0 self-start">
//           <div className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] lg:h-[280px] lg:w-[280px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
//             <Image
//               src="/images/logo1.webp"
//               alt="Chicken Road 2"
//               width={280}
//               height={280}
//               className="h-full w-full object-cover object-[right_10%_top_20%]"
//             />
//           </div>
//         </div>

//         {/* Right side - App info */}
//         <div className="flex-1 min-w-0">
//           <h1 className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-normal leading-tight text-[#202124]">
//             Chicken Road 2 x Best Game 2025
//           </h1>

//           <div className="mb-3 sm:mb-4">
//             <a href="#" className="text-sm font-medium text-[#01875f] hover:underline">
//               InOutsGames
//             </a>
//           </div>

//           <div className="mb-3 sm:mb-4 flex items-center gap-1 text-xs text-[#5f6368]">
//             <span>Contains ads</span>
//             <span>·</span>
//             <span>In-app purchases</span>
//           </div>

//           {/* Stats */}
//           <div className="mb-4 flex flex-wrap items-center gap-x-3 md:gap-x-6 gap-y-2">
//             <div className="flex flex-col items-center">
//               <span className="text-base sm:text-xl md:text-2xl font-normal text-[#202124]">4.5 ★</span>
//               <div className="text-xs text-[#5f6368]">17.7K reviews</div>
//             </div>

//             <div className="h-4 w-px bg-[#dadce0]" />

//             <div className="flex flex-col items-center">
//               <span className="text-base sm:text-xl md:text-2xl font-normal text-[#202124]">5M+</span>
//               <div className="text-xs text-[#5f6368]">Downloads</div>
//             </div>

//             <div className="h-4 w-px bg-[#dadce0]" />

//             <div className="flex flex-col items-center">
//               <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center">
//                 <img 
//                   src="https://play-lh.googleusercontent.com/QNpsl4k43vdbfwUAlVLZul2W5O5MUGOToystzghc97mljVHbUwtc639tahcuDsAVHdaGMyZA40AmMVcB_ws=w96-h32-rw" 
//                   alt="Age rating 18+"
//                   className="h-3 w-3 sm:h-4 sm:w-4 object-contain"
//                 />
//               </div>
//               <div className="text-xs text-[#5f6368]">Rated for 18+</div>
//             </div>
//           </div>

//           {/* Action buttons */}
//           <div className="flex flex-wrap items-center gap-2 sm:gap-3">
//   <a 
//     href="/play" 
//     className="w-full sm:w-auto rounded bg-[#01875f] px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-[#017f56] text-center no-underline"
//   >
//     Install on Windows
//   </a>
//   <a 
//     href="/play" 
//     className="w-full sm:w-auto rounded border border-[#dadce0] bg-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-[#01875f] hover:bg-[#f8f9fa] text-center no-underline"
//   >
//     Install on more devices
//   </a>
//   <a 
//     href="/play" 
//     className="flex items-center justify-center gap-2 rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] flex-1 sm:flex-none no-underline"
//   >
//     <Share className="h-4 w-4" />
//     <span className="hidden sm:inline">Share</span>
//   </a>
//   <a 
//     href="/play" 
//     className="flex items-center justify-center gap-2 rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] flex-1 sm:flex-none no-underline"
//   >
//     <Bookmark className="h-4 w-4" />
//     <span className="hidden sm:inline">Add to wishlist</span>
//   </a>
// </div>

//           {/* Legal text */}
//           <div className="mt-3 sm:mt-4 text-xs leading-relaxed text-[#5f6368]">
//             <p>
//               Google Play Games on PC is required to install this game on Windows. By downloading the app and the game,
//               you agree to the{" "}
//               <a href="#" className="text-[#01875f] hover:underline">
//                 Google Terms of Service
//               </a>{" "}
//               and{" "}
//               <a href="#" className="text-[#01875f] hover:underline">
//                 Google Play Terms of Service
//               </a>
//               .{" "}
//               <a href="#" className="text-[#01875f] hover:underline">
//                 Learn more
//               </a>
//               .
//             </p>
//           </div>

//           {/* Family library */}
//           <div className="mt-2 sm:mt-3 flex items-start gap-2 text-xs text-[#5f6368]">
//             <svg className="mt-0.5 h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
//             </svg>
//             <span>
//               You can share this with your family.{" "}
//               <a href="#" className="text-[#01875f] hover:underline">
//                 Learn more about Family Library
//               </a>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



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
            Chicken Road 2 x Best Game 2025
          </h1>

          <div className="mb-3 sm:mb-4">
            <a href="#" className="text-sm font-medium text-[#01875f] hover:underline">
              InOutsGames
            </a>
          </div>

          <div className="mb-3 sm:mb-4 flex items-center gap-1 text-xs text-[#5f6368]">
            <span>Contains ads</span>
            <span>·</span>
            <span>In-app purchases</span>
          </div>

          {/* Stats */}
          <div className="mb-4 flex flex-wrap items-center gap-x-3 md:gap-x-6 gap-y-2">
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-xl md:text-2xl font-normal text-[#202124]">4.7 ★</span>
              <div className="text-xs text-[#5f6368]">21.9K reviews</div>
            </div>

            <div className="h-4 w-px bg-[#dadce0]" />

            <div className="flex flex-col items-center">
              <span className="text-base sm:text-xl md:text-2xl font-normal text-[#202124]">5M+</span>
              <div className="text-xs text-[#5f6368]">Downloads</div>
            </div>

            <div className="h-4 w-px bg-[#dadce0]" />

            <div className="flex flex-col items-center">
              <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center">
                <img 
                  src="https://play-lh.googleusercontent.com/QNpsl4k43vdbfwUAlVLZul2W5O5MUGOToystzghc97mljVHbUwtc639tahcuDsAVHdaGMyZA40AmMVcB_ws=w96-h32-rw" 
                  alt="Age rating 18+"
                  className="h-3 w-3 sm:h-4 sm:w-4 object-contain"
                />
              </div>
              <div className="text-xs text-[#5f6368]">Rated for 18+</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {deferredPrompt ? (
              <button
                onClick={handleInstallClick}
                className="w-full sm:w-auto rounded bg-[#01875f] px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-[#017f56] text-center"
              >
                Install on Phone
              </button>
            ) : (
              <a 
                href="/play"
                className="w-full sm:w-auto rounded bg-[#01875f] px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-[#017f56] text-center no-underline"
              >
                Install on Windows
              </a>
            )}

            <a 
              href="/play" 
              className="w-full sm:w-auto rounded border border-[#dadce0] bg-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-[#01875f] hover:bg-[#f8f9fa] text-center no-underline"
            >
              Install on more devices
            </a>

            <a 
              href="/play" 
              className="flex items-center justify-center gap-2 rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] flex-1 sm:flex-none no-underline"
            >
              <Share className="h-4 w-4" />
              <span className="hidden sm:inline">Share</span>
            </a>

            <a 
              href="/play" 
              className="flex items-center justify-center gap-2 rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] flex-1 sm:flex-none no-underline"
            >
              <Bookmark className="h-4 w-4" />
              <span className="hidden sm:inline">Add to wishlist</span>
            </a>
          </div>

          {/* <div className="flex flex-wrap items-center gap-2 sm:gap-3">

  <a
    href="/Chicken Road 2.apk" // Замените на путь к вашему APK файлу в public
    download="Chicken Road 2.apk" // Имя файла при скачивании
    className="w-full sm:w-auto rounded bg-[#01875f] px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-[#017f56] text-center no-underline"
  >
    Download
  </a>

  <a 
    href="/play" 
    className="w-full sm:w-auto rounded border border-[#dadce0] bg-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-[#01875f] hover:bg-[#f8f9fa] text-center no-underline"
  >
    Install on more devices
  </a>

  <a 
    href="/play" 
    className="flex items-center justify-center gap-2 rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] flex-1 sm:flex-none no-underline"
  >
    <Share className="h-4 w-4" />
    <span className="hidden sm:inline">Share</span>
  </a>

  <a 
    href="/play" 
    className="flex items-center justify-center gap-2 rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] flex-1 sm:flex-none no-underline"
  >
    <Bookmark className="h-4 w-4" />
    <span className="hidden sm:inline">Add to wishlist</span>
  </a>
</div> */}

          {/* Legal text */}
          <div className="mt-3 sm:mt-4 text-xs leading-relaxed text-[#5f6368]">
            <p>
              Google Play Games on PC is required to install this game on Windows. By downloading the app and the game,
              you agree to the{" "}
              <a href="#" className="text-[#01875f] hover:underline">
                Google Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#01875f] hover:underline">
                Google Play Terms of Service
              </a>
              .{" "}
              <a href="#" className="text-[#01875f] hover:underline">
                Learn more
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
              You can share this with your family.{" "}
              <a href="#" className="text-[#01875f] hover:underline">
                Learn more about Family Library
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
