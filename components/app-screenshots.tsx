"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

export function AppScreenshots() {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const screenshots = [
    "/images/logo1.png",
    "/images/1.jpg",
    "/images/2.png",
    "/images/3.png",
    "/images/5.webp",
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <div className="relative mb-8">
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {screenshots.map((src, index) => (
          <div key={index} className="flex-shrink-0 snap-start">
            <div className="h-[320px] w-[180px] md:h-[400px] md:w-[225px] overflow-hidden rounded-lg border border-[#dadce0]">
              <img
                src={src || "/placeholder.svg"}
                alt={`Screenshot ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#f8f9fa]"
        >
          <ChevronLeft className="h-6 w-6 text-[#5f6368]" />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#f8f9fa]"
        >
          <ChevronRight className="h-6 w-6 text-[#5f6368]" />
        </button>
      )}

      {/* <div className="hidden lg:flex absolute bottom-4 right-4 items-center gap-3 rounded-lg bg-[#174ea6] px-6 py-4 text-white shadow-lg">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
        </svg>
        <div>
          <div className="text-sm font-medium">Play on PC</div>
          <div className="text-xs opacity-90">Активация Windows</div>
          <div className="text-xs text-[#8ab4f8]">Play this game on your Windows PC</div>
          <div className="text-xs text-[#8ab4f8]">with Google Play Games</div>
        </div>
        <a href="#" className="text-sm font-medium text-[#8ab4f8] hover:underline">
          Learn more
        </a>
      </div> */}
    </div>
  )
}
