// "use client"

// import { useState } from "react"

// export function AppDescription() {
//   const [expanded, setExpanded] = useState(false)

//   const fullDescription = `🐔 💵 WIN BIG IN CHICKEN GAME 2 - JOIN OVER 1 MILLION PLAYERS! ⭐

// Welcome to Chicken Game 2.0, the official Chicken Game 2 of 2025! Help farm dog Max cross the chicken game, dodge traffic, and chase the legendary Chicken Game x1000 multiplier. This is the ultimate road to victory!

// 🌟 WHY CHICKEN GAME 2?

// Experience the official Chicken Game 2.0 app with enhanced gameplay, smooth controls, and endless excitement. Each chicken game challenge brings new adventures and the road to massive rewards!`

//   const shortDescription = fullDescription.slice(0, 300)

//   return (
//     <div className="mb-8 border-t border-[#dadce0] pt-6">
//       <h2 className="mb-3 text-base font-medium text-[#202124]">About this game</h2>
//       <div className="whitespace-pre-line text-sm leading-relaxed text-[#3c4043]">
//         {expanded ? fullDescription : shortDescription + "..."}
//       </div>
//       <button
//         onClick={() => setExpanded(!expanded)}
//         className="mt-2 text-sm font-medium text-[#01875f] hover:underline"
//       >
//         {expanded ? "Less" : "More"}
//       </button>
//       <div className="mt-4 text-xs text-[#5f6368]">Updated on Nov 26, 2025</div>
//     </div>
//   )
// }






"use client"

import { useState } from "react"

export function AppDescription() {
  const [expanded, setExpanded] = useState(false)

  const fullDescription = `🐔💸 CHICKEN ROAD 2 — THE OFFICIAL 2025 EDITION! WIN UP TO x1000! 🚀

Welcome to Chicken Road 2, the official and upgraded version of the legendary Chicken Road 2.
Join over 1,000,000 players in the most exciting chicken crossing adventure of 2025! Guide Max the farm dog, dodge traffic, unlock bonuses, and chase the legendary Chicken Road x1000 multiplier.

If you searched for Chicken Road 2, Chicken Road, chicken game online, or farm crossing game — this is exactly what you need.

🌟 WHY CHICKEN ROAD 2?

🔥 Enhanced graphics & animations
🔥 Smooth tap controls
🔥 Perfect for beginners
🔥 Real chance to hit the x1000 multiplier
🔥 Play anytime — online or offline

Every run is a new opportunity to break records and win big in Chicken Road 2.
⚡ CHICKEN GAME 2.0 FEATURES

🐔 Simple One-Tap Gameplay — easy to learn, fun to master
🚗 Endless Random Levels — no two runs are the same
🎯 Multiplier from x2 to x1000 — climb the ladder and hit the jackpot
🌍 Multiple Modes — casual, classic, extreme
🎪 Chicken Game 2025 Events — complete missions & earn rewards
📱 Works Offline — no internet required
🐾 Save Farm Animals including:
1. Max the dog
2. Chicken
3. Rabbit
4. Cat
5. Frog
6. Duck

🏆 OFFICIAL HIGHLIGHTS

>Latest & authentic Chicken Game 2.0 (2025) release
>Real x1000 multiplier system
>Dynamic roads with cars, trucks, tractors & bikes
>Global leaderboards
>Frequent updates and new challenges
>Play anywhere, anytime — fully offline supported

🚀 DOWNLOAD CHICKEN ROAD 2 — START WINNING TODAY!

Join millions of players enjoying the most addictive chicken crossing game of 2025!
Guide Max safely through traffic, collect rewards, and fight your way to the legendary x1000.

👉 Download Chicken Road 2 now and begin your road to massive wins!
🐔🚗 Your adventure to big rewards starts right here — in Chicken Road 2.`

  const shortDescription = fullDescription.slice(0, 300)

  return (
    <div className="mb-8 border-t border-[#dadce0] pt-6">
      <h2 className="mb-3 text-base font-medium text-[#202124]">About this game</h2>
      <div className="whitespace-pre-line text-sm leading-relaxed text-[#3c4043]">
        {expanded ? fullDescription : shortDescription + "..."}
      </div>

      {expanded && (
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[#dadce0] pt-6">
          <div>
            <div className="text-xs font-medium text-[#5f6368]">Version</div>
            <div className="mt-1 text-sm text-[#202124]">7.217.0</div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">Updated on</div>
            <div className="mt-1 text-sm text-[#202124]">Dec 22, 2025</div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#5f6368]">Requires Android</div>
            <div className="mt-1 text-sm text-[#202124]">6.0 and up</div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">Downloads</div>
            <div className="mt-1 text-sm text-[#202124]">5,000,000+ downloads</div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#5f6368]">In-app purchases</div>
            <div className="mt-1 text-sm text-[#202124]">PKR 0 - PKR 44,990.00 per item</div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">Content rating</div>
            <div className="mt-1 text-sm text-[#202124]">
              Rated for 18+{" "}
              <a href="#" className="text-[#01875f] hover:underline">
                Learn more
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#5f6368]">Permissions</div>
            <div className="mt-1 text-sm text-[#01875f] hover:underline">
              <a href="#">View details</a>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">Interactive elements</div>
            <div className="mt-1 text-sm text-[#202124]">In-Game Purchases</div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#5f6368]">Released on</div>
            <div className="mt-1 text-sm text-[#202124]">Aug 12, 2025</div>
          </div>
          <div>
            <div className="text-xs font-medium text-[#5f6368]">Offered by</div>
            <div className="mt-1 text-sm text-[#202124]">InOutsGames</div>
          </div>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-sm font-medium text-[#01875f] hover:underline"
      >
        {expanded ? "Less" : "More"}
      </button>
      <div className="mt-4 text-xs text-[#5f6368]">Updated on Dec 22, 2025</div>
    </div>
  )
}

