import { Button } from "@/components/ui/button"
import { Download, Share, Plus } from "lucide-react"

export function AppActions() {
  return (
    <div className="mb-6 space-y-3">
      <Button className="w-full rounded-lg" size="lg">
        <Download className="mr-2 h-5 w-5" />
        Install
      </Button>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 rounded-lg bg-transparent">
          <Plus className="mr-2 h-4 w-4" />
          Add to wishlist
        </Button>
        <Button variant="outline" size="sm" className="flex-1 rounded-lg bg-transparent">
          <Share className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
    </div>
  )
}
