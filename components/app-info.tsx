import { Smartphone, Shield } from "lucide-react"

export function AppInfo() {
  return (
    <div className="mb-8 border-t border-[#dadce0] pt-6">
      <h2 className="mb-4 text-base font-medium text-[#202124]">App support</h2>

      <div className="space-y-6">
        {/* Available on */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-[#5f6368]">
            <Smartphone className="h-5 w-5" />
            <span>Available on</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs text-[#174ea6]">Mobile</span>
            <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs text-[#174ea6]">Tablet</span>
            <span className="rounded-full bg-[#e8f0fe] px-3 py-1 text-xs text-[#174ea6]">Chromebook</span>
          </div>
        </div>

        {/* Data safety */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#202124]">
            <Shield className="h-5 w-5 text-[#5f6368]" />
            <span>Data safety</span>
          </div>
          <p className="text-sm leading-relaxed text-[#5f6368]">
            Safety starts with understanding how developers collect and share your data. Data privacy and security
            practices may vary based on your use, region, and age. The developer provided this information and may
            update it over time.
          </p>
          <button className="mt-2 text-sm font-medium text-[#01875f] hover:underline">See details</button>
        </div>
      </div>
    </div>
  )
}
