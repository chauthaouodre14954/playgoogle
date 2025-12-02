"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

export function AppScreenshots() {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const screenshots = [
    { src: "/images/logo1.webp", alt: "Chicken Road 2 logo" },
    { src: "/images/1.webp", alt: "Gameplay screenshot - chicken running on the road" },
    { src: "/images/2.webp", alt: "Gameplay screenshot - collecting coins in the game" },
    { src: "/images/3.webp", alt: "Gameplay screenshot - avoiding obstacles" },
    { src: "/images/5.webp", alt: "Gameplay screenshot - high score screen" },
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
        {screenshots.map((screenshot, index) => (
          <div key={index} className="flex-shrink-0 snap-start">
            <div className="h-[320px] w-[180px] md:h-[400px] md:w-[225px] overflow-hidden rounded-lg border border-[#dadce0]">
              <img
                src={screenshot.src || "/placeholder.svg"}
                alt={screenshot.alt}
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
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-[#5f6368]" />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#f8f9fa]"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-[#5f6368]" />
        </button>
      )}
    </div>
  )
}