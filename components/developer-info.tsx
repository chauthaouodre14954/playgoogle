import { Mail, Globe, Shield } from "lucide-react"

export function DeveloperInfo() {
  return (
    <div className="mb-8 border-t border-[#dadce0] pt-6">
      <h2 className="mb-4 text-base font-medium text-[#202124]">Developer contact</h2>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <Globe className="h-5 w-5 text-[#5f6368] flex-shrink-0" />
          <a className="text-[#01875f] hover:underline break-all">
            www.inouts.games
          </a>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Mail className="h-5 w-5 text-[#5f6368] flex-shrink-0" />
          <a className="text-[#01875f] hover:underline break-all">
            support@inouts.games
          </a>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Shield className="h-5 w-5 text-[#5f6368] flex-shrink-0" />
          <a href="#" className="text-[#01875f] hover:underline">
            Privacy Policy
          </a>
        </div>

        <div className="text-xs text-[#5f6368]">
          <p>INOUTSGAMESWWW</p>
          <p>8-10D/5 STREET</p>
          <p>34752 Pakistan (Lahore)</p>
          <p>Pakistan</p>
        </div>
      </div>
    </div>
  )
}
