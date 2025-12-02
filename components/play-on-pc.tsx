import { Laptop } from "lucide-react"

export function PlayOnPC() {
  return (
    <div className="mb-8 rounded-lg border border-[#dadce0] p-4 md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#174ea6] text-white flex-shrink-0">
          <Laptop className="h-5 w-5" />
        </div>
        <h2 className="text-base md:text-lg font-medium text-[#202124]">Play on PC</h2>
      </div>

      <p className="mb-4 text-sm text-[#5f6368]">Play <strong>Chicken Road 2</strong> on your Windows PC with Google Play Games</p>

      <div className="mb-4 rounded-lg bg-[#f8f9fa] p-3 md:p-4">
        <h3 className="mb-2 text-xs font-medium text-[#202124]">Minimum requirements</h3>
        <ul className="space-y-1 text-xs text-[#5f6368]">
          <li>Windows 10 (v2004)</li>
          <li>SSD with 2 GB available space</li>
          <li>Intel UHD Graphics 630 GPU or comparable</li>
          <li>2 CPU physical cores</li>
          <li>2 GB RAM</li>
          <li>Hardware virtualization enabled</li>
        </ul>
      </div>

      <button className="text-sm font-medium text-[#01875f] hover:underline">Learn more</button>
    </div>
  )
}
