"use client"

import { Search, HelpCircle, User, Menu, X } from "lucide-react"
import { useState } from "react"

export function PlayStoreNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b bg-white sticky top-0 z-50" aria-label="Main navigation">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 md:gap-8 px-4 md:px-6 py-3 md:py-4">
        {/* Кнопка мобильного меню */}
        <button 
          className="md:hidden text-[#5f6368]" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>

        <div className="flex items-center gap-2">
          <img 
            src="/playlogo2.webp" 
            alt="Chicken Road 2"
            className="h-8 w-[140px] sm:w-[160px] md:h-10 md:w-50"
          />
        </div>

        {/* Навигация для десктопа */}
        <div className="hidden md:flex gap-6" role="menubar" aria-label="Main menu">
          <a 
            href="#" 
            className="text-sm font-medium text-[#01875f] border-b-2 border-[#01875f] pb-3"
            role="menuitem"
            aria-current="page"
          >
            Apps
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-[#5f6368] hover:text-[#202124] pb-3"
            role="menuitem"
          >
            Games
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-[#5f6368] hover:text-[#202124] pb-3"
            role="menuitem"
          >
            Books
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-[#5f6368] hover:text-[#202124] pb-3"
            role="menuitem"
          >
            Kids
          </a>
        </div>

        {/* Кнопки действий */}
        <div className="ml-auto flex items-center gap-3 md:gap-4">
          <button 
            className="text-[#5f6368] hover:text-[#202124]"
            aria-label="Search"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button 
            className="hidden md:block text-[#5f6368] hover:text-[#202124]"
            aria-label="Help"
          >
            <HelpCircle className="h-5 w-5" aria-hidden="true" />
          </button>
          <button 
            className="h-8 w-8 rounded-full bg-[#ea4335] flex items-center justify-center text-white"
            aria-label="User profile"
          >
            <User className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden border-t bg-white"
          role="menu"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col py-2">
            <a 
              href="#" 
              className="px-6 py-3 text-sm font-medium text-[#01875f] bg-[#e8f5e9]"
              role="menuitem"
              aria-current="page"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apps
            </a>
            <a 
              href="#" 
              className="px-6 py-3 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa]"
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
            >
              Games
            </a>
            <a 
              href="#" 
              className="px-6 py-3 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa]"
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
            >
              Books
            </a>
            <a 
              href="#" 
              className="px-6 py-3 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa]"
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kids
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}