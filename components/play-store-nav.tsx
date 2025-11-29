"use client"

import { Search, HelpCircle, User, Menu, X } from "lucide-react"
import { useState } from "react"

export function PlayStoreNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 md:gap-8 px-4 md:px-6 py-3 md:py-4">
        <button className="md:hidden text-[#5f6368]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="flex items-center gap-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/2560px-Google_Play_2022_logo.svg.png" 
            alt="Chicken Road 2"
            className="h-8 w-32 md:h-10 md:w-48"
          />

        </div>

        <div className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium text-[#01875f] border-b-2 border-[#01875f] pb-3">
            Apps
          </a>
          <a href="#" className="text-sm font-medium text-[#5f6368] hover:text-[#202124] pb-3">
            Games
          </a>
          <a href="#" className="text-sm font-medium text-[#5f6368] hover:text-[#202124] pb-3">
            Books
          </a>
          <a href="#" className="text-sm font-medium text-[#5f6368] hover:text-[#202124] pb-3">
            Kids
          </a>
        </div>

        <div className="ml-auto flex items-center gap-3 md:gap-4">
          <button className="text-[#5f6368] hover:text-[#202124]">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden md:block text-[#5f6368] hover:text-[#202124]">
            <HelpCircle className="h-5 w-5" />
          </button>
          <button className="h-8 w-8 rounded-full bg-[#ea4335] flex items-center justify-center text-white">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col py-2">
            <a href="#" className="px-6 py-3 text-sm font-medium text-[#01875f] bg-[#e8f5e9]">
              Apps
            </a>
            <a href="#" className="px-6 py-3 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa]">
              Games
            </a>
            <a href="#" className="px-6 py-3 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa]">
              Books
            </a>
            <a href="#" className="px-6 py-3 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa]">
              Kids
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
