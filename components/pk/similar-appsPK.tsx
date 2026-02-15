"use client"
import { Star } from "lucide-react"

export function SimilarApps() {
  const apps = [
    {
      name: "چکن روڈ 2",
      developer: "chicken-road-2.pk",
      rating: 4.4,
      downloads: "2M+",
      image: "/cr2.webp",
      url: "https://chicken-road-2.pk"
    },
    {
      name: "سنوپ ڈاگ ڈالرز",
      developer: "snoopdoggdollar.org",
      rating: 4.3,
      downloads: "1M+",
      image: "/sdd2.webp",
      url: "https://snoopdoggdollar.org"
    },
    {
      name: "چکن روڈ 2 فار پاکستان",
      developer: "ipaidbribe.pk",
      rating: 4.3,
      downloads: "1M+",
      image: "/crpk2.webp",
      url: "https://ipaidbribe.pk"
    }
  ]

  return (
    <div className="mb-8 border-t border-[#dadce0] pt-6">
      <h2 className="mb-4 text-base font-medium text-[#202124]">ملتی جلتی گیمز</h2>

      <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            className="flex cursor-pointer gap-3 rounded-lg border border-[#dadce0] p-3 hover:bg-[#f8f9fa] active:bg-[#f8f9fa] transition-colors duration-200 no-underline"
          >
            <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-[#f8f9fa]">
              <img
                src={app.image}
                alt={app.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Crect width='56' height='56' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='10' fill='%235f6368'%3Eایپ%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <h3 className="truncate text-sm font-medium text-[#202124]">{app.name}</h3>
              <p className="truncate text-xs text-[#5f6368]">{app.developer}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-[#202124]">{app.rating}</span>
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                <span className="text-xs text-[#5f6368]">{app.downloads}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}